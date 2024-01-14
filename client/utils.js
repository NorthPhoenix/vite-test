export function getBaseUrl() {
  if (typeof window !== "undefined") return "/api"
  if (process.env.VITE_VERCEL_URL) return `https://${process.env.VITE_VERCEL_URL}/api`
  return `http://localhost:3000/api`
}