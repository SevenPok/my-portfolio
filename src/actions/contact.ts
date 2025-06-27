import { contactSchema } from "@/schemas/contact";
import { defineAction } from "astro:actions";

export const contact = {
  contactAction: defineAction({
    accept: "json",
    input: contactSchema,
    handler: async (data) => {
      try {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("message", data.message);
        formData.append("_captcha", "false");
        formData.append("_template", "table");

        const response = await fetch("https://formsubmit.co/47297fd30ea4c847ddcb77a85febdd63", {
          method: "POST",
          body: formData, // Usar FormData en lugar de JSON
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        // FormSubmit puede redirigir, así que verificamos si es una redirección
        if (response.type === "opaqueredirect" || response.redirected) {
          return {
            success: true,
            message: "Formulario enviado correctamente. Nos pondremos en contacto contigo pronto.",
          };
        }

        // Si no hay redirección, verificar la respuesta
        const res = await response.text();
        console.log("Respuesta del servidor:", res);
        return {
          success: true,
          message: "Formulario enviado correctamente. Nos pondremos en contacto contigo pronto.",
        };
      } catch (error) {
        console.error("Error al enviar:", error);
        return {
          success: false,
          message: "Error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.",
        };
      }
    },
  }),
};
