import * as prismicT from "@prismicio/types";

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
