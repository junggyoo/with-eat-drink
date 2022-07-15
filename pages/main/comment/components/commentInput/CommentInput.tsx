import styled from "styled-components";

export default function CommentInput() {
  return (
    <CommentInputWrapper>
      <Input placeholder="댓글 입력..." />
      <TextButton>게시</TextButton>
    </CommentInputWrapper>
  );
}

const CommentInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 328px;
  height: 36px;
`;

const Input = styled.input`
  position: relative;
  width: 100%;
  height: 36px;
  padding: 0 16px;
  border: 1px solid #dadada;
  border-radius: 18px;
`;

const TextButton = styled.button`
  position: absolute;
  right: 20px;
  border: none;
  color: #8e75e2;
  background-color: transparent;
  font-weight: 500;
`;
