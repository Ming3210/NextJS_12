import React from "react";

// The page component is an async function due to SSR.
export default async function Page() {
  let data: any = [];
  let error: string | null = null;

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/nonexistent-url"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data.");
    }

    data = await response.json();
  } catch (err) {
    error = "Lỗi khi tải dữ liệu. Vui lòng thử lại sau.";
  }

  if (error) {
    return <h1 className="text-red-500">{error}</h1>;
  }

  return (
    <div>
      {data?.map((item: any) => (
        <div key={item.id}>
          <h1 className="text-[30px]">{item.title}</h1>
          <h2>{item.body}</h2>
        </div>
      ))}
    </div>
  );
}
