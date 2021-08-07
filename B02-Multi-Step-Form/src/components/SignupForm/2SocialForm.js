import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Animator from "./Animator";
import { useSignupForm } from "./SignupFormContext";

export default function SocialForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  const { social, setSocial } = useSignupForm();

  function onSubmit(data) {
    setSocial(data);
    history.push("/review");
  }

  return (
    <Animator>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2>How can we find you on social?</h2>

        <input
          type="text"
          placeholder="What's your Twitter?"
          defaultValue={social.twitter}
          {...register("twitter", { required: true })}
        />
        {errors.twitter && <p>Twitter is required.</p>}

        <input
          type="text"
          placeholder="What's your Facebook?"
          defaultValue={social.facebook}
          {...register("facebook", {
            required: true,
          })}
        />
        {errors.facebook && <p>Facebook is required.</p>}

        <input type="submit" value="Next" />
      </form>
    </Animator>
  );
}
