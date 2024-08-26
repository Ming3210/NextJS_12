"use client";
import React, { useEffect, useState } from "react";

export default function page() {
  const [data, setData] = useState<any>();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);
  return (
    <div>
      {data?.map((user: any) => {
        return <div key={user.id}>{user.name}</div>;
      })}
    </div>
  );
}
