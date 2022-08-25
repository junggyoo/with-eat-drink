import styled from "styled-components";
import router from "next/router";
import { Button, Link } from "../../components";
import WelcomeLogoImg from "public/images/welcome-logo-img.svg";
import WelcomeLogoText from "public/images/welcome-logo-text.svg";

export default function Welcome() {
  const handleStarterClick = () => {
    router.push("/starter/name");
  };

  return (
    <WelcomeWrapper>
      <LogoContainer>
        <LogoImgContainer>
          <WelcomeLogoImg />
        </LogoImgContainer>
        <LogoTextContainer>
          <WelcomeLogoText />
        </LogoTextContainer>
      </LogoContainer>
      <ButtonsWrapper>
        <Button marginBottom="28px" width="100%" onClick={handleStarterClick}>
          시작하기
        </Button>
        <Link href="/login">이미 계정이 있어요</Link>
      </ButtonsWrapper>
    </WelcomeWrapper>
  );
}

const WelcomeWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 0 35px 35px 35px;
`;

const LogoContainer = styled.div`
  margin-top: 188px;
`;

const LogoImgContainer = styled.div`
  text-align: center;
`;

const LogoTextContainer = styled.div`
  margin-top: 25px;
`;

const ButtonsWrapper = styled.div`
  position: absolute;
  width: 100%;
  padding: 0 35px;
  text-align: center;
  bottom: 64px;
`;
