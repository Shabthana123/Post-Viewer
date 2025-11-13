import React, { useEffect, useState } from "react";
import { fetchAllPosts, savePostToBackend, fetchSavedPostFromBackend, deletePostFromBackend } from "./api";
import {
  container,
  button,
  smallButton,
  postContainer,
  savedPostContainer,
  postsGrid, 
  buttonContainer,
} from "./styles";

function App() {
  const [posts, setPosts] = useState([]);
  const [selectedPosts, setSelectedPosts] = useState([]);
  const [savedPosts, setSavedPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      const data = await fetchAllPosts();
      setPosts(data || []);
    };
    loadPosts();
  }, []);

  const loadSavedPosts = async () => {
    const data = await fetchSavedPostFromBackend();
    setSavedPosts(data || []);
  };

  const handleSelect = (postId) => {
    if (selectedPosts.includes(postId)) {
      setSelectedPosts(selectedPosts.filter((id) => id !== postId));
    } else {
      setSelectedPosts([...selectedPosts, postId]);
    }
  };

  const handleSaveSelected = async () => {
    const postsToSave = posts.filter((p) => selectedPosts.includes(p.id));
    for (let post of postsToSave) {
      await savePostToBackend(post);
    }
    alert(`${postsToSave.length} post(s) saved!`);
    setSelectedPosts([]);
    loadSavedPosts();
  };

  // inside App component
const handleDeleteSavedPost = async (id) => {
  try {
    await deletePostFromBackend(id);
    loadSavedPosts(); // refresh the saved posts list
  } catch (err) {
    console.error("Error deleting post:", err)
  }
};


  return (
    <div style={container}>
      <h1>📜 Post Viewer</h1>

      <div style={buttonContainer}>
      <button
        onClick={handleSaveSelected}
        disabled={selectedPosts.length === 0}
        style={button(selectedPosts.length === 0)}
      >
        Save Selected Posts ({selectedPosts.length})
      </button>
      </div>


      <h2>All Posts from JSONPlaceholder</h2>
      {posts.length === 0 ? (
        <p>Loading posts...</p>
      ) : (
        <div style={postsGrid}>
          {posts.map((post) => (
            <div key={post.id} style={postContainer(selectedPosts.includes(post.id))}>
              <input
                type="checkbox"
                checked={selectedPosts.includes(post.id)}
                onChange={() => handleSelect(post.id)}
                style={{ marginBottom: "10px" }}
              />
              <strong>{post.title}</strong>
              <p>{post.body.slice(0, 80)}...</p>
            </div>
          ))}
        </div>
      )}

      <h2>💾 Saved Posts</h2>
      <button onClick={loadSavedPosts} style={smallButton}>
        Load Saved Posts
      </button>
      {savedPosts.length === 0 ? (
        <p>No saved posts yet.</p>
      ) : (
        <div style={postsGrid}>
          {savedPosts.map((post, index) => (
            <div key={index} style={savedPostContainer}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
              <button
                onClick={() => handleDeleteSavedPost(post.id)}
                style={{ ...smallButton, backgroundColor: "#ff4d4f", color: "white" }}
              >
                Delete
              </button>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
