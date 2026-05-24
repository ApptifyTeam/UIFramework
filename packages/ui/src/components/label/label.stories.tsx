import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Label } from './label';
import * as React from 'react';

const meta = {
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['ai-generated'],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Email Address',
    htmlFor: 'email',
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Email Address')).toBeVisible();
  },
};
