import React from "react";
import { useTheme } from "@styles/theme";
import { useUtterances } from "../../hooks/useScript";

const commentNodeId = "comments";

const Comments = () => {
  const { theme } = useTheme();

  const utterancesTheme =
    theme.title === "dark" ? "github-dark" : "github-light";

  useUtterances(commentNodeId, utterancesTheme);
  return (
    <div>
      <h1>Comentários</h1>
      <div id={commentNodeId} />
    </div>
  );
};

export default Comments;
