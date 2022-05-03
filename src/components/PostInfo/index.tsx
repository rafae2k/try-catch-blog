import { BsCalendarDateFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

import { Container } from "./styles";

interface PostInfoProps {
  publicationDate: string;
  author: string;
  authorLink: string;
}

function PostInfo({ publicationDate, author }: PostInfoProps) {
  return (
    <Container>
      <div>
        <BsCalendarDateFill />
        <time itemProp="dateCreated datePublished">
          {new Date(publicationDate).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </time>
      </div>
      <div>
        <FaUser />
        <p itemProp="author publisher name">{author}</p>
      </div>
    </Container>
  );
}

export default PostInfo;
