import router from "next/router";
import { Button } from "src/components";
import {
  InputContainer,
  StarterInputField,
  StarterLayout,
  StarterTextInput,
} from "../starter/components";

export default function Login() {
  const handleLoginClick = () => {
    router.push("/main");
  };
  return (
    <StarterLayout title="로그인">
      <InputContainer>
        <StarterInputField>이메일</StarterInputField>
        <StarterTextInput type="email" placeholder="이메일을 입력해주세요." />
        <StarterInputField>비밀번호</StarterInputField>
        <StarterTextInput
          type="password"
          placeholder="비밀번호를 입력해주세요."
        />
      </InputContainer>
      <Button marginTop="165px" marginBottom="16px" onClick={handleLoginClick}>
        로그인
      </Button>
    </StarterLayout>
  );
}
