import { motion } from "framer-motion";
import { useState } from "react";

export const TeachChart = () => {
  const [menuItems, setMenuItems] = useState([
    {
      label: "When",
      title: "When and where",
      isActive: true,
    },
    {
      label: "What I stand for",
      title: "What to expect",
      isActive: false,
    },
    {
      label: "Style",
      title: "My style of teaching",
      isActive: false,
    },
    {
      label: "Why",
      title: "Why do I do it",
      isActive: false,
    },
    {
      label: " What I can do for you",
      title: "How I can help you",
      isActive: false,
    },
  ]);

  const btnClass =
    "p-8 border-gray-800 border-2 w-full mb-2 text-left transition-color hover:border-gray-200";

  return (
    <article className="grid grid-cols-2 gap-4 md:gap-8">
      <div className="bg-red-200">sdfdsf</div>
      <div className="">
        <ul>
          {menuItems.map((menuItem, index) => (
            <motion.li
              key={menuItem.label}
              initial={{
                opacity: 0,
                translateY: 0,
                translateX: 10,
              }}
              whileInView={{ opacity: 1, translateX: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "tween",
                ease: "easeOut",
                delay: index * 0.3,
                damping: 30,
              }}
            >
              <button className={btnClass} title={menuItem.title}>
                {menuItem.label}
              </button>
            </motion.li>
          ))}
        </ul>
      </div>
    </article>
  );
};
