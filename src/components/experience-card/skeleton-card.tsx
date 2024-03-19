"use client";

const ListItem = () => (
  <div className="flex w-full flex-col gap-2">
    <div className="h-2 w-9/12 rounded-full bg-gray-200 dark:bg-gray-700" />
    <div className="h-2 w-1/3 rounded-full bg-gray-200 dark:bg-gray-700" />
  </div>
);

export const SkeletonCard = () => {
  return (
    <div role="status" className="flex animate-pulse gap-4 p-8">
      <div className="w-14">
        <div className="flex h-14 w-14 items-center justify-center rounded bg-gray-300 dark:bg-gray-700">
          <svg
            className="h-10 w-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
      </div>

      <div className="flex w-full flex-col gap-4">
        <div className="flex w-full flex-col gap-2">
          <div className="h-2 w-2/12 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-2 w-4/12 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-2 w-4/12 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        </div>
        <ul className="list-disc">
          <li>
            <ListItem />
          </li>
          <li>
            <ListItem />
          </li>
          <li>
            <ListItem />
          </li>
        </ul>
        <div className="h-2 w-4/12 rounded-full bg-gray-200 dark:bg-gray-700"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
