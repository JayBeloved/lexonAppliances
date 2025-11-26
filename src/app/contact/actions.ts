"use server";
import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

// Storing in memory as requested.
const submissions: z.infer<typeof contactFormSchema>[] = [];

export async function submitContactForm(
  data: z.infer<typeof contactFormSchema>
) {
  try {
    // In a real app, you'd save this to a database.
    console.log("New Contact Form Submission:", data);
    submissions.push(data);

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
