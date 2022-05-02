import * as prismicT from "@prismicio/types";
import { TextSliceProps } from "@components/Slices/TextSlice";
import { ImageSliceProps } from "@components/Slices/ImageSlice";
import { CodeSnippetProps } from "@components/Slices/CodeSnippet";

type Slices = {
  primary: {
    content: prismicT.RichTextField;
    title: prismicT.RichTextField;
    description: prismicT.RichTextField;
  };
};

type PostData = {
  author: string;
  authorLink: {
    url: string;
  };
  title: string;
  description: string;
  slices: Slices[];
};

export type Post = {
  uid: string;
  first_publication_date: string;
  data: PostData;
};

export type SlicesProps = TextSliceProps | ImageSliceProps | CodeSnippetProps;
