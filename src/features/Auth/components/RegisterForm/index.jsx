import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import InputField from "components/form-controls/inputField";
import {
  Avatar,
  Typography,
  makeStyles,
  Button,
  LinearProgress,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import PasswordField from "components/form-controls/PasswordField";

const useStyle = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    position: "relative",
  },

  avatar: {
    margin: "0 auto",
    backgroundColor: theme.palette.secondary.main,
  },

  title: {
    textAlign: "center",
    margin: theme.spacing(2, 0, 3, 0),
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  progress: {
    position: "absolute",
    top: theme.spacing(1),
    left: 0,
    right: 0,
  },
}));
RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const classes = useStyle();
  const Schema = yup.object().shape({
    fullName: yup
      .string()
      .required("Please enter your full name")
      .test(
        "Should has at least two word",
        "Please enter two word",
        (value) => {
          return value.split(" ").length >= 2;
        }
      ),
    email: yup
      .string()
      .required("Please enter your email")
      .email("Please enter valid email adress"),
    password: yup
      .string()
      .required("Please enter your password")
      .min(6, "Please enter at least 6 characters"),
    retypePassword: yup
      .string()
      .required("Please enter retype your password")
      .min(6, "Please enter at least 6 characters")
      .oneOf([yup.ref("password")], "Password doe not match"),
  });

  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      retypePassword: "",
    },
    resolver: yupResolver(Schema),
  });

  const handleSubmit = async (values) => {
    // console.log("Todo form: ", values);
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
    form.reset();
  };
  const { isSubmitting } = form.formState;
  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress className={classes.progress} />}

      <Avatar className={classes.avatar}>
        <LockOutlinedIcon></LockOutlinedIcon>
      </Avatar>
      <Typography component="h3" variant="h5" className={classes.title}>
        Create an account
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullName" label="Full Name" form={form} />
        <InputField name="email" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <PasswordField
          name="retypePassword"
          label="Retype Password"
          form={form}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submit}
          fullWidth
          disabled={isSubmitting}
          size="large"
        >
          Create an account
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
