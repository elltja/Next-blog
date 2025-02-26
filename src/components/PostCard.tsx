import Link from "next/link";
import React from "react";

export default function PostCard({
  slug,
  title,
  description,
}: {
  slug: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-md border border-gray-300 w-96 h-[150px] shadow-md p-5 flex flex-col gap-2">
      <Link
        className="text-xl font-semibold hover:underline"
        href={`/posts/${slug}`}
      >
        {title}
      </Link>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
