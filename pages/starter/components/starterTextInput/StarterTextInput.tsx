import styled from "styled-components";

interface StarterTextInputWrapperProps {
  placeholder?: string;
}

export default function StarterTextInput({
  placeholder,
}: StarterTextInputWrapperProps) {
  return (
    <StarterTextInputWrapper>
      <TextInput placeholder={placeholder} />
    </StarterTextInputWrapper>
  );
}

const StarterTextInputWrapper = styled.div`
  width: 100%;
  padding-bottom: 8px;
  border-bottom: 2px solid #8e75e2;
`;

const TextInput = styled.input`
  width: 100%;
  font-size: 20px;
  border: none;
`;
