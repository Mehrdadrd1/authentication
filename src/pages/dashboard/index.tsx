import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useCurrentUser } from "../../api/queries/currentUser";
import { useLogout } from "../../api/queries/logout";
import toast from "react-hot-toast";
import { AUTH_TOKEN_KEY } from "../../constants";

const Container = styled.div`
  min-height: 100vh;
  padding: 24px;
  background-color: #f8fafc;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const Card = styled.div`
  background: #ffffff;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 768px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 28px;
  font-weight: 600;
`;

const Button = styled.button`
  padding: 10px 16px;
  background-color: #0f172a;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #64748b;
  }
`;

const Dashboard = () => {
  const navigate = useNavigate();
  const { data: user, isLoading, error } = useCurrentUser();
  const { mutate: logout } = useLogout();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching user</p>;

  const handleLogout = () => {
    logout(undefined, {
      onSuccess: (data) => {
        localStorage.removeItem(AUTH_TOKEN_KEY);
        toast.success(data.message);
        navigate("/login");
      },
      onError: () => toast.error("Logout failed"),
    });
  };

  return (
    <Container>
      <Card>
        <Title>Welcome, {user?.username || "User"}!</Title>
        <p>This is your dashboard page.</p>
        <Button onClick={handleLogout}>Logout</Button>
      </Card>
    </Container>
  );
};

export default Dashboard;
