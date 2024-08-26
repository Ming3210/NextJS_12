import React from "react";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  const post = await res.json();

  return (
    <div>
      <h1 className="text-[30px] font-bold">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
