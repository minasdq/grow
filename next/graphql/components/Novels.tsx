"use client";
import { useQuery } from "@apollo/client";

import NovelComponent from "./Novel";

import { GET_NOVELS } from "@/graphql/queries";
import { Novel } from "@/@types/entity";

const Novels = () => {
  const { data, loading, error } = useQuery<{ novels: Novel[] }>(GET_NOVELS);
  return error || loading ? (
    <p>Loading...</p>
  ) : (
    <div className="flex gap-8 flex-wrap">
      {data?.novels.map((novel) => (
        <NovelComponent key={novel.id} novel={novel} />
      ))}
    </div>
  );
};

export default Novels;
