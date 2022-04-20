import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Comments from "@components/Comments";

export default {
  title: "Components/Comments",
  component: Comments,
} as ComponentMeta<typeof Comments>;

export const Default: ComponentStory<typeof Comments> = () => <Comments />;
