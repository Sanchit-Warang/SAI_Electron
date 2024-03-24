import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { dialogClose } from "@renderer/components/ui/dialog";
import { downloadThanksLetter } from "@renderer/api/Certificate";
import { AxiosError, AxiosResponse } from "axios";
// function getFilenameFromResponse(response: AxiosResponse) {
//     // Implement logic to extract filename from response headers (e.g., Content-Disposition header)
//     // Return a default filename if not found in headers
//     return response.headers.get("Content-Disposition").split(";")[1].trim().split("=")[1] || "downloaded_pdf.pdf";
//   }

export const useDownloadThanksLetterMutation = () => {
  return useMutation({
    mutationFn: downloadThanksLetter,
    onSuccess: async (response: AxiosResponse) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const a = document.createElement("a");
      a.href = url;
      a.download = "thanks_letter.pdf";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      toast.success("Download started"); // Inform user download has started
      dialogClose();
      //   console.log(data.data);
      //   toast.success("Download started"); // Inform user download has started
      //   dialogClose();

      //   // Create a Blob from the response data
      //   const blob = new Blob([data.data], { type: "application/pdf" });

      //   // Create a URL for the Blob
      //   const url = window.URL.createObjectURL(blob);

      //   // Create a temporary anchor element
      //   const a = document.createElement("a");
      //   a.href = url;
      //   a.download = "thanks_letter.pdf"; // Set the download attribute

      //   // Programmatically click the anchor to trigger download
      //   a.click();

      //   // Clean up by revoking the URL
      //   window.URL.revokeObjectURL(url);
    },
    onError: (data: AxiosError) => {
      toast.error(JSON.stringify(data.response?.data));
    },
  });
};
