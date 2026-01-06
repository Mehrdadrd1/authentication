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
