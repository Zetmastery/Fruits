import axios from 'axios';

export const dataFetchCall = async () => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users',
    );

    return response;
  } catch (error: any) {
    console.log(error, 'ERROR IN DATAFECTH CALL');
    return error;
  }
};
