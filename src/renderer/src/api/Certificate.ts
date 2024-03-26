import { API } from "./api";
import { ReceiptFormSchemaType } from "@renderer/components/Certificates/ReceiptForm";
import numWords from "num-words";

export const downloadThanksLetter = async (data) => {
  return await API.post("api/doc/generate-thanksLetter", data, {
    responseType: "blob", // Expecting a binary response (PDF)
  });
};

export const downloadReceipt = async (data: ReceiptFormSchemaType) => {
  return await API.post(
    "api/doc/generate-receipt",
    { ...data, amountText: numWords(+data.amount) },
    {
      responseType: "blob", // Expecting a binary response (PDF)
    },
  );
};
