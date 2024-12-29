import React from "react";

function LeftSider() {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:static">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 sm:flex-row">
          <a target="_blank" rel="noopener noreferrer" href="mailto:ashutoshkrnew@gmail.com">
          <i class="ri-mail-line text-gray-400"></i>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ashuashutoshmi6/">                                             
          <i class="ri-linkedin-box-line text-gray-400 "></i>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/Ashu-Ashutosh">                                             
          <i class="ri-github-line text-gray-400 "></i>
          </a >
          <a target="_blank" rel="noopener noreferrer" href="https://x.com/_Ashu_Ashutosh">                                             
          <i class="ri-twitter-line text-gray-400"></i>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="mailto:ashutoshkrnew@gmail.com">                                             
          <i class="ri-instagram-line text-gray-400 "></i>
          </a>

          
            
        </div>
        <div className="w-[1px] h-32 bg-[#125f63] sm:hidden"></div>
      </div>
    </div>
  );
}

export default LeftSider;
