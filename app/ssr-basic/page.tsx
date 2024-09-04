import React from "react";

export default async function Page() {
  let data: any = await fetchData();
  
  console.log(1111, data);
  return (
    <div>
      {data?.map((item: any) => {
        return (
          <div key={item.id}>
            <h1 className="text-[30px]">{item.title}</h1>
            <h2>{item.body}</h2>
          </div>
        );
      })}
    </div>
  );
}
async function fetchData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");

  let data = await response.json();
  return data;
}
