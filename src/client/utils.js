export function getBaseUrl() {
  if (typeof window !== "undefined") return ""
  if (process.env.VITE_VERCEL_URL) return `https://${process.env.VITE_VERCEL_URL}`
  return `http://localhost:3000`
}