// src/middleware.js
import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const isMaintenance =
    process.env.MAINTENANCE_MODE === undefined ||
    process.env.MAINTENANCE_MODE === "true";
  const url = new URL(context.request.url);

  // Prevent infinite loops by allowing requests to the maintenance page itself
  // Also allow static assets (like images or CSS) to load normally
  if (
    isMaintenance &&
    !url.pathname.includes("maintenance") &&
    !url.pathname.startsWith("/_astro")
  ) {
    return context.redirect("/maintenance", 307);
  }

  // Continue to the requested page normally if maintenance is off
  return next();
});
