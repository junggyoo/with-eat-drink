import router from "next/router";
import { Button } from "../../../components";
import {
  StarterInputField,
  StarterTextInput,
  StarterLayout,
  InputContainer,
} from "../components";
import Close from "../../../assets/icons/close.svg";

export default function StarterName() {
  const handleNextButtonClick = () => {
    router.push("/starter/department");
  };

  return (
    <StarterLayout rightNav={<Close />}>
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
    </StarterLayout>
  );
}
