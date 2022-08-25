import router from "next/router";
import styled from "styled-components";
import Layout from "src/components/layout";
import { Party } from "./components";

export interface DataProps {
  name: string;
  fullName: string;
  department: string;
  contents: string;
  distance: string;
  category: string;
  attendees: { name: string }[];
}

export const PARTY_DATA: DataProps[] = [
  {
    name: "정배",
    fullName: "배정규",
    department: "웹프론트엔드팀",
    contents: "점심에 냉삼 드실 분 손~",
    distance: "20m",
    category: "점심",
    attendees: [
      {
        name: "정배",
      },
      {
        name: "용강",
      },
      {
        name: "송박",
      },
    ],
  },
  {
    name: "용강",
    fullName: "강용현",
    department: "웹프론트엔드팀",
    contents: "저녁에 파스타 드실분 ㅎㅎ",
    distance: "20m",
    category: "저녁",
    attendees: [
      {
        name: "정배",
      },
      {
        name: "용강",
      },
      {
        name: "송박",
      },
    ],
  },
  {
    name: "송박",
    fullName: "박송원",
    department: "웹프론트엔드팀",
    contents: "점심에 바스버거 같이 시켜드실 분!",
    distance: "20m",
    category: "점심",
    attendees: [
      {
        name: "정배",
      },
      {
        name: "용강",
      },
      {
        name: "송박",
      },
    ],
  },
  {
    name: "태최",
    fullName: "최태건",
    department: "웹프론트엔드팀",
    contents: "퇴근하고 위스키 바 가실 파티원 구해용!",
    distance: "20m",
    category: "저녁",
    attendees: [
      {
        name: "정배",
      },
      {
        name: "용강",
      },
      {
        name: "송박",
      },
    ],
  },
  {
    name: "예주",
    fullName: "주예리나",
    department: "웹프론트엔드팀",
    contents: "점심 돈까스 파티 구해요~~ 컴온!",
    distance: "20m",
    category: "점심",
    attendees: [
      {
        name: "정배",
      },
      {
        name: "용강",
      },
      {
        name: "송박",
      },
    ],
  },
  {
    name: "예주",
    fullName: "주예리나",
    department: "웹프론트엔드팀",
    contents: "점심 돈까스 파티 구해요~~ 컴온!",
    distance: "20m",
    category: "점심",
    attendees: [
      {
        name: "정배",
      },
      {
        name: "용강",
      },
      {
        name: "송박",
      },
    ],
  },
  {
    name: "예주",
    fullName: "주예리나",
    department: "웹프론트엔드팀",
    contents: "점심 돈까스 파티 구해요~~ 컴온!",
    distance: "20m",
    category: "점심",
    attendees: [
      {
        name: "정배",
      },
      {
        name: "용강",
      },
      {
        name: "송박",
      },
    ],
  },
];

export default function Main() {
  const handleCommentClick = () => {
    router.push("/main/comment");
  };
  return (
    <Layout>
      <MainWrapper>
        {PARTY_DATA.map((data) => (
          <Party
            key={data.name}
            data={data}
            onCommentClick={handleCommentClick}
          />
        ))}
      </MainWrapper>
    </Layout>
  );
}

const MainWrapper = styled.div``;
