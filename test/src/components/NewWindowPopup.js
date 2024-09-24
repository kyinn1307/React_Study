import React, { useState, useEffect } from "react";

export const NewWindowPopup = ({ content }) => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        src= {content}
        title="Youtube"
        style={{ width: "50%", height: "50%", border: "none" }}
      />
    </div>
  );
};
