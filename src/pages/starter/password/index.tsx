import router from "next/router";
import { Button, IconButton } from "src/components";
import {
  StarterInputField,
  StarterTextInput,
  StarterLayout,
  InputContainer,
} from "../components";
import Back from "public/icons/back.svg";

export default function StarterPassword() {
  const handleNextButtonClick = () => {
    router.push("/starter/input-info-check");
  };

  const handleBackButtonClick = () => {
    router.push("/starter/email");
  };

  return (
    <StarterLayout
      leftNav={<IconButton icon={<Back />} onClick={handleBackButtonClick} />}
    >
      <InputContainer>
        <StarterInputField>비밀번호</StarterInputField>
        <StarterTextInput placeholder="비밀번호를 입력해주세요." />
        <StarterInputField>비밀번호 확인</StarterInputField>
        <StarterTextInput placeholder="비밀번호를 재입력해주세요." />
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
