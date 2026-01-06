import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input<{ hasError?: boolean }>`
  width: 100%;
  box-sizing: border-box;
  padding: 12px 14px 12px 36px; // space for icon
  font-size: 14px;
  border-radius: 6px;
  border: 1px solid ${({ hasError }) => (hasError ? "#DC2626" : "#d0d5dd")};
  outline: none;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  pointer-events: none;
  color: #888;
`;

export const SearchIcon = styled.img`
  width: 18px;
  height: 18px;
  display: block;
  flex-shrink: 0;
`;

export const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 40px 20px;
  text-align: center;
  color: #585858;
`;

export const EmptyStateText = styled.p`
  font-size: 14px;
  line-height: 1.5;
  max-width: 400px;
`;

export const Highlight = styled.span`
  font-weight: 600;
  color: #000;
`;

export const EmptyStateSVG = styled.img`
  max-width: 50%;
  height: auto;
`;
