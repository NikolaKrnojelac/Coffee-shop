import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, address, grind, plan } = await request.json();

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.EMAIL_ADMIN!,
      subject: "Nova pretplata - CoffeeClub",
      html: `
        <h2>Nova pretplata na Coffee Club</h2>
        <p><strong>Ime:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Adresa:</strong> ${address}</p>
        <p><strong>Mljevenje:</strong> ${grind}</p>
        <p><strong>Plan:</strong> ${plan}</p>
            `,
    });

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Dobrodošli u CoffeeClub - Vaša kafa stiže uskoro!",
      html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #6F4E37;">Zdravo ${name}, hvala na pretplati!</h2>
          <p>Uspješno ste se prijavili na naš <strong>CoffeeClub</strong>. Od sada, sveža kafa stiže direktno na Vaša vrata svakog meseca.</p>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #6F4E37;">Detalji Vaše pretplate:</h3>
            <p style="margin: 5px 0;"><strong>Izabrani plan:</strong> ${plan}</p>
            <p style="margin: 5px 0;"><strong>Način mljevenja:</strong> ${grind}</p>
            <p style="margin: 5px 0;"><strong>Adresa za dostavu:</strong> ${address}</p>
          </div>
          
          <p>Ukoliko imate bilo kakvih pitanja ili želite da promijenite detalje dostave, slobodno odgovorite na ovaj email.</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #777;">Uživajte u svakom gutljaju,<br /><strong>CoffeeClub Tim</strong></p>
        </div>
        `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend greška:", error);
    return NextResponse.json({ error: "Greška pri slanju." }, { status: 500 });
  }
}
