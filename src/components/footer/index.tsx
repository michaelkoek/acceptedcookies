import Image from "next/image";
import { BaseContainer } from "../base-container";
import { BottomRibbon } from "./bottom-ribbon";
import { ContactInsentive } from "./contact-insentive";
import { FooterMenu } from "./footer-menu";
export const Footer = () => {
  return (
    <footer className="pt-11">
      <ContactInsentive />

      <div className="bg-cyan-900 p-8">
        <BaseContainer>
          <section className="mb-6 grid grid-cols-3 md:mb-12">
            <FooterMenu />
            <section>??</section>
            <section className="flex flex-col gap-4">
              <div>
                <h4>Cookie mood</h4>
                <Image
                  src="/images/accepted-cookies-logo.png"
                  width={72}
                  height={72}
                  alt="Accepted Cookies sticker"
                />
              </div>
              <div>
                <h4>Project status</h4>
                <span>Available</span>
              </div>
            </section>
          </section>
          <BottomRibbon />
        </BaseContainer>
      </div>
    </footer>
  );
};
