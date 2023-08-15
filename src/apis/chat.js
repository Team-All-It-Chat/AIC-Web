import axios from "axios";

const baseUrl = `https://all-it-chat.o-r.kr/chat`;

export const getRecentReview = async (id) => {
  const result = await axios.get(`${baseUrl}/recent/${id}/`);
  return result;
};
