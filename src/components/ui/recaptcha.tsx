import { recaptchaStore } from "@/store/recaptcha.store";
import { lazy, Suspense } from "react";

const ReCAPTCHA = lazy(() => import("react-google-recaptcha"));

export function ReCaptcha() {
  return (
    <Suspense
      name="ReCaptcha"
      fallback={<div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin" />}
    >
      <ReCAPTCHA
        sitekey={import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY}
        onChange={(value) => {
          recaptchaStore.set(value);
        }}
        onExpired={() => {
          recaptchaStore.set(null);
        }}
      />
    </Suspense>
  );
}
