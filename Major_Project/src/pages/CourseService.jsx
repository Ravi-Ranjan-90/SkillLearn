const API_URL = "http://localhost:5000/api/courses";

export const getCourses = async () => {
  const response = await fetch(API_URL);

  return response.json();
};

export const getSingleCourse = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);

  return response.json();
};

export const createCourse = async (data) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
};