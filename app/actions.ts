"use server"

import { siteConfig } from "@/data/portfolio"

interface ContactFormResult {
  success: boolean
  error?: string
}

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit"

export async function submitContactForm(formData: FormData): Promise<ContactFormResult> {
  try {
    // Honeypot: hidden field only bots fill. Pretend success, send nothing.
    if ((formData.get("botcheck") as string | null)?.trim()) {
      return { success: true }
    }

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return {
        success: false,
        error: "All fields are required",
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {
        success: false,
        error: "Please enter a valid email address",
      }
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY
    if (!accessKey) {
      return {
        success: false,
        error: "Contact form is not configured. Please email me directly instead.",
      }
    }

    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        // api.web3forms.com sits behind Cloudflare; datacenter requests
        // without a browser-style UA get a managed challenge (403 HTML).
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        subject: `[Portfolio] ${subject}`,
        message: `${message}\n\n— ${name} (${email})`,
        from_name: siteConfig.name,
      }),
    })

    let data: { success?: boolean; message?: string }
    try {
      data = await response.json()
    } catch {
      return {
        success: false,
        error:
          "Contact service returned an unexpected response. Please email me directly.",
      }
    }

    if (!response.ok || !data.success) {
      return {
        success: false,
        error: data.message || "Failed to send. Please email me directly.",
      }
    }

    return { success: true }
  } catch (error) {
    console.error("Contact form error:", error)
    return {
      success: false,
      error: "An unexpected error occurred",
    }
  }
}
