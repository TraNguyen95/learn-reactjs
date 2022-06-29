import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import InputField from "components/form-controls/inputField";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {
  const Schema = yup.object().shape({
    title: yup
      .string()
      .required("Please enter title")
      .min(5, "title is too short"),
  });

  const form = useForm({
    defaultValues: {
      title: "",
    },
    resolver: yupResolver(Schema),
  });

  const handleSubmit = (values) => {
    // console.log("Todo form: ", values);
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }
    form.reset();
  };
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="title" label="Todo" form={form} />
    </form>
  );
}

export default TodoForm;
