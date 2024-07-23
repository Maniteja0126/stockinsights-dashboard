"use client"

import React, { useState, useEffect } from 'react';
import AnnouncementDashboard from '@/Components/DashBoard';

type Announcement = {
  company_name: string;
  sub_type: string;
  summary: string;
  sentiment: 'positive' | 'neutral' | 'negative';
  source_url: string;
  published_time: { $date: string };
};

const DashboardPage: React.FC = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [filteredAnnouncements, setFilteredAnnouncements] = useState<Announcement[]>([]);

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

  return (
    <div className="flex">
      <div className="flex-1">
        <AnnouncementDashboard data={filteredAnnouncements} />
      </div>
    </div>
  );
};

export default DashboardPage;
