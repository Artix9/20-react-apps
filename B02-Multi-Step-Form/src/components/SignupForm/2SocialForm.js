import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

export default function SocialForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();

  function onSubmit(data) {
    // do whatever we need here
    console.log(data);
    history.push("/review");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <h2>How can we find you on social?</h2>

      <input
        type="text"
        placeholder="What's your Twitter?"
        {...register("twitter", { required: true })}
      />
      {errors.twitter && <p>Twitter is required.</p>}

      <input
        type="text"
        placeholder="What's your Facebook?"
        {...register("facebook", {
          required: true,
        })}
      />
      {errors.facebook && <p>Facebook is required.</p>}

      <input type="submit" value="Next" />
    </form>
  );
}
