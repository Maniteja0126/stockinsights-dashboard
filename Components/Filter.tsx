

"use client";

import React, { useState } from "react";
import SentimentDropdown from "./Sentiment";
import AnnouncementTypeDropdown from "./Announcements";

interface DataItem {
  _id: { $oid: string };
  sentiment: string;
  sub_type: string;
  summary: string;
}

const announcementTypes = [
  'Company Mergers',
  'Disposals and divestitures',
  'Business Restructuring',
  'Expansion Plans',
  'Financial Troubles',
  'Management Changes',
  'Capital Structure Changes',
  'Contract Awards',
  'Legal Disputes',
  'Payment Defaults',
  'Credit Rating Changes',
  'Product Launches',
  'Operational Disruptions',
  'Accounting Changes',
  'Investments/Divestments',
  'Dividend Policy Changes',
  'Labor Issues',
  'Investor Conferences',
  'Earnings Reports',
  'Delisting Actions',
  'IPO Launches',
  'Name Changes',
  'Offer for Sale',
  'US FDA Inspections',
  'Earnings Calls',
  'Other Situations',
];

interface FilterProps {
  onSentimentFilterChange: (selectedSentiments: string[] , selectedTypes : string[]) => void;
  onTypeFilterChange: (selectedTypes: string[] , selectedSentiments : string[]) => void;
  data: DataItem[];
}

const Filter: React.FC<FilterProps> = ({ onSentimentFilterChange, onTypeFilterChange  ,data}) => {
  const [selectedSentiments, setSelectedSentiments] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const handleSentimentFilterChange = (selectedSentiments: string[]) => {
    setSelectedSentiments(selectedSentiments);
    onSentimentFilterChange(selectedSentiments , selectedTypes);
  };

  const handleTypeFilterChange = (selectedTypes: string[]) => {
    setSelectedTypes(selectedTypes);
    onTypeFilterChange(selectedTypes , selectedSentiments);
  };

  return (
    <div className="h-full w-50 border-r">
      <div className="flex leading-6 justify-between px-8 py-6">
        <p className="font-medium text-sm text-neutral-500">Filter by</p>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-x-3 rounded-md p-2 border border-zinc-300">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            scale="1.2"
          >
            <path
              d="M14 13.2678L10.0893 9.35711C11.0291 8.22892 11.4977 6.78185 11.3977 5.31693C11.2977 3.85202 10.6368 2.48205 9.55246 1.49202C8.46811 0.501988 7.04382 -0.0318806 5.57588 0.00147384C4.10793 0.0348283 2.70936 0.632837 1.6711 1.6711C0.632837 2.70936 0.0348283 4.10793 0.00147384 5.57588C-0.0318806 7.04382 0.501988 8.46811 1.49202 9.55246C2.48205 10.6368 3.85202 11.2977 5.31693 11.3977C6.78185 11.4977 8.22892 11.0291 9.35711 10.0893L13.2678 14L14 13.2678ZM1.05418 5.71468C1.05418 4.79292 1.32752 3.89186 1.83962 3.12545C2.35172 2.35903 3.07959 1.76168 3.93118 1.40894C4.78278 1.0562 5.71985 0.963907 6.62389 1.14373C7.52794 1.32356 8.35836 1.76743 9.01014 2.41921C9.66193 3.07099 10.1058 3.90141 10.2856 4.80546C10.4654 5.70951 10.3732 6.64658 10.0204 7.49817C9.66767 8.34976 9.07032 9.07763 8.30391 9.58974C7.53749 10.1018 6.63644 10.3752 5.71468 10.3752C4.47906 10.3738 3.29444 9.88235 2.42072 9.00863C1.54701 8.13492 1.05555 6.9503 1.05418 5.71468Z"
              fill="#3f3f46"
            ></path>
          </svg>
          <input
            placeholder="Type to search"
            className="bg-transparent border-none w-full placeholder:font-light placeholder:text-zinc-400 placeholder:text-xs focus:outline-none text-xs cursor-text"
            type="text"
          />
          <button className="p-2 invisible">
            <svg
              className="size-[10px]"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
            >
              <path
                d="M1.52929 7.07071L1.6 7.14142L1.67071 7.07071L4 4.74142L6.32929 7.07071L6.4 7.14142L6.47071 7.07071L7.07071 6.47071L7.14142 6.4L7.07071 6.32929L4.74142 4L7.07071 1.67071L7.14142 1.6L7.07071 1.52929L6.47071 0.929289L6.4 0.858579L6.32929 0.929289L4 3.25858L1.67071 0.929289L1.6 0.858579L1.52929 0.929289L0.929289 1.52929L0.858579 1.6L0.929289 1.67071L3.25858 4L0.929289 6.32929L0.858579 6.4L0.929289 6.47071L1.52929 7.07071Z"
                fill="#3F3F46"
                stroke="#3F3F46"
                strokeWidth="0.2"
              ></path>
            </svg>
          </button>
        </div>
        <div className="max-h-[75vh] w-full max-w-[295px] bg-white">
          <div className="pl-8 py-5 pr-5">
            <div className="flex items-center space-x-2 justify-between">
              <label className="text-sm cursor-pointer font-medium leading-none ">
                Watchlist
              </label>
              <button
                type="button"
                role="checkbox"
                aria-checked="true"
                data-state="unchecked"
                value="on"
                className="peer h-4 w-4 shrink-0 rounded border-[0.5px] border-neutral-300 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50  mx-1"
              ></button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex-col gap-4 space-y-4">
          <SentimentDropdown onFilterChange={handleSentimentFilterChange} data={data} />
          <AnnouncementTypeDropdown onFilterChange={handleTypeFilterChange} announcementTypes={announcementTypes} />
        </div>
      </div>
    </div>
  );
};

export default Filter;
