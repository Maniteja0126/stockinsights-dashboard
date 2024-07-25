import React from 'react'

const DashboardNavBar = () => {
  return (
    <div>
        <div className="flex flex-wrap justify-between px-[60px] py-6 border-neutral-200 border-b-[1.5px] leading-6 gap-3">
        <div className="flex items-center gap-10 max-h-8">
          <div className="flex gap-3.5">
            <div className="text-base font-semibold whitespace-nowrap text-neutral-600 leading-6">
              Announcement Dashboard
            </div>
            <div className="flex justify-center items-center gap-2.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="18"
                fill="none"
              >
                <path
                  stroke="#B04425"
                  strokeWidth="1.5"
                  d="m6.005 13.105 1.127-2.403a1.25 1.25 0 0 1 .618-.608L10.175 9 7.75 7.907a1.25 1.25 0 0 1-.618-.608L6.005 4.896 4.9 7.292a1.25 1.25 0 0 1-.625.617L1.835 9l2.44 1.091m1.73 3.013-1.73-3.013m1.73 3.013L4.9 10.71a1.25 1.25 0 0 0-.625-.617m1.73 3.013-1.73-3.013m1.502 3.5Z"
                ></path>
                <path
                  fill="#B04425"
                  d="m12.867 4.212-.41.874a.5.5 0 0 1-.907-.002l-.401-.87a.5.5 0 0 0-.25-.246l-.88-.394a.5.5 0 0 1 0-.912l.88-.394a.5.5 0 0 0 .25-.247l.4-.869a.5.5 0 0 1 .907-.002l.41.874a.5.5 0 0 0 .248.243l.875.395a.5.5 0 0 1 0 .912l-.875.394a.5.5 0 0 0-.248.244M12.867 15.977l-.41.874a.5.5 0 0 1-.907-.003l-.401-.869a.5.5 0 0 0-.25-.246l-.88-.394a.5.5 0 0 1 0-.913l.88-.393a.5.5 0 0 0 .25-.247l.4-.869a.5.5 0 0 1 .907-.003l.41.875a.5.5 0 0 0 .248.243l.875.395a.5.5 0 0 1 0 .911l-.875.395a.5.5 0 0 0-.248.243"
                ></path>
              </svg>
              <div className="flex items-center gap-10 max-h-[32px]">
                Ai-powered
              </div>
            </div>
          </div>
          <div>
            <div
              role="menubar"
              className="flex h-10 items-center space-x-1 rounded-md border bg-background border-none p-0 w-fit"
              data-orientation="horizontal"
              style={{ outline: "none" }}
            >
              <button
                type="button"
                role="menuitem"
                aria-haspopup="menu"
                aria-expanded="false"
                data-state="closed"
                className="flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground"
                data-orientation="horizontal"
                data-radix-collection-item=""
              >
                <div className="flex justify-center w-fit px-2 py-[1px] gap-x-2 items-center rounded-[4px] border border-zinc-300 border-dashed">
                  <div className="flex justify-center">
                    <svg
                      width="14"
                      className="translate-y-[3px]"
                      height="12"
                      viewBox="0 0 14 8"
                      fill="none"
                    >
                      <path
                        d="M0.631579 0H12.8421C13.0096 0 13.1703 0.0665411 13.2887 0.184985C13.4071 0.303429 13.4737 0.464074 13.4737 0.631579C13.4737 0.799084 13.4071 0.959729 13.2887 1.07817C13.1703 1.19662 13.0096 1.26316 12.8421 1.26316H0.631579C0.464074 1.26316 0.303429 1.19662 0.184985 1.07817C0.0665412 0.959729 0 0.799084 0 0.631579C0 0.464074 0.0665412 0.303429 0.184985 0.184985C0.303429 0.0665411 0.464074 0 0.631579 0ZM2.52632 4C2.52632 3.83249 2.59286 3.67185 2.7113 3.55341C2.82974 3.43496 2.99039 3.36842 3.15789 3.36842H10.3158C10.4833 3.36842 10.6439 3.43496 10.7624 3.55341C10.8808 3.67185 10.9474 3.83249 10.9474 4C10.9474 4.16751 10.8808 4.32815 10.7624 4.44659C10.6439 4.56504 10.4833 4.63158 10.3158 4.63158H3.15789C2.99039 4.63158 2.82974 4.56504 2.7113 4.44659C2.59286 4.32815 2.52632 4.16751 2.52632 4ZM5.05263 7.36842C5.05263 7.20092 5.11917 7.04027 5.23762 6.92183C5.35606 6.80338 5.51671 6.73684 5.68421 6.73684H7.78947C7.95698 6.73684 8.11762 6.80338 8.23607 6.92183C8.35451 7.04027 8.42105 7.20092 8.42105 7.36842C8.42105 7.53593 8.35451 7.69657 8.23607 7.81501C8.11762 7.93346 7.95698 8 7.78947 8H5.68421C5.51671 8 5.35606 7.93346 5.23762 7.81501C5.11917 7.69657 5.05263 7.53593 5.05263 7.36842Z"
                        fill="#71717A"
                      ></path>
                    </svg>
                    <span className="text-neutral-400 cursor-pointer text-xs font-medium">
                      &nbsp;Filter
                    </span>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="text-neutral-300 whitespace-nowrap flex items-center text-sm font-medium leading-7">
            Filtered Announcements:1
          </div>
        </div>
        <div className="flex items-center gap-10 max-h-[32px]">
          <div className="grid gap-2">
            <button
              className="px-2.5 py-1 cursor-pointer flex gap-2.5 justify-center items-center border-zinc-300 border-[0.5px] max-w-fit rounded"
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-:R5j6fnnlluiba:"
              data-state="closed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                fill="none"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M5 4.636c0-.876.242-1.53.643-1.962.396-.427 1.003-.696 1.858-.696s1.462.269 1.857.694c.4.431.642 1.085.642 1.961V6H5zM4 6V4.636c0-1.055.293-1.978.91-2.643.623-.67 1.517-1.015 2.591-1.015s1.969.344 2.59 1.014c.617.664.909 1.587.909 2.641V6h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zM3 7h9v6H3z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="text-xs whitespace-nowrap font-medium leading-6 text-neutral-400">
                23 Jul 2024 24 Jul 2024
              </span>
            </button>
          </div>
          <div className="flex gap-2.5 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="12"
              fill="none"
            >
              <path
                stroke="#16A34A"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.05 10.95a7 7 0 0 1 0-9.9m9.9 0a7 7 0 0 1 0 9.9m-7.7-2.2a3.89 3.89 0 0 1 0-5.5m5.5 0a3.89 3.89 0 0 1 0 5.5M8.778 6a.778.778 0 1 1-1.556 0 .778.778 0 0 1 1.556 0"
              ></path>
            </svg>
            <div className="text-neural-400 text-xs font-medium whitespace-nowrap leading-8">
              Updates every 15 minutes
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardNavBar