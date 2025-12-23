import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #ffffff;
`;

export const DashboardSidebar = styled.div`
  width: 280px;
  background-color: #f8fafc;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 5px;
  border-right: 1px solid #e2e8f0;
`;

export const DashboardAvatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin-bottom: 8px;
  object-fit: cover;
`;

export const DashboardFullName = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 15px;
  line-height: 24px;
  text-align: center;
  color: #000000;
`;

export const DashboardUsername = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  text-align: center;
  color: #585858;
`;

export const DashboardUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;

export const DashboardLogoutButton = styled.button`
  width: 100%;
  margin-top: auto;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 10px 12px;
  border: none;
  border-radius: 6px;
  background-color: #dc2626;
  color: #fff;
  font-weight: 600;
  cursor: pointer;

  line-height: 1;

  &:hover {
    background-color: #b91c1c;
  }
`;

export const DashboardMainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const DashboardNavbar = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background-color: #f8fafc;
`;

export const DashboardLogo = styled.img`
  height: 40px;
`;

export const DashboardPageContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DashboardSVG = styled.img`
  max-width: 50%;
  height: auto;
`;

export const DashboardLogoutIcon = styled.img`
  width: 18px;
  height: 18px;
  display: block;
  flex-shrink: 0;
`;
