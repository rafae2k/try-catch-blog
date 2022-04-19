import * as prismicT from "@prismicio/types";

type Slices = {
  primary: {
    content: prismicT.RichTextField;
    title: prismicT.RichTextField;
    description: prismicT.RichTextField;
  };
};

type postData = {
  author: string;
  slices: Slices[];
};

export type Post = {
  uid: string;
  first_publication_date: string;
  data: postData;
};
