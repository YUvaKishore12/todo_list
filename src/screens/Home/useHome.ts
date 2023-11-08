import axios from 'axios';
import {useEffect, useState} from 'react';

const useHome = () => {
  const url = 'https://64267853556bad2a5b505aec.mockapi.io/tasks';
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);
  const showModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  const fetchtasks = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchtasks();
  }, []);
  return {modalVisible, showModal, closeModal, data};
};

export default useHome;
