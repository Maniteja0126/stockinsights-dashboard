import React from "react";
import DashboardNavBar from "./DashboardNavBar";

type Announcement = {
  company_name: string;
  sub_type: string;
  summary: string;
  sentiment: "positive" | "neutral" | "negative";
  source_url: string;
  published_time: { $date: string };
};

interface DataTableProps {
  announcements: Announcement[];
}

const DataTable: React.FC<DataTableProps> = ({ announcements }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return "Invalid Date";
    }
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div className="min-h-screen w-full flex-1">
      <DashboardNavBar />
      <div className="w-full mb-10">
        <div className="pb-0 border-b">
          <div className="relative w-full overflow-hidden">
            <table className="w-full caption-bottom text-sm max-h-[500px] overflow-y-auto">
              <thead className="[&_tr]:border-b min-w-[1200px]">
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <th className="h-12 px-4 text-left align-middle pl-4 whitespace-nowrap w-[190px] text-neutral-600 text-sm leading-6 font-medium">
                    Company
                  </th>
                  <th className="h-12 px-4 text-left align-middle pl-4 whitespace-nowrap w-[190px] text-neutral-600 text-sm leading-6 font-medium">
                    Announcement type
                  </th>
                  <th className="h-12 px-4 text-left align-middle  whitespace-nowrap w-[550px] text-neutral-600 text-sm leading-6 font-medium">
                    Announcement Summary
                  </th>
                  <th className="h-12 px-4 text-left align-middle pl-4 whitespace-nowrap w-[130px] text-neutral-600 text-sm leading-6 font-medium">
                    Sentiment
                  </th>
                  <th className="h-12 px-4 text-left align-middle pl-4 whitespace-nowrap w-[190px] text-neutral-600 text-sm leading-6 font-medium">
                    Source
                  </th>
                </tr>
              </thead>
              <tbody className="[&_tr:last-child]:border-0 p-0">
                {announcements.map((announcement, index) => (
                  <tr
                    className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                    key={index}
                  >
                    <td className="p-4 align-middle pl-4 text-sm leading-6 font-medium text-neutral-600">
                      {announcement.company_name}
                    </td>
                    <td className="p-4 align-middle">
                      <div className="bg-neutral-200 whitespace-nowrap flex-nowrap font-medium text-neutral-600 leading-6 text-sm max-w-fit max-h-6 px-2.5 rounded-[6px] border-[0.5px] border-[#d4d4d8] flex justify-center items-center">
                        {announcement.sub_type}
                      </div>
                    </td>
                    <td className="p-4 align-middle ">
                      <div className="text-neutral-500 font-medium leading-1.71">
                        {announcement.sub_type}
                      </div>
                      <div className="text-neutral-400 font-normal">
                        {announcement.summary}
                      </div>
                    </td>
                    <td className="p-4 align-middle ">
                      <div className="flex justify-center items-center my-auto">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="none"
                        >
                          <rect
                            width="20"
                            height="20"
                            fill="#F8BD00"
                            fillOpacity="0.11"
                            rx="10"
                          ></rect>
                          <rect
                            width="8"
                            height="8"
                            x="6"
                            y="6"
                            rx="4"
                            fill={
                              announcement.sentiment === "positive"
                                ? "#22C55E" // Green for positive
                                : announcement.sentiment === "neutral"
                                ? "#FBBF24" // Yellow for neutral
                                : "#EF4444" // Red for negative
                            }
                          ></rect>
                        </svg>
                      </div>
                    </td>
                    <td className="p-4 align-middle pr-8">
                      <div className="flex flex-col justify-center gap-2.5">
                        <a
                          href={announcement.source_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="px-2.5 max-h-[32px] py-1 flex gap-2.5 justify-center items-center border-zinc-300 border-[0.5px] max-w-fit rounded-[4px]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              fill="none"
                            >
                              <path
                                stroke="#71717A"
                                d="M1.999 4.5V.7c0-.11.09-.2.2-.2h6.968a.2.2 0 0 1 .142.059L10.94 2.19a.2.2 0 0 1 .059.142V11.3a.2.2 0 0 1-.2.2H1.5m7-11v2.3c0 .11.09.2.2.2H11M7.75 9.5V6.2c0-.11.09-.2.2-.2h1.8m-2 1.75h1.5M1.75 6H1.2a.2.2 0 0 0-.2.2v2.738c0 .034.028.062.063.062a.06.06 0 0 0 .062-.062V8.2c0-.11.09-.2.2-.2h.425c1 0 1.125-.625 1.125-1S2.75 6 1.75 6Zm3.353 0H4.45a.2.2 0 0 0-.2.2v2.6c0 .11.09.2.2.2h.652c.569 0 1.148-.25 1.148-1.5S5.671 6 5.103 6Z"
                              ></path>
                            </svg>
                            <span className="text-xs font-medium leading-8 text-neutral-400">
                              Source
                            </span>
                          </button>
                        </a>
                        <div className="text-[10px] leading-6 whitespace-nowrap text-neutral-300 my-auto font-medium">
                          {formatDate(announcement.published_time.$date)}
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
