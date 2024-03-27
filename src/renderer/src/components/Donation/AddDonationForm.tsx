import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ReloadIcon } from "@radix-ui/react-icons";
import { z } from "zod";
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
// import { useCreateDonationMutation } from "@renderer/hooks/api/donationApi";
import { cn } from "@renderer/lib/utils";
import { Calendar } from "@renderer/components/ui/calender";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@renderer/components/ui/popover";
// import { useNavigate } from "react-router-dom";

const dataSchema = z.object({
  donorId: z.string(),
  amount: z.string(),
  chequeNo: z.string(),
  chequeDate: z.date({
    required_error: "A date of birth is required.",
  }), // Adjusted to specify Date type
  bank: z.string(),
  branch: z.string(),
  depositDate: z.date({
    required_error: "A date of birth is required.",
  }), // Adjusted to specify Date type
  clearanceDate: z.date({
    required_error: "A date of birth is required.",
  }), // Adjusted to specify Date type
  depositBank: z.string(),
  eightyG: z.string(),
  dateOfIssue: z.date({
    required_error: "A date of birth is required.",
  }), // Adjusted to specify Date type
  submissionDate: z.date({
    required_error: "A date of birth is required.",
  }), // Adjusted to specify Date type
  remark: z.string(),
  AccountantSubmissionDate: z.date({
    required_error: "A date of birth is required.",
  }), // Adjusted to specify Date type
});

type Props = {
  donorId: string;
};

const AddDonationForm = ({ donorId }: Props) => {
  // const createDonationMutaion = useCreateDonationMutation(donorId);

  //   const navigate = useNavigate();
  // Initialize form with default values and schema validation
  const form = useForm<z.infer<typeof dataSchema>>({
    resolver: zodResolver(dataSchema),
    defaultValues: {
      donorId: donorId,
      amount: "0",
      chequeNo: "",
      chequeDate: new Date(), // Default value set to current date
      bank: "",
      branch: "",
      depositDate: new Date(), // Default value set to current date
      clearanceDate: new Date(), // Default value set to current date
      depositBank: "",
      eightyG: "80G",
      dateOfIssue: new Date(), // Default value set to current date
      submissionDate: new Date(), // Default value set to current date
      remark: "",
      AccountantSubmissionDate: new Date(), // Default value set to current date
    },
  });

  // Handle form submission
  async function onSubmit(values: z.infer<typeof dataSchema>) {
    4;
    // Perform registration logic here
    console.log("Submitted values:", values);
    // await createDonationMutaion.mutateAsync({
    //   ...values,
    //   amount: Number(values.amount),
    // });
    // Redirect or perform other actions after successful submission
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {Object.keys(dataSchema.shape).map((key) => {
            if (key.includes("Date") || key.includes("date")) {
              return (
                <FormField
                  key={key}
                  control={form.control}
                  name={key as keyof typeof dataSchema.shape}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{key}</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-[240px] pl-3 text-left font-normal bg-muted/20 w-full hover:bg-muted/20 ",
                                !field.value && "text-muted-foreground",
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            captionLayout="dropdown-buttons"
                            fromYear={new Date().getFullYear() - 100}
                            toYear={new Date().getFullYear()}
                            // selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => date > new Date()}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              );
            }
            return (
              <FormField
                key={key}
                control={form.control}
                name={key as keyof typeof dataSchema.shape}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{key}</FormLabel>
                    <FormControl>
                      <Input
                        required
                        type={key === "amount" ? "number" : "text"}
                        className="bg-muted/20"
                        placeholder={key}
                        value={field.value.toString()}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            );
          })}
          <Button disabled={form.formState.isSubmitting} type="submit">
            <>
              {form.formState.isSubmitting ? (
                <>
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />{" "}
                  Submitting
                </>
              ) : (
                <>Submit</>
              )}
            </>
          </Button>
        </form>
      </Form>
    </>
  );
};

export default AddDonationForm;
