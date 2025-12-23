import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useRegister } from "../../../api/queries/register";
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

const Register = () => {
  const navigate = useNavigate();
  const { mutate, isPending } = useRegister();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [avatar, setAvatar] = useState<File | null>(null);

  const [errors, setErrors] = useState<{
    firstName?: string;
    lastName?: string;
    username?: string;
    password?: string;
    confirmPassword?: string;
    avatar?: string;
  }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: typeof errors = {};

    if (!firstName.trim()) newErrors.firstName = "First name is required";
    if (!lastName.trim()) newErrors.lastName = "Last name is required";
    if (!username.trim()) newErrors.username = "Username is required";
    if (!password.trim()) newErrors.password = "Password is required";
    if (!confirmPassword.trim())
      newErrors.confirmPassword = "Confirm password is required";
    if (password && confirmPassword && password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!avatar) newErrors.avatar = "Avatar is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    mutate(
      {
        first_name: firstName,
        last_name: lastName,
        username,
        password,
        confirm_password: confirmPassword,
        avatar: avatar,
      },
      {
        onSuccess: (data) => {
          localStorage.setItem(AUTH_TOKEN_KEY, data.token);
          toast.success("Registration successful!");

          setFirstName("");
          setLastName("");
          setUserName("");
          setPassword("");
          setConfirmPassword("");
          setAvatar(null);
          setErrors({});

          navigate("/dashboard");
        },

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onError: (error: any) => {
          const data = error?.response?.data;

          // Specific case: username already exists
          if (
            data?.non_field_errors?.length &&
            data.non_field_errors[0] === "Username already exists."
          ) {
            setErrors({
              username: data.non_field_errors[0],
            });
            return;
          }

          // fallback
          toast.error("Registration failed");
        },
      }
    );
  };

  useEffect(() => {
    return () => {
      setErrors({});
    };
  }, []);

  return (
    <Container>
      <LogoWrapper>
        <Logo src={arianaLogo} alt="Ariana Logo" />
      </LogoWrapper>

      <TitleWrapper>
        <Title>Register</Title>
        <Subtitle>Fill in the details below to create your account.</Subtitle>
      </TitleWrapper>

      <Form onSubmit={handleSubmit} encType="multipart/form-data" noValidate>
        <Field>
          <Label>Avatar</Label>
          <Input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setAvatar(e.target.files ? e.target.files[0] : null)
            }
          />
          {errors.avatar && <ErrorText>{errors.avatar}</ErrorText>}
        </Field>
        <Field>
          <Label hasError={!!errors.firstName}>First Name</Label>
          <Input
            hasError={!!errors.firstName}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
          />
          {errors.firstName && <ErrorText>{errors.firstName}</ErrorText>}
        </Field>

        <Field>
          <Label hasError={!!errors.lastName}>Last Name</Label>
          <Input
            hasError={!!errors.lastName}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
          />
          {errors.lastName && <ErrorText>{errors.lastName}</ErrorText>}
        </Field>

        <Field>
          <Label hasError={!!errors.username}>Username</Label>
          <Input
            hasError={!!errors.username}
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Username"
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
            placeholder="Password"
          />
          {errors.password && <ErrorText>{errors.password}</ErrorText>}
        </Field>

        <Field>
          <Label hasError={!!errors.password}>Confirm Password</Label>
          <Input
            hasError={!!errors.password}
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
          />
          {errors.confirmPassword && (
            <ErrorText>{errors.confirmPassword}</ErrorText>
          )}
        </Field>

        <Button type="submit" disabled={isPending}>
          {isPending ? "Registering..." : "Register"}
        </Button>
      </Form>

      <FooterText>
        Already have an account?
        <SignupLink to="/login">Sign in</SignupLink>
      </FooterText>
    </Container>
  );
};

export default Register;
