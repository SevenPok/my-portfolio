"use client";

import { Backdrop } from "../ui/backdrop";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { recaptchaStore } from "@/store/recaptcha.store";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { type ContactFormData, contactSchema } from "@/schemas/contact";
import { useForm } from "react-hook-form";
import { useState, type FC } from "react";
import { useStore } from "@nanostores/react";
import { useTranslations } from "@/i18n/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Lang } from "@/i18n/ui";

interface IProps {
  lang: Lang;
  children?: React.ReactNode;
}

const Contact: FC<IProps> = ({ lang, children }) => {
  const t = useTranslations(lang);

  const [loading, setLoading] = useState(false);
  const recaptcha = useStore(recaptchaStore);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: "",
      name: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    if (!recaptcha) {
      toast.error(t("contact.form.captchaError"));
      return;
    }
    setLoading(true);
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
        form.reset();
        return;
      }

      // Si no hay redirección, verificar la respuesta
      await response.text();

      form.reset();
      form.clearErrors();
      toast.success(t("contact.form.success"));
    } catch (error) {
      toast.error(t("contact.form.error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col items-center scroll-mt-20 mt-20" id="contact">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-extrabold leading-tight font-display text-center">{t("contact.title")}</h1>
        <p className="text-muted-foreground text-center mb-10 mt-4 text-balance">{t("contact.description")}</p>

        <Card className="min-w-3xl">
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field, formState: { errors } }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>{t("contact.form.name")}</FormLabel>
                        <FormControl>
                          <Input placeholder={t("contact.form.name")} {...field} />
                        </FormControl>
                        {errors.name && <span className="text-destructive text-sm mt-1">{errors.name.message}</span>}
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field, formState: { errors } }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>{t("contact.form.email")}</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder={t("contact.form.email")} {...field} />
                        </FormControl>
                        {errors.email && <span className="text-destructive text-sm mt-1">{errors.email.message}</span>}
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field, formState: { errors } }) => (
                    <FormItem>
                      <FormLabel>{t("contact.form.message")}</FormLabel>
                      <FormControl>
                        <Textarea placeholder={t("contact.form.message")} {...field} className="resize-none min-h-32" />
                      </FormControl>
                      {errors.message && (
                        <span className="text-destructive text-sm mt-1">{errors.message.message}</span>
                      )}
                    </FormItem>
                  )}
                />
                <div>{children}</div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Enviando..." : t("contact.form.send")}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
      <Backdrop isOpen={loading} />
    </section>
  );
};

export default Contact;
