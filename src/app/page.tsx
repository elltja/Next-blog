import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {posts.map((post, index) => {
        return (
          <PostCard
            key={index}
            slug={post.slug}
            title={post.title}
            description={post.description}
          />
        );
      })}
    </div>
  );
}
