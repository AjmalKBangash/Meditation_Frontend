import "./SignUpIn.css";
import Loading from "./Loading";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// REACT ICONS
import { RiLockPasswordFill } from "react-icons/ri";
import { IoPersonCircleSharp } from "react-icons/io5";
import { MdMarkEmailRead } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
});

const ForgotPassword = () => {
  const [spinner, setSpinner] = useState(false);
  const [forgotPsswd, setForgotPsswd] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
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
    setForgotPsswd(data);
  };
  useEffect(() => {
    if (forgotPsswd) {
      axios
        .post("core/forgot-password/", forgotPsswd)
        .then((res) => {
          setForgotPsswd(false);
          setErrorMsg(false);
          setSpinner(false);
          if (res.data.success) {
            setSuccessMsg(res.data.success);
          }
        })
        .catch((err) => {
          setSpinner(false);
          console.log(err);
          setForgotPsswd(false);
          if (err.response.data.error) {
            setErrorMsg(err.response.data.error);
          }
        });
    }
  }, [forgotPsswd]);
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
        {!successMsg ? (
          <>
            <div className="sign-up-div">
              <p style={{ fontSize: "16px" }}>
                Resetting your password is easy! Simply provide your email
                address to initiate the password recovery process and regain
                access to your account!
              </p>
            </div>
            <div className="sign-up-div">
              <div className="sign-up-icn_inpt">
                <MdMarkEmailRead
                  style={{
                    fontSize: "20px",
                    color: "#00284b",
                    marginRight: "4px",
                  }}
                />
                <input {...register("email")} placeholder="Email" />
              </div>{" "}
              {errors.email && (
                <p className="errorr">{errors.email?.message}</p>
              )}
              {errorMsg && <p className="errorr">{errorMsg}</p>}
            </div>
            <div className="sign-up-div">
              <button className="sign-up-btn" type="submit">
                {spinner ? <Loading data={"one"} /> : "Forgot Password!"}
              </button>
            </div>
          </>
        ) : (
          <div className="sign-up-div">
            <p style={{ fontSize: "16px", color: "green" }}>{successMsg}!</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default ForgotPassword;
