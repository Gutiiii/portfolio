// import axios from "axios";

// export const onSendMail = async (
//   name: string,
//   email: string,
//   message: string
// ) => {
//   axios
//     .post(
//       "https://sendmail.samuelgutmans9.workers.dev/",
//       { name, email, message },
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     )
//     .then((res) => {
//       if (res.status === 200) {
//         toast.success("Email sent successfully", {
//           position: "top-center",
//           autoClose: 2500,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: false,
//           progress: undefined,
//           theme: "colored",
//         });
//         setTimeout(() => {
//           window.location.reload();
//         }, 3200);
//       } else {
//         toast.error("Something went wrong! Please try again", {
//           position: "top-center",
//           autoClose: 2500,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: false,
//           progress: undefined,
//           theme: "colored",
//         });
//         setTimeout(() => {
//           window.location.reload();
//         }, 3200);
//       }
//     })
//     .catch((error) => {
//       toast.error("Something went wrong! Please try again", {
//         position: "top-center",
//         autoClose: 2500,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: false,
//         progress: undefined,
//         theme: "colored",
//       });
//       setTimeout(() => {
//         window.location.reload();
//       }, 3200);
//     });
// };
