import router from "next/router";
import { useRecoilState } from "recoil";
import { Button } from "src/components";
import { starterState } from "src/states/starter";
import {
  StarterInputField,
  StarterTextInput,
  StarterLayout,
  InputContainer,
} from "../components";

export default function StarterName() {
  const [starter, setStarter] = useRecoilState(starterState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStarter({ ...starter, name: e.target.value });
  };

  const handleNextButtonClick = () => {
    router.push("/starter/department");
  };

  return (
    <StarterLayout>
      <InputContainer>
        <StarterInputField>이름을 알려주세요</StarterInputField>
        <StarterTextInput
          placeholder="김로렌"
          value={starter.name}
          onChange={handleInputChange}
        />
      </InputContainer>
      <Button
        marginTop="165px"
        marginBottom="16px"
        disabled={!starter.name}
        onClick={handleNextButtonClick}
      >
        다음
      </Button>
    </StarterLayout>
  );
}
