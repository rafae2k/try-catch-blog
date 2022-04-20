import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import NavLink, { NavLinkProps } from "@components/Header/NavLink";

export default {
  title: "Components/NavLink",
  component: NavLink,
} as ComponentMeta<typeof NavLink>;

function Template(args: NavLinkProps) {
  return <NavLink {...args}>
    <a>Click Me</a>
  </NavLink>
}

export const Default: ComponentStory<typeof NavLink> = Template.bind({});

Default.args = {
  href: "/",
};
