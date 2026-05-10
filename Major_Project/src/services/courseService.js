import API_URL from "../config/api";
const API_URLL =
  `${API_URL}/api/courses`;

export const getCourses =
  async () => {
    const response = await fetch(
      API_URLL
    );

    return response.json();
  };

export const getSingleCourse =
  async (id) => {
    const response = await fetch(
      `${API_URLL}/${id}`
    );

    return response.json();
  };