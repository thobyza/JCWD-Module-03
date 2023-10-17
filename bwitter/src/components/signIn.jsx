import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import twitterLogo from "../assets/Twitter-Logo-2012.png";
import { useDispatch } from "react-redux";
import { setData } from "../redux/userSlice";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string()
    .min(3, "Password must be 3 characters at minimum")
    .required("Password is required"),
});

export const SignInPopup = () => {
  //  untuk ambil data simpen di redux ???
  const dispatch = useDispatch();

  // untuk pindah halaman ke home jika telah login
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      const response = await axios.get(
        `http://localhost:2000/users/login?email=${data.email}&password=${data.password}`
      );
      dispatch(setData(response.data[0]));
      // console.log(response.data[0]);

      // keeplogin method: (ketika web di refresh tetep login)
      localStorage.setItem("id", response.data[0]?.id);
      navigate("/home");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id="defaultModal" className="flex justify-center mt-20">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values, action) => {
          handleSubmit(values);
          action.resetForm();
          console.log(values);
        }}
      >
        {(props) => {
          // console.log(props);
          return (
            <Form className="p-8 border-solid border-2 rounded-xl shadow-md w-1/4">
              <img
                src={twitterLogo}
                alt=""
                className="flex justify-start h-6 mb-4"
              />
              <div className="text-2xl font-bold flex my-6">Sign in</div>
              {/* Email */}
              <div className="flex flex-col mb-2.5">
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="border-solid border-2 border-zinc-200 rounded-lg py-2 pl-3 focus:outline-sky-500"
                />
                <ErrorMessage
                  component="div"
                  name="email"
                  className="text-red-400 text-sm mt-1"
                />
              </div>
              {/* Password */}
              <div className="flex flex-col mb-2.5">
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="border-solid border-2 border-zinc-200 rounded-lg py-2 pl-3 focus:outline-sky-500"
                />
                <ErrorMessage
                  component="div"
                  name="password"
                  className="text-red-400 text-sm mt-1"
                />
              </div>
              <div className="flex justify-center mt-7">
                <button
                  to="/home"
                  type="submit"
                  className="flex justify-center items-center w-full text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:bg-sky-600 font-medium rounded-full text-sm px-5 py-2 mt-2 mb-2"
                >
                  Sign in
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
