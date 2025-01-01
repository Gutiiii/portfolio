export const useSendMail = async (values: {
  name: string;
  email: string;
  message: string;
}) => {
  return await fetch("https://sendmail.samuelgutmans9.workers.dev/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });
};
