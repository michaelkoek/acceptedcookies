import { motion } from "framer-motion";
import Image from "next/image";
import type { ReactNode } from "react";

interface IExperienceCard {
  jobTitle: string;
  dateRange: [string, string];
  companyDetails: {
    name: string;
    logoUrl: string;
    url?: string;
  };
  children?: ReactNode;
  tasks: string[];
  tools: string[];
}

export const ExperienceCard = ({
  jobTitle = "Sr. Front-end developer",
  dateRange,
  companyDetails,
  children,
  tasks,
  tools,
}: IExperienceCard) => {
  const getExpierenceTime = (startDate: string, endDate: string) => {
    const startDateConv = new Date(startDate);
    const endDateConv = new Date(endDate);

    const calcTimeDifference = () => {
      const startMillis = startDateConv.getTime();
      const endMillis = endDateConv.getTime();
      const timeDifference = Math.abs(endMillis - startMillis);

      const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
      const months = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24 * 365)) /
          (1000 * 60 * 60 * 24 * 30),
      );

      return ` ${!!years ? years + " yr" : ""} ${!!months ? months + " mos" : ""}`;
    };

    const startEndDateConverter = () => {
      const formatter = new Intl.DateTimeFormat("default", { month: "short" });
      const startMonth = formatter.format(startDateConv);
      const startYear = startDateConv.getFullYear();
      const endMonth = formatter.format(endDateConv);
      const endYear = endDateConv.getFullYear();

      return `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
    };

    return `${startEndDateConverter()} · ${calcTimeDifference()}`;
  };

  return (
    <motion.article
      className="flex flex-col gap-4 rounded-md p-8 md:flex-row"
      whileHover={{
        backgroundColor: "white",
        scale: 1.02,
      }}
      transition={{
        type: "tween",
        ease: "easeOut",
      }}
    >
      <section>
        <Image
          title={`logo ${companyDetails.name}`}
          alt={`logo ${companyDetails.name}`}
          src={companyDetails.logoUrl}
          width={56}
          height={56}
          className="min-w-14 rounded-md"
        />
      </section>

      <section className="flex flex-col gap-1">
        <h3 className="font-bold">{companyDetails.name}</h3>
        <h4 className="">{jobTitle}</h4>
        <span className="mb-4 text-gray-400">
          {getExpierenceTime(dateRange[0], dateRange[1])}
        </span>
        {children && <p className="mb-2">{children}</p>}
        {tasks.length > 0 && (
          <ul className="list-disc">
            {tasks.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </ul>
        )}
        {tools.length > 0 && (
          <section>
            <strong>Tools used:</strong>
            <ul className="flex flex-row gap-1">
              {tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </section>
        )}
      </section>
    </motion.article>
  );
};
