import axios from "axios";

const baseUrl = `https://all-it-chat.o-r.kr/posts`;

// 모든 게시글 조회
export const getAllPost = async () => {
  const result = await axios.get(`${baseUrl}/`);
  return result;
};

// 대륙별 꿀팁 조회
export const getPostsOfContinent = async (continent) => {
  const result = await axios.get(`${baseUrl}/${continent}/`);
  return result;
};

// 특정 게시글 조회
export const getPost = async (postId) => {
  const result = await axios.get(`${baseUrl}/${postId}/`);
  return result;
};
