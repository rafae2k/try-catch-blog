import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SignInButton from ".";

export default {
  title: "Components/SignInButton",
  component: SignInButton,
} as ComponentMeta<typeof SignInButton>;

function Template(args: any) {
  return <SignInButton {...args} />
}

export const Default: ComponentStory<typeof SignInButton> = Template.bind({});
