import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useLogin } from "../../../api/queries/login";
import {
  Container,
  LogoWrapper,
  Logo,
  Form,
  Input,
  Button,
  TitleWrapper,
  Title,
  Subtitle,
  Field,
  Label,
  FooterText,
  SignupLink,
  ErrorText,
} from "../../../shared/styles/index";

import arianaLogo from "../../../assets/arianaLogo.svg";
import toast from "react-hot-toast";
import { AUTH_TOKEN_KEY } from "../../../constants";

const Login = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = useLogin();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{
    username?: string;
    password?: string;
  }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: typeof errors = {};

    if (!username.trim()) newErrors.username = "Username is required";
    if (!password.trim()) newErrors.password = "Password is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    mutate(
      { username, password },
      {
        onSuccess: (data) => {
          localStorage.setItem(AUTH_TOKEN_KEY, data.token);

          setUserName("");
          setPassword("");
          setErrors({});

          navigate("/dashboard");
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onError: (error: any) => {
          toast.error(
            error?.response?.data?.non_field_errors?.[0] || "Login failed"
          );
        },
      }
    );
  };

  return (
    <Container>
      <LogoWrapper>
        <Logo src={arianaLogo} alt="Ariana Logo" />
      </LogoWrapper>

      <TitleWrapper>
        <Title>Login</Title>
        <Subtitle>
          Enter your username and password to login to your account.
        </Subtitle>
      </TitleWrapper>

      <Form onSubmit={handleSubmit}>
        <Field>
          <Label hasError={!!errors.username}>Username</Label>
          <Input
            hasError={!!errors.username}
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Please enter your username"
          />
          {errors.username && <ErrorText>{errors.username}</ErrorText>}
        </Field>

        <Field>
          <Label hasError={!!errors.password}>Password</Label>
          <Input
            hasError={!!errors.password}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Please enter your password"
          />
          {errors.password && <ErrorText>{errors.password}</ErrorText>}
        </Field>

        <Button type="submit" disabled={isPending}>
          {isPending ? "Logging in..." : "Login"}
        </Button>
      </Form>

      <FooterText>
        Don’t have an account?
        <SignupLink to="/register">Sign up</SignupLink>
      </FooterText>
    </Container>
  );
};

export default Login;
