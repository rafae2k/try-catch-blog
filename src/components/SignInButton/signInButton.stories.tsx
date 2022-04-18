import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SignInButton from "../SignInButton";

export default {
  title: "Components/SignInButton",
  component: SignInButton,
} as ComponentMeta<typeof SignInButton>;

const Template = (args: any) => <SignInButton {...args} />;

export const Default: ComponentStory<typeof SignInButton> = Template.bind({});
