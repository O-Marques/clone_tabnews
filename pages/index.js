import React from "react";
import Image from "next/image";
import LikeButton from "./like_botton"; // Ensure this matches the file name

function Home() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Meet My Cat!</h1>
      <Image src="/my_cat.jpg" width={500} height={500} alt="My Cat" />

      <div style={{ marginTop: "20px" }}>
        <LikeButton />
      </div>
    </div>
  );
}

export default Home;
