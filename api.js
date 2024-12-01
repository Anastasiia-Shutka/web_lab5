const BASE_URL = "http://localhost:3000/api";
const RESOURCE_URL = `${BASE_URL}/movies`;

const baseRequest = async ({ urlPath = "", method = "GET", body = null }) => {
  try {
    const reqParams = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (body) {
      reqParams.body = JSON.stringify(body);
    }

    const response = await fetch(`${RESOURCE_URL}${urlPath}`, reqParams);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("HTTP ERROR:", error);
    return null;
  }
};

export const getAllMovies = () => baseRequest({ method: "GET" });

export const postMovie = (body) => baseRequest({ method: "POST", body });

export const updateMovie = (id, body) =>
  baseRequest({ urlPath: `/${id}`, method: "PUT", body });

export const deleteMovie = (id) =>
  baseRequest({ urlPath: `/${id}`, method: "DELETE" });
