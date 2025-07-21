import React,{ useState } from 'react'
import Comment from './components/Comment';
import CommentForm from './components/CommentForm';


function App() {
  const [comments, setComments] = useState([]);

  const addComment = (text, parentId = null) => {
    const newComment = {
      id: Date.now(),
      text,
      replies: []
    };

    if (parentId === null) {
      setComments(prev => [...prev, newComment]);
    } else {
      const addReply = (comments) => {
        return comments.map(comment => {
          if (comment.id === parentId) {
            return {
              ...comment,
              replies: [...comment.replies, newComment]
            };
          } else {
            return {
              ...comment,
              replies: addReply(comment.replies)
            };
          }
        });
      };

      setComments(prev => addReply(prev));
    }
  };


  return (
    <div className="max-w-xl mx-auto mt-10">
    <h1 className="text-2xl font-bold mb-4">Comments</h1>
    <CommentForm handleSubmit={addComment} />
    {comments.map(comment => (
      <Comment key={comment.id} comment={comment} addComment={addComment} />
    ))}
  </div>
  )
}

export default App
