"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { storeSchema } from "@/lib/validations/store";
import { useSellerStore } from "@/store/sellers";

export function CreateStoreForm() {
  const createStore = useSellerStore((state) => state.createStore);
  const form = useForm({
    resolver: zodResolver(storeSchema),
    defaultValues: {
      name: "",
      category_id: 1,
      description: "",
      address: {
        street: "",
        city: "",
        state: "",
        postal_code: "",
        country: "",
      },
      coordinates: {
        latitude: 0,
        longitude: 0,
      },
    },
  });

  async function onSubmit(values) {
    try {
      await createStore(values);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Store Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Address Fields */}
        <FormField
          control={form.control}
          name="address.street"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Street</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Add remaining address fields similarly */}
        <Button type="submit">Create Store</Button>
      </form>
    </Form>
  );
}
