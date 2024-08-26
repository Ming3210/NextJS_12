import React from "react";
/*
  NextJS có 2 loại component
  1. client components
  2. server components
  Khi tạo 1 cái components ( expoet default function ) thì mặc định sẽ là server components => chạy trong môi trường server
  - SSR (server side rendering : Lấy dữ liệu ở phía server sau đó trả về trình duyệt client
  Tối ưu cho việc SEO : search engine optimization)
*/

export default async function page() {
  let data: any = await fetchData();
  console.log(1111, data);

  return (
    <div>
      {data?.map((item: any) => {
        return <h1 key={item.id}>{item.name}</h1>;
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
