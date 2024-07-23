

"use client";

import React, { useEffect, useState } from "react";
import Filter from './Filter'; 
import DataTable from './DataTable'; 
import Pagination from './Pagination'; 

type Announcement = {
  company_name: string;
  sub_type: string;
  summary: string;
  sentiment: 'positive' | 'neutral' | 'negative';
  source_url: string;
  published_time: { $date: string };
};

const AnnouncementDashboard: React.FC = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [filteredAnnouncements, setFilteredAnnouncements] = useState<Announcement[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [announcementsPerPage] = useState(10);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setAnnouncements(data);
          setFilteredAnnouncements(data);
        } else {
          console.error('Unexpected data format:', data);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSentimentFilterChange = (selectedSentiments: string[]) => {
    filterData(selectedSentiments, []);
  };

  const handleTypeFilterChange = (selectedTypes: string[]) => {
    filterData([], selectedTypes);
  };

  const filterData = (sentiments: string[], types: string[]) => {
    const filtered = announcements.filter((announcement) => {
      const sentimentMatch = sentiments.length ? sentiments.includes(announcement.sentiment) : true;
      const typeMatch = types.length ? types.includes(announcement.sub_type) : true;
      return sentimentMatch && typeMatch;
    });
    setFilteredAnnouncements(filtered);
    setCurrentPage(1);
  };

  
  const indexOfLastAnnouncement = currentPage * announcementsPerPage;
  const indexOfFirstAnnouncement = indexOfLastAnnouncement - announcementsPerPage;
  const currentAnnouncements = filteredAnnouncements.slice(indexOfFirstAnnouncement, indexOfLastAnnouncement);

  
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const totalPages = Math.ceil(filteredAnnouncements.length / announcementsPerPage);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Announcements Dashboard</h1>
      <div className="flex">
        <div className="lg:w-[18%]">
          <Filter
            onSentimentFilterChange={handleSentimentFilterChange}
            onTypeFilterChange={handleTypeFilterChange}
          />
        </div>
        <div className="w-3/4 ml-4">
          <DataTable announcements={currentAnnouncements} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={paginate}
          />
        </div>
      </div>
    </div>
  );
};

export default AnnouncementDashboard;
