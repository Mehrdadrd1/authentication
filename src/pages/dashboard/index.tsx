import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "../../api/queries/currentUser";
import { useLogout } from "../../api/queries/logout";
import {
  DashboardAvatar,
  DashboardContainer,
  DashboardFullName,
  DashboardLogo,
  DashboardLogoutButton,
  DashboardLogoutIcon,
  DashboardMainContent,
  DashboardNavbar,
  DashboardPageContent,
  DashboardSidebar,
  DashboardSVG,
  DashboardUserInfo,
  DashboardUsername,
} from "./dashboard.styles";

import arianaLogo from "../../assets/arianaLogo.svg";
import dashboardSvg from "../../assets/dashboardSvg.svg";
import logoutSvg from "../../assets/logoutSvg.svg";
import toast from "react-hot-toast";
import { AUTH_TOKEN_KEY } from "../../constants";
import { useQueryClient } from "@tanstack/react-query";

const Dashboard = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data: user, isLoading } = useCurrentUser();
  const { mutate: logout } = useLogout();

  if (isLoading) return <p>Loading...</p>;

  const handleLogout = () => {
    logout(undefined, {
      onSuccess: () => {
        localStorage.removeItem(AUTH_TOKEN_KEY);
        toast.success("Logout Successfully");
        queryClient.clear();
        navigate("/login", { replace: true });
      },
      onError: () => {
        toast.error("Already logged out or session expired");
        localStorage.removeItem(AUTH_TOKEN_KEY);
        navigate("/login", { replace: true });
      },
    });
  };

  return (
    <DashboardContainer>
      <DashboardSidebar>
        <DashboardAvatar src={user?.avatar} alt="User Avatar" />
        <DashboardUserInfo>
          <DashboardFullName>
            {user?.first_name} {user?.last_name}
          </DashboardFullName>
          <DashboardUsername>@{user?.username}</DashboardUsername>
        </DashboardUserInfo>
        <DashboardLogoutButton onClick={handleLogout}>
          <DashboardLogoutIcon src={logoutSvg} alt="Logout" />
          {isLoading ? "Logging out..." : "Logout"}
        </DashboardLogoutButton>
      </DashboardSidebar>

      <DashboardMainContent>
        <DashboardNavbar>
          <DashboardLogo src={arianaLogo} alt="Ariana Logo" />
        </DashboardNavbar>

        <DashboardPageContent>
          <DashboardSVG src={dashboardSvg} alt="Dashboard" />
        </DashboardPageContent>
      </DashboardMainContent>
    </DashboardContainer>
  );
};

export default Dashboard;
