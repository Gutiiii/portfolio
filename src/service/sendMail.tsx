import axios from "axios";
import { toast } from "react-toastify";

export const onSendMail = async (
  name: string,
  email: string,
  message: string
) => {
  axios
    .post(
      "/api/sendMail",
      { name, email, message },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
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
        console.log("Response:" + res);
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
