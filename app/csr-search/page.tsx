"use client";
import React, { useEffect, useState } from "react";

export default function page() {
  const [posts, setPosts] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState<any>("");

  useEffect(() => {
    const loadPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
    };

    loadPosts();
  }, []);

  // Lọc danh sách bài viết dựa trên từ khóa tìm kiếm
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div>
      <h1>Tìm Kiếm Bài viết CSR</h1>
      <input
        type="text"
        placeholder="Nhập từ khóa tìm kiếm..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.id}>
            <h2 className="text-[30px] font-bold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
