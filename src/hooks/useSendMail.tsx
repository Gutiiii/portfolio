import axios from "axios";

export const useSendMail = async (values: {
  name: string;
  email: string;
  message: string;
}) => {
  return await axios.post(
    "https://sendmail.samuelgutmans9.workers.dev/",
    values,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
