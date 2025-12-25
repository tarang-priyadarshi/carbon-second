import React, { useState } from "react";
import { addTip } from "../../services/api";
import { toast } from "react-toastify";

const ShareTipForm = ({ onAdd }) => {
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content) return toast.error("Tip content is required");

    try {
      const tip = await addTip({ content, tags: tags.split(",") });
      toast.success("Tip added!");
      onAdd(tip);
      setContent("");
      setTags("");
    } catch (err) {
      toast.error("Failed to add tip");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <textarea
        className="form-control mb-2"
        placeholder="Share your eco tip..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Tags (comma separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <button type="submit" className="btn btn-success">
        Share Tip
      </button>
    </form>
  );
};

export default ShareTipForm;
