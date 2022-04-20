import React from "react";
import Head from "next/head";
import { GetStaticPaths, NextPage } from "next";
import { PrismicRichText } from "@prismicio/react";
import * as prismicT from "@prismicio/types";
import { createClient } from "@services/prismic";
import Wrapper from "@components/Wrapper";
import Comments from "@components/Comments";
import { BsCalendarDateFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

import NextPreviousPosts from "@components/NextPreviousPosts";
import { Article, PostInfo, Header, Content } from "./slug.styles";

type Props = {
  post: {
    uid: string;
    title: string;
    thumbnail: {
      url: string;
      alt: string;
    };
    content: prismicT.RichTextField;
    datePublished: string;
    author: string;
  };
};

const Post: NextPage<Props> = ({ post }) => (
  <>
    <Head>
      <title>{post.title} | Try...Catch</title>
    </Head>
    <Wrapper>
      <img src={post.thumbnail.url} alt={post.thumbnail.alt} />
      <Article>
        <Header>
          <h1>{post.title}</h1>
          <PostInfo>
            <div>
              <BsCalendarDateFill />
              <time itemProp="dateCreated datePublished">
                {new Date(post.datePublished).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </div>
            <div>
              <FaUser />
              <p itemProp="author publisher name">{post.author}</p>
            </div>
          </PostInfo>
        </Header>
        <Content>
          <PrismicRichText field={post.content} />
        </Content>
      </Article>
      <NextPreviousPosts />
      <Comments />
    </Wrapper>
  </>
);

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => ({
  paths: [], // indicates that no page needs be created at build time
  fallback: "blocking", // indicates the type of fallback
});

type Params = {
  params: {
    slug: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const { slug } = params;
  const client = createClient();

  const post = await client.getByUID("blog-post", slug);

  return {
    props: {
      post: {
        uid: post.uid,
        title: post.data.slices[0].primary.title[0].text,
        thumbnail: post.data.thumbnail,
        content: post.data.slices[0].primary.content,
        datePublished: post.first_publication_date,
        author: post.data.author,
      },
    },
  };
};

export default Post;
