import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();
  return (
    <div>
      {posts.map((post, index) => {
        return <div key={index}>{post.slug}</div>;
      })}
    </div>
  );
}
