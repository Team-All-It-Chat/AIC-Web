import { useEffect, useState } from "react";
import { getChat } from "../apis/chat";

const useChat = (id) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getChat(id);
      setData(response.data);
    };
    fetchData();
  }, [id]);
};

export default useChat;
