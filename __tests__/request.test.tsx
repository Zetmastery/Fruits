import 'react-native';
import {it, expect, describe, jest} from '@jest/globals';
import dummyRequestData from '../src/dummy';
import {dataFetchCall} from '../src/request-utils';

const axios = jest.mock('axios');
describe('request to API', () => {
  it('fetches successfully data from an API', async () => {
    axios.get = jest.fn().mockResolvedValue(dummyRequestData);
    const result = await dataFetchCall();
    expect(result.data).toEqual(dummyRequestData);
  });
  it('fetch should fail', async () => {
    2;
    axios.get = jest.fn().mockRejectedValue(new Error('Test error'));
    // const result = await dataFetchCall();
    expect(dataFetchCall()).rejects.toThrow();
  });
});
