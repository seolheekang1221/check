import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../actions/auth";
import {
  Avatar,
  TextField,
  Checkbox,
  Button,
  Link,
  Box,
  Grid,
  Typography,
  Container,
  FormControlLabel,
} from "@mui/material";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { LockOutlined } from "@mui/icons-material";

<<<<<<< HEAD:src/components/Login.js
const required = (value) => {
  if (!value) {
    return (
      <div className="alert" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
  };
//   if () {
//     dispatch(login(email, password))
//       .then(() => {
//         props.history.push("/profile");
//         window.location.reload();
//       })
//       .catch(() => {
//         setLoading(false);
//       });
//   } else {
//     setLoading(false);
//   }
// };
  if (isLoggedIn) {
    return <Navigate to="/profile" />;
  }
  return (
    <form onSubmit={handleLogin}>
=======
export default function SignUp() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [hiddenPassword, setHiddenPassword] = useState("true");
  const [error, setError] = useState("null");
  const [errorCheck, setErrorCheck] = useState("false");

  noError = e => {
    this.setState({
      errorCheck: false
    });
  };

  passwordCheck = () => this.state.password === this.state.checkPassword;
  
  showPassword = () => {
    this.setState(prevState => ({ hiddenPassword: !prevState.hiddenPassword }));
  };

  emailValid = () => {
    if (this.state.email === ""){
      return false;
    }
    return true;
  };

  handleState = name => e => {
    this.setState({
      [name]: e.target.value
    });
  }; 
  
  submitSignUp = e => {
    e.preventDefault();
    if (!this.passwordCheck()) {
      this.setState({
        errorCheck: true,
        error: "You can sign up"
      });
    } 

  const newUser = {
    email: this.state.email,
    password: this.state.password,
    checkPassword: this.state.checkPassword
  };
  console.log("new user", newUser);
};

  return (
    <form onSubmit={() => this.submitSignUp}>
>>>>>>> 3cc3fbbc58c689df6f6db2bf58b87f3c2d3121fb:src/component/SignUp.js
      <Container component="main" maxWidth="sm">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 2, backgroundColor: "green" }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <TextField
            margin="normal"
            label="Email Address"
            required
            fullWidth
            name="email"
            autoComplete="email"
            autoFocus
            onChange={onChangeEmail}
            value={email}
            validations={[required]}
          />
          <TextField
            margin="normal"
            label="Password"
            type="password"
            required
            fullWidth
            name="password"
            autoComplete="password"
            onChange={onChangePassword}
            value={password}
            validations={[required]}
          />
          <Button
            type="submit"
            color="primary"
            fullWidth
            variant="contained"
            disabled={loading}
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          <Grid container>
            <Grid item xs>
              <Link>Forgot password?</Link>
            </Grid>
            <Grid item>
              <Link>Sign Up</Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </form>
  );
};

export default Login;
