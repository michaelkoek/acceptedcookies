import Link from "next/link";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/solid";
import { BaseContainer } from "../base-container";

export const ContactInsentive = () => {
  return (
    <BaseContainer>
      <section className="mb-8 flex flex-row items-center justify-center gap-4">
        <span>Lets link and have a coffee ☕️</span>
        <Link
          href="/contact"
          title="get in touch"
          className="flex flex-row items-center justify-center gap-2 rounded-full border-2 p-4 hover:border-gray-500"
        >
          <ChatBubbleBottomCenterTextIcon className="h-6 w-6 text-slate-200" />
          Contact me
        </Link>
      </section>
    </BaseContainer>
  );
};
