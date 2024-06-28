// import React from 'react'

import { useFormik } from "formik";
import * as yup from "yup";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { VisuallyHiddenInput } from "../components/styles/StyledComponents";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);

  //*----------------------------------------> Sign   In <---------------------------------------*//
  // Define validation schema
  const validationSchemaSignIn = yup.object({
    userName: yup
    .string('Enter your username')
    .trim()
    .required('Username is required')
    .min(3, 'Username should be at least 3 characters')
    .max(30, 'Username should not exceed 30 characters')
    .matches(/^[a-zA-Z0-9_.-]*$/, 'Username can only contain alphanumeric characters, underscores, dots, and hyphens'),
    password: yup
    .string('Enter your password')
    .trim()
    .required('Password is required')
    .min(8, 'Password should be at least 8 characters')
    .max(100, 'Password should not exceed 100 characters')
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    )
  });


  const formikSignIn = useFormik({
    initialValues: {
      userName: '',
      password: ''
    },
    validationSchema: validationSchemaSignIn,
    onSubmit: (values) => {
      // handle form submission
      console.log(values);
    },
  });

  //*----------------------------------------> Sign Up <---------------------------------------*//
  // Define validation schema
  const validationSchemaSignUp = yup.object({
    name: yup
    .string('Enter your name')
    .trim()
    .required('Name is required')
    .min(2, 'Name should be at least 2 characters')
    .max(50, 'Name should not exceed 50 characters'),

    bio: yup
    .string('Enter your bio')
    .trim()
    .required('Bio is required')
    .max(200, 'Bio should not exceed 200 characters'),

   userName: yup
    .string('Enter your username')
    .trim()
    .required('Username is required')
    .min(3, 'Username should be at least 3 characters')
    .max(30, 'Username should not exceed 30 characters')
    .matches(/^[a-zA-Z0-9_.-]*$/, 'Username can only contain alphanumeric characters, underscores, dots, and hyphens'),
    password: yup
    .string('Enter your password')
    .trim()
    .required('Password is required')
    .min(8, 'Password should be at least 8 characters')
    .max(100, 'Password should not exceed 100 characters')
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    )
  });


  const formikSignUp = useFormik({
    initialValues: {
      name: '',
      bio: '',
      userName: '',
      password: ''
    },
    validationSchema: validationSchemaSignUp,
    onSubmit: (values) => {
      // handle form submission
      console.log(values);
    },
  });

  const toggleLogin = () => setIsLogin((prev) => !prev);
  return (
    <div>
      <Container
        component={'main'}
        maxWidth="xs"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {isLogin ? (
            <>
              <Typography variant="h5">Login</Typography>
              <form action="" onSubmit={formikSignIn.handleSubmit}>

                <TextField
                  fullWidth
                  label="Username"
                  margin="normal"
                  variant="outlined"
                  id="userName"
                  name="userName"
                  value={formikSignIn.values.userName}
                  onChange={formikSignIn.handleChange}
                  onBlur={formikSignIn.handleBlur}
                  error={formikSignIn.touched.userName && Boolean(formikSignIn.errors.userName)}
                  helperText={formikSignIn.touched.userName && formikSignIn.errors.userName}
                />

                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  id="password"
                  name="password"
                  value={formikSignIn.values.password}
                  onChange={formikSignIn.handleChange}
                  onBlur={formikSignIn.handleBlur}
                  error={formikSignIn.touched.password && Boolean(formikSignIn.errors.password)}
                  helperText={formikSignIn.touched.password && formikSignIn.errors.password}
                />

                <Button
                  sx={{
                    marginTop: "1rem",
                  }}
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                // disabled={isLoading}
                >
                  Login


                </Button>

                <Typography textAlign={"center"} m={"1rem"}>
                  OR
                </Typography>

                <Button
                  // disabled={isLoading}
                  fullWidth
                  variant="text"
                  onClick={toggleLogin}
                >
                  Sign Up Instead
                </Button>
              </form>
            </>
          ) : (
            <>
              <Typography variant="h5">Sign Up</Typography>
              <form
                style={{
                  width: "100%",
                  marginTop: "1rem",
                }}

                onSubmit={formikSignUp.handleSubmit}
              >
                <Stack position={"relative"} width={"10rem"} margin={"auto"}>

                  <Avatar
                    sx={{
                      width: "10rem",
                      height: "10rem",
                      objectFit: "contain",
                    }}
                  // src={avatar.preview}
                  />

                  <IconButton
                    sx={{
                      position: "absolute",
                      bottom: "0",
                      right: "0",
                      color: "white",
                      bgcolor: "rgba(0,0,0,0.5)",
                      ":hover": {
                        bgcolor: "rgba(0,0,0,0.7)",
                      },
                    }}
                    component="label"
                  >
                    <CameraAltIcon />
                    <VisuallyHiddenInput
                      type="file"
                    // onChange={avatar.changeHandler}
                    />
                  </IconButton>
                </Stack>
                <TextField
                  fullWidth
                  label="Name"
                  margin="normal"
                  variant="outlined"
                  id="name"
                  name="name"
                  value={formikSignUp.values.name}
                  onChange={formikSignUp.handleChange}
                  onBlur={formikSignUp.handleBlur}
                  error={formikSignUp.touched.name && Boolean(formikSignUp.errors.name)}
                  helperText={formikSignUp.touched.name && formikSignUp.errors.name}
                />
                <TextField
                  fullWidth
                  label="Bio"
                  margin="normal"
                  variant="outlined"
                  id="bio"
                  name="bio"
                  value={formikSignUp.values.bio}
                  onChange={formikSignUp.handleChange}
                  onBlur={formikSignUp.handleBlur}
                  error={formikSignUp.touched.bio && Boolean(formikSignUp.errors.bio)}
                  helperText={formikSignUp.touched.bio && formikSignUp.errors.bio}
                />

                <TextField
                  fullWidth
                  label="Username"
                  margin="normal"
                  variant="outlined"
                  id="userName"
                  name="userName"
                  value={formikSignUp.values.userName}
                  onChange={formikSignUp.handleChange}
                  onBlur={formikSignUp.handleBlur}
                  error={formikSignUp.touched.userName && Boolean(formikSignUp.errors.userName)}
                  helperText={formikSignUp.touched.userName && formikSignUp.errors.userName}
                />

                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  margin="normal"
                  variant="outlined"
                  id="password"
                  name="password"
                  value={formikSignUp.values.password}
                  onChange={formikSignUp.handleChange}
                  onBlur={formikSignUp.handleBlur}
                  error={formikSignUp.touched.password && Boolean(formikSignUp.errors.password)}
                  helperText={formikSignUp.touched.password && formikSignUp.errors.password}
                />


                <Button
                  sx={{
                    marginTop: "1rem",
                  }}
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                // disabled={isLoading}
                >
                  Sign Up
                </Button>

                <Typography textAlign={"center"} m={"1rem"}>
                  OR
                </Typography>

                <Button
                  // disabled={isLoading}
                  fullWidth
                  variant="text"
                  onClick={toggleLogin}
                >
                  Login Instead
                </Button>


              </form>

            </>
          )}
        </Paper>

      </Container>
    </div>
  )
}

export default Login