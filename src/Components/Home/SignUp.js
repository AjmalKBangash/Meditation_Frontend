import "./SignUpIn.css";
import Loading from "./Loading";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

// REACT ICONS
import { RiLockPasswordFill, RiLockPasswordLine } from "react-icons/ri";
import { IoPersonCircleSharp } from "react-icons/io5";
import { MdMarkEmailRead } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
const schema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .min(4, "username should not be less than 4 characters")
    .max(20, "username should not be greater than 20 characters")
    .matches(/^[\S]+(?:[\s][\S]+)*$/, "Invalid username format"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required")
    .matches(
      passwordRegex,
      "Password should contain at least one alphabet, one digit and one special character"
    ),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const SignUp = () => {
  const [spinner, setSpinner] = useState(false);
  const [signUpData, setSignUpData] = useState(false);
  const [userNameErr, setUserNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [hideSignUp, setHideSignUp] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // Handle form submission logic here
    setSpinner(true);
    setSignUpData(data);
  };

  useEffect(() => {
    if (signUpData) {
      axios
        .post("core/custom-user/", signUpData, {
          headers: {
            "Content-Type": "multipart/form-data", //THIS MULTIPART/FORM-DATA IS FOR SENDING FILES, IMAES ETC
          },
        })
        .then((res) => {
          setSpinner(false);
          reset();
          navigate("/confirming-email");
          setHideSignUp(true);
          setSignUpData(false);
          setUserNameErr(false);
          setEmailErr(false);
        })
        .catch((err) => {
          console.log(err);
          setSpinner(false);
          if (err.response.data.username) {
            setUserNameErr(err.response.data.username);
          } else {
            setUserNameErr(false);
          }
          if (err.response.data.email) {
            setEmailErr(err.response.data.email);
          } else {
            setEmailErr(false);
          }
          setSignUpData(false);
        });
    }
  }, [signUpData]);
  return (
    <div className="sign-up-form-top">
      <form onSubmit={handleSubmit(onSubmit)} className="sign-up-form">
        <div
          className="sign-up-div"
          style={{
            margin: "3% auto",
            width: "fit-content",
          }}
        >
          <img height={"40px"} src="Media/Med-logo.png" alt="logo-img"></img>
        </div>
        {/* <div
          className="sign-up-div"
          style={{
            margin: "2% 6%",
            width: "fit-content",
            fontFamily: '"Anton", sans-serif',
            fontSize: "22px",
            color: "#00284b",
          }}
        >
          Sign Up
        </div> */}
        {/* {!hideSignUp ? (
          <> */}
        <div className="sign-up-div">
          {/* <label>Username</label> */}
          <div className="sign-up-icn_inpt">
            <IoPersonCircleSharp
              style={{
                fontSize: "20px",
                color: "#00284b",
                marginRight: "4px",
              }}
            />
            <input {...register("username")} placeholder="User Name" />
          </div>
          {errors.username && (
            <p className="errorr">{errors.username?.message}</p>
          )}
          {userNameErr && <p className="errorr">{userNameErr}</p>}
        </div>
        <div className="sign-up-div">
          {/* <label>Email</label> */}
          <div className="sign-up-icn_inpt">
            <MdMarkEmailRead
              style={{
                fontSize: "20px",
                color: "#00284b",
                marginRight: "4px",
              }}
            />
            <input {...register("email")} placeholder="Email" />
          </div>
          {errors.email && <p className="errorr">{errors.email?.message}</p>}
          {emailErr && <p className="errorr">{emailErr}</p>}
        </div>
        <div className="sign-up-div">
          {/* <label>Password</label> */}
          <div className="sign-up-icn_inpt">
            <RiLockPasswordFill
              style={{
                fontSize: "20px",
                color: "#00284b",
                marginRight: "4px",
              }}
            />
            <input
              type="password"
              {...register("password")}
              placeholder="Password"
            />
          </div>
          {errors.password && (
            <p className="errorr">{errors.password?.message}</p>
          )}
        </div>
        <div className="sign-up-div">
          {/* <label>Confirm Password</label> */}
          <div className="sign-up-icn_inpt">
            <RiLockPasswordLine
              style={{
                fontSize: "20px",
                color: "#00284b",
                marginRight: "4px",
              }}
            />
            <input
              type="password"
              {...register("confirm_password")}
              placeholder="Confirm Password"
            />
          </div>
          {errors.confirm_password && (
            <p className="errorr">{errors.confirm_password?.message}</p>
          )}
        </div>
        <div className="sign-up-div">
          <button className="sign-up-btn" type="submit">
            {spinner ? <Loading data={"one"} /> : "Sign Up"}
          </button>
        </div>
        {/* </>
        ) : (
          <>
            {" "}
            <div className="sign-up-div">
              <p
              // className="sign-up-already-account"
              // onClick={() => navigate("/sign-in")}
              >
                A verification PIN has been sent to your email address. Kindly
                confirm it to access your account!
              </p>
            </div>
          </>
        )} */}
        <div className="sign-up-div">
          <p
            className="sign-up-already-account"
            onClick={() => navigate("/sign-in")}
          >
            Already have an account?
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
