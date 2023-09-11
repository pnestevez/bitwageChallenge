import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Image from "next/image";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import useSWR from "swr";
import getProfileData, { TProfileData } from "@/services/getProfileData";

const formSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    }),
  bio: z.string().max(250, {
    message: "Bio must not be longer than 250 characters.",
  }),
});

export default function Profile({
  data: _data,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  const { data } = useSWR(
    "/api/profile",
    (url: string): Promise<TProfileData> =>
      fetch(url).then((res) => res.json()),
    {
      fallbackData: _data,
    }
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: data.username,
      bio: data.bio || "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Layout title="Profile">
      <div className="flex flex-col sm:flex-row">
        <div>
          <Image
            src={data.image}
            alt="Profile picture`"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-10 sm:mt-0 sm:pl-6 sm:ml-6 sm:border-l sm:border-l-gray-200 flex flex-col gap-6 grow"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Add user name" {...field} />
                  </FormControl>
                  <FormDescription>This is your public name.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Add desciption"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div>
              <Button type="submit" size="lg">
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps<{
  data: TProfileData;
}> = async () => {
  const data = await getProfileData();

  return { props: { data } };
};
