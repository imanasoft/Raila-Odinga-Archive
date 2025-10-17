/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module '*.yaml?raw' {
  const content: string;
  export default content;
}

declare module '*.yml?raw' {
  const content: string;
  export default content;
}
