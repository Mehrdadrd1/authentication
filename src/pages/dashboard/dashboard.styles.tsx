import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #ffffff;
  overflow: hidden;
`;

export const DashboardSidebar = styled.div`
  width: 280px;
  height: 100vh;
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
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 16px;
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

export const DashboardNavButton = styled.button`
  margin-left: auto;

  padding: 8px 14px;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
  background-color: #ffffff;

  font-size: 14px;
  font-weight: 600;
  color: #000000;

  cursor: pointer;

  &:hover {
    background-color: #f1f5f9;
  }
`;
