import { Meta, StoryObj } from "@storybook/react";
import Menu from "../components/Menu/menu"

const meta: Meta<typeof Menu> = {
    title: "Menu",
    component: Menu,
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {

    }
}