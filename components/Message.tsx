import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default function Message(props: any) {
  return (
    <div className="flex items-awstart space-x-2">
      <Avatar className="h-8 w-8">
        <AvatarImage alt="User 1" src="/placeholder.svg?height=32&width=32" />
        <AvatarFallback>U1</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <h3 className="text-sm font-semibold">User 1</h3>
        <p className="text-sm text-gray-500">{props.message}</p>
      </div>
    </div>
  );
}
