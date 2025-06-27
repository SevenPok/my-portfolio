import { atom } from "nanostores";

export const recaptchaStore = atom<string | null>(null);

export const setRecaptchaToken = (token: string | null) => {
  recaptchaStore.set(token);
};
