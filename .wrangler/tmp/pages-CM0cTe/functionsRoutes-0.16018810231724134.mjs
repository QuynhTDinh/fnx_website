import { onRequestPost as __api_generate_js_onRequestPost } from "/Users/quynhdinh/Documents/FNX Website/functions/api/generate.js"

export const routes = [
    {
      routePath: "/api/generate",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_generate_js_onRequestPost],
    },
  ]