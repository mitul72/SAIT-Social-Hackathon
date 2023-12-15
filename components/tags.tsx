import React from "react";

export default function Tags(props: any) {
  return (
    <div className="flex gap-2">
      {props.tags.map((value: string, index: number) => (
        <div
          key={index}
          className="px-4 py-[2px] bg-black bg-opacity-10 rounded-lg "
        >
          <p> {value}</p>
        </div>
      ))}
    </div>
  );
}
