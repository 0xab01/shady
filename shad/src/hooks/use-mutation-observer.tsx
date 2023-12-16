// @/hooks/use-mutation-observer.tsx
import { useEffect, RefObject } from 'react';

function useMutationObserver(target: RefObject<Node>, callback: MutationCallback, options?: MutationObserverInit) {
  useEffect(() => {
    if (!target.current) return;

    const observer = new MutationObserver(callback);
    observer.observe(target.current, options);

    return () => {
      observer.disconnect();
    };
  }, [target, callback, options]);
}

export default useMutationObserver;
