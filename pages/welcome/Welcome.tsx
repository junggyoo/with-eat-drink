import styled from "styled-components";
import { Button } from "../../components/button";
import { Link } from "../../components/link";
import WelcomeLogoImg from "../../assets/icons/welcome-logo-img.svg";
import WelcomeLogoText from "../../assets/icons/welcome-logo-text.svg";

export default function Welcome() {
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
        <Button marginBottom="28px" width="100%">
          시작하기
        </Button>
        <Link href="/">이미 계정이 있어요</Link>
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
