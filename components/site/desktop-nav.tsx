"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";
import { isGroup, navigation } from "@/lib/site";
import { cn } from "@/lib/utils";

const itemClass =
  "group inline-flex h-10 items-center gap-1.5 rounded-[2px] px-3 text-[0.9375rem] font-medium text-ink-soft transition-colors hover:text-ink data-[state=open]:text-ink";

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <NavigationMenu.Root aria-label="Main" className="hidden lg:block" delayDuration={80}>
      <NavigationMenu.List className="flex items-center gap-1">
        {navigation.map((entry) => {
          if (!isGroup(entry)) {
            const active = pathname === entry.href;
            return (
              <NavigationMenu.Item key={entry.label}>
                <NavigationMenu.Link asChild active={active}>
                  <Link
                    href={entry.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(itemClass, active && "text-ink")}
                  >
                    {entry.label}
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            );
          }

          const groupActive = entry.items.some((item) => pathname === item.href);
          return (
            <NavigationMenu.Item key={entry.label} className="relative">
              <NavigationMenu.Trigger className={cn(itemClass, groupActive && "text-ink")}>
                {entry.label}
                <ChevronDown
                  aria-hidden
                  strokeWidth={1.75}
                  className="size-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180"
                />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="absolute top-full left-0 z-50 pt-3 data-[state=open]:animate-[rise_220ms_cubic-bezier(0.2,0.7,0.1,1)]">
                <ul className="w-[22rem] border border-rule bg-paper p-2">
                  {entry.items.map((item) => {
                    const active = pathname === item.href;
                    return (
                      <li key={item.href}>
                        <NavigationMenu.Link asChild active={active}>
                          <Link
                            href={item.href}
                            aria-current={active ? "page" : undefined}
                            className="block rounded-[2px] px-4 py-3.5 transition-colors hover:bg-paper-deep focus-visible:bg-paper-deep"
                          >
                            <span className="flex items-center gap-2 text-[0.9375rem] font-semibold tracking-[-0.01em] text-ink">
                              {item.label}
                              {active ? <span aria-hidden className="size-1.5 bg-accent" /> : null}
                            </span>
                            {item.description ? (
                              <span className="mt-1 block text-[0.875rem] leading-snug text-ink-muted">
                                {item.description}
                              </span>
                            ) : null}
                          </Link>
                        </NavigationMenu.Link>
                      </li>
                    );
                  })}
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
          );
        })}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
