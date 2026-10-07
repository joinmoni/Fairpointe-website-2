import Link from "next/link";
import { company, isGroup, navigation, site } from "@/lib/site";
import { Container, Grid } from "@/components/marketing/layout";
import { Logo } from "./logo";

export function SiteFooter() {

  return (
    <footer className="on-navy border-t border-rule-navy bg-navy text-on-navy">
      <Container className="pt-16 pb-10 md:pt-20">
        <Grid className="gap-y-12">
          <div className="col-span-4 md:col-span-12 lg:col-span-4">
            <Logo inverse />
            <p className="mt-6 max-w-xs text-[0.9375rem] leading-relaxed text-on-navy-soft">{site.tagline}</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-6 inline-block text-[0.9375rem] font-medium text-on-navy underline decoration-on-navy/35 underline-offset-[6px] transition-colors hover:decoration-on-navy"
            >
              {site.email}
            </a>
          </div>
          <nav aria-label="Footer" className="col-span-4 md:col-span-12 lg:col-span-7 lg:col-start-6">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
              {navigation.map((group) => (
                <li key={group.label}>
                  {!isGroup(group) ? (
                    <Link
                      href={group.href}
                      className="text-[0.9375rem] text-on-navy-soft transition-colors hover:text-on-navy"
                    >
                      {group.label}
                    </Link>
                  ) : (
                  <>
                  <p className="text-[0.875rem] font-medium text-on-navy-muted">{group.label}</p>
                  <ul className="mt-4 space-y-3">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="text-[0.9375rem] text-on-navy-soft transition-colors hover:text-on-navy"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  </>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </Grid>
        <div className="mt-16 flex flex-col gap-4 border-t border-rule-navy pt-8 text-[0.875rem] text-on-navy-muted md:flex-row md:justify-between">
          <div className="space-y-1">
            <p>
              &copy; {new Date().getFullYear()} {company.legalName || site.name}. A UK enterprise technology company.
            </p>
            {company.companyNumber ? <p>Company number {company.companyNumber}</p> : null}
            {company.registeredOffice ? <p>Registered office: {company.registeredOffice}</p> : null}
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {company.linkedinUrl ? (
              <li>
                <a href={company.linkedinUrl} rel="me noopener" className="transition-colors hover:text-on-navy">
                  LinkedIn
                </a>
              </li>
            ) : null}
            {company.privacyPolicyHref ? (
              <li>
                <Link href={company.privacyPolicyHref} className="transition-colors hover:text-on-navy">
                  Privacy Policy
                </Link>
              </li>
            ) : null}
            <li>
              <Link href="/" className="transition-colors hover:text-on-navy">
                fairpointe.co.uk
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
