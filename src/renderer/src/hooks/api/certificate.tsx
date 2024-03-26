import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { dialogClose } from "@renderer/components/ui/dialog";
import {
  downloadThanksLetter,
  downloadReceipt,
} from "@renderer/api/Certificate";
import { AxiosError, AxiosResponse } from "axios";

export const useDownloadThanksLetterMutation = () => {
  return useMutation({
    mutationFn: downloadThanksLetter,
    onSuccess: async (response: AxiosResponse) => {
      toast.success("Download started");
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const a = document.createElement("a");
      a.href = url;
      a.download = "thanks_letter.pdf";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      toast.success("Download succesfully");
      dialogClose();
    },
    onError: (data: AxiosError) => {
      toast.error(JSON.stringify(data.response?.data));
    },
  });
};

export const useDownloadreceiptMutation = () => {
  return useMutation({
    mutationFn: downloadReceipt,
    onSuccess: async (response: AxiosResponse) => {
      toast.success("Download started");
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const a = document.createElement("a");
      a.href = url;
      a.download = "receipt.pdf";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      toast.success("Download succesfully");
      dialogClose();
    },
    onError: (data: AxiosError) => {
      toast.error(JSON.stringify(data.response?.data));
    },
  });
};
