declare module 'particles.js' {
  export function particlesJS(tagId: string, options: any): void;
  export function particlesJS(tagId: string, pathConfigJson: string, callback?: () => void): void;
}

declare var particlesJS: any;

interface Window {
  pJSDom: any[];
}