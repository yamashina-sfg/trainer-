"use client";

import { useMemo, useState } from "react";
import type { Post } from "@/types";
import { bodyPartFilters, postTypeFilters, returnPhaseFilters, sportFilters } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { PostCard } from "@/components/PostCard";

function filterButtonClass(active: boolean) {
  return cn(
    "whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-bold transition",
    active ? "border-teal bg-teal-soft text-teal" : "border-slate-200 bg-white text-slate-600",
  );
}

export function PostFilters({ posts }: { posts: Post[] }) {
  const [postType, setPostType] = useState("すべて");
  const [bodyPart, setBodyPart] = useState("すべて");
  const [sport, setSport] = useState("すべて");
  const [returnPhase, setReturnPhase] = useState("すべて");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesType = postType === "すべて" || post.type === postType;
      const matchesPart = bodyPart === "すべて" || post.bodyPart === bodyPart;
      const matchesSport = sport === "すべて" || post.sport === sport;
      const matchesPhase = returnPhase === "すべて" || post.returnPhase === returnPhase;
      return matchesType && matchesPart && matchesSport && matchesPhase;
    });
  }, [bodyPart, postType, posts, returnPhase, sport]);

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex gap-2 overflow-x-auto pb-1">
          {postTypeFilters.map((item) => (
            <button key={item} className={filterButtonClass(item === postType)} onClick={() => setPostType(item)}>
              {item}
            </button>
          ))}
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {returnPhaseFilters.map((item) => (
            <button key={item} className={filterButtonClass(item === returnPhase)} onClick={() => setReturnPhase(item)}>
              {item}
            </button>
          ))}
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {bodyPartFilters.map((item) => (
            <button key={item} className={filterButtonClass(item === bodyPart)} onClick={() => setBodyPart(item)}>
              {item}
            </button>
          ))}
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {sportFilters.map((item) => (
            <button key={item} className={filterButtonClass(item === sport)} onClick={() => setSport(item)}>
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => <PostCard key={post.id} post={post} />)
        ) : (
          <div className="sfg-card py-10 text-center text-sm text-slate-600">該当する投稿はまだありません。</div>
        )}
      </div>
    </div>
  );
}
