"use client";
import { toast } from "react-toastify";
export const onSendMail = async (
  name: string,
  email: string,
  message: string
) => {
  fetch("/api/sendMail", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.status === "Email sent") {
        toast.success("Email sent successfully", {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          progress: undefined,
          theme: "colored",
        });
        setTimeout(() => {
          window.location.reload();
        }, 3200);
      } else {
        toast.error("Something went wrong! Please try again", {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          progress: undefined,
          theme: "colored",
        });
        setTimeout(() => {
          window.location.reload();
        }, 3200);
      }
    })
    .catch((error) => {
      toast.error("Somethng went wrong! Please try again!", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        progress: undefined,
        theme: "colored",
      });
      setTimeout(() => {
        window.location.reload();
      }, 3200);
    });
};
