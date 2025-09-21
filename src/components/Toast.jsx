import React from "react";

export const Toast = ({ message }) => {
  return (
    <div className="toast toast-top toast-end z-50">
      <div className="alert alert-info">
        <span>{message}</span>
      </div>
    </div>
  );
};
