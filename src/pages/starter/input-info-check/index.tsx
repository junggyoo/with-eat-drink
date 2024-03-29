import router from "next/router";
import { Button, IconButton } from "src/components";
import { StarterLayout } from "../components";
import Back from "public/icons/back.svg";
import styled from "styled-components";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { starterState } from "src/states/starter";

export default function InputInfoCheck() {
  const { name, department, email } = useRecoilValue(starterState);

  const handleSignupClick = () => {
    router.push("/login");
  };

  const handleBackButtonClick = () => {
    router.push("/starter/password");
  };

  return (
    <StarterLayout
      leftNav={<IconButton icon={<Back />} onClick={handleBackButtonClick} />}
    >
      <Title>이 정보로 가입합니다.</Title>
      <InputInfoContainer>
        <Fieldes>
          <Field>이름</Field>
          <Field>부서명</Field>
          <Field>이메일</Field>
        </Fieldes>
        <InputInfos>
          <Info>{name}</Info>
          <Info>{department}</Info>
          <Info>{email}</Info>
        </InputInfos>
      </InputInfoContainer>
      <Button marginTop="165px" marginBottom="16px" onClick={handleSignupClick}>
        가입하기
      </Button>
    </StarterLayout>
  );
}

const Title = styled.h2`
  margin-top: 112px;
  font-size: 18px;
  font-weight: 600;
  color: #444;
`;

const InputInfoContainer = styled.section`
  display: flex;
  height: 126px;
  margin-top: 13px;
  padding: 12px;
  background-color: #f0f0f0;
`;

const Fieldes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 33px;
`;

const Field = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #444;
`;

const InputInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Info = styled.div`
  font-size: 18px;
`;
