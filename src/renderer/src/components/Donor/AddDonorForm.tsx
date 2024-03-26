import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ReloadIcon } from "@radix-ui/react-icons";
import { z } from "zod";
import { Button } from "@renderer/components/ui/button";
import { useCreateDonorMutation } from "@renderer/hooks/api/donorApi";
import {AddDonorModalProps as AddDonorFormProps} from "./AddDonorModal";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@renderer/components/ui/form";
import { Input } from "@renderer/components/ui/input";
// import { useNavigate } from "react-router-dom";

// Define the schema for the Donor type
const donorSchema = z.object({
  name: z.string(),
  birthDate: z.string(),
  email: z.string().email(),
  contactNo: z.string().refine((value) => /^\d{10}$/g.test(value), {
    message: "Invalid contact number format",
  }),
  address: z.string(),
  identificationNo: z.string(),
});

const AddDonorForm = ({name}: AddDonorFormProps) => {
  //   const navigate = useNavigate();

  const createDonorMutation = useCreateDonorMutation();

  // Initialize form with default values and schema validation
  const form = useForm<z.infer<typeof donorSchema>>({
    resolver: zodResolver(donorSchema),
    defaultValues: {
      name: name,
      birthDate: "",
      email: "",
      contactNo: "",
      address: "",
      identificationNo: "",
    },
  });

  // Handle form submission
  async function onSubmit(values: z.infer<typeof donorSchema>) {
    // Perform registration logic here
    console.log("Submitted values:", values);
    await createDonorMutation.mutateAsync(values);
    // navigate("/login"); // Redirect after successful registration
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    className="bg-muted/20"
                    placeholder="Name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="birthDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Birth Date</FormLabel>
                <FormControl>
                  <Input
                    className="bg-muted/20"
                    type="date"
                    placeholder="Birth Date"
                    {...field}
                  />
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
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    className="bg-muted/20"
                    type="email"
                    placeholder="Email"
                    {...field}
                  />
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
                <FormLabel>Contact No</FormLabel>
                <FormControl>
                  <Input
                    className="bg-muted/20"
                    type="tel"
                    placeholder="Contact No"
                    {...field}
                  />
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
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input
                    className="bg-muted/20"
                    placeholder="Address"
                    {...field}
                  />
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
                <FormLabel>Identification No</FormLabel>
                <FormControl>
                  <Input
                    className="bg-muted/20"
                    placeholder="Identification No"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={form.formState.isSubmitting} type="submit">
            <>
              {form.formState.isSubmitting ? (
                <>
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />{" "}
                  Submitting
                </>
              ) : (
                <>Register</>
              )}
            </>
          </Button>
        </form>
      </Form>
    </>
  );
};

export default AddDonorForm;
