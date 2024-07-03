import React from "react";
import { LinkPreview } from "../ui/link-preview";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full bg-black-100">
      <div className="w-[95vw] mx-auto flex justify-between items-center py-10">
        <div className="">
          © 2022 - 2024 Qubartech. Design & Maintenance by Ajijul Islam.
        </div>
        <div className="flex items-center gap-5">
                <div>
                  <LinkPreview
                    url="https://facebook.com"
                    className="font-bold "
                  >
                    <Image
                      src="/images/facebook.png"
                      height={40}
                      width={40}
                      alt="avatar"
                      className="mx-auto  "
                    />
                  </LinkPreview>
                </div>
                <div>
                  <LinkPreview
                    url="https://linkedin.com"
                    className="font-bold "
                  >
                    <Image
                      src="/images/linkedin.png"
                      height={40}
                      width={40}
                      alt="avatar"
                      className="mx-auto  "
                    />
                  </LinkPreview>
                </div>
                <div>
                  <LinkPreview url="https://twitter.com" className="font-bold ">
                    <Image
                      src="/images/twitter.png"
                      height={40}
                      width={40}
                      alt="avatar"
                      className="mx-auto  "
                    />
                  </LinkPreview>
                </div>
                <div>
                  <LinkPreview
                    url="https://instagram.com"
                    className="font-bold "
                  >
                    <Image
                      src="/images/instagram.png"
                      height={40}
                      width={40}
                      alt="avatar"
                      className="mx-auto  "
                    />
                  </LinkPreview>
                </div>
                <div>
                  <LinkPreview url="https://github.com" className="font-bold ">
                    <Image
                      src="/images/github.png"
                      height={40}
                      width={40}
                      alt="avatar"
                      className="mx-auto  "
                    />
                  </LinkPreview>
                </div>
              </div>
      </div>
    </div>
  );
};

export default Footer;
