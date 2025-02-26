import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div>
      {posts.map((post, index) => {
        return <PostCard key={index} slug={post.slug} title={post.title} />;
      })}
    </div>
  );
}
