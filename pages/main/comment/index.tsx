import styled from "styled-components";
import { Avator, IconButton, NavHeader } from "../../../components";
import { Category } from "../components";
import Back from "../../../assets/icons/back.svg";
import router from "next/router";
import Commenter from "./components/commenter";
import CommentInput from "./components/commentInput";

const COMMENT_DATA = [
  {
    id: 1,
    name: "정배",
    fullName: "배정규",
    department: "웹프론트엔드팀",
    commentedTime: "20분 전",
    comment: "몇 명 있나요?",
  },
  {
    id: 2,
    name: "정배",
    fullName: "배정규",
    department: "웹프론트엔드팀",
    commentedTime: "20분 전",
    comment: "몇 명 있나요?",
  },
  {
    id: 3,
    name: "정배",
    fullName: "배정규",
    department: "웹프론트엔드팀",
    commentedTime: "20분 전",
    comment: "몇 명 있나요?",
  },
];

export default function Comment() {
  const handleBackButtonClick = () => {
    router.push("/main");
  };
  return (
    <>
      <NavHeader
        title="댓글"
        leftNav={<IconButton icon={<Back />} onClick={handleBackButtonClick} />}
      />
      <PartyWrapper>
        <WriterInfo>
          <Avator name="정규" />
          <FullNameContainer>
            <FullName>배정규</FullName>
            <Department>웹프론트엔드팀</Department>
          </FullNameContainer>
        </WriterInfo>
        <ContentsContainer>
          <Contents>점심에 냉삼 드실 분 손~</Contents>
          <Distance>20m</Distance>
        </ContentsContainer>
        <Category>점심</Category>
      </PartyWrapper>
      <CommentersContainer>
        {COMMENT_DATA.map((comment) => (
          <Commenter key={comment.id} data={comment} />
        ))}
      </CommentersContainer>
      <CommentInputContainer>
        <CommentInputWrapper>
          <Avator />
          <CommentInput />
        </CommentInputWrapper>
      </CommentInputContainer>
    </>
  );
}

const PartyWrapper = styled.article`
  padding: 20px;
  border-bottom: 1px solid #dadada;
`;

const WriterInfo = styled.div`
  display: flex;
`;

const FullName = styled.span`
  margin-left: 16px;
  font-size: 16px;
  font-weight: bold;
`;

const Department = styled.span`
  margin-left: 5px;
  font-size: 16px;
  color: #8e8e8e;
`;

const FullNameContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ContentsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
`;

const Contents = styled.div`
  width: 300px;
  font-size: 18px;
`;

const Distance = styled.span`
  font-size: 16px;
`;

const CommentersContainer = styled.div`
  padding: 20px;
`;

const CommentInputContainer = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 83px;
  padding: 8px;
  border-top: 1px solid #dadada;
`;

const CommentInputWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
