"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@apptify-labs/ui";
import { Input } from "@apptify-labs/ui";
import { Label } from "@apptify-labs/ui";
import { Button } from "@apptify-labs/ui";
import { Checkbox } from "@apptify-labs/ui";
import { Switch } from "@apptify-labs/ui";
import { Slider } from "@apptify-labs/ui";
import { RadioGroup, RadioGroupItem } from "@apptify-labs/ui";
import { Textarea } from "@apptify-labs/ui";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@apptify-labs/ui";
import { Toggle } from "@apptify-labs/ui";
import { ToggleGroup, ToggleGroupItem } from "@apptify-labs/ui";
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator, Icon } from "@apptify-labs/ui";
import { TextBoldIcon, TextItalicIcon, TextUnderlineIcon } from "@hugeicons/core-free-icons";

export default function FormsPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Basic Inputs</CardTitle>
            <CardDescription>Standard text inputs and textareas.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="text">Text Input</Label>
              <Input id="text" placeholder="Enter text..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email-f">Email Input</Label>
              <Input id="email-f" type="email" placeholder="Email address" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="disabled">Disabled Input</Label>
              <Input id="disabled" disabled placeholder="Disabled" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Textarea</Label>
              <Textarea id="bio" placeholder="Type your message here." />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Selection Controls</CardTitle>
            <CardDescription>Checkboxes, radios, and switches.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Switch id="airplane-mode" />
              <Label htmlFor="airplane-mode">Airplane Mode</Label>
            </div>

            <RadioGroup defaultValue="comfortable">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="default" id="r1" />
                <Label htmlFor="r1">Default</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="comfortable" id="r2" />
                <Label htmlFor="r2">Comfortable</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="compact" id="r3" />
                <Label htmlFor="r3">Compact</Label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Advanced Inputs</CardTitle>
            <CardDescription>Selects, Sliders, OTP.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Select Theme</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <Label>Volume (Slider)</Label>
              <Slider defaultValue={[50]} max={100} step={1} />
            </div>

            <div className="space-y-2">
              <Label>One-Time Password</Label>
              <InputOTP maxLength={6}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Toggles & Groups</CardTitle>
            <CardDescription>Toggle buttons and toggle groups.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label className="block">Single Toggle</Label>
              <Toggle aria-label="Toggle italic">
                <Icon icon={TextItalicIcon} className="h-4 w-4" />
              </Toggle>
            </div>

            <div className="space-y-2">
              <Label className="block">Toggle Group</Label>
              <ToggleGroup type="multiple">
                <ToggleGroupItem value="bold" aria-label="Toggle bold">
                  <Icon icon={TextBoldIcon} className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Toggle italic">
                  <Icon icon={TextItalicIcon} className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Toggle underline">
                  <Icon icon={TextUnderlineIcon} className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            
            <div className="space-y-2 pt-4">
              <Button className="w-full">Submit Form</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
