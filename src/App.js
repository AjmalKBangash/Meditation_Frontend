import axios from "./Components/Axiosinstance";

import Home from "./Components/Home/Home";
import SignUp from "./Components/Home/SignUp";
import SignIn from "./Components/Home/SignIn";
import ForgotPassword from "./Components/Home/ForgotPassword";
import PasswordResetForm from "./Components/Home/PasswordResetForm";
import EnterPin from "./Components/Home/EnterPin";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />}></Route>
      <Route path="sign-up" element={<SignUp />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route
        path="reset-password/:uidb64/:token"
        element={<PasswordResetForm />}
      />
      <Route path="confirming-email" element={<EnterPin />} />
      <Route path="sign-in" element={<SignIn />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
