import React, { useEffect, useState } from "react";
import TipCard from "../components/community/TipCard";
import ShareTipForm from "../components/community/ShareTipForm";
import { getTips, likeTip } from "../services/api";
import { toast } from "react-toastify";

const Community = () => {
  const [tips, setTips] = useState([]);

  const fetchTips = async () => {
    try {
      const data = await getTips();
      setTips(data);
    } catch (err) {
      toast.error("Failed to fetch tips");
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTips();
  }, []);

  const handleAddTip = (tip) => setTips([tip, ...tips]);

  const handleLike = async (id) => {
    try {
      const updated = await likeTip(id);
      setTips(tips.map((t) => (t._id === id ? updated : t)));
    } catch (err) {
      toast.error("Failed to like tip");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Community / Eco Tips</h2>
      <ShareTipForm onAdd={handleAddTip} />
      {tips.map((tip) => (
        <TipCard key={tip._id} tip={tip} onLike={handleLike} />
      ))}
    </div>
  );
};

export default Community;
