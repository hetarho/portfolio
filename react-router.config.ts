import type { Config } from "@react-router/dev/config";

export default {
  // SSG (Static Site Generation) mode enabled
  ssr: false,
  async prerender() {
    return ["/"];
  },
} satisfies Config;
