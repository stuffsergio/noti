let subscribtions = [];

export async function POST(req) {
  const sub = await req.json();
  subscribtions.push(sub);

  console.log("Subs:", subscribtions.length);

  return new Response(JSON.stringify({ success: true }));
}

export { subscribtions };
