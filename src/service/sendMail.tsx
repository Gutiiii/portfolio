import axios from "axios";
import { toast } from "react-toastify";

export const onSendMail = async (
  name: string,
  email: string,
  message: string
) => {
  axios
    .post(
      "https://sendmail.samuelgutmans9.workers.dev/",
      { name, email, message },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
    .then((res) => {
      console.log("Response Line 20: " + res.statusText);
      if (res.status === 200) {
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
        console.log("Response Line 35:" + res);
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
      console.log("Error: " + error);
      console.log("Status: " + error.status);
      console.log("StatusText: " + error.statusText);
      console.log("Error1");
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
    });
};
