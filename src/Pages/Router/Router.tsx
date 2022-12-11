import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PagesWrapper from "../PagesWrapper";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import ContentPage from "../ContentPage";
import RegistrationConfirmation from "../RegistrationConfirmation";
import Success from "../Success";

export enum PathNames {
  Home = "/",
  AddPost = "/posts/add",
  SignIn = "/sign-in",
  SignUp = "/sign-up",
  RegistrationConfirmation = "/sign-up/confirm",
  RegistrationSuccess = "/sign-up/success",
  Search = "/search",
  ContentPage = "/content/:id",
  ActivateUser = "/activate/:uid/:token",
}

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path={PathNames.Home}></Route> */}
        <Route path={PathNames.Home} element={<PagesWrapper></PagesWrapper>}>
          <Route path={PathNames.SignIn} element={<SignIn />}></Route>
          <Route path={PathNames.SignUp} element={<SignUp />}></Route>
          <Route path={PathNames.AddPost} element={null}></Route>
          <Route
            path={PathNames.RegistrationConfirmation}
            element={<RegistrationConfirmation />}
          ></Route>
          <Route path={PathNames.ActivateUser} element={<Success />}></Route>
          <Route path={PathNames.ContentPage} element={<ContentPage />}></Route>
        </Route>

        <Route path="*" element={<Navigate to={PathNames.SignIn} />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
