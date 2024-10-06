import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")!;

const handler = async (request: Request): Promise<Response> => {
  const body = await request.formData();
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "Rude Boy Solutions <skamansam@rudeboy.dev>",
      to: [
        "skamansam@gmail.com",
        "skamansam@rudeboy.dev",
        "skamansam@rbe.homeip.net",
      ],
      subject: `New Site Request! (${body.get("email")})`,
      html: `${body.get("name")} <${body.get("email")}> has requested a new site!\n\n${body.get("message")}`,
    }),
  });

  const data = await res.json();

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

serve(handler);
