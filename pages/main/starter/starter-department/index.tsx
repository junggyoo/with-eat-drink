import styled from "styled-components";
import { LayoutStarter } from "../../../components/layoutStarter";
import { Button } from "../../../components/button";
import { StarterInputField } from "../../../components/starterInputField";
import { StarterTextInput } from "../../../components/starterTextInput";
import Close from "../../assets/icons/close.svg";
import router from "next/router";

export default function StartDepartment() {
  const handleNextButtonClick = () => {
    router.push("/starter/email");
  };
  return (
    <LayoutStarter rightNav={<Close />}>
      <StarterDepartmentWrapper>
        <InputContainer>
          <StarterInputField>
            이름 옆에 표시되는 부서명을 알려주세요
          </StarterInputField>
          <StarterTextInput placeholder="웹프론트엔드팀" />
        </InputContainer>
        <Button
          marginTop="165px"
          marginBottom="16px"
          onClick={handleNextButtonClick}
        >
          다음
        </Button>
      </StarterDepartmentWrapper>
    </LayoutStarter>
  );
}

const StarterDepartmentWrapper = styled.section`
  height: 100%;
  padding: 16px;
`;

const InputContainer = styled.div`
  margin-top: 164px;
`;
