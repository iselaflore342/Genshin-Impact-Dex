export const fetchHelper = (endpoint, data, method = "GET") => {
  const url = encodeURI(endpoint);

  if (method === "GET") {
    return fetch(url);
  } else
    return fetch(url, {
      method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
};
