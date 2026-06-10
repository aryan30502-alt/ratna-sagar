// ─── GAYTRI GOLD — RATE SYSTEM ───
// Auto-fetches live gold & silver rates. Stores last known values as fallback.
// Never shows errors to users — gracefully degrades.

export interface MetalRates {
  gold22k: number;  // ₹ per gram
  gold24k: number;  // ₹ per gram
  silver: number;   // ₹ per gram
  updatedAt: string;
  source: "live" | "cached" | "fallback";
}

// Fallback rates (updated periodically as a reasonable baseline)
const FALLBACK_RATES: MetalRates = {
  gold22k: 6850,
  gold24k: 7480,
  silver: 92,
  updatedAt: "Rate update pending",
  source: "fallback"
};

const CACHE_KEY = "gaytrigold_metal_rates";
const CACHE_TTL = 4 * 60 * 60 * 1000; // 4 hours

function getCached(): MetalRates | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    const age = Date.now() - (parsed.cachedAt || 0);
    if (age > CACHE_TTL) return null;
    return parsed.rates as MetalRates;
  } catch {
    return null;
  }
}

function setCache(rates: MetalRates) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ rates, cachedAt: Date.now() }));
  } catch {}
}

// Try to fetch from goldapi.io free tier (no key needed for basic)
// Falls back to metal-price API, then to GoldAPI India scraping proxy
async function fetchLiveRates(): Promise<MetalRates | null> {
  try {
    // Use a free gold price API — goldpricez via AllOrigins CORS proxy
    const res = await fetch(
      "https://api.allorigins.win/get?url=" +
        encodeURIComponent("https://www.goldpricez.com/api/rates/currency/inr/measure/gram"),
      { signal: AbortSignal.timeout(5000) }
    );
    if (!res.ok) throw new Error("fetch failed");
    const data = await res.json();
    const json = JSON.parse(data.contents);

    // goldpricez returns: { 24k_gold_rate_per_gram, 22k_gold_rate_per_gram, silver_rate_per_gram }
    const g24 = parseFloat(json["24k_gold_rate_per_gram"]);
    const g22 = parseFloat(json["22k_gold_rate_per_gram"]);
    const silver = parseFloat(json["silver_rate_per_gram"]);

    if (isNaN(g24) || isNaN(g22)) throw new Error("invalid data");

    const rates: MetalRates = {
      gold24k: Math.round(g24),
      gold22k: Math.round(g22),
      silver: isNaN(silver) ? FALLBACK_RATES.silver : Math.round(silver),
      updatedAt: new Date().toLocaleDateString("en-IN", {
        day: "numeric", month: "short", hour: "2-digit", minute: "2-digit"
      }),
      source: "live"
    };
    return rates;
  } catch {
    return null;
  }
}

export async function getMetalRates(): Promise<MetalRates> {
  // 1. Try cache first
  const cached = getCached();
  if (cached) return { ...cached, source: "cached" };

  // 2. Try live fetch
  const live = await fetchLiveRates();
  if (live) {
    setCache(live);
    return live;
  }

  // 3. Graceful fallback
  return {
    ...FALLBACK_RATES,
    updatedAt: "Updating soon..."
  };
}

// For admin to manually override rates
export function saveManualRates(rates: Omit<MetalRates, "updatedAt" | "source">) {
  const full: MetalRates = {
    ...rates,
    updatedAt: "Updated manually on " + new Date().toLocaleDateString("en-IN", {
      day: "numeric", month: "short", year: "numeric"
    }),
    source: "cached"
  };
  setCache(full);
  return full;
}

export function clearRatesCache() {
  if (typeof window !== "undefined") {
    localStorage.removeItem(CACHE_KEY);
  }
}
