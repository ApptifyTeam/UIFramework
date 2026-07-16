"use client";

import { useRouter } from "next/navigation";
import { useLang } from "../providers/lang-provider";
import { ThemeSwitcher } from "../components/theme-switcher";
import { LangSwitcher } from "../components/lang-switcher";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@apptify-labs/ui";
import { Input } from "@apptify-labs/ui";
import { Label } from "@apptify-labs/ui";
import { Button } from "@apptify-labs/ui";
import { Checkbox } from "@apptify-labs/ui";

export default function LoginPage() {
  const router = useRouter();
  const { t } = useLang();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-muted/40 p-4">
      <div className="absolute top-4 right-4 flex gap-2">
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center font-black text-2xl">
            A
          </div>
          <CardTitle className="text-2xl">Apptify UI</CardTitle>
          <CardDescription>Enter your email below to login to your account</CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">{t.common.email}</Label>
              <Input id="email" type="email" placeholder="m@example.com" required defaultValue="admin@apptify.com" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">{t.common.password}</Label>
                <a href="#" className="text-sm font-medium text-primary hover:underline">
                  {t.common.forgotPassword}
                </a>
              </div>
              <Input id="password" type="password" required defaultValue="password" />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" defaultChecked />
              <Label htmlFor="remember" className="font-normal text-muted-foreground">{t.common.rememberMe}</Label>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">{t.common.signIn}</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
