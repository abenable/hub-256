import { useState } from "react";
import axios from "axios";
import "./admin.css";

const Admin = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/blog/addposts");
      alert("Post added successfully!");
    } catch (error) {
      console.error("Error adding post:", error);
      alert("Failed to add post. Please try again.");
    }
  };

  return (
    <div className="admin">
      <div>
        <h2>Add new posts</h2>
        <form method="post" onSubmit={handleSubmit}>
          <input
            type="text"
            value={query}
            name="query"
            id="query"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <button type="submit">Add {query} posts</button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
