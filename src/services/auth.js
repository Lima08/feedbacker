export default (httpClient) => ({
  login: async ({ email, password }) => {
    const response = await httpClient.post('/auth/login', { email, password });

    let errors = null;

    if (!response.data) {
      errors = {
        status: response.request.status,
        statusError: response.request.statusText,
      };
    }

    return {
      errors,
      data: response.data,
    };
  },
  register: async ({ name, email, password }) => {
    const response = await httpClient.post('/auth/register', { name, email, password });
    console.log('🚀 ~ file: auth.js:21 ~ register: ~ response', response)

    let errors = null;

    if (!response.data) {
      errors = {
        status: response.request.status,
        statusError: response.request.statusText,
      };
    }

    return {
      errors,
      data: response.data,
    };
  },
});
