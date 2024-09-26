import React, { useEffect } from "react";

const InstagramEmbedPost = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink="https://www.instagram.com/reel/C036dUzSdY9/?utm_source=ig_embed&amp;utm_campaign=loading"
      data-instgrm-version="14"
      style={{
        background: "#FFF",
        border: 0,
        borderRadius: "3px",
        boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
        margin: "1px",
        maxWidth: "540px",
        minWidth: "326px",
        padding: "0",
        width: "99.375%",
        width: "calc(100% - 2px)",
      }}
    >
      <div style={{ padding: "16px" }}>
        <a
          href="https://www.instagram.com/reel/C036dUzSdY9/?utm_source=ig_embed&amp;utm_campaign=loading"
          style={{
            background: "#FFFFFF",
            lineHeight: 0,
            textAlign: "center",
            textDecoration: "none",
            width: "100%",
          }}
          target="_blank"
          rel="noreferrer"
        >
          Instagram Post
        </a>
      </div>
    </blockquote>
  );
};

export default InstagramEmbedPost;
