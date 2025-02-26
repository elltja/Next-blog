import { getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt();

function getPost(slug: string) {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug);
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = getPost(slug);

  if (!post) notFound();

  const html = md.render(post.content);

  return (
    <>
      <h1>{post?.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
