"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { cta, isGroup, navigation } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Container } from "@/components/marketing/layout";
import { Logo } from "./logo";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  // Close the menu after navigation.
  const [lastPath, setLastPath] = React.useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger
        className="-mr-2 inline-flex size-11 items-center justify-center rounded-[2px] text-ink lg:hidden"
        aria-label="Open menu"
      >
        <Menu aria-hidden strokeWidth={1.5} className="size-6" />
      </Dialog.Trigger>
      <AnimatePresence>
        {open ? (
          <Dialog.Portal forceMount>
            <Dialog.Content asChild forceMount aria-describedby={undefined}>
              <motion.div
                className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-paper"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
              >
                <Dialog.Title className="sr-only">Menu</Dialog.Title>
                <div className="border-b border-rule">
                  <Container className="flex h-[72px] items-center justify-between">
                    <Logo />
                    <Dialog.Close
                      className="-mr-2 inline-flex size-11 items-center justify-center rounded-[2px] text-ink"
                      aria-label="Close menu"
                    >
                      <X aria-hidden strokeWidth={1.5} className="size-6" />
                    </Dialog.Close>
                  </Container>
                </div>
                <motion.nav
                  aria-label="Main"
                  className="flex-1"
                  initial={{ y: 8 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.28, ease: [0.2, 0.7, 0.1, 1] }}
                >
                  <Container className="py-6">
                    {navigation.map((entry) => {
                      const items = isGroup(entry) ? entry.items : [entry];
                      return (
                        <div key={entry.label} className="border-b border-rule py-5">
                          {isGroup(entry) ? (
                            <p className="mb-2 text-[0.9375rem] font-medium text-ink-muted">{entry.label}</p>
                          ) : null}
                          <ul>
                            {items.map((item) => {
                              const active = pathname === item.href;
                              return (
                                <li key={item.href}>
                                  <Link
                                    href={item.href}
                                    aria-current={active ? "page" : undefined}
                                    className={cn(
                                      "flex items-center gap-3 py-2 text-[1.5rem] font-semibold tracking-[-0.025em] text-ink",
                                    )}
                                  >
                                    {item.label}
                                    {active ? <span aria-hidden className="size-2 bg-accent" /> : null}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      );
                    })}
                    <div className="pt-8 pb-10">
                      <Link
                        href={cta.speak.href}
                        className="flex h-12 w-full items-center justify-center rounded-[2px] bg-ink text-base font-medium text-paper"
                      >
                        {cta.speak.label}
                      </Link>
                    </div>
                  </Container>
                </motion.nav>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        ) : null}
      </AnimatePresence>
    </Dialog.Root>
  );
}
