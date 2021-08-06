import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";

export default function ProfileForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();

  function onSubmit(data) {
    // do whatever we need here
    console.log(data);
    history.push("/social");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <h2>Tell us about yourself</h2>

      <input
        type="text"
        placeholder="What's your name?"
        {...register("name", { required: true })}
      />
      {errors.name && <p>Name is required.</p>}

      <input
        type="text"
        placeholder="What's your email?"
        {...register("email", {
          required: true,
          pattern:
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        })}
      />
      {errors.email && <p>A valid email is required.</p>}

      <input type="submit" value="Next" />
    </form>
  );
}
