import "./SignUpIn.css";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// REACT ICONS
import { MdMobileFriendly } from "react-icons/md";
import { MdMarkEmailRead } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const schema = yup.object().shape({
  user_email: yup.string().email("Invalid email").required("Email is required"),
  user_otp: yup
    .string()
    .min(4, "Your OTP is incorrect")
    .required("OTP is required"),
});

const EnterPin = () => {
  const [emailConfirm, setEmailConfirm] = useState(false);
  const [hidden, setHidden] = useState(false);
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
    console.log(data);
    setEmailConfirm(data);
    // reset();
  };

  useEffect(() => {
    if (emailConfirm) {
      axios
        .post("core/confirming-email/", emailConfirm)
        .then((res) => {
          console.log(res.data);
          setHidden(true);
          //   navigate("/sign-in");
          setEmailConfirm(false);
          reset();
        })
        .catch((err) => {
          console.log(err);
          setEmailConfirm(false);
        });
    }
  }, [emailConfirm]);

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
          Confirming Email
        </div> */}
        {!hidden ? (
          <>
            <div className="sign-up-div">
              <p style={{ fontSize: "14px" }}>
                A verification OTP has been sent to your email address. Kindly
                confirm your email to access your account!
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
                <input {...register("user_email")} placeholder="Email" />
              </div>
              {errors.user_email && (
                <p className="errorr">{errors.user_email?.message}</p>
              )}
            </div>
            <div className="sign-up-div">
              <div className="sign-up-icn_inpt">
                <MdMobileFriendly
                  style={{
                    fontSize: "20px",
                    color: "#00284b",
                    marginRight: "4px",
                  }}
                />
                <input
                  type="text"
                  {...register("user_otp")}
                  placeholder="OTP"
                />
              </div>
              {errors.user_otp && (
                <p className="errorr">{errors.user_otp?.message}</p>
              )}
            </div>
            <div className="sign-up-div">
              <button className="sign-up-btn" type="submit">
                Confirm Email
              </button>
            </div>
          </>
        ) : (
          <div className="sign-up-div">
            <p className="enterpin-account-verified">
              Account verified successfully. Please{" "}
              <span
                onClick={() => {
                  navigate("/sign-in");
                  setHidden(false);
                }}
              >
                login!
              </span>
            </p>
          </div>
        )}
        {/* <div className="sign-up-div">
          <p
            className="sign-up-already-account"
            onClick={() => navigate("/sign-up")}
          >
            Do not have an account?
          </p>
        </div> */}
      </form>
    </div>
  );
};

export default EnterPin;
