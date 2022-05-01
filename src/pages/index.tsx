import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { createClient } from "@services/prismic";
import { Post } from "@definitions/Interfaces/prismic/slices";

import Wrapper from "@components/Wrapper";
import PostInfo from "@components/PostInfo";

import { Article } from "../styles/pages/posts/index.styles";

export type PostsProps = {
  posts: Post[];
};

const Posts: NextPage<PostsProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title> Posts | Try...Catch </title>
      </Head>

      <Wrapper>
        {posts?.map((post) => (
          <Link href={`/posts/${post.uid}`} key={post.uid} passHref>
            <Article>
              <h1>{post.data.title}</h1>
              <p>{post.data.description}</p>
              <PostInfo
                author={post.data.author}
                publicationDate={post.first_publication_date}
                authorLink={post.data.authorLink.url}
              />
            </Article>
          </Link>
        ))}
      </Wrapper>
    </>
  );
};

type GetStaticProps = {
  locale: string;
};

export async function getStaticProps({ locale }: GetStaticProps) {
  const client = createClient();

  const { results: posts } = await client.get({ lang: locale });

  return {
    props: {
      posts,
    },
  };
}

export default Posts;
