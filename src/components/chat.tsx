"use client";
import * as z from "zod";

import { useEffect, useRef, useState } from "react";
import { Loader2, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessagesSquare } from "lucide-react";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import { cn } from "@/lib/utils";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { fromSchema } from "@/app/dashboard/constants";

const Chat = () => {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([]);
  const form = useForm<z.infer<typeof fromSchema>>({
    resolver: zodResolver(fromSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSumbitForm = async (data: z.infer<typeof fromSchema>) => {
    try {
      const userMessage: ChatCompletionMessageParam = {
        role: "user",
        content: data.prompt,
      };

      const newMessages = [...messages, userMessage];

      const response = await axios.post("/api/conversation", {
        messages: newMessages,
      });

      setMessages((current) => [...current, userMessage, response.data]);

      form.reset();
    } catch (error) {
      //TODO: Open Pro model

      console.log("ERROR CONVERSATION API REQUEST", error);
    } finally {
      router.refresh(); //refresh the page
    }
  };

  const [message, setMessage] = useState("");
  const chatRef = useRef<HTMLDivElement | null>(null);
  // const messages = [
  //   { text: "Hello! How can I help you?", sender: "bot" },
  //   { text: "I have a question about my order.", sender: "user" }
  // ];

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="w-full max-w-2xl mx-auto p-4 h-full  rounded-lg  bg-transparent">
      <div className="h-[75vh] overflow-y-auto p-2 border-b mt-8">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 my-1 rounded-lg w-fit max-w-[75%] ${
              msg.role === "user"
                ? "bg-blue-500 text-white ml-auto"
                : "bg-gray-300 text-black"
            }`}
          >
            {typeof msg.content === "string" ? msg.content : "Invalid response"}
          </div>
        ))}
        <div ref={chatRef} /> {/* Ensure this ref is typed correctly */}
      </div>
      <div className="flex items-center mt-2">
     
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSumbitForm)}
            className=" rounded-lg  w-full p-4 px-3 md:px-6 focus-within:shadow-sm flex justify-between gap-2"
          >
            <FormField
              name="prompt"
              render={({ field }) => (
                <FormItem className="w-full px-2">
                  <FormControl className="m-0 p-0">
                    <Input
                      placeholder="Type a message..."
                      {...field}
                      className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent "
                      disabled={isLoading}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button className=" " disabled={isLoading}>
              {isLoading ? (
                <Loader2 className="mr-2 w-4 h-4 animate-spin" />
              ) : (
                <Send size={18} />
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Chat;
