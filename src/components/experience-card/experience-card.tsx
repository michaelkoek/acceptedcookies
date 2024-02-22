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
}: IExperienceCard) => {
  const calculateTimeDifference = (startDate: Date, endDate: Date) => {
    // Convert dates to milliseconds
    const startMillis = startDate.getTime();
    const endMillis = endDate.getTime();

    // Calculate the time difference in milliseconds
    const timeDifference = Math.abs(endMillis - startMillis);

    // Calculate the number of years and months
    const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24 * 365)) /
        (1000 * 60 * 60 * 24 * 30),
    );

    return {
      years,
      months,
    };
  };

  console.log(
    "date:",
    calculateTimeDifference(new Date(dateRange[0]), new Date(dateRange[1])),
  );

  return (
    <motion.article className="flex flex-col gap-4 p-8 md:flex-row">
      <section>
        <Image
          title={`logo ${companyDetails.name}`}
          alt={`logo ${companyDetails.name}`}
          src={companyDetails.logoUrl}
          width={56}
          height={56}
          className="min-w-14 rounded-full"
        />
      </section>

      <section className="flex flex-col gap-2">
        <h3 className="font-bold">{companyDetails.name}</h3>
        <h4 className="">{jobTitle}</h4>
        <span className="text-gray-400">
          {dateRange[0]}-{dateRange[1]} * {}
        </span>
        {children && <p>{children}</p>}
        <ul>
          {tasks.map((task) => (
            <li key={task}>{task}</li>
          ))}
        </ul>
      </section>
    </motion.article>
  );
};
