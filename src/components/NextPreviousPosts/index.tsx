import { Post } from "@definitions/Interfaces/prismic/slices";
import { createClient } from "@services/prismic";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";

import { Container } from "./styles";

interface NextPreviousPostsProps {}

type Posts = [Post];

function NextPreviousPosts() {
  const [posts, setPosts] = useState();
  const router = useRouter();

  const { slug } = router.query;

  useEffect(() => {
    (async () => {
      const client = createClient();
      const { results } = await client.get();
      setPosts(results);
    })();
  }, []);

  const postIndex = posts?.findIndex((post) => post.uid === slug);

  return (
    <Container>
      {posts && posts[postIndex - 1] && (
        <Link href={`/posts/${posts[postIndex - 1].uid}`}>
          <div>
            <h3>Post Anterior</h3>
            <p>{posts[postIndex - 1].data.slices[0].primary.title[0].text}</p>
          </div>
        </Link>
      )}
      {posts && posts[postIndex + 1] && (
        <Link href={`/posts/${posts[postIndex + 1].uid}`}>
          <div>
            <h3>Próximo post</h3>
            <p>{posts[postIndex + 1].data.slices[0].primary.title[0].text}</p>
          </div>
        </Link>
      )}
    </Container>
  );
}

export default NextPreviousPosts;
