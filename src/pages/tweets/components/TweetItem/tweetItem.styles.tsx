import styled from "styled-components";

export const TweetCard = styled.div`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  background: var(--Fills-Quaternary, #78788014);
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
`;

export const TweetHeader = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  flex-shrink: 0;
`;

export const TweetAuthor = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #000;
`;

export const TweetTime = styled.div`
  font-size: 12px;
  color: #64748b;
`;

export const TweetText = styled.p`
  margin: 0;
  font-size: 15px;
  line-height: 22px;
  color: #000;
  white-space: pre-wrap; /* preserves spaces & newlines */
`;

export const DeleteButton = styled.button<{ disabled?: boolean }>`
  position: absolute;
  top: 8px;
  right: 8px;
  background: transparent;
  border: none;
  padding: 4px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  img {
    width: 18px;
    height: 18px;
  }
`;

export const DeleteMenu = styled.div`
  position: absolute;
  top: 20px;
  right: -100px;
  min-width: 140px;
  background-color: #fff;
  border: 1px solid #d0d5dd;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 10;
  margin-top: 4px;
  display: flex;
  flex-direction: column;
`;

export const DeleteMenuItem = styled.button<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  font-size: 14px;
  color: #000;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #f2f4f7;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  img {
    width: 16px;
    height: 16px;
  }
`;
