export const container = {
  margin: "20px",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  color: "#222", // dark text for light background; works on dark too
};

export const button = (disabled) => ({
  padding: "8px 15px",
  marginBottom: "15px",
  border: "none",
  borderRadius: "5px",
  cursor: disabled ? "not-allowed" : "pointer",
  backgroundColor: disabled ? "#aaa" : "#007bff", // blue button
  color: "#fff",
});

export const smallButton = {
  padding: "5px 10px",
  marginBottom: "10px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  backgroundColor: "#28a745", // green
  color: "#fff",
};

export const postContainer = (selected) => ({
  display: "flex",
  flexDirection: "column",
  border: "1px solid #ccc",
  padding: "15px",
  margin: "10px",
  borderRadius: "10px",
  transition: "transform 0.2s, background-color 0.2s",
  width: "300px",
  backgroundColor: selected ? "#e0f0ff" : "#f9f9f9", // light blue highlight if selected
  color: "#222", // text color
});

export const postsGrid = {
  display: "flex",
  flexWrap: "wrap",
  gap: "15px",
};

export const savedPostContainer = {
  border: "1px solid #328bb5ff",
  padding: "15px",
  margin: "10px",
  borderRadius: "10px",
  boxShadow: "0 2px 5px rgba(196, 188, 188, 0.92)",
  width: "300px",
  backgroundColor: "#f9f9f9", // neutral background
  color: "#222",
};

export const buttonContainer = {
  position: "sticky",
  top: "0px", // distance from top
  zIndex: 100, // make sure it’s above other elements
  backgroundColor: "#fff", // neutral background for visibility
  padding: "10px 0",
};
