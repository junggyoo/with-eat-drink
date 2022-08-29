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

export default function StartDepartment() {
  const [starter, setStarter] = useRecoilState(starterState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStarter({ ...starter, department: e.target.value });
  };

  const handleNextButtonClick = () => {
    router.push("/starter/email");
  };

  const handleBackButtonClick = () => {
    router.push("/starter/name");
  };
  return (
    <StarterLayout
      leftNav={<IconButton icon={<Back />} onClick={handleBackButtonClick} />}
    >
      <InputContainer>
        <StarterInputField>
          이름 옆에 표시되는 부서명을 알려주세요
        </StarterInputField>
        <StarterTextInput
          placeholder="웹프론트엔드팀"
          value={starter.department}
          onChange={handleInputChange}
        />
      </InputContainer>
      <Button
        marginTop="165px"
        marginBottom="16px"
        disabled={!starter.department}
        onClick={handleNextButtonClick}
      >
        다음
      </Button>
    </StarterLayout>
  );
}
