import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import NavLink from "../NavLink";
import { NavLinkProps } from "@components/Header/NavLink";

export default {
  title: "Components/NavLink",
  component: NavLink,
} as ComponentMeta<typeof NavLink>;

const Template = (args: NavLinkProps) => (
  <NavLink {...args}>
    <a>Click Me</a>
  </NavLink>
);

export const Default: ComponentStory<typeof NavLink> = Template.bind({});

Default.args = {
  href: "/",
};
