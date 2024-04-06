import { Novel as NovelType } from "@/@types/entity";
import React from "react";

type NovelProps = {
  novel: NovelType;
};

const Novel = ({ novel }: NovelProps) => {
  return (
    <article className="w-[300px] max-w-[80%] p-2 bg-gray-200 h-[300px] rounded shadow">
      {novel.image && (
        <div className="mx-auto">
          <img
            src={novel.image}
            alt={novel.title}
            className="size-8 m-auto object-contain rounded-full shadow-md"
          />
        </div>
      )}
      <h3 className="font-bold text-xl my-2">{novel.title}</h3>
    </article>
  );
};

export default Novel;
