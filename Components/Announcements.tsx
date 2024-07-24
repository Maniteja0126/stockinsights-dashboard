"use client"
import React, { useState } from 'react';

interface AnnouncementTypeDropdownProps {
  onFilterChange: (selectedTypes: string[]) => void;
  announcementTypes: string[];
}

const AnnouncementTypeDropdown: React.FC<AnnouncementTypeDropdownProps> = ({ onFilterChange, announcementTypes }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleTypeChange = (type: string) => {
    const updatedSelectedTypes = selectedTypes.includes(type)
      ? selectedTypes.filter((t) => t !== type)
      : [...selectedTypes, type];
    setSelectedTypes(updatedSelectedTypes);
    onFilterChange(updatedSelectedTypes);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="px-4 py-2 rounded-md text-sm font-medium flex"
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
        Announcements
      </button>
      {isDropdownOpen && (
        <div className='absolute overflow-hidden max-h-[23vh] overflow-y-auto text-xs z-10 scrollbar-hide'>
          <div data-radix-scroll-area-viewport className="h-full w-full rounded-[inherit]  " >
            <div className="p-2" style={{minWidth:'100%', display:'table'}}>
              {announcementTypes.map((type, index) => (
                <div
                  key={index}
                  className="flex flex-row items-start  text-xs text-neutral-400 py-2 pl-8 pr-5"
                  onClick={() => handleTypeChange(type)}
                >
                  <input
                    type="checkbox"
                    checked={selectedTypes.includes(type)}
                    onChange={() => handleTypeChange(type)}
                    className="mr-2 rounded-md"
                  />
                  <span>{type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnnouncementTypeDropdown;
