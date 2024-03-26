import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ReloadIcon } from "@radix-ui/react-icons";
// import { useDownloadThanksLetterMutation } from "@renderer/hooks/api/certificate";
import { useDownloadreceiptMutation } from "@renderer/hooks/api/certificate";

import { Button } from "@renderer/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@renderer/components/ui/form";
import { Input } from "@renderer/components/ui/input";
import { Donation } from "@renderer/types";
import { convertTimestampToYYYYMMDD } from "@renderer/lib/utilfunc";

const ReceiptFormSchema = z.object({
  donorId: z.string(),
  name: z.string(),
  email: z.string().email(),
  contactNo: z.string().refine((value) => /^\d{10}$/g.test(value), {
    message: "Invalid contact number format",
  }),
  address: z.string(),
  identificationNo: z.string(),
  amount: z.string(),
  bank: z.string(),
  branch: z.string(),
  clearanceDate: z.string(),
  chequeNo: z.string(),
});

export type ReceiptFormSchemaType = z.infer<typeof ReceiptFormSchema>;

type ReceiptFormProps = {
  donation: Donation;
};

const ReceiptForm = ({ donation }: ReceiptFormProps) => {
  //   const downloadThanksLetterMutation = useDownloadThanksLetterMutation();
  const downloadReceiptMutation = useDownloadreceiptMutation();
  const form = useForm<z.infer<typeof ReceiptFormSchema>>({
    resolver: zodResolver(ReceiptFormSchema),
    defaultValues: {
      donorId: donation.donorId?._id,
      name: donation.donorId?.name,
      email: donation.donorId?.email,
      contactNo: donation.donorId?.contactNo,
      address: donation.donorId?.address,
      identificationNo: donation.donorId?.identificationNo,
      amount: donation.amount.toString(),
      bank: donation.bank,
      branch: donation.branch,
      clearanceDate: convertTimestampToYYYYMMDD(
        donation.clearanceDate.toString(),
      ),
      chequeNo: donation.chequeNo,
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof ReceiptFormSchema>) {
    console.log(values);
    await downloadReceiptMutation.mutateAsync(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Donor Name</FormLabel>
              <FormControl>
                <Input className="bg-muted/20" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Donor Email</FormLabel>
              <FormControl>
                <Input type="email" className="bg-muted/20" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contactNo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Donor Contact</FormLabel>
              <FormControl>
                <Input className="bg-muted/20" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Donor Address</FormLabel>
              <FormControl>
                <Input className="bg-muted/20" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="identificationNo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Donor ID</FormLabel>
              <FormControl>
                <Input className="bg-muted/20" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <FormControl>
                <Input className="bg-muted/20" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bank"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bank</FormLabel>
              <FormControl>
                <Input className="bg-muted/20" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="branch"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Branch</FormLabel>
              <FormControl>
                <Input className="bg-muted/20" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="clearanceDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Clearance Date</FormLabel>
              <FormControl>
                <Input type="date" className="bg-muted/20" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="chequeNo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cheque No</FormLabel>
              <FormControl>
                <Input className="bg-muted/20" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={form.formState.isSubmitting} type="submit">
          <>
            {form.formState.isSubmitting ? (
              <>
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> Submitting
              </>
            ) : (
              <>Download Receipt</>
            )}
          </>
        </Button>
      </form>
    </Form>
  );
};

export default ReceiptForm;
