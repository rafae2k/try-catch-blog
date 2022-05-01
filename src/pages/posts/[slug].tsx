import React from "react";
import Head from "next/head";
import Image from "next/image";
import { GetStaticPaths, NextPage } from "next";
import * as prismicT from "@prismicio/types";
import { createClient } from "@services/prismic";
import { SliceZone } from "@prismicio/react";

import Wrapper from "@components/Wrapper";
import PostInfo from "@components/PostInfo";
import NextPreviousPosts from "@components/NextPreviousPosts";
import Comments from "@components/Comments";

import { Article, Header, Content } from "../../styles/pages/posts/slug.styles";
import TextSlice from "@components/Slices/TextSlice";
import CodeSnippet from "@components/Slices/CodeSnippet";
import ImageSlice from "@components/Slices/ImageSlice";

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
    authorLink: string;
  };
};

const Post: NextPage<Props> = ({ post }) => {
  const components = {
    paragraph: TextSlice,
    code_snippet: CodeSnippet,
    image: ImageSlice,
  };

  console.log(post);

  return (
    <>
      <Head>
        <title>{post.title} | Try...Catch</title>
      </Head>
      <Wrapper>
        <Image
          src={post.thumbnail.url}
          alt={post.thumbnail.alt}
          width={800}
          height={450}
        />
        <Article>
          <Header>
            <h1>{post.title}</h1>
            <PostInfo
              author={post.author}
              publicationDate={post.datePublished}
              authorLink={post.authorLink}
            />
          </Header>
          <Content>
            {/* <PrismicRichText field={post.content} /> */}
            <SliceZone components={components} slices={post.content} />
          </Content>
        </Article>
        <NextPreviousPosts />
        <Comments />
      </Wrapper>
    </>
  );
};

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => ({
  paths: [], // indicates that no page needs be created at build time
  fallback: "blocking", // indicates the type of fallback
});

type Params = {
  params: {
    slug: string;
    locale: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const { slug, locale } = params;
  const client = createClient();
  const post = await client.getByUID("post", slug, { lang: locale });

  return {
    props: {
      post: {
        uid: post.uid,
        title: post.data.title,
        thumbnail: post.data.thumbnail,
        content: post.data.slices,
        datePublished: post.first_publication_date,
        author: post.data.author,
        authorLink: post.data.authorLink.url || "",
      },
    },
  };
};

export default Post;
