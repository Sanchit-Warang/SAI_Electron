import { API } from "./api";

export const downloadThanksLetter = async (data) => {
  return await API.post(
    "api/doc/generate-thanksLetter",
    data,
    {
      responseType: "blob", // Expecting a binary response (PDF)
    },
  );
};
