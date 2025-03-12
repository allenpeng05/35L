import jwt from "jsonwebtoken";

export function getUserIdFromToken(): string | null {
  try {
    const cookies = document.cookie.split(";");
    const tokenCookie = cookies.find((cookie) =>
      cookie.trim().startsWith("token=")
    );

    if (!tokenCookie) return null;

    const token = tokenCookie.split("=")[1];
    const decoded = jwt.decode(token) as { userId?: string } | null;
    return decoded?.userId || null;
  } catch (error) {
    console.error("Error parsing JWT token:", error);
    return null;
  }
}
