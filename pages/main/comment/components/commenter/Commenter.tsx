import styled from "styled-components";
import { Avator } from "../../../../../components";

interface CommenterData {
  name: string;
  fullName: string;
  department: string;
  commentedTime: string;
  comment: string;
}

interface CommenterProps {
  data: CommenterData;
}

export default function Commenter({ data }: CommenterProps) {
  const { name, fullName, department, commentedTime, comment } = data;
  return (
    <CommenterWrapper>
      <CommenterInfo>
        <Commeter>
          <Avator width="24px" height="24px" fontSize="10px" name={name} />
          <FullNameContainer>
            <FullName>{fullName}</FullName>
            <Department>{department}</Department>
          </FullNameContainer>
        </Commeter>
        <CommentedTime>{commentedTime}</CommentedTime>
      </CommenterInfo>
      <Comment>{comment}</Comment>
    </CommenterWrapper>
  );
}

const CommenterWrapper = styled.div`
  margin-bottom: 23px;
`;

const CommenterInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Commeter = styled.div`
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

const CommentedTime = styled.div`
  color: #8e8e8e;
  font-size: 14px;
`;

const Comment = styled.div`
  margin-top: 5px;
  margin-left: 40px;
  color: #444;
`;
