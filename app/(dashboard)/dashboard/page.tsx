"use client"
import AnnouncementDashboard from '@/Components/DashBoard';

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