import { apiStatus } from '../redux/apiHeroList';

describe('API is fetching correctly', () => {
  test('Api Status Ok', async () => apiStatus().then((data) => {
    expect(data).toBe(true);
  }));

  test('Fetch fails', async () => {
    expect.assertions(0);
    try {
      await apiStatus();
    } catch (e) {
      expect(e).toMatch('error');
    }
  });
});
