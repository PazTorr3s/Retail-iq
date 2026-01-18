import { headers } from "next/headers";

export async function getBaseUrl() {
  const h = await headers();
  const host = h.get("host");

  if (!host) {
    throw new Error("Host not found");
  }

  return process.env.NODE_ENV === "development"
    ? `http://${host}`
    : `https://${host}`;
}
