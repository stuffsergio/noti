import webpush from "@/lib/webPush";

export async function POST(req) {
  const { subscription, title, body } = await req.json();

  await Promise.all(
    webpush.sendNotification(subscription, JSON.stringify({ title, body })),
  );

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
