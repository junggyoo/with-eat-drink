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

export default function StarterEmail() {
  const [starter, setStarter] = useRecoilState(starterState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStarter({ ...starter, email: e.target.value });
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
          value={starter.email}
          onChange={handleInputChange}
        />
      </InputContainer>
      <Button
        marginTop="165px"
        marginBottom="16px"
        disabled={!starter.email}
        onClick={handleNextButtonClick}
      >
        다음
      </Button>
    </StarterLayout>
  );
}
