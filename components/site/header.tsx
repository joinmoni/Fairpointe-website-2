import Link from "next/link";
import { cta } from "@/lib/site";
import { Container } from "@/components/marketing/layout";
import { Button } from "@/components/ui/button";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";
import { Logo } from "./logo";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper">
      <Container className="flex h-[72px] items-center justify-between gap-6">
        <Logo />
        <div className="flex items-center gap-5">
          <DesktopNav />
          <Button asChild size="md" className="hidden h-10 lg:inline-flex">
            <Link href={cta.speak.href}>{cta.speak.label}</Link>
          </Button>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
