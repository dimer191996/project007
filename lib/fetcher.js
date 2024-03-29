export const fetcher = (...args) => {
    return fetch(...args).then(async (res) => {
      let payload;
      try {
        if (res.status === 204) return null; // 204 does not have body
        payload = await res.json();
      } catch (error) {
        /* noop */
        return error;
      }
      if (res.ok) {
        return payload;
      } else {
        return Promise.reject(payload.error || new Error('Something went wrong'));
      }
    });
  };
  