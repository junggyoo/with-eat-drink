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
import { starterState } from "src/states/starter";

export default function StarterPassword() {
  const [starter, setStarter] = useRecoilState(starterState);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "password" | "confirmPassword",
  ) => {
    if (type === "password") {
      setStarter({ ...starter, password: e.target.value });
    } else {
      setStarter({ ...starter, confirmPassword: e.target.value });
    }
  };

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
        <StarterTextInput
          type="password"
          placeholder="비밀번호를 입력해주세요."
          value={starter.password}
          onChange={(e) => handleInputChange(e, "password")}
        />
        <StarterInputField>비밀번호 확인</StarterInputField>
        <StarterTextInput
          type="password"
          placeholder="비밀번호를 재입력해주세요."
          value={starter.confirmPassword}
          onChange={(e) => handleInputChange(e, "confirmPassword")}
        />
      </InputContainer>
      <Button
        marginTop="165px"
        marginBottom="16px"
        disabled={
          !(starter.password.length > 0 && starter.confirmPassword.length > 0)
        }
        onClick={handleNextButtonClick}
      >
        다음
      </Button>
    </StarterLayout>
  );
}
