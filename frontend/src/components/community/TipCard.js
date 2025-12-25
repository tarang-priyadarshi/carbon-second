import React from "react";

const TipCard = ({ tip, onLike }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <p className="card-text">{tip.content}</p>
        <small className="text-muted">By: {tip.authorId.name}</small>
        <div className="mt-2 d-flex justify-content-between align-items-center">
          <span>Likes: {tip.likes}</span>
          <button className="btn btn-sm btn-outline-success" onClick={() => onLike(tip._id)}>
            Like
          </button>
        </div>
      </div>
    </div>
  );
};

export default TipCard;
