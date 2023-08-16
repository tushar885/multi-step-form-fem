import * as yup from "yup";
import "yup-phone";

export default yup.object({
  name: yup.string("*Not a valid String").required("*Required").trim().min("1"),
  email: yup
    .string("*Not a valid String")
    .email("*Must be an email")
    .required("*Required")
    .trim(),
  phone_number: yup
    .string("*Not a valid number")
    .phone("IN", true, "*Not a valid number")
    .required("*Required"),
});
