

import React from 'react';

type Announcement = {
  company_name: string;
  sub_type: string;
  summary: string;
  sentiment: 'positive' | 'neutral' | 'negative';
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
      return 'Invalid Date';
    }
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Company</th>
            <th className="py-2 px-4 border-b">Announcement type</th>
            <th className="py-2 px-4 border-b">Announcement Summary</th>
            <th className="py-2 px-4 border-b">Sentiment</th>
            <th className="py-2 px-4 border-b">Source</th>
            <th className="py-2 px-4 border-b">Date</th>
          </tr>
        </thead>
        <tbody>
          {announcements.map((announcement, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{announcement.company_name}</td>
              <td className="py-2 px-4 border-b">{announcement.sub_type}</td>
              <td className="py-2 px-4 border-b">{announcement.summary}</td>
              <td className="py-2 px-4 border-b">
                <span className={`inline-block w-3 h-3 rounded-full mr-2 ${
                  announcement.sentiment === 'positive' ? 'bg-green-500' :
                  announcement.sentiment === 'neutral' ? 'bg-yellow-500' :
                  'bg-red-500'
                }`}></span>
              </td>
              <td className="py-2 px-4 border-b">
                <a href={announcement.source_url} target="_blank" rel="noopener noreferrer">Source</a>
              </td>
              <td className="py-2 px-4 border-b">{formatDate(announcement.published_time.$date)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
