import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const ViewSection = () => {
  const router = useNavigate();

  const onClick = () => {
    router("/apply");
  };
  return (
    <Wrapper>
      <ViewWrapper>
        <Title>중국가면 꼭 해야할 일 TOP5</Title>
        <InfoSection>
          <MentorName>최재영</MentorName>
          <Date> 2023-08-07</Date>
        </InfoSection>
        <Row1>
          <Category>학교생활</Category>
          <Category>어학준비</Category>
          <Category>여행꿀팁</Category>
        </Row1>
        <Image src="/img/postimg.png" />
        <Post>
          Wish it was a bad trip Wish it was a movie 다 꿈이였음 좋겠지만서도
          yeah, lately I cannot let it go (cannot let it go) I cannot let it
          go-whoa, go-whoa, go (hey) A black rose in my heart 타버린 사랑,
          변해버린 나 With my broken heart A black rose in your heart 타버린
          사랑, 변해버린 너 까맣게 타들어 가버린 rose 꼭 쥐고 싶었지 난 나를
          다치게 해도 괜찮아 I'll be fine, yeah-eh 지금은 타버리고 재밖에 안
          남았지 그 말들 (oh) 돌리고 싶어도 이미 지난 시간들 (hey) 아직도 잠을
          못 자 여전히 허전한 내 sofa (ha) 아름다웠었던 꽃 한 송이 아파도 놓진
          말자 다신 하지 못할 여러 약속들까지 함께 타들어 가버렸네 우리의 불같이
          Wish it was a bad trip Wish it was a movie 다 꿈이였음 좋겠지만서도
          yeah, lately I cannot let it go (cannot let it go) I cannot let it
          go-whoa, go-whoa, go (hey) A black rose in my heart 타버린 사랑,
          변해버린 나 With my broken heart A black rose in your heart 타버린
          사랑, 변해버린 너 까맣게 타들어 가버린 rose 여전히 내 옷장 한켠에는
          너가 후회를 했어 사실 난 (oh) 하루도 빠짐없이 모든 날 (hey) 손 하나를
          흔들지 못해서 못 한 goodbye (goodbye) 바보 같앴지 너를 보내면서 했었던
          그 말 지금이라도 돌아와 준담 혹시 We'll be lovin' all night 'til the
          mornin' (hoo) 잘 가, 고맙단 말 말하지 못했어 넌 안 들리겠지만 I miss
          you Wish it was a bad trip Wish it was a movie 다 꿈이였음
          좋겠지만서도 yeah, lately I cannot let it go (cannot let it go) I
          cannot let it go-whoa, go-whoa, go (hey) A black rose in my heart
          타버린 사랑, 변해버린 나 With my broken heart A black rosе in your
          heart 타버린 사랑, 변해버린 너 까맣게 타들어 가버린 rose Wish it was a
          bad trip Wish it was a movie 다 꿈이였음 좋겠지만서도 yeah, lately I
          cannot let it go (cannot let it go) I cannot let it go-whoa, go-whoa,
          go (hey) A black rose in my heart 타버린 사랑, 변해버린 나 With my
          broken heart A black rose in your heart 타버린 사랑, 변해버린 너
          까맣게 타들어 가버린 rose 꼭 쥐고 싶었지 난 나를 다치게 해도 괜찮아
          I'll be fine, yeah-eh 지금은 타버리고 재밖에 안 남았지 그 말들 (oh)
          돌리고 싶어도 이미 지난 시간들 (hey) 아직도 잠을 못 자 여전히 허전한
          내 sofa (ha) 아름다웠었던 꽃 한 송이 아파도 놓진 말자 다신 하지 못할
          여러 약속들까지 함께 타들어 가버렸네 우리의 불같이 Wish it was a bad
          trip Wish it was a movie 다 꿈이였음 좋겠지만서도 yeah, lately I
          cannot let it go (cannot let it go) I cannot let it go-whoa, go-whoa,
          go (hey) A black rose in my heart 타버린 사랑, 변해버린 나 With my
          broken heart A black rose in your heart 타버린 사랑, 변해버린 너
          까맣게 타들어 가버린 rose 여전히 내 옷장 한켠에는 너가 후회를 했어
          사실 난 (oh) 하루도 빠짐없이 모든 날 (hey) 손 하나를 흔들지 못해서 못
          한 goodbye (goodbye) 바보 같앴지 너를 보내면서 했었던 그 말 지금이라도
          돌아와 준담 혹시 We'll be lovin' all night 'til the mornin' (hoo) 잘
          가, 고맙단 말 말하지 못했어 넌 안 들리겠지만 I miss you Wish it was a
          bad trip Wish it was a movie 다 꿈이였음 좋겠지만서도 yeah, lately I
          cannot let it go (cannot let it go) I cannot let it go-whoa, go-whoa,
          go (hey) A black rose in my heart 타버린 사랑, 변해버린 나 With my
          broken heart A black rosе in your heart 타버린 사랑, 변해버린 너
          까맣게 타들어 가버린 rose Wish it was a bad trip Wish it was a movie
          다 꿈이였음 좋겠지만서도 yeah, lately I cannot let it go (cannot let
          it go) I cannot let it go-whoa, go-whoa, go (hey) A black rose in my
          heart 타버린 사랑, 변해버린 나 With my broken heart A black rose in
          your heart 타버린 사랑, 변해버린 너 까맣게 타들어 가버린 rose 꼭 쥐고
          싶었지 난 나를 다치게 해도 괜찮아 I'll be fine, yeah-eh 지금은
          타버리고 재밖에 안 남았지 그 말들 (oh) 돌리고 싶어도 이미 지난 시간들
          (hey) 아직도 잠을 못 자 여전히 허전한 내 sofa (ha) 아름다웠었던 꽃 한
          송이 아파도 놓진 말자 다신 하지 못할 여러 약속들까지 함께 타들어
          가버렸네 우리의 불같이 Wish it was a bad trip Wish it was a movie 다
          꿈이였음 좋겠지만서도 yeah, lately I cannot let it go (cannot let it
          go) I cannot let it go-whoa, go-whoa, go (hey) A black rose in my
          heart 타버린 사랑, 변해버린 나 With my broken heart A black rose in
          your heart 타버린 사랑, 변해버린 너 까맣게 타들어 가버린 rose 여전히
          내 옷장 한켠에는 너가 후회를 했어 사실 난 (oh) 하루도 빠짐없이 모든 날
          (hey) 손 하나를 흔들지 못해서 못 한 goodbye (goodbye) 바보 같앴지 너를
          보내면서 했었던 그 말 지금이라도 돌아와 준담 혹시 We'll be lovin' all
          night 'til the mornin' (hoo) 잘 가, 고맙단 말 말하지 못했어 넌 안
          들리겠지만 I miss you Wish it was a bad trip Wish it was a movie 다
          꿈이였음 좋겠지만서도 yeah, lately I cannot let it go (cannot let it
          go) I cannot let it go-whoa, go-whoa, go (hey) A black rose in my
          heart 타버린 사랑, 변해버린 나 With my broken heart A black rosе in
          your heart 타버린 사랑, 변해버린 너 까맣게 타들어 가버린 rose
        </Post>
      </ViewWrapper>
      <Text>멘토와 대화를 나누고싶덕?</Text>
      <Btn onClick={onClick}>오리챗 신청하기</Btn>
    </Wrapper>
  );
};

export default ViewSection;

const Btn = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6.5%;
  min-width: 420px;
  min-height: 64px;
  bottom: 0;
  margin-bottom: 1.5%;
  background-color: #ffd5d5;
  z-index: 2;
  border-radius: 30px;
  background: linear-gradient(180deg, #ffb65b 0%, #ff992d 100%);
  color: white;
  font-size: 2.3rem;
  font-weight: 700;
  cursor: pointer;
`;

const Text = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: bold;
`;

const Image = styled.img`
  margin-top: 3%;
  height: 50%;
  width: 100%;
`;

const Post = styled.div`
  height: fit-content;
  width: 100%;
  font-size: 14px;
  margin-bottom: 50px;
`;

const Date = styled.div`
  font-size: 14px;
  text-align: center;
  height: 100%;
`;

const MentorName = styled.div`
  font-size: 14px;
  font-weight: bold;
  border-radius: 5px;
  text-align: center;
  height: 100%;
`;

const InfoSection = styled.div`
  display: flex;
  width: fit-content;
  height: 30px;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const ViewWrapper = styled.div`
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 580px;
  height: fit-content;
  gap: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: black;
  font-weight: 800;
  margin-bottom: 10px;
`;

const Row1 = styled.div`
  margin-top: 2%;
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Category = styled.div`
  font-size: 15px;
  width: fit-content;
  padding: 10px 19px;
  text-align: center;
  border-radius: 30px;
  border-radius: 30px;
  background: #f8f8f8;
  color: var(--m-skyblue, #89cdf6);
`;
