import styled from "styled-components";
import { LayoutStarter } from "../../../components/layoutStarter";
import { StarterInputField } from "../../../components/starterInputField";
import { StarterTextInput } from "../../../components/starterTextInput";
import Close from "../../assets/icons/close.svg";
import { Button } from "../../../components/button";
import router from "next/router";

export default function StarterName() {
  const handleNextButtonClick = () => {
    router.push("/starter/department");
  };

  return (
    <LayoutStarter rightNav={<Close />}>
      <StarterNameWrapper>
        <InputContainer>
          <StarterInputField>이름을 알려주세요</StarterInputField>
          <StarterTextInput placeholder="김로렌" />
        </InputContainer>
        <Button
          marginTop="165px"
          marginBottom="16px"
          onClick={handleNextButtonClick}
        >
          다음
        </Button>
      </StarterNameWrapper>
    </LayoutStarter>
  );
}

const StarterNameWrapper = styled.section`
  height: 100%;
  padding: 16px;
`;

const InputContainer = styled.div`
  margin-top: 164px;
`;
