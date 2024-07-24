import React from "react";

export const SideBar = () => {
  return (
    <div>
            <div className={`flex-col cursor-pointer p-5  `} >

                <div className={`flex text-sm text-slate-500 p-3`}>
                    <div className="pr-2">
                        <AiIcon />
                    </div>
                    <div>
                        AI Assist
                    </div>
                </div>
                <div className={`flex   text-sm text-slate-500 p-3`}>
                    <div className="pr-2">
                        <SearchIcon />
                    </div>
                    <div>
                        Search Engine
                    </div>
                </div>
                <div className={`flex text-sm text-slate-500 p-3`}>
                    <div className="pr-2">
                        <CompaniesIcon />
                    </div>
                    <div>
                        Companies
                    </div>
                </div>
                <div className={`flex  text-sm font-semibold text-[#151515] bg-neutral-200 rounded p-3`}>
                    <div className="pr-2">
                        <AnnouncementIcon />
                    </div>
                    Announcements
                </div>
                <div className={`flex  text-sm text-slate-500 p-3`}>
                    <div className="pr-2">
                        <EmailIcon />
                    </div>
                    <div>
                        Email Updates
                    </div>
                </div>
            </div>
        </div>
  );
};

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  );
}

function AnnouncementIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46"
      />
    </svg>
  );
}

function CompaniesIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    </svg>
  );
}

function AiIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" fill="none">
      <path
        stroke="#B04425"
        strokeWidth="1.5"
        className="size-6"
        d="m6.005 13.105 1.127-2.403a1.25 1.25 0 0 1 .618-.608L10.175 9 7.75 7.907a1.25 1.25 0 0 1-.618-.608L6.005 4.896 4.9 7.292a1.25 1.25 0 0 1-.625.617L1.835 9l2.44 1.091m1.73 3.013-1.73-3.013m1.73 3.013L4.9 10.71a1.25 1.25 0 0 0-.625-.617m1.73 3.013-1.73-3.013m1.502 3.5Z"
      ></path>
      <path
        fill="#B04425"
        d="m12.867 4.212-.41.874a.5.5 0 0 1-.907-.002l-.401-.87a.5.5 0 0 0-.25-.246l-.88-.394a.5.5 0 0 1 0-.912l.88-.394a.5.5 0 0 0 .25-.247l.4-.869a.5.5 0 0 1 .907-.002l.41.874a.5.5 0 0 0 .248.243l.875.395a.5.5 0 0 1 0 .912l-.875.394a.5.5 0 0 0-.248.244M12.867 15.977l-.41.874a.5.5 0 0 1-.907-.003l-.401-.869a.5.5 0 0 0-.25-.246l-.88-.394a.5.5 0 0 1 0-.913l.88-.393a.5.5 0 0 0 .25-.247l.4-.869a.5.5 0 0 1 .907-.003l.41.875a.5.5 0 0 0 .248.243l.875.395a.5.5 0 0 1 0 .911l-.875.395a.5.5 0 0 0-.248.243"
      ></path>
    </svg>
  );
}
