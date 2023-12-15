import React from "react";
import { Input } from "./ui/input";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Popup() {
  const [data, setData]: any = useState();
  const [inputMessage, setInputMessage] = useState("");
  let count = 0;
  function GetInterest() {
    if (count > 0) return;

    let messages: Array<string> = inputMessage.split(" ");
    console.log(messages);
    const fetchData = async () => {
      const res = await fetch("/api/threads/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ interests: messages }),
      }).then();
      return await res.json();
    };
    let data = fetchData();

    data.then((dat) => {
      setData(dat);
    });
    count++;

    // return data;
  }

  return (
    <div className="absolute bg-white opacity-95 rounded-3xl w-full h-[130%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex   justify-center shadow-2xl z-20 flex-col gap-2">
      <Input
        className="w-1/2 mx-10"
        placeholder="Interests"
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
      />
      <Button
        onClick={() => {
          GetInterest();
        }}
        className="mx-10 my-5 w-20"
      >
        <Link href="/chat">Create</Link>
      </Button>
    </div>
  );
}
