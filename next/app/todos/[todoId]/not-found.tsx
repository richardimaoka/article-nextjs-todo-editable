"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// not-found.js components do not accept any props.
//   https://nextjs.org/docs/app/api-reference/file-conventions/not-found
export default function NotFound() {
  const pathname = usePathname();
  const todoId = pathname.replace("/todos/", "");

  return (
    <div>
      <h2>Not Found</h2>
      {/* &#39; is single-quote `'` with HTML escape */}
      <p>No todo with id = &#39;{todoId}&#39;</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
