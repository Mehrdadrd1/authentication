import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 100%;
  height: auto;
  max-height: 112px;
  object-fit: contain;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Input = styled.input<{ hasError?: boolean }>`
  padding: 12px 14px;
  font-size: 14px;
  border-radius: 6px;
  border: 1px solid ${({ hasError }) => (hasError ? "#DC2626" : "#d0d5dd")};
  outline: none;
`;

export const Button = styled.button`
  min-height: 40px;
  padding-inline: 4px;
  padding-bottpm: 2px;
  padding-inline: 2px;
  border-radius: 6px;
  border: none;
  gap: 10px;
  font-size: 14px;
  font-weight: 600;
  background-color: #0f172a;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #64748b;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  color: #020617;
`;

export const Subtitle = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  color: #64748b;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label<{ hasError?: boolean }>`
  font-size: 14px;
  font-weight: 500;
  color: ${({ hasError }) => (hasError ? "#DC2626" : "#020617")};
`;

export const FooterText = styled.p`
  margin: 0;
  text-align: center;
  font-size: 14px;
  color: #64748b;
`;

export const SignupLink = styled(Link)`
  margin-left: 4px;
  font-weight: 600;
  color: #020617;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const ErrorText = styled.span`
  font-size: 12px;
  color: #dc2626;
  margin-top: 4px;
`;
