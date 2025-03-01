import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Paper,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import logo from "../../assets/illustration.jpg"

const LoginPage = ({ isLoggedIn, setIsLoggedIn }) => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({ userId: "", password: "", agree: "" });

  const tempEmail = "syed@gmail.com";
  const tempPassword = "123456";

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(userId))
      newErrors.userId = "Enter a valid email address";
    else if (userId !== tempEmail)
      newErrors.userId = "User not found. Please enter a valid email.";

    if (!password) newErrors.password = "Password is required";
    else if (password !== tempPassword)
      newErrors.password = "Incorrect password";

    if (!agree) newErrors.agree = "You must agree to the Terms & Conditions.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsLoggedIn(true);
      console.log("Form submitted", { userId, password });
    }
  };

  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      height="100vh"
      width="100vw"
    >
      {/* Left Section (Logo + Text + Illustration) */}
      <Box
        flex={1.5}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems={{ xs: "center", md: "flex-start" }}
        p={4}
        sx={{
          background: "linear-gradient(135deg,rgb(70, 36, 243), #4F46E5)",
          color: "white",
          position: "relative",
          textAlign: { xs: "center", md: "left" },
          minHeight: "50vh",
        }}
      >
        <Box
          position="relavite"
          top={20}
          left={30}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <img src={logo} alt="ABAWAT Logo" width="100" />
        </Box>

        <Typography variant="h6" fontWeight="bold" mb={2}>
          Professional Electronics Services With ABAWAT
        </Typography>
        <Typography variant="paragraph"  lineHeight={1.6}>
          ABAWAT is your ultimate solution for streamlined customer service.
          From hassle-free product registration to efficient repairs and a
          wealth of valuable content, we've got you covered.
        </Typography>
      </Box>

      {/* Right Section (Login Box) */}
      <Box
        flex={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundColor: "white",
          width: { xs: "100%", md: "30%" },
          p: { xs: 2, md: 4 },
        }}
      >
        <Container maxWidth="xs">
          <Paper elevation={3} sx={{ p: { xs: 3, md: 4 }, borderRadius: 2 }}>
            <Typography
              variant="h5"
              fontWeight="bold"
              textAlign="center"
              mb={2}
            >
              Welcome to Abawat Portal
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="User ID"
                margin="normal"
                variant="outlined"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                error={!!errors.userId}
                helperText={errors.userId}
              />
              <TextField
                fullWidth
                label="Password"
                type={showPassword ? "text" : "password"}
                margin="normal"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!errors.password}
                helperText={errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Box display="flex" alignItems="flex-start">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={agree}
                      onChange={(e) => setAgree(e.target.checked)}
                      sx={{ mt: -0.5 }} 
                    />
                  }
                  label={
                    <Typography variant="body2">
                      I agree with{" "}
                      <a
                        href="#"
                        style={{
                          color: "#4F46E5",
                          textDecoration: "underline",
                        }}
                      >
                        Terms & Conditions
                      </a>
                    </Typography>
                  }
                />
              </Box>

              {errors.agree && (
                <Typography color="error" variant="body2">
                  {errors.agree}
                </Typography>
              )}
              <Button
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
                type="submit"
              >
                Login
              </Button>
              <Typography textAlign="end" mt={2} variant="body2">
                <a href="#" style={{ color: "#4F46E5" }}>
                  Forgot Password?
                </a>
              </Typography>
            </Box>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default LoginPage;
