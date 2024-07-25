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
  return (
    <div className="flex">
      <div className="flex-1">
        <AnnouncementDashboard  />
      </div>
    </div>
  );
};

export default DashboardPage;
