/// <reference types="astro/client" />
// for lenis <script src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@1/bundled/lenis.min.js" async></script>
class Lenis {
  on(event: 'scroll', callback: (e: ScrollEvent) => void): void;
  raf (time: number): void;
}
