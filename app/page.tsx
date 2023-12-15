"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

type thread = {
  id: number;
  topics: string[];
  users: any[];
};

export default function Home() {
  const router = useRouter();

  const [threads, setThreads] = useState<thread[]>([
    {
      id: 0,
      topics: ["sports", "yoga"],
      users: ["jesus"],
    },
    {
      id: 1,
      topics: ["checkbook", "accounting"],
      users: ["jesus"],
    },
    {
      id: 2,
      topics: ["music", "parties"],
      users: ["jesus"],
    },
  ]);

  function ThreadsCompoent() {
    return (
      <div className="mx-[2vw]">
        {threads.map((thread) => (
          <div className="p-4 my-[3vh]" style={{ border: "1px solid" }}>
            <div className="flex justify-evenly">
              {thread.topics.map((topic) => (
                <h3>{topic}</h3>
              ))}
            </div>
            <Button
              className="ml-auto block"
              onClick={() => {
                router.push(`thread/${thread.id}`);
              }}
            >
              JOIN
            </Button>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-center">
        <Input
          type="search"
          placeholder="Type your interests"
          className="ml-[5vw] mt-[3vh] px-[2vw] py-[2vh] rounded-xl
           border border-white outline-1 outline-white
      w-[50vw]"
          style={{ border: "1px solid black", boxSizing: "border-box" }}
        />
      </div>
      <ThreadsCompoent />
    </div>
  );
}
