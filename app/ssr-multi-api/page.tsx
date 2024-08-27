"use client";
import React, { useEffect, useState } from "react";

async function getUsers() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  return res.json();
}

async function getPosts() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  return res.json();
}

export default function Page() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch data in parallel
    const fetchData = async () => {
      const [usersData, postsData] = await Promise.all([
        getUsers(),
        getPosts(),
      ]);
      setUsers(usersData);
      setPosts(postsData);
    };

    fetchData();
  }, []); // Empty dependency array to run only once on mount

  return (
    <div className="flex gap-10">
      <div className="w-[40%]">
        <h1 className="text-[30px]">Users</h1>
        {users.map((user: any) => (
          <div key={user.id}>
            <h2>{user.name}</h2>
          </div>
        ))}
      </div>

      <div className="w-[50%]">
        <h1 className="text-[30px]">Posts</h1>
        {posts.map((post: any) => (
          <div key={post.id}>
            <p>{post.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
