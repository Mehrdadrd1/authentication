import { Outlet } from "react-router-dom";
import { Card, Wrapper } from "./styles";

const AuthLayout = () => {
  return (
    <Wrapper>
      <Card>
        <Outlet />
      </Card>
    </Wrapper>
  );
};

export default AuthLayout;
