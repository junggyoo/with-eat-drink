import styled from "styled-components";
import Avator from "../../../../components/avator";
import { DataProps } from "../../Main";
import Category from "../category/Category";
import JoinHandsUp from "../../../../assets/icons/join-hands-up.svg";
import LikeInactive from "../../../../assets/icons/like-inactive.svg";
import Comment from "../../../../assets/icons/comment.svg";
import { IconButton } from "../../../../components";

interface PartyProps {
  data: DataProps;
  onCommentClick: () => void;
}

export default function Party({ data, onCommentClick }: PartyProps) {
  const {
    name,
    fullName,
    department,
    contents,
    distance,
    category,
    attendees,
  } = data;
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
        <PartyAttendees>
          <AttendeesAvator>
            {attendees?.map((user) => (
              <Avator
                key={user.name}
                name={user.name}
                width="24px"
                height="24px"
                fontSize="10px"
                marginRight="-12px"
              />
            ))}
          </AttendeesAvator>
          <AttendeesCount>현재 3/4명 참여중</AttendeesCount>
        </PartyAttendees>
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

const PartyAttendees = styled.div`
  display: flex;
  align-items: center;
`;

const AttendeesAvator = styled.div`
  margin-right: 19px;
`;

const AttendeesCount = styled.div`
  color: #999999;
  font-size: 14px;
`;
