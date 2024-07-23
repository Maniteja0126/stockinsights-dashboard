

"use client";

import React, { useState, useEffect } from "react";

interface DataItem {
  sentiment: string;
}

interface SentimentDropdownProps {
  onFilterChange: (selectedSentiments: string[]) => void;
  data: DataItem[];
}

const SentimentDropdown: React.FC<SentimentDropdownProps> = ({ onFilterChange, data }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [sentiments, setSentiments] = useState<string[]>([]);
  const [selectedSentiments, setSelectedSentiments] = useState<string[]>([]);

  useEffect(() => {
    //@ts-ignore
    const uniqueSentiments = [...new Set(data.map((item) => item.sentiment))];
    setSentiments(uniqueSentiments);
  }, [data]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSentimentChange = (sentiment: string) => {
    const updatedSelectedSentiments = selectedSentiments.includes(sentiment)
      ? selectedSentiments.filter((s) => s !== sentiment)
      : [...selectedSentiments, sentiment];
    setSelectedSentiments(updatedSelectedSentiments);
    onFilterChange(updatedSelectedSentiments);
  };

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const validSentiments = sentiments.filter(
    (sentiment) => sentiment && sentiment.trim() !== ""
  );

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="px-4 py-2 rounded-md text-sm font-medium flex "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5 text-slate-400 pr-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
        Sentiment
      </button>
      {isDropdownOpen && (
        <div className="mt-1 w-48 max-h-60 overflow-y-auto rounded-md z-10">
          <div className="p-2">
            {validSentiments.map((sentiment, index) => (
              <div
                key={index}
                className="p-2 cursor-pointer flex items-center  "
                onClick={() => handleSentimentChange(sentiment)}
              >
                <div className="flex justify-start w-full items-center text-xs text-neutral-400">
                  <span>{capitalizeFirstLetter(sentiment)}</span>
                </div>
                <div className="flex justify-end w-full items-center">
                  <input
                    type="checkbox"
                    checked={selectedSentiments.includes(sentiment)}
                    onChange={() => handleSentimentChange(sentiment)}
                    className="ml-2"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SentimentDropdown;
