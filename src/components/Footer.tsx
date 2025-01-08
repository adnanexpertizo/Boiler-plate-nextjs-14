import Image from "next/image";
import Logo from "../../public/images/logo.png";
import { footerRoutes } from "@/route";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="footer bg-base-100 text-base-content px-6 md:px-14 p-10">
        <aside>
          <Link className="flex items-center" href={'/'} >
            <Image className="w-16 md:w-28 lg:w-32" src={Logo} alt="Logo" />
            <p className="text-[13px] xl:text-[15px]">Aurtel Consulting Group Ltd.</p>
          </Link>
        </aside>
        {footerRoutes.map((section) => (
          <nav key={section.title}>
            <h6 className="footer-title">{section.title}</h6>
            {section.routes.map((item) => (
              <Link href={item.href} key={item.name} className="link link-hover text-primary">
                {item.name}
              </Link>
            ))}
          </nav>
        ))}
      </footer>
      <footer className="footer footer-center bg-base-100 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Aurtel Consulting Group
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
