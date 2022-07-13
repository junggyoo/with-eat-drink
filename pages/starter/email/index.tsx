import router from "next/router";
import { Button, IconButton } from "../../../components";
import {
  StarterInputField,
  StarterTextInput,
  StarterLayout,
  InputContainer,
} from "../components";
import Back from "../../../assets/icons/back.svg";

export default function StarterEmail() {
  const handleNextButtonClick = () => {
    router.push("/starter/password");
  };

  const handleBackButtonClick = () => {
    router.push("/starter/department");
  };

  return (
    <StarterLayout
      leftNav={<IconButton icon={<Back />} onClick={handleBackButtonClick} />}
    >
      <InputContainer>
        <StarterInputField>이메일</StarterInputField>
        <StarterTextInput placeholder="lorem@meshkorea.net" />
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
