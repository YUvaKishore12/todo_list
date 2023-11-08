import {useState} from 'react';
import axios from 'axios';

const useAddTask = () => {
  const url = 'https://64267853556bad2a5b505aec.mockapi.io/tasks';
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [time, setTime] = useState('');
  const setValue = (value: string) => {
    setStatus(value);
    console.log(value);
  };
  const setTaskTime = (value: string) => {
    setTime(value);
    console.log(value);
  };
  console.log(status, time);
  const addTask = async () => {
    try {
      const data = {
        Title: title,
        description: description,
        status: status,
        time: time,
      };
      console.log(data);
      const response = await axios.post(url, data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    title,
    setTitle,
    description,
    setDescription,
    addTask,
    setValue,
    setTaskTime,
  };
};

export default useAddTask;
