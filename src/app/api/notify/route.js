import webpush from "@/lib/webPush";
import { subscribtions } from "../subscribe/route";

export async function POST(req) {
  const payload = JSON.stringify({
    title: "Funciona!",
    body: "Esta notif. se envió desde un botón",
  });

  await Promise.all(
    subscribtions.map((sub) =>
      webpush.sendNotification(sub, payload).catch(() => {}),
    ),
  );

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
