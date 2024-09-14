const development = {
  url: "http://localhost:8080",
};
const production = {
  url: "https://example.com",
};

console.log("NODE_ENV: ", process.env.NODE_ENV);

export const config = process.env.NODE_ENV === "development" ? development : production;