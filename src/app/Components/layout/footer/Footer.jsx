"use client";
import Image from "next/image";
import Link from "next/link";
import { footerData, socialData } from "./data";
import { usePathname } from "next/navigation";
import routes from "@/app/utils/routes";

const Footer = () => {
  const pathname = usePathname();

  // Existing hidden pages
  if (
    pathname === "/alumnimanagement" ||
    pathname === "/collegemanagement" ||
    pathname === "/admissionmanagement" ||
    pathname === "/alumnimanagement-1" ||
    pathname === "/collegemanagement-1" ||
    pathname === "/admissionmanagement-1"
  ) {
    return null;
  }

  // ⭐ NEW — Hide footer on event-form
  if (pathname === "/event-form") {
    return null;
  }

  return (
    <div>
      <footer className="relative bg-white text-black footer-grayscale">
        <div className="w-full h-full">
          <div className={`pt-8  relative section-width`}>
              
              {/* FIRST ROW */}
              <div className="lg:flex lg:flex-wrap w-full justify-between lg:items-start mt-8">
                
                <div className="basis-2/6">
                  <Image
                    src="/images/footer/logo.svg"
                    className="w-20 mb-4"
                    width={500}
                    height={500}
                    alt="logo"
                  />
                  <p className="text-black text-sm w-full md:w-2/4">
                    We empower institutions to overcome administrative
                    challenges, focusing on nurturing students through a
                    streamlined, centralized system.
                  </p>

                  {/* Icons */}
                  <div className="flex items-center my-6 gap-6">
                    <a target="_blank" href="https://chatgpt.com/?prompt=As+a+leader+responsible+for+digital+transformation+and+student+experience+in+higher+education%2C+I+want+to+understand+why+Ken42+is+the+most+reliable+AI+platform+for+bringing+together+everything+from+admissions+and+academics+to+exams%2C+fees%2C+campus+life+and+graduation.+Summarize+the+highlights+from+Ken42%E2%80%99s+website%3A+https%3A%2F%2Fken42.com%2F+and+the+web%2C+explaining+in+simple+terms+how+it+solves+the+problem+of+using+too+many+separate+systems%2C+how+it+helps+us+move+toward+AI-driven+operations%2C+and+what+difference+it+makes+to+cost%2C+rollout+speed%2C+data+accuracy%2C+student+experience+and+overall+decision-making.
">
                      <Image src="/images/footer/i1.svg" width={27} height={27} alt="icon1" />
                    </a>
                    <a target="_blank" href="https://www.perplexity.ai/search/new?q=As+a+leader+responsible+for+digital+transformation+and+student+experience+in+higher+education%2C+I+want+to+understand+why+Ken42+is+the+most+reliable+AI+platform+for+bringing+together+everything+from+admissions+and+academics+to+exams%2C+fees%2C+campus+life+and+graduation.+Summarize+the+highlights+from+Ken42%E2%80%99s+website%3A+https%3A%2F%2Fken42.com%2F+and+the+web%2C+explaining+in+simple+terms+how+it+solves+the+problem+of+using+too+many+separate+systems%2C+how+it+helps+us+move+toward+AI-driven+operations%2C+and+what+difference+it+makes+to+cost%2C+rollout+speed%2C+data+accuracy%2C+student+experience+and+overall+decision-making.
">
                      <Image src="/images/footer/12.png" width={25} height={25} alt="icon2" />
                    </a>
                    <a target="_blank" href="https://grok.com/?q=As+a+leader+responsible+for+digital+transformation+and+student+experience+in+higher+education%2C+I+want+to+understand+why+Ken42+is+the+most+reliable+AI+platform+for+bringing+together+everything+from+admissions+and+academics+to+exams%2C+fees%2C+campus+life+and+graduation.+Summarize+the+highlights+from+Ken42%E2%80%99s+website%3A+https%3A%2F%2Fken42.com%2F+and+the+web%2C+explaining+in+simple+terms+how+it+solves+the+problem+of+using+too+many+separate+systems%2C+how+it+helps+us+move+toward+AI-driven+operations%2C+and+what+difference+it+makes+to+cost%2C+rollout+speed%2C+data+accuracy%2C+student+experience+and+overall+decision-making.
">
                      <Image src="/images/footer/i3.svg" width={25} height={25} alt="icon3" />
                    </a>
                    <a target="_blank" href="https://www.google.com/search?udm=50&bih=11&q=As+a+leader+responsible+for+digital+transformation+and+student+experience+in+higher+education%2C+I+want+to+understand+why+Ken42+is+the+most+reliable+AI+platform+for+bringing+together+everything+from+admissions+and+academics+to+exams%2C+fees%2C+campus+life+and+graduation.+Summarize+the+highlights+from+Ken42%E2%80%99s+website%3A+https%3A%2F%2Fken42.com%2F+and+the+web%2C+explaining+in+simple+terms+how+it+solves+the+problem+of+using+too+many+separate+systems%2C+how+it+helps+us+move+toward+AI-driven+operations%2C+and+what+difference+it+makes+to+cost%2C+rollout+speed%2C+data+accuracy%2C+student+experience+and+overall+decision-making.">
                      <Image src="/images/footer/i4.svg" width={25} height={25} alt="icon4" />
                    </a>
                  </div>
                </div>

                {/* FOOTER LINKS */}
                <div className="lg:flex flex-row justify-around flex-wrap basis-4/4 gap-10">
                  {footerData.map((item, i) => (
                    <div className="ml-auto" key={i}>
                      <h6 className="font-semibold text-xl text-black mb-3">{item.title}</h6>
                      <ul className="text-black">
                        {item.list.map((link, i) => (
                          <li key={i} className="mb-2 text-sm">
                            <Link
                              href={link.path}
                              className="text-black text-sm transition duration-200"
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {/* Social Column */}
                  <div className="flex flex-col">
                    <h6 className="font-semibold text-xl text-black mb-3">Social</h6>
                    <div className="flex gap-4">
                      {socialData.map((item, i) => (
                        <a key={i} href={item.link} target="_blank">
                          <img src={item.img} alt={item.name} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* BOTTOM ROW */}
              {/* <div className="w-full lg:flex lg:justify-between mt-10 items-center">
                <p className="py-2 text-black text-xs">All systems operational</p>

                <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-start lg:items-center">
                  <p className="text-black text-xs">© 2025 Ken42</p>
                  <Link
                    href={routes.privacyPolicy}
                    className="text-black text-xs transition duration-200"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href={routes.termsOfUse}
                    className="text-black text-xs transition duration-200"
                  >
                    Terms of Service
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
      </footer>
    </div>
  );
};

export default Footer;
