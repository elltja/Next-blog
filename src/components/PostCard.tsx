import Link from "next/link";
import React from "react";

export default function PostCard({
  slug,
  title,
}: {
  slug: string;
  title: string;
}) {
  return (
    <div>
      <Link href={`/posts/${slug}`}>{title}</Link>
    </div>
  );
}
