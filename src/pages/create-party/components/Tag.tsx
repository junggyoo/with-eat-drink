import styled from "styled-components";

interface TagProps {
  value: string;
}

export default function Tag({ value }: TagProps) {
  return <TagWrapper>{value}</TagWrapper>;
}

const TagWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 24px;
  font-size: 14px;
  background-color: #d6cef2;
  border-radius: 3px;
`;
