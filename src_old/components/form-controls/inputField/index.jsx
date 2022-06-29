import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";
import { Controller } from "react-hook-form";

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label } = props;
  const { errors } = form.formState;
  const hasError = errors[name];
  // console.log(errors[name], formState.touchedFields[name]);
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field }) => (
        <TextField
          variant="outlined"
          margin="normal"
          {...field}
          fullWidth
          label={label}
          error={!!hasError}
          helperText={errors[name]?.message}
        />
      )}
    />
  );
}

export default InputField;
