"use client";
import { useState, useEffect } from "react";
import { saveManualRates, getMetalRates, type MetalRates } from "@/lib/rates";
import { CATALOGUE_ITEMS, COLLECTIONS, type JewelleryItem } from "@/lib/data";
import { LogOut, Package, Settings, MessageSquare, TrendingUp, Plus, Trash2, Edit3, Save, X } from "lucide-react";

// ─── LOCAL STORAGE KEYS ───
const ENQUIRIES_KEY = "gaytrigold_enquiries";
const PRODUCTS_KEY  = "gaytrigold_products";

type Enquiry = { id: string; name: string; phone: string; whatsapp: string; city: string; product: string; message: string; at: string; };
type Tab = "rates" | "products" | "enquiries" | "collections";

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [user, setUser]     = useState("");
  const [pass, setPass]     = useState("");
  const [err, setErr]       = useState("");

  const login = (e: React.FormEvent) => {
    e.preventDefault();
    if (user === "admin" && pass === "admin123") { setAuthed(true); setErr(""); }
    else setErr("Invalid username or password.");
  };

  if (!authed) return <LoginPage user={user} pass={pass} setUser={setUser} setPass={setPass} err={err} onLogin={login} />;
  return <Dashboard onLogout={() => setAuthed(false)} />;
}

// ─── LOGIN ───
function LoginPage({ user, pass, setUser, setPass, err, onLogin }: any) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4"
      style={{ background: "linear-gradient(180deg, var(--cream-50) 0%, var(--cream-200) 100%)" }}>
      <form onSubmit={onLogin} className="w-full max-w-md rounded-3xl p-10"
        style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(176,141,74,0.15)", boxShadow: "0 30px 80px -20px rgba(26,22,18,0.12)" }}>
        <div className="heading-display text-3xl text-gold text-center mb-1">Gaytri Gold</div>
        <div className="text-center text-[10px] uppercase mb-10" style={{ letterSpacing: "0.32em", color: "var(--gold-accent)", opacity: 0.7 }}>Admin Panel</div>
        {err && <div className="mb-5 rounded-xl px-4 py-3 text-sm text-red-700 bg-red-50 border border-red-100">{err}</div>}
        <div className="space-y-4">
          <AdminField label="Username" type="text" value={user} onChange={setUser} />
          <AdminField label="Password" type="password" value={pass} onChange={setPass} />
        </div>
        <button type="submit" className="btn-gold mt-8 w-full">Sign In to Admin</button>
      </form>
    </div>
  );
}

// ─── DASHBOARD ───
function Dashboard({ onLogout }: { onLogout: () => void }) {
  const [tab, setTab] = useState<Tab>("rates");
  const tabs: { id: Tab; label: string; icon: any }[] = [
    { id: "rates",       label: "Gold & Silver Rates", icon: TrendingUp },
    { id: "products",    label: "Products",            icon: Package },
    { id: "enquiries",   label: "Enquiries",           icon: MessageSquare },
    { id: "collections", label: "Collections",         icon: Settings }
  ];

  return (
    <div className="min-h-screen" style={{ background: "var(--cream-50)" }}>
      {/* Top bar */}
      <div className="sticky top-0 z-40 flex h-16 items-center justify-between px-6 md:px-10"
        style={{ background: "rgba(253,251,247,0.97)", borderBottom: "1px solid rgba(176,141,74,0.12)", backdropFilter: "blur(12px)" }}>
        <div className="heading-display text-xl text-gold">Gaytri Gold · Admin</div>
        <button onClick={onLogout} className="btn-ghost !px-4 !py-2 text-xs flex items-center gap-2">
          <LogOut className="h-3.5 w-3.5" /> Logout
        </button>
      </div>

      <div className="flex min-h-[calc(100vh-64px)]">
        {/* Sidebar */}
        <aside className="w-16 md:w-60 shrink-0 border-r py-6"
          style={{ borderColor: "rgba(176,141,74,0.1)", background: "rgba(255,255,255,0.6)" }}>
          {tabs.map((t) => {
            const Icon = t.icon;
            const active = tab === t.id;
            return (
              <button key={t.id} onClick={() => setTab(t.id)}
                className="flex w-full items-center gap-3 px-4 py-3 text-left text-[13px] font-medium transition-all duration-300"
                style={{ color: active ? "var(--gold-accent)" : "var(--charcoal-600)", background: active ? "rgba(176,141,74,0.06)" : "transparent", borderRight: active ? "2px solid var(--gold-accent)" : "2px solid transparent" }}>
                <Icon className="h-4 w-4 shrink-0" />
                <span className="hidden md:inline">{t.label}</span>
              </button>
            );
          })}
        </aside>

        {/* Content */}
        <main className="flex-1 p-6 md:p-10 overflow-auto">
          {tab === "rates"       && <RatesTab />}
          {tab === "products"    && <ProductsTab />}
          {tab === "enquiries"   && <EnquiriesTab />}
          {tab === "collections" && <CollectionsTab />}
        </main>
      </div>
    </div>
  );
}

// ─── RATES TAB ───
function RatesTab() {
  const [rates, setRates] = useState({ gold22k: 6850, gold24k: 7480, silver: 92 });
  const [saved, setSaved] = useState(false);
  const [current, setCurrent] = useState<MetalRates | null>(null);

  useEffect(() => {
    getMetalRates().then((r) => { setCurrent(r); setRates({ gold22k: r.gold22k, gold24k: r.gold24k, silver: r.silver }); });
  }, []);

  const save = () => {
    saveManualRates(rates);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="max-w-xl">
      <h1 className="heading-display text-3xl mb-2" style={{ color: "var(--charcoal-900)" }}>Update Metal Rates</h1>
      {current && (
        <p className="text-sm mb-8" style={{ color: "var(--charcoal-500)" }}>
          Current source: <strong>{current.source}</strong> · Last updated: {current.updatedAt}
        </p>
      )}
      <div className="rounded-3xl p-8 space-y-6"
        style={{ background: "rgba(255,255,255,0.8)", border: "1px solid rgba(176,141,74,0.12)", boxShadow: "0 20px 50px -20px rgba(26,22,18,0.08)" }}>
        <div className="eyebrow mb-2">Manual Override</div>
        {[
          { key: "gold22k" as const, label: "Gold 22K (₹ per gram)" },
          { key: "gold24k" as const, label: "Gold 24K (₹ per gram)" },
          { key: "silver"  as const, label: "Silver (₹ per gram)" }
        ].map((f) => (
          <div key={f.key}>
            <label className="block text-[10px] uppercase mb-2" style={{ letterSpacing: "0.3em", color: "var(--gold-accent)", opacity: 0.7 }}>{f.label}</label>
            <input type="number" value={rates[f.key]}
              onChange={(e) => setRates({ ...rates, [f.key]: Number(e.target.value) })}
              className="w-full rounded-xl px-4 py-3.5 text-[15px] font-medium outline-none"
              style={{ border: "1px solid rgba(176,141,74,0.2)", background: "rgba(255,255,255,0.6)", color: "var(--charcoal-900)" }} />
          </div>
        ))}
        <button onClick={save} className="btn-gold w-full mt-2 flex items-center justify-center gap-2">
          <Save className="h-4 w-4" />
          {saved ? "✓ Rates Saved!" : "Save Rates"}
        </button>
        <p className="text-[11px] text-center" style={{ color: "var(--charcoal-500)", opacity: 0.6 }}>
          Saved rates will show instantly on the website ticker.
        </p>
      </div>
    </div>
  );
}

// ─── PRODUCTS TAB ───
function ProductsTab() {
  const [products, setProducts] = useState<JewelleryItem[]>(() => {
    if (typeof window === "undefined") return CATALOGUE_ITEMS;
    try { const s = localStorage.getItem(PRODUCTS_KEY); return s ? JSON.parse(s) : CATALOGUE_ITEMS; } catch { return CATALOGUE_ITEMS; }
  });
  const [editing, setEditing] = useState<JewelleryItem | null>(null);
  const [isNew, setIsNew] = useState(false);

  const save = (items: JewelleryItem[]) => {
    setProducts(items);
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(items));
  };

  const del = (id: string) => save(products.filter((p) => p.id !== id));

  const blank: JewelleryItem = { id: Date.now().toString(), name: "", category: "gold", description: "", photo: "", status: "active" };

  const saveEdit = (item: JewelleryItem) => {
    if (isNew) save([...products, item]);
    else save(products.map((p) => (p.id === item.id ? item : p)));
    setEditing(null); setIsNew(false);
  };

  if (editing) return <ProductForm item={editing} onSave={saveEdit} onCancel={() => { setEditing(null); setIsNew(false); }} />;

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="heading-display text-3xl" style={{ color: "var(--charcoal-900)" }}>Products ({products.length})</h1>
        <button className="btn-gold !px-5 !py-2.5 text-sm flex items-center gap-2"
          onClick={() => { setIsNew(true); setEditing(blank); }}>
          <Plus className="h-4 w-4" /> Add Product
        </button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <div key={p.id} className="gem-card p-0 overflow-hidden">
            <img src={p.photo || "https://images.unsplash.com/photo-1601121141461-9d6647bef0a2?w=400"} alt={p.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <div className="font-medium text-[15px]" style={{ color: "var(--charcoal-800)" }}>{p.name || "Unnamed Product"}</div>
              <div className="text-[11px] mt-1 uppercase" style={{ color: "var(--gold-accent)", letterSpacing: "0.2em" }}>{p.category} · {p.status}</div>
              {p.purity && <div className="text-[12px] mt-1" style={{ color: "var(--charcoal-500)" }}>{p.purity}</div>}
              <div className="flex gap-2 mt-4">
                <button onClick={() => { setIsNew(false); setEditing(p); }}
                  className="flex-1 flex items-center justify-center gap-1.5 rounded-xl py-2 text-[12px] font-medium transition-all"
                  style={{ background: "rgba(176,141,74,0.08)", color: "var(--gold-accent)", border: "1px solid rgba(176,141,74,0.15)" }}>
                  <Edit3 className="h-3.5 w-3.5" /> Edit
                </button>
                <button onClick={() => del(p.id)}
                  className="flex items-center justify-center gap-1.5 px-3 rounded-xl py-2 text-[12px] font-medium transition-all"
                  style={{ background: "rgba(220,38,38,0.06)", color: "#dc2626", border: "1px solid rgba(220,38,38,0.1)" }}>
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductForm({ item, onSave, onCancel }: { item: JewelleryItem; onSave: (i: JewelleryItem) => void; onCancel: () => void }) {
  const [form, setForm] = useState(item);
  const u = (k: keyof JewelleryItem) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  return (
    <div className="max-w-2xl">
      <div className="flex items-center justify-between mb-8">
        <h1 className="heading-display text-2xl" style={{ color: "var(--charcoal-900)" }}>{item.name ? "Edit Product" : "Add Product"}</h1>
        <button onClick={onCancel} className="btn-ghost !px-4 !py-2 text-xs flex items-center gap-2"><X className="h-3.5 w-3.5" /> Cancel</button>
      </div>
      <div className="rounded-3xl p-8 space-y-5"
        style={{ background: "rgba(255,255,255,0.85)", border: "1px solid rgba(176,141,74,0.12)", boxShadow: "0 20px 50px -20px rgba(26,22,18,0.08)" }}>
        <div className="grid gap-5 sm:grid-cols-2">
          <AdminField label="Product Name *" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
          <div>
            <label className="block text-[9px] uppercase mb-2" style={{ letterSpacing: "0.32em", color: "var(--gold-accent)", opacity: 0.7 }}>Category</label>
            <select value={form.category} onChange={u("category")} className="w-full rounded-xl px-4 py-3.5 text-[13.5px] outline-none"
              style={{ border: "1px solid rgba(176,141,74,0.15)", background: "rgba(255,255,255,0.6)", color: "var(--charcoal-900)" }}>
              {["gold","diamond","bridal","silver","traditional","mens","exclusive"].map((c) => (
                <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>
              ))}
            </select>
          </div>
          <AdminField label="Subcategory" value={form.subcategory || ""} onChange={(v) => setForm({ ...form, subcategory: v })} placeholder="e.g. Necklace, Ring" />
          <AdminField label="Purity" value={form.purity || ""} onChange={(v) => setForm({ ...form, purity: v })} placeholder="e.g. 22K BIS Hallmarked" />
          <AdminField label="Weight" value={form.weight || ""} onChange={(v) => setForm({ ...form, weight: v })} placeholder="e.g. 45g approx." />
          <div>
            <label className="block text-[9px] uppercase mb-2" style={{ letterSpacing: "0.32em", color: "var(--gold-accent)", opacity: 0.7 }}>Status</label>
            <select value={form.status} onChange={u("status")} className="w-full rounded-xl px-4 py-3.5 text-[13.5px] outline-none"
              style={{ border: "1px solid rgba(176,141,74,0.15)", background: "rgba(255,255,255,0.6)", color: "var(--charcoal-900)" }}>
              <option value="active">Active (Visible)</option>
              <option value="inactive">Inactive (Hidden)</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <AdminField label="Photo URL" value={form.photo} onChange={(v) => setForm({ ...form, photo: v })} placeholder="https://..." />
            {form.photo && <img src={form.photo} alt="preview" className="mt-2 h-32 w-full object-cover rounded-xl" />}
          </div>
          <div className="sm:col-span-2">
            <label className="block text-[9px] uppercase mb-2" style={{ letterSpacing: "0.32em", color: "var(--gold-accent)", opacity: 0.7 }}>Description</label>
            <textarea rows={4} value={form.description} onChange={u("description")} className="w-full rounded-xl px-4 py-3.5 text-[13.5px] outline-none"
              style={{ border: "1px solid rgba(176,141,74,0.15)", background: "rgba(255,255,255,0.6)", color: "var(--charcoal-900)" }} />
          </div>
          <label className="sm:col-span-2 flex items-center gap-3 cursor-pointer">
            <input type="checkbox" checked={!!form.featured} onChange={(e) => setForm({ ...form, featured: e.target.checked })} className="h-4 w-4 rounded" />
            <span className="text-[13px]" style={{ color: "var(--charcoal-700)" }}>Mark as Featured</span>
          </label>
        </div>
        <button onClick={() => onSave(form)} className="btn-gold w-full flex items-center justify-center gap-2 mt-2">
          <Save className="h-4 w-4" /> Save Product
        </button>
      </div>
    </div>
  );
}

// ─── ENQUIRIES TAB ───
function EnquiriesTab() {
  const [enquiries] = useState<Enquiry[]>(() => {
    if (typeof window === "undefined") return [];
    try { const s = localStorage.getItem(ENQUIRIES_KEY); return s ? JSON.parse(s) : SAMPLE_ENQUIRIES; } catch { return SAMPLE_ENQUIRIES; }
  });

  return (
    <div>
      <h1 className="heading-display text-3xl mb-8" style={{ color: "var(--charcoal-900)" }}>Enquiries ({enquiries.length})</h1>
      {enquiries.length === 0 ? (
        <div className="text-center py-20" style={{ color: "var(--charcoal-500)" }}>No enquiries yet. They will appear here when customers submit the form.</div>
      ) : (
        <div className="space-y-4">
          {enquiries.map((e) => (
            <div key={e.id} className="gem-card p-6">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <div className="font-medium text-[16px]" style={{ color: "var(--charcoal-800)" }}>{e.name}</div>
                  <div className="text-[12px] mt-0.5" style={{ color: "var(--charcoal-500)" }}>{e.city} · {e.at}</div>
                </div>
                <div className="flex gap-3">
                  <a href={`tel:${e.phone}`} className="btn-ghost !px-3 !py-2 text-xs">📞 {e.phone}</a>
                  <a href={`https://wa.me/${e.whatsapp || e.phone}`.replace(/\s|\+/g, "")} target="_blank" rel="noreferrer" className="btn-gold !px-3 !py-2 text-xs">WhatsApp</a>
                </div>
              </div>
              {e.product && <div className="mt-3 text-[13px]" style={{ color: "var(--charcoal-600)" }}>Interested in: <strong>{e.product}</strong></div>}
              {e.message && <div className="mt-2 text-[13px] italic" style={{ color: "var(--charcoal-500)" }}>&ldquo;{e.message}&rdquo;</div>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── COLLECTIONS TAB ───
function CollectionsTab() {
  return (
    <div>
      <h1 className="heading-display text-3xl mb-8" style={{ color: "var(--charcoal-900)" }}>Collections</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {COLLECTIONS.map((c) => (
          <div key={c.id} className="gem-card p-0 overflow-hidden">
            <img src={c.coverImage} alt={c.title} className="w-full h-36 object-cover" />
            <div className="p-5">
              <div className="font-medium text-[15px]" style={{ color: "var(--charcoal-800)" }}>{c.title}</div>
              <div className="text-[11px] mt-0.5 uppercase" style={{ color: "var(--gold-accent)", letterSpacing: "0.2em" }}>{c.itemCount} items</div>
              <p className="text-[12.5px] mt-2 leading-relaxed" style={{ color: "var(--charcoal-500)" }}>{c.description}</p>
              <div className="mt-3 flex items-center gap-2">
                <span className={`rounded-full px-2.5 py-1 text-[10px] ${c.featured ? "bg-amber-50 text-amber-700 border border-amber-200" : "bg-gray-50 text-gray-500 border border-gray-200"}`}>
                  {c.featured ? "✦ Featured" : "Standard"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-8 text-[13px]" style={{ color: "var(--charcoal-500)" }}>
        To add or edit collections, update the <code className="px-1.5 py-0.5 rounded bg-amber-50 text-amber-800 text-[12px]">COLLECTIONS</code> array in <code className="px-1.5 py-0.5 rounded bg-amber-50 text-amber-800 text-[12px]">lib/data.ts</code>.
      </p>
    </div>
  );
}

// ─── SHARED FIELD ───
function AdminField({ label, value, onChange, type = "text", placeholder }: { label: string; value: string; onChange: (v: string) => void; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="block text-[9px] uppercase mb-2" style={{ letterSpacing: "0.32em", color: "var(--gold-accent)", opacity: 0.7 }}>{label}</label>
      <input type={type} value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl px-4 py-3.5 text-[13.5px] outline-none"
        style={{ border: "1px solid rgba(176,141,74,0.15)", background: "rgba(255,255,255,0.6)", color: "var(--charcoal-900)" }} />
    </div>
  );
}

const SAMPLE_ENQUIRIES: Enquiry[] = [
  { id: "1", name: "Priya Sharma", phone: "+91 98765 43210", whatsapp: "+91 98765 43210", city: "Jaipur", product: "Bridal Polki Set", message: "Looking for a full bridal set for December wedding.", at: "10 Jun 2026, 11:30 AM" },
  { id: "2", name: "Rajesh Agarwal", phone: "+91 87654 32109", whatsapp: "", city: "Bhilwara", product: "Diamond Solitaire", message: "Need 0.5ct diamond ring for anniversary.", at: "9 Jun 2026, 3:15 PM" }
];
