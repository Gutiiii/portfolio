"use client";
import { onSendMail } from "@/service/sendMail";
import { motion } from "framer-motion";
import { FC, FormEvent, useState } from "react";
import "react-toastify/dist/ReactToastify.css";

const Contact: FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const onSend = (event: FormEvent) => {
    event.preventDefault();
    onSendMail(name, email, message);
  };
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
      <form onSubmit={onSend}>
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
              className="absolute -top-3 left-0 peer-placeholder-shown:text-base  peer-placeholder-shown:top-2 transition-all duration-200 peer-focus:-top-3 peer-focus:text-sm"
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
                className="absolute -top-3 left-0 peer-placeholder-shown:text-base peer-placeholder-shown:top-2 transition-all duration-200 peer-focus:-top-3 peer-focus:text-sm"
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
            className="absolute -top-4 left-0 peer-placeholder-shown:text-base peer-placeholder-shown:top-4.5 transition-all duration-200 peer-focus:-top-4.5 peer-focus:text-sm"
          >
            Your Message
          </label>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-transparent border-gray-400 h-10 rounded-xl mb-8 mr-8 border-2 w-full hover:border-[rgb(117,241,214)] transition-all duration-200 ease-out active:bg-gray-600 active:opacity-20"
          >
            Send!
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
