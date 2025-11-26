"use server";
import type { z } from "zod";
import { contactFormSchema } from "./schema";

// Storing in memory as requested.
const submissions: z.infer<typeof contactFormSchema>[] = [];

export async function submitContactForm(
  data: z.infer<typeof contactFormSchema>
) {
  const parsed = contactFormSchema.safeParse(data);

  if (!parsed.success) {
    return {
      success: false,
      message: "Invalid data provided.",
    };
  }

  try {
    // In a real app, you'd save this to a database.
    console.log("New Contact Form Submission:", parsed.data);
    submissions.push(parsed.data);

    return {
      success: true,
      message: "Thank you for your message! We'll get back to you soon.",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
