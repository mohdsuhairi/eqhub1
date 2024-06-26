'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
import { createDocument } from "@/convex/documents";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Loader2 } from "lucide-react";
import { LoadingButton } from "@/components/loading-button";

 
const formSchema = z.object({
  title: z.string().min(1).max(250),
});


export default function UploadDocumentForm({
    onUpload,
  }: {
    onUpload: () => void;
  }) {
    const createDocument = useMutation(api.documents.createDocument);
    
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
        },
    });

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        // sleep for 2s
        //await new Promise((resolve) => setTimeout(resolve, 2000));
        // createDocument({title: values.title});
        await createDocument(values);
        onUpload();
    }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="My Document Report" {...field} />
              </FormControl>
             {/*  <FormDescription>
                This is your public display name.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <LoadingButton
          isLoading={form.formState.isSubmitting}
          loadingText="Uploading..."
        >
        Upload
        </LoadingButton>
      </form>
    </Form>
  ); 
}