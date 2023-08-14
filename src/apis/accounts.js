import axios from "axios";

const baseUrl = `https://all-it-chat.o-r.kr/accounts`;

// 로그인
export const mentorLogin = async () => {
  const result = await axios.post(`${baseUrl}/login/mentor`);
  return result.data.token;
};

export const menteeLogin = async () => {
  const result = await axios.post(`${baseUrl}/login/mentee`);
  return result.data.token;
};

// 로그아웃
export const mentorLogout = async () => {
  const result = await axios.delete(`${baseUrl}/login/mentor`);
  return result.data;
};

export const menteeLogout = async () => {
  const result = await axios.delete(`${baseUrl}/login/mentee`);
  return result.data;
};

// 대륙별 프로필 리스트 가져오기
export const getMentorProfiles = async (continent) => {
  const result = await axios.get(`${baseUrl}/${continent}/`);
  return result;
};
