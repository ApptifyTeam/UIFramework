import type { Meta, StoryObj } from '@storybook/react-vite';
import { Label } from './label';
import * as React from 'react';

const meta = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Email Address',
    htmlFor: 'email',
  },
};
