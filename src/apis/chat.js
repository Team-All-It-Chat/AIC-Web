import axios from "axios";

const baseUrl = `https://all-it-chat.o-r.kr/chat`;

export const getRecentReview = async (id) => {
  const result = await axios.get(`${baseUrl}/recent/${id}/`);
  return result;
};

export const getAllChat = async () => {
  const token = localStorage.getItem("access");
  console.log(token);
  const result = await axios.get(`${baseUrl}/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};

export const getChat = async (chatId) => {
  const result = await axios.get(`${baseUrl}/${chatId}/`);
  return result;
};

// 질문 등록하기
export const applyQuestion = async (body) => {
  const token = localStorage.getItem("access");
  try {
    const response = await axios.post(`${baseUrl}/`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("질문 요청 성공:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error sending POST request:", error);
    throw error;
  }
};
