import React, { useEffect, useState } from "react";
import axios from "axios"

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      _id: "1",
      image:
        "https://imgs.search.brave.com/GBpuKayzIT0mLH0oh2g_mtW6vdP6lzGfC0JUhkI55Uo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzAxLzI2Lzcy/LzM2MF9GXzEwMTI2/NzIzNV9Vc2d6YkNB/N1luOGpUNDBjWGNw/MlpVWW5idkxZd1JR/Ry5qcGc",
      caption: "My journey",
    },
  ]);

  useEffect(()=>{
    axios.get("http://localhost:3000/posts")
    .then((res)=>{
      setPosts(res.data.posts)
    })
  },[])

  return (
    <section className="bg-gray-900 min-h-screen py-10 px-4">
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h4 className="text-white font-semibold">{post.caption}</h4>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1 className="text-white text-center text-2xl">No posts available</h1>
      )}
    </section>
  );
};

export default Feed;
