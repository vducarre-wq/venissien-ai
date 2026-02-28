import { NextRequest, NextResponse } from "next/server";

interface LeadData {
  name: string;
  email: string;
  phone?: string;
  profile: string;
  message?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: LeadData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.profile) {
      return NextResponse.json(
        { error: "Les champs nom, email et profil sont obligatoires." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "L'adresse email n'est pas valide." },
        { status: 400 }
      );
    }

    // Send to Systeme.io API if key is configured
    const apiKey = process.env.SYSTEME_IO_API_KEY;
    if (apiKey) {
      const response = await fetch("https://api.systeme.io/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": apiKey,
        },
        body: JSON.stringify({
          email: body.email,
          fields: [
            { slug: "first_name", value: body.name },
            { slug: "phone_number", value: body.phone || "" },
          ],
          tags: [
            { name: body.profile },
            { name: "site-venissien-ai" },
          ],
        }),
      });

      if (!response.ok) {
        console.error("Systeme.io API error:", await response.text());
        // Don't expose internal errors to the client
      }
    }

    return NextResponse.json(
      { success: true, message: "Votre demande a bien été envoyée." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Lead API error:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue. Veuillez réessayer." },
      { status: 500 }
    );
  }
}
