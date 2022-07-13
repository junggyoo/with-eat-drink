import router from "next/router";
import { Button, IconButton } from "../../../components";
import {
  StarterInputField,
  StarterTextInput,
  StarterLayout,
  InputContainer,
} from "../components";
import Back from "../../../assets/icons/back.svg";

export default function StartDepartment() {
  const handleNextButtonClick = () => {
    router.push("/starter/email");
  };

  const handleBackButtonClick = () => {
    router.push("/starter/name");
  };
  return (
    <StarterLayout
      leftNav={<IconButton icon={<Back />} onClick={handleBackButtonClick} />}
    >
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
    </StarterLayout>
  );
}
