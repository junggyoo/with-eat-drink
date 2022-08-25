import styled from "styled-components";
import { IconButton } from "src/components";
import Minus from "public/icons/minus.svg";
import Plus from "public/icons/plus.svg";

export default function Counter() {
  return (
    <CounterWrapper>
      <IconButton icon={<Minus />} />
      <Divider />
      <IconButton icon={<Plus />} />
    </CounterWrapper>
  );
}

const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  height: 28px;
  padding: 0 15px;
  background-color: rgba(118, 118, 128, 0.12);
  border-radius: 8px;
`;

const Divider = styled.span`
  width: 1px;
  height: 14px;
  margin: 0 15px;
  background-color: rgba(60, 60, 67, 0.18);
`;
