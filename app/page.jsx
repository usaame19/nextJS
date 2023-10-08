import { Suspense } from "react";
import Navbar from "./components/Navbar";
import PostList from "./posts/PostList";
import UsersList from "./users/UsersList";

export default function Home() {
  return (
    <main>
        <PostList />
    </main>
  );
}