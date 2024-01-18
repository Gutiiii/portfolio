"use client";
import { Spinner } from "@nextui-org/react";
import axios from "axios";
import { motion } from "framer-motion";
import { FC, FormEvent, useState } from "react";
import { useQuery } from "react-query";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "sonner";

const Contact: FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const onSend = (event: FormEvent) => {
    event.preventDefault();
    refetch();
  };

  const { data, isLoading, refetch } = useQuery({
    queryFn: async () => {
      const data = await axios.post(
        "https://sendmail.samuelgutmans9.workers.dev/",
        { name, email, message },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return data;
    },
    enabled: false,
  });
  if (data) {
    if (data?.status === 200) {
      toast.success("Email sent successfully", {
        position: "top-center",
      });
      setTimeout(() => {
        window.location.reload();
      }, 3200);
    } else {
      toast.error("Something went wrong! Please try again", {
        position: "top-center",
      });
      setTimeout(() => {
        window.location.reload();
      }, 3200);
    }
  }

  return (
    <div className="md:mr-20 md:px-10 pt-40 mx-10">
      <motion.h2
        initial={{ x: 1700 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="pb-4 text-white sm:text-3xl text-2xl font-bold"
      >
        Contact me
      </motion.h2>
      <motion.form
        onSubmit={onSend}
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{ duration: 1.5, delay: 1.5 }}
      >
        <div className="mb-24">
          <div className="relative">
            <input
              type="text"
              required
              name="name"
              id="name"
              className="bg-transparent border-gray-400 border-b-2 w-full rounded-lg h-10 peer placeholder-transparent focus:outline-0 focus:border-[rgb(117,241,214)] transition-colors duration-200 mb-8 mr-8 "
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            ></input>
            <label
              htmlFor="name"
              className="absolute -top-3 left-0 peer-placeholder-shown:text-base  peer-placeholder-shown:top-2 transition-all duration-200 peer-focus:-top-3 peer-focus:text-sm cursor-text"
            >
              Name
            </label>
            <div className="relative">
              <input
                type="email"
                required
                name="email"
                id="email"
                className="bg-transparent border-gray-400 border-b-2 w-full rounded-lg h-10 peer placeholder-transparent focus:outline-0 focus:border-[rgb(117,241,214)] transition-colors duration-200 mr-8 "
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <label
                htmlFor="email"
                className="absolute -top-3 left-0 peer-placeholder-shown:text-base peer-placeholder-shown:top-2 transition-all duration-200 peer-focus:-top-3 peer-focus:text-sm cursor-text"
              >
                Email
              </label>
            </div>
          </div>
        </div>
        <div className="relative">
          <textarea
            required
            className="bg-transparent border-gray-400 border-b-2 w-full rounded-lg h-32 peer placeholder-transparent focus:outline-0 focus:border-[rgb(117,241,214)] transition-colors duration-200 mb-8 mr-8 "
            placeholder="Email"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <label
            htmlFor="email"
            className="absolute -top-4 left-0 peer-placeholder-shown:text-base peer-placeholder-shown:top-4.5 transition-all duration-200 peer-focus:-top-4.5 peer-focus:text-sm cursor-text"
          >
            Your Message
          </label>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-transparent border-gray-400 h-11 rounded-xl mb-8 mr-8 border-2 w-full hover:border-[rgb(117,241,214)] transition-all duration-200 ease-out active:bg-gray-600 active:opacity-20"
          >
            {isLoading ? (
              <Spinner color="white" className="my-1" size="md" />
            ) : (
              "Send Mail"
            )}
          </button>
        </div>
      </motion.form>
    </div>
  );
};

export default Contact;
