import type { Meta, StoryObj } from '@storybook/react';

import { TestFont } from './TestFont';

const meta: Meta<typeof TestFont> = {
  title: 'Example/TestFont',
  component: TestFont,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof TestFont>;


export const Primary: Story = {
  args: {
    value: 'Test string',
  },
};

