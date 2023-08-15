import { useEffect, useState } from "react";
import { getAllChat } from "../apis/chat";

const useAllChat = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllChat;
      setData(response);
    };
    fetchData();
  }, []);
};

export default useAllChat;
