"use client";
import React, { useEffect, useState } from "react";

// Render dữ liệu useClient
export default function Page() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data: any) => setUser(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      page
      {user?.map((item: any) => {
        return (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.email}</p>
          </div>
        );
      })}
    </div>
  );
}
async function fetchData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");

  let data = await response.json();
  return data;
  // .then((response) => response.json())
  // .then((data) => {

  //   return data;
  // });
}
