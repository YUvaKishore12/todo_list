import {useState} from 'react';

const useHome = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const showModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  return {modalVisible, showModal, closeModal};
};

export default useHome;
