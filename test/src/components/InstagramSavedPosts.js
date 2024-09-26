import React, { useEffect, useState } from "react";

const InstagramSavedPosts = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [instagramId, setInstagramId] = useState();

  useEffect(() => {
    setInstagramId("kyngiin");
  });

  const openInstagramSavedPosts = () => {
    window.open(
      `https://www.instagram.com/${instagramId}/saved/all-posts/`,
      "_blank"
    );
  };

  return (
    <div>
      <button onClick={openInstagramSavedPosts} style={{ marginTop: "20px" }}>
        Instagram 저장한 게시물 열기
      </button>
    </div>
  );
};

export default InstagramSavedPosts;
