import router from "next/router";
import { Button, IconButton } from "src/components";
import {
  StarterInputField,
  StarterTextInput,
  StarterLayout,
  InputContainer,
} from "../components";
import Back from "public/icons/back.svg";
import { useRecoilState } from "recoil";
import { emailState } from "src/states/starter";

export default function StarterEmail() {
  const [email, setEmail] = useRecoilState(emailState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

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
        <StarterTextInput
          placeholder="lorem@meshkorea.net"
          value={email}
          onChange={handleInputChange}
        />
      </InputContainer>
      <Button
        marginTop="165px"
        marginBottom="16px"
        disabled={!email}
        onClick={handleNextButtonClick}
      >
        다음
      </Button>
    </StarterLayout>
  );
}
