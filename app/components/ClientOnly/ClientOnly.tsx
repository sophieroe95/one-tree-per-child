import type { ReactNode } from "react";
import { useEffect, useState } from "react";

interface Props {
  children(): ReactNode;
  fallback?: ReactNode;
}

let hydrating = true;

export default function ClientOnly({ children, fallback = null }: Props) {
  const [hydrated, setHydrated] = useState(() => !hydrating);

  useEffect(function hydrate() {
    hydrating = false;
    setHydrated(true);
  }, []);

  return hydrated ? <>{children()}</> : <>{fallback}</>;
}
