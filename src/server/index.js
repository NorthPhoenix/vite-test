// import express from "express";
// import ViteExpress from "vite-express";

// const app = express();

// app.get("/hello", (req, res) => {
//   res.send("Hello Express! " + (Math.random() * 1000).toFixed(0));
// });

// if (!process.env.VERCEL) {
//   ViteExpress.listen(app, process.env.PORT ?? 3000, () =>
//     console.log("Server is listening on port 3000..."),
//   );
// }

export default function handler(req, res) {
  res.send("Hello Express! " + (Math.random() * 1000).toFixed(0));
}