import styled from "styled-components"
import { Avator } from "../../../components/avator"
import { DataProps } from "../Main"
import Category from "./Category"

export default function Party({ 
  name,
  fullName,
  department, 
  contents, 
  distance,
  category,
  attendees
  }: DataProps) {
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
          <Icon>✋</Icon>
          <Icon>🤍</Icon>
          <Icon>💬</Icon>
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
                backgroundColor="#5F76D5" 
              />
            ))}
          </AttendeesAvator>
          <AttendeesCount>현재 3/4명 참여중</AttendeesCount>
        </PartyAttendees>
      </PartyJoinContainer>
    </PartyWrapper>
  )
}

const PartyWrapper = styled.article`
  min-height: 193px;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`

const WriterInfo = styled.div`
  display: flex;
`

const FullName = styled.span`
  margin-left: 16px;
  font-size: 16px;
  font-weight: bold;
`

const Department = styled.span`
  margin-left: 5px;
  font-size: 16px;
  color: #8E8E8E;
`

const FullNameContainer = styled.div`
  display: flex;
  align-items: center;
`

const ContentsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
`

const Contents = styled.div`
  width: 300px;
  font-size: 18px;
`

const Distance = styled.span`
  font-size: 16px;
`

const PartyJoinContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  margin-top: 23px;
`

const PartyActions = styled.div`
`

const Icon = styled.span`
  width: 30px;
  height: 30px;
  margin-right: 16px;
`

const PartyAttendees = styled.div`
  display: flex;
  align-items: center;
`

const AttendeesAvator = styled.div`
  margin-right: 19px;
`

const AttendeesCount = styled.div`
  color: #999999;
  font-size: 14px;
`