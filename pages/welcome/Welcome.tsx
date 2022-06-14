import styled from "styled-components";
import { Button } from "../../components/button";
import { Link } from "../../components/link";

export default function Welcome() {
  return (
    <WelcomeWrapper>
      <LogoContainer>
        <LogoImgContainer>
          <LogoImg />
        </LogoImgContainer>
        <LogoTextKorea>위드잇드</LogoTextKorea>
        <LogoTextEnglish>WithEatDrink</LogoTextEnglish>
      </LogoContainer>
      <ButtonsWrapper>
        <Button marginBottom="28px" width="100%">시작하기</Button>
        <Link href="/">이미 계정이 있어요</Link>
      </ButtonsWrapper>
    </WelcomeWrapper>
  )
}

const WelcomeWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 0 35px 35px 35px;
`

const LogoContainer = styled.div`
  margin-top: 188px;
`

const LogoImgContainer = styled.div`
  text-align: center;
`

const LogoImg = styled.img`
  width: 130px;
  height: 130px;
  background-color: #8E75E2;
`

const LogoTextKorea = styled.h1`
  margin-top: 24px;
  text-align: center;
  font-size: 48px;
`

const LogoTextEnglish = styled.h2`
  margin-top: 13px;
  text-align: center;
  font-size: 24px;
`

const ButtonsWrapper = styled.div`
  position: absolute;
  text-align: center;
  padding: 0 35px;
  bottom: 64px;
`
