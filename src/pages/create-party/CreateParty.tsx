import { Button, IconButton, NavHeader } from "src/components";
import Back from "public/icons/back.svg";
import router from "next/router";
import styled from "styled-components";
import Counter from "./components/Counter";
import Tag from "./components/Tag";

export default function CreateParty() {
  const handleBackButtonClick = () => {
    router.push("/main");
  };
  return (
    <>
      <NavHeader
        title="파티 만들기"
        leftNav={<IconButton icon={<Back />} onClick={handleBackButtonClick} />}
        rightNav={<Button status="text">만들기</Button>}
      />
      <Wrapper>
        <Field>
          <Label>인원</Label>
          <Content>
            <Count>4</Count>
            <Counter />
          </Content>
        </Field>
        <Field>
          <Label>태그</Label>
          <Content>
            <Tag value="점심" />
          </Content>
        </Field>
        <WritePartyIntroduce placeholder="이 파티를 간단하게 소개해주세요." />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section``;

const Field = styled.div`
  display: flex;
  align-items: center;
  height: 43px;
  padding-left: 16px;
  padding-right: 10px;
  border-bottom: 1px solid #eaeaea;
`;

const Label = styled.div`
  width: 40px;
  margin-right: 50px;
  color: #444;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Count = styled.div`
  font-size: 18px;
`;

const WritePartyIntroduce = styled.textarea`
  width: 100%;
  height: 170px;
  padding: 16px;
  font-size: 18px;
  resize: none;
  border: none;

  :focus {
    outline: none;
  }
`;
