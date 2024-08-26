"use client";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    setData(data);
    setLoading(false);
  };

  const handleRefresh = () => {
    fetchData();
  };

  return (
    <div>
      <button
        onClick={handleRefresh}
        className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
      >
        Refresh
      </button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        data?.map((item: any) => (
          <div key={item.id} className="mb-4">
            <h1 className="text-[30px]">{item.title}</h1>
            <h2>{item.body}</h2>
          </div>
        ))
      )}
    </div>
  );
}
