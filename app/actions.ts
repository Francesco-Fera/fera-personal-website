"use server";

export async function createLead(request: any) {
  const { name, email, message } = request;

  const SCRIPT = process.env.GOOGLE_LEADS_SCRIPT as string;

  const body = JSON.stringify({
    name,
    email,
    message,
    gdprAccepted: false,
    source: "francescofera.com",
  });

  try {
    const response = await fetch(SCRIPT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });

    if (response.ok) {
      return {
        status: 200,
        body: { message: "Lead added successfully!" },
      };
    } else {
      return {
        status: 500,
        body: { error: "Error storing lead" },
      };
    }
  } catch (error) {
    console.error("Error writing to sheet:", error);
    return {
      status: 500,
      body: { error: "Error storing lead" },
    };
  }
}
