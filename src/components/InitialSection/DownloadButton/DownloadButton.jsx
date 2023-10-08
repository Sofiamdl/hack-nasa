import React from "react";
import "./styles.css";

export function DownloadButton({ onClick }) {
  return (
      <div className="download-button" onClick={onClick}>
        Download
      </div>
  )
}

