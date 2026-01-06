import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 16px;
  background-color: #fff;
  gap: 12px;
  width: 100%;
`;

export const TopRow = styled.div`
  display: flex;
  gap: 12px;
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

export const TextArea = styled.textarea`
  flex: 1;
  font-size: 14px;
  line-height: 1.4;
  resize: none;
  border: none;
  outline: none;
  width: 100%;
  min-height: 80px;
  white-space: pre-wrap; /* preserves spaces and line breaks */
`;

export const BottomRow = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const PostButton = styled.button<{ disabled?: boolean }>`
  background-color: ${({ disabled }) => (disabled ? "#cbd5e1" : "#000")};
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  font-weight: 500;
`;
