"use client";

import { useState } from "react";

type ChatType = {
  id: number;
  message: string;
  user: any;
};

export default function PostList(id: any) {
  const [chats, useChats] = useState<ChatType[]>([
    {
      id: 2,
      message: "Welcome",
      user: "Tom",
    },
  ]);

  const ChatSection = (
    <div>
      {chats.map((chat) => {
        return <h4>{chat.message}</h4>;
      })}
    </div>
  );

  return (
    <div className="text-center">
      <h1>Thread {id.params.slug}</h1>
      <h3>Topic</h3>

      {ChatSection}
    </div>
  );
}
