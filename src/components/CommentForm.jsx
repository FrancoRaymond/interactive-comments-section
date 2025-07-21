import React, { useState } from "react";

export default function CommentForm({ handleSubmit }) {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    handleSubmit(text);
    setText("");
  };

  return (
    <form onSubmit={onSubmit} className="my-2">
      <input
        className="border p-2 w-full text-sm"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a comment..."
      />
    </form>
  );
}
