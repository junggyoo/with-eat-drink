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
import { passwordState } from "src/states/starter";

export default function StarterPassword() {
  const [password, setPassword] = useRecoilState(passwordState);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "password" | "confirmPassword",
  ) => {
    if (type === "password") {
      setPassword({ ...password, password: e.target.value });
    } else {
      setPassword({ ...password, confirmPassword: e.target.value });
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
          value={password.password}
          onChange={(e) => handleInputChange(e, "password")}
        />
        <StarterInputField>비밀번호 확인</StarterInputField>
        <StarterTextInput
          type="password"
          placeholder="비밀번호를 재입력해주세요."
          value={password.confirmPassword}
          onChange={(e) => handleInputChange(e, "confirmPassword")}
        />
      </InputContainer>
      <Button
        marginTop="165px"
        marginBottom="16px"
        disabled={
          !(password.password.length > 0 && password.confirmPassword.length > 0)
        }
        onClick={handleNextButtonClick}
      >
        다음
      </Button>
    </StarterLayout>
  );
}
