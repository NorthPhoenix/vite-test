// https://vercel.com/docs/functions/serverless-functions/quickstart
export default function handler(request, response) {
  response.status(200).json({
    body: `Hello from lambda! ${(Math.random() * 1000).toFixed(0)}`,
    query: request.query,
    cookies: request.cookies,
  });
}