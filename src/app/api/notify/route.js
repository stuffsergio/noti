import webpush from "@/lib/webPush";
import { subscribtions } from "../subscribe/route";

export async function POST(req) {
  const { title, body } = await req.json();

  await Promise.all(
    subscribtions.map((sub) =>
      webpush.sendNotification(sub, JSON.stringify({ title, body })),
    ),
  );

  return new Response("Sent");
}
