import webpush from "web-push";

if (!process.env.VAPID_PUBLIC_KEY || !process.env.VAPID_PRIVATE_KEY) {
  throw new Error("VAPID keys not defined");
}

webpush.setVapidDetails(
  "mailto:test@example.com",
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY,
);

export default webpush;
