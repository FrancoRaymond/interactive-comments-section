import React, { useState } from "react";
import CommentForm from "./CommentForm";

export default function Comment({ comment, addComment }) {
  const [showReply, setShowReply] = useState(false);

  return (
    <div className="pl-4 border-l mt-2">
      <p>{comment.text}</p>
      <button
        onClick={() => setShowReply(!showReply)}
        className="text-sm text-blue-500"
      >
        {showReply ? "Cancel" : "Reply"}
      </button>
      {showReply && (
        <CommentForm
          handleSubmit={(text) => {
            addComment(text, comment.id);
            setShowReply(false);
          }}
        />
      )}
      {comment.replies.length > 0 && (
        <div className="mt-2">
          {comment.replies.map((reply) => (
            <Comment key={reply.id} comment={reply} addComment={addComment} />
          ))}
        </div>
      )}
    </div>
  );
}
