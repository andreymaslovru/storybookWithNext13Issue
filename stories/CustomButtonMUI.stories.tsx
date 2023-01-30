import type { Meta, StoryObj } from '@storybook/react';

import CustomButtonMUI from './CustomButtonMUI';

const meta: Meta<typeof CustomButtonMUI> = {
  title: 'Example/CustomButtonMUI',
  component: CustomButtonMUI,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof CustomButtonMUI>;


export const Primary: Story = {
  args: {
    children: 'Test string MUI btn'
  },
};

