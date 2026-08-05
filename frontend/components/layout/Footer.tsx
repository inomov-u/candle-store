import Link from "next/link";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";



interface NavigationLink {
  label: string;
  href: string;
}
//I decided to use arrays because its easier to update or source from a CMS later

const navigationLinks: NavigationLink[] = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];




const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    icon: Instagram,
  },
  {
    label: "Facebook",
    href: "#",
    icon: Facebook,
  },
];

export default function Footer() {

  return (
    <footer className="border-t border-stone-200 bg-stone-50">//to separate footer from page content
      <div className="mx-auto max-w-7xl px-6 py-16">// center horizontally 
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <section>
            <h2 className="text-xl font-semibold tracking-wide text-stone-900">
              Voie du Phare
            </h2>


            <p className="mt-4 text-sm leading-7 text-stone-600">
              Handcrafted luxury candles inspired by the elegance of French
              coastal living. Designed to create warm, timeless moments in every
              home.
            </p>
          </section>

          <nav aria-label="Footer navigation">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-stone-900">
              Navigation
            </h2>




            <ul className="mt-4 space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-600 transition-colors hover:text-stone-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>


          <address className="not-italic">                                                          //contact
            <h2 className="text-sm font-semibold uppercase tracking-widest text-stone-900">
              Contact
            </h2>

            <ul className="mt-4 space-y-4 text-sm text-stone-600">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>New York, USA</span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a
                  href="tel:+15060000000"
                  className="transition-colors hover:text-stone-900"
                >
                  +1 (506) 000-0000
                </a>
              </li>



                                                                                //TODO add mail here

              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a
                  href="mailto:hello@voieduphare.com"
                  className="transition-colors hover:text-stone-900"         //hover effect
                >
                  hello@voieduphare.com
                </a>
              </li>
            </ul>
          </address>

          <section>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-stone-900">
              Follow Us
            </h2>

            <div className="mt-4 flex gap-4">               //social media list
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="rounded-full border border-stone-300 p-2 text-stone-600 transition-colors hover:border-stone-900 hover:text-stone-900"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-16 border-t border-stone-200 pt-6">      //add current date and company name
          <p className="text-center text-sm text-stone-500">
            © {new Date().getFullYear()} Voie du Phare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}