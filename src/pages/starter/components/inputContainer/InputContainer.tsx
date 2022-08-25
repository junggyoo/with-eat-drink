import styled from "styled-components";

interface InputContainer {
  children: React.ReactNode;
}

export default function InputContainer({ children }: InputContainer) {
  return <InputContainerWrapper>{children}</InputContainerWrapper>;
}

const InputContainerWrapper = styled.div`
  margin-top: 112px;
`;
