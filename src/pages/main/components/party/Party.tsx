import styled from "styled-components";
import { DataProps } from "../../Main";
import { IconButton, Avator } from "src/components";
import Category from "../category/Category";
import JoinHandsUp from "public/icons/join-hands-up.svg";
import LikeInactive from "public/icons/like-inactive.svg";
import Comment from "public/icons/comment.svg";

interface PartyProps {
  data: DataProps;
  onCommentClick: () => void;
}

export default function Party({ data, onCommentClick }: PartyProps) {
  const { name, fullName, department, contents, distance, category } = data;
  return (
    <PartyWrapper>
      <WriterInfo>
        <Avator name={name} />
        <FullNameContainer>
          <FullName>{fullName}</FullName>
          <Department>{department}</Department>
        </FullNameContainer>
      </WriterInfo>
      <ContentsContainer>
        <Contents>{contents}</Contents>
        <Distance>{distance}</Distance>
      </ContentsContainer>
      <Category>{category}</Category>
      <PartyJoinContainer>
        <PartyActions>
          <Icon>
            <JoinHandsUp />
          </Icon>
          <Icon>
            <LikeInactive />
          </Icon>
          <IconButton icon={<Comment />} onClick={onCommentClick} />
        </PartyActions>
        <AttendeesCount>현재 3/4명 참여중</AttendeesCount>
      </PartyJoinContainer>
    </PartyWrapper>
  );
}

const PartyWrapper = styled.article`
  padding: 20px;
  border-bottom: 1px solid lightgray;
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

const PartyJoinContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  margin-top: 23px;
`;

const PartyActions = styled.div``;

const Icon = styled.span`
  width: 30px;
  height: 30px;
  margin-right: 16px;
`;

const AttendeesCount = styled.div`
  color: #999999;
  font-size: 14px;
`;
