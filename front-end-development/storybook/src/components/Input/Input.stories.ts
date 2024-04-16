import { Meta, StoryObj } from "@storybook/react";

import Input from ".";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layouyt: "centered",
  },
  tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    type: "text",
    placeholder: "Insert text here",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Password",
  },
};

export const Number: Story = {
  args: {
    type: "number",
    placeholder: "Number",
  },
};

export const Date: Story = {
  args: {
    type: "date",
    placeholder: "Date",
  },
};
