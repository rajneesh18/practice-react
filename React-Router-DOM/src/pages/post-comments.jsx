import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostComments = () => {
  const { commentsResponse: comments, postResponse: post } = useLoaderData();
  // const [comments, setComments] = useState([]);
  // const [post, setPost] = useState(null);
  // const [loading, setLoading] = useState(false);

  // const { postId } = useParams();
  const navigate = useNavigate();

  // const fetchData = async () => {
  //   setLoading(true);
  //   try {
  //     const [postResponse, commentsResponse] = await Promise.all([
  //       axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`),
  //       axios.get(
  //         `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  //       ),
  //     ]);

  //     setPost(postResponse.data);
  //     setComments(commentsResponse.data);
  //   } catch (error) {
  //     console.error("Error Fetching Data: ", error);
  //   }
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div>
      <div>
        {post.data && (
          <div className="post-card">
            <h2>{post.data.title}</h2>
            <p>{post.data.body}</p>
          </div>
        )}
        <h2>Comments</h2>
        <ul>
          {comments.data.map((comment) => (
            <li key={comment.id}>
              <strong>{comment.name}</strong>: {comment.body}
            </li>
          ))}
        </ul>
      </div>

      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export async function postCommentsLoader(params) {
  const [postResponse, commentsResponse] = await Promise.all([
    axios.get(
      `https://jsonplaceholder.typicode.com/posts/${params.params.postId}`
    ),
    axios.get(
      `https://jsonplaceholder.typicode.com/posts/${params.params.postId}/comments`
    ),
  ]);

  return { postResponse, commentsResponse };
}

export default PostComments;
