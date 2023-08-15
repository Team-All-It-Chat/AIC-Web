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

// 게시글 생성
export const postNewTip = async (body) => {
  const token = localStorage.getItem("access");
  try {
    const response = await axios.post(`${baseUrl}/`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("게시물 업로드 성공:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error sending POST request:", error);
    throw error;
  }
};

// 게시글 삭제
export const deletePost = async (postId) => {
  const response = await axios.delete(`${baseUrl}/${postId}/`);
  console.log("게시물 삭제 성공:", response.data);
    return response.data;
};