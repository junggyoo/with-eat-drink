import router from "next/router";
import { Button, IconButton } from "../../../components";
import { StarterLayout } from "../components";
import Back from "../../../assets/icons/back.svg";
import styled from "styled-components";

export default function InputInfoCheck() {
  const handleNextButtonClick = () => {
    router.push("/starter/input-info-check");
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
          <Info>김로렌</Info>
          <Info>웹프론트엔드팀</Info>
          <Info>lorem.kim@meshkorea.net</Info>
        </InputInfos>
      </InputInfoContainer>
      <Button
        marginTop="165px"
        marginBottom="16px"
        onClick={handleNextButtonClick}
      >
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
