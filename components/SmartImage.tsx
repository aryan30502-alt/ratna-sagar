"use client";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  fallback?: React.ReactNode;
};

/**
 * Real product photo with graceful fallback.
 * If the remote image fails to load, the supplied fallback (usually a
 * gradient gem-orb) is rendered instead so the layout never breaks.
 */
export default function SmartImage({ src, alt, className, fallback }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed && fallback) return <>{fallback}</>;

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
