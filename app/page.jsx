import PostList from "./posts/PostList";

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <main>
        <PostList />
    </main>
  );
}
