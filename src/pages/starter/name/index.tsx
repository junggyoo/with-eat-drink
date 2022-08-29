import router from "next/router";
import { useRecoilState } from "recoil";
import { Button } from "src/components";
import { nameState } from "src/states/starter";
import {
  StarterInputField,
  StarterTextInput,
  StarterLayout,
  InputContainer,
} from "../components";

export default function StarterName() {
  const [name, setName] = useRecoilState(nameState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
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
          value={name}
          onChange={handleInputChange}
        />
      </InputContainer>
      <Button
        marginTop="165px"
        marginBottom="16px"
        disabled={!name}
        onClick={handleNextButtonClick}
      >
        다음
      </Button>
    </StarterLayout>
  );
}
