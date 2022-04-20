import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { PrismicRichText } from "@prismicio/react";
import { createClient } from "@services/prismic";
import { Post } from "@definitions/Interfaces/prismic/slices";
import Wrapper from "@components/Wrapper";

import { BsCalendarDateFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

import { Article, PostInfo } from "./index.styles";

type PostsProps = {
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
          <Link href={`/posts/${post.uid}`} key={post.uid}>
            <Article>
              <PrismicRichText field={post.data.slices[0].primary.title} />
              <PrismicRichText
                field={post.data.slices[0].primary.description}
              />
              <PostInfo>
                <div>
                  <BsCalendarDateFill />
                  <time itemProp="dateCreated datePublished">
                    {new Date(post.first_publication_date).toLocaleDateString(
                      "pt-BR",
                      {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      }
                    )}
                  </time>
                </div>
                <div>
                  <FaUser />
                  <p itemProp="author publisher name">{post.data.author}</p>
                </div>
              </PostInfo>
            </Article>
          </Link>
        ))}
      </Wrapper>
    </>
  );
};

export async function getStaticProps() {
  const client = createClient();

  const { results: posts } = await client.get();

  return {
    props: {
      posts,
    },
  };
}

export default Posts;
