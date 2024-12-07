import React, { useState, useEffect } from "react";

const LikeButton = () => {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    // Check if we are in the browser before accessing localStorage
    if (typeof window !== "undefined") {
      const savedLikes = localStorage.getItem("likes");
      setLikes(savedLikes ? parseInt(savedLikes, 10) : 0);
    }
  }, []); // Run this only on the client side when the component mounts

  const handleLike = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    if (typeof window !== "undefined") {
      localStorage.setItem("likes", newLikes); // Save to localStorage
    }
  };

  return (
    <button onClick={handleLike} style={{ padding: "10px", fontSize: "16px" }}>
      ❤️ Like {likes}
    </button>
  );
};

export default LikeButton;
