import { useEffect } from "react";

const activeLocks = new Map();
let lockId = 0;

export function useBodyLock(className, active) {
  useEffect(() => {
    if (!active) return undefined;
    const key = ++lockId;
    activeLocks.set(key, className);
    document.body.classList.add(className);
    return () => {
      activeLocks.delete(key);
      if (![...activeLocks.values()].includes(className)) {
        document.body.classList.remove(className);
      }
    };
  }, [active, className]);
}
