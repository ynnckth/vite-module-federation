// SvelteWrapper.tsx
import { useRef, useLayoutEffect } from 'react';

type SvelteComponent = new (options: { target: Element | null; props?: { [key: string]: any } }) => { $destroy(): void };

const SvelteWrapper = (SvelteComponent: SvelteComponent) => {
  return (props: { [key: string]: any }) => {
    const svelteRef = useRef<HTMLDivElement | null>(null);
    const svelteInstance = useRef<{ $destroy(): void } | null>(null);

    useLayoutEffect(() => {
      if (svelteRef.current) {
        svelteInstance.current = new SvelteComponent({
          target: svelteRef.current,
          props,
        });
      }

      return () => {
        svelteInstance.current?.$destroy();
      };
    }, [props]);

    return <div ref={svelteRef}></div>;
  };
};

export default SvelteWrapper;
