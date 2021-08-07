import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import ProfileForm from "./1ProfileForm";
import SocialForm from "./2SocialForm";
import Review from "./3Review";
import { SignupFormProvider } from "./SignupFormContext";
import StepLinks from "./StepLinks";

export default function SignupForm() {
  return (
    <SignupFormProvider>
      <div className="signup-form">
        {/* show the steps and links */}
        <StepLinks />

        {/* show the forms */}
        <Switch>
          <Route path="/" exact component={ProfileForm} />
          <Route path="/social" component={SocialForm} />
          <Route path="/review" component={Review} />
        </Switch>
      </div>
    </SignupFormProvider>
  );
}
