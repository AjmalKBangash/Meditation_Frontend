import "./SignUpIn.css";
import Loading from "./Loading";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// REACT ICONS
import { RiLockPasswordFill, RiLockPasswordLine } from "react-icons/ri";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const schema = yup.object().shape({
  password: yup
    .string()
    .min(8, "Your password is incorrect")
    .required("Password is required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Password should contain at least one alphabet, one digit and one special character"
    ),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const PasswordResetForm = () => {
  const [spinner, setSpinner] = useState(false);
  const [psswdReset, setPsswdReset] = useState(false);
  const [sucResPsswd, setSucResPsswd] = useState(false);
  let { token, uidb64 } = useParams();
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
    setPsswdReset(data);
  };
  useEffect(() => {
    if (psswdReset) {
      axios
        .post("core/reset-password/", {
          password: psswdReset.password,
          uidb64: uidb64,
          token: token,
        })
        .then((res) => {
          setSpinner(false);
          setPsswdReset(false);
          if (res.data.success) {
            setSucResPsswd(res.data.success);
          }
        })
        .catch((err) => {
          console.log(err);
          setSpinner(false);
          setPsswdReset(false);
        });
    }
  }, [psswdReset]);
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
          <img height={"40px"} src="/Media/Med-logo.png" alt="logo-img"></img>
        </div>
        {!sucResPsswd ? (
          <>
            <div className="sign-up-div">
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
                {spinner ? <Loading data={"one"} /> : "Reset Password"}
              </button>
            </div>
          </>
        ) : (
          <div className="sign-up-div">
            <p className="psswd-reset-succ">
              Password reset successfully. Please{" "}
              <span onClick={() => navigate("/sign-in")}>login!</span>
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default PasswordResetForm;
