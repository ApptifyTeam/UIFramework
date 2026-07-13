import type { Meta, StoryObj } from "@storybook/react-vite";
import { H1, H2, H3, H4, P, Blockquote, Code, Lead, Large, Small, Muted } from "./typography";
import * as React from "react";

const meta = {
  title: "Components/Typography",
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;

export const Showcase = {
  render: () => (
    <div className="space-y-8 max-w-2xl">
      <div>
        <span className="text-xs text-muted-foreground uppercase tracking-widest font-mono">H1 (Heading 1)</span>
        <H1>The Joke Tax Chronicles</H1>
      </div>

      <div>
        <span className="text-xs text-muted-foreground uppercase tracking-widest font-mono">H2 (Heading 2)</span>
        <H2>The King's Plan</H2>
      </div>

      <div>
        <span className="text-xs text-muted-foreground uppercase tracking-widest font-mono">H3 (Heading 3)</span>
        <H3>The Joke Tax</H3>
      </div>

      <div>
        <span className="text-xs text-muted-foreground uppercase tracking-widest font-mono">H4 (Heading 4)</span>
        <H4>People stopped laughing.</H4>
      </div>

      <div>
        <span className="text-xs text-muted-foreground uppercase tracking-widest font-mono">P (Paragraph)</span>
        <P>
          Once upon a time, in a far-away land, there was a king who was very rich,
          and very lazy. He loved jokes, and he wanted all the jokes to be free.
        </P>
      </div>

      <div>
        <span className="text-xs text-muted-foreground uppercase tracking-widest font-mono">Blockquote</span>
        <Blockquote>
          "During the reign of the lazy king, humor was taxed heavily. Those who could not afford to laugh were forced to cry."
        </Blockquote>
      </div>

      <div>
        <span className="text-xs text-muted-foreground uppercase tracking-widest font-mono">Code</span>
        <div className="mt-2">
          Use the <Code>laughter-service</Code> to initiate laughter callbacks.
        </div>
      </div>

      <div>
        <span className="text-xs text-muted-foreground uppercase tracking-widest font-mono">Lead</span>
        <Lead>
          A lead paragraph for drawing readers in, typically styled with slightly larger text.
        </Lead>
      </div>

      <div>
        <span className="text-xs text-muted-foreground uppercase tracking-widest font-mono">Large</span>
        <Large>Large text block with a bold font weight.</Large>
      </div>

      <div>
        <span className="text-xs text-muted-foreground uppercase tracking-widest font-mono">Small</span>
        <div>
          <Small>Small text, useful for footnotes and minor descriptions.</Small>
        </div>
      </div>

      <div>
        <span className="text-xs text-muted-foreground uppercase tracking-widest font-mono">Muted</span>
        <Muted>Muted color text for subtle descriptions.</Muted>
      </div>
    </div>
  ),
};
