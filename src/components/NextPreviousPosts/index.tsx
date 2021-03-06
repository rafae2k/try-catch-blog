import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import * as prismicT from "@prismicio/types";
import { createClient } from "@services/prismic";

import { Container, NextPrevContainer } from "./styles";

type PrismicDocumentPage = prismicT.PrismicDocument;

function NextPreviousPosts() {
  const [posts, setPosts] = useState<PrismicDocumentPage[]>([]);
  const router = useRouter();

  const { slug } = router.query;

  useEffect(() => {
    (async () => {
      const client = createClient();
      const { results } = await client.get<PrismicDocumentPage>();
      setPosts(results);
    })();
  }, []);

  const postIndex = posts.findIndex((post) => post.uid === slug);

  return (
    <Container>
      {posts.length > 0 && posts[postIndex - 1] && (
        <Link href={`/posts/${posts[postIndex - 1].uid}`} passHref>
          <NextPrevContainer>
            <h3>Post Anterior</h3>
            <p>{posts[postIndex - 1].data.title}</p>
          </NextPrevContainer>
        </Link>
      )}
      {posts.length > 0 && posts[postIndex + 1] && (
        <Link href={`/posts/${posts[postIndex + 1].uid}`} passHref>
          <NextPrevContainer>
            <h3>Próximo post</h3>
            <p>{posts[postIndex + 1].data.title}</p>
          </NextPrevContainer>
        </Link>
      )}
    </Container>
  );
}

export default NextPreviousPosts;
