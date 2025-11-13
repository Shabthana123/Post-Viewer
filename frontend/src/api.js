import axios from "axios";

// fetch posts from public api (json placeholder)
// export const fetchAllPosts = () => {
//   axios
//     .get("https://jsonplaceholder.typicode.com/posts")
//     // .then((r) => console.log(r.data))
//     .then((r) => r.data)
//     .catch((e) => console.error("error message: ", e.message));
// };

export const fetchAllPosts = async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return res.data; // << important: return the fetched data
  } catch (err) {
    console.error("Error fetching posts:", err.message);
    return []; // return empty array on error
  }
};

// fetchAllPosts();

// backend endpoint

const backend = "http://localhost:5000";

export const savePostToBackend = async (post) => {
  try {
    const res = await axios.post(`${backend}/save`, post);
    return res.data;
  } catch (e) {
    console.error("Error saving posts: ", e.message);
  }
};

export const fetchSavedPostFromBackend = async () => {
  try {
    const res = await axios.get(`${backend}/save`);
    return res.data;
  } catch (e) {
    console.error("error message: ", e.message);
  }
};

export const deletePostFromBackend = async (id) => {
  try {
    const res = await axios.delete(`${backend}/save/${id}`);
    return res.data;
  } catch (e) {
    console.error("Error deleting post: ", e.message);
  }
};
