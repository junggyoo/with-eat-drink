import styled from "styled-components";

interface StarterInputFieldProps {
  children: React.ReactNode;
}

export default function StarterInputField({
  children,
}: StarterInputFieldProps) {
  return <StarterInputFieldWrapper>{children}</StarterInputFieldWrapper>;
}

const StarterInputFieldWrapper = styled.div`
  margin-top: 29px;
  margin-bottom: 16px;
  color: #444;
  font-size: 18px;
  font-weight: 600;
`;
