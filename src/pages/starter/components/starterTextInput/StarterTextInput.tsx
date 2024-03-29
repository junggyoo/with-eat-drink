import styled from "styled-components";

interface StarterTextInputWrapperProps {
  placeholder?: string;
  type?: "text" | "password" | "email" | "number";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function StarterTextInput({
  type = "text",
  placeholder,
  value,
  onChange,
}: StarterTextInputWrapperProps) {
  return (
    <StarterTextInputWrapper>
      <TextInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
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
