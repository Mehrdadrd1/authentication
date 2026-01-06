import styled from "styled-components";

export const TweetCard = styled.div`
  width: 100%;
  padding: 16px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background: var(--Fills-Quaternary, #78788014);
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const TweetText = styled.p`
  margin: 0;
  font-size: 15px;
  line-height: 22px;
  color: #000000;
  white-space: pre-wrap;
`;

export const TweetMeta = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const TweetDate = styled.span`
  font-size: 12px;
  color: #64748b;
`;
