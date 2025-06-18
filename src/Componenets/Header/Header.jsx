
const Header = () => {
  return (
    <div className="w-full bg-slate-50 flex flex-col min-h-screen">
 
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 pt-8 sm:pt-12 md:pt-16 lg:pt-24 flex-1">
        <div className="w-full flex flex-col items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-gradient-to-r from-teal-50 to-cyan-100 rounded-2xl sm:rounded-3xl md:rounded-[40px] border-2 border-teal-500">
            <svg width="20" height="20" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6">
              <path
                d="M22.1993 2.63665C21.5424 1.84191 20.7175 1.20274 19.7839 0.765199C18.8503 0.327654 17.8313 0.102621 16.8002 0.106313C15.0361 0.0528974 13.3186 0.677637 12.0011 1.85199C10.6836 0.677637 8.9661 0.0528974 7.20199 0.106313C6.17095 0.102621 5.15193 0.327654 4.21834 0.765199C3.28474 1.20274 2.45981 1.84191 1.80298 2.63665C0.659584 4.0236 -0.536598 6.53474 0.256458 10.6272C1.52223 17.1624 11.0137 22.5254 11.4144 22.745C11.5931 22.8446 11.7942 22.8969 11.9987 22.8969C12.2032 22.8969 12.4044 22.8446 12.583 22.745C12.9861 22.5206 22.4776 17.1576 23.741 10.6272C24.5388 6.53474 23.3426 4.0236 22.1993 2.63665ZM21.3906 10.1713C20.4956 14.7916 13.9904 19.0892 12.0011 20.3106C9.19843 18.6189 3.43228 14.3717 2.61763 10.1713C2.00214 6.99665 2.84438 5.15259 3.66024 4.16397C4.09168 3.6434 4.63299 3.22476 5.24533 2.93809C5.85767 2.65142 6.52587 2.50382 7.20199 2.50587C7.92413 2.45172 8.64798 2.58561 9.30296 2.89449C9.95795 3.20337 10.5217 3.67671 10.9393 4.26835C11.0423 4.45784 11.1942 4.61624 11.3792 4.72705C11.5642 4.83786 11.7756 4.89702 11.9912 4.89837C12.2069 4.89972 12.4189 4.8432 12.6053 4.73471C12.7917 4.62622 12.9456 4.46973 13.0509 4.28155C13.4677 3.6853 14.0327 3.20796 14.6901 2.89658C15.3476 2.58521 16.0749 2.45055 16.8002 2.50587C17.4778 2.50258 18.1476 2.64958 18.7615 2.9363C19.3754 3.22301 19.918 3.6423 20.3504 4.16397C21.1638 5.15259 22.0061 6.99665 21.3906 10.1713Z"
                fill="#538FC9"
              />
            </svg>
            <span className="text-blue-500 text-base sm:text-lg md:text-xl font-medium font-['Readex_Pro'] tracking-wide">
              Transform Health Together
            </span>
          </div>
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-['Readex_Pro'] leading-tight">
            <span className="text-gray-900">Your</span>{' '}
            <span className="text-teal-500">Healthcare Career</span>
            <br className="hidden sm:block" />
            <span className="text-gray-900">Starts Here</span>
          </h1>
          <p className="text-center text-gray-500 text-base sm:text-lg md:text-xl lg:text-2xl font-normal font-['Readex_Pro'] leading-relaxed max-w-3xl">
            Join thousands of passionate nurses and carers who’ve found their perfect healthcare role. Experience competitive salaries, flexible schedules, and meaningful work that makes a difference
          </p>
        </div>
        <a
          href="/Apply"
          className="inline-flex items-center gap-3 px-6 sm:px-8 md:px-12 lg:px-16 py-3 sm:py-4 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl md:rounded-2xl shadow-[0px_4px_60px_rgba(80,145,198,0.3)] text-white text-lg sm:text-xl md:text-2xl font-medium font-['Readex_Pro'] hover:opacity-90 transition-opacity"
        >
          <span>Apply now</span>
          <svg width="14" height="14" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
            <g clip-path="url(#clip0_9_31)">
              <path
                d="M0.576915 8.07691H13.0298L7.09326 14.0163C6.98581 14.1244 6.9255 14.2706 6.9255 14.4231C6.9255 14.5755 6.98581 14.7217 7.09326 14.8298C7.20136 14.9372 7.34758 14.9976 7.49999 14.9976C7.65241 14.9976 7.79863 14.9372 7.90672 14.8298L14.8298 7.90672C14.8571 7.87968 14.8813 7.84969 14.9019 7.81729C14.9111 7.80818 14.9198 7.79854 14.9279 7.78845C14.9279 7.76825 14.9481 7.75095 14.9567 7.73075L14.974 7.67306C14.9757 7.65676 14.9757 7.64033 14.974 7.62402C14.9888 7.54975 14.9888 7.4733 14.974 7.39902C14.9757 7.38272 14.9757 7.36629 14.974 7.34999L14.9567 7.29229C14.9567 7.2721 14.9365 7.25479 14.9279 7.2346C14.9203 7.21956 14.9116 7.2051 14.9019 7.19133C14.8813 7.15893 14.8571 7.12894 14.8298 7.10191L7.90672 0.17883C7.855 0.118437 7.79136 0.0693874 7.71978 0.0347586C7.64821 0.0001297 7.57025 -0.019331 7.49079 -0.0223999C7.41134 -0.0254688 7.33211 -0.0120802 7.25808 0.0169239C7.18404 0.045929 7.1168 0.0899239 7.06058 0.146148C7.00436 0.202372 6.96036 0.26961 6.93136 0.343644C6.90235 0.417678 6.88896 0.496908 6.89203 0.576362C6.8951 0.655815 6.91456 0.733776 6.94919 0.805351C6.98382 0.876927 7.03287 0.940573 7.09326 0.992292L13.0298 6.92306H0.576915C0.423905 6.92306 0.277163 6.98384 0.168968 7.09204C0.0607748 7.20023 -7.62939e-06 7.34698 -7.62939e-06 7.49999C-7.62939e-06 7.653 0.0607748 7.79974 0.168968 7.90793C0.277163 8.01613 0.423905 8.07691 0.576915 8.07691Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_9_31">
                <rect width="15" height="15" fill="white" transform="matrix(-1 0 0 -1 15 15)" />
              </clipPath>
            </defs>
          </svg>
        </a>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Happy Staff */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-blue-100 rounded-full relative">
              <svg
                width="24"
                height="24"
                viewBox="0 0 48 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
              >
                <path
                  d="M22.7439 40.5044C23.146 40.7139 23.3471 40.8187 23.626 40.8729C23.8433 40.9152 24.1567 40.9152 24.3741 40.8729C24.6529 40.8187 24.854 40.7139 25.2561 40.5044C28.9742 38.5672 39.6667 32.2365 39.6667 23.5002V16.093C39.6667 14.5273 39.6667 13.7444 39.4105 13.0715C39.1843 12.477 38.8168 11.9466 38.3395 11.526C37.7994 11.05 37.0664 10.7751 35.6004 10.2253L25.1002 6.28777C24.6931 6.1351 24.4896 6.05876 24.2801 6.02848C24.0944 6.00165 23.9056 6.00165 23.72 6.02848C23.5104 6.05876 23.307 6.1351 22.8998 6.28777L12.3996 10.2253C10.9336 10.7751 10.2006 11.05 9.66043 11.526C9.18322 11.9466 8.81562 12.477 8.58942 13.0715C8.33334 13.7444 8.33334 14.5273 8.33334 16.093V23.5002C8.33334 32.2365 19.0258 38.5672 22.7439 40.5044Z"
                  stroke="#1CBA9F"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-teal-500 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold font-['Readex_Pro']">500+</span>
              <span className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl font-normal font-['Readex_Pro']">Happy Staff</span>
            </div>
          </div>
          {/* Support */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-purple-100 rounded-full relative">
              <svg
                width="24"
                height="24"
                viewBox="0 0 48 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.872 10.34L14.6 26.5362H24.94V36.66L35.28 18.4391H24.94L22.872 10.34Z"
                  stroke="#9333EA"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-purple-600 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold font-['Readex_Pro']">24/7</span>
              <span className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl font-normal font-['Readex_Pro']">Support</span>
            </div>
          </div>
          {/* Salary */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-green-100 rounded-full relative">
              <svg
                width="24"
                height="24"
                viewBox="0 0 48 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
              >
                <path
                  d="M36.8219 13.8899C36.0727 12.9833 35.1317 12.2543 34.0668 11.7552C33.0019 11.2561 31.8395 10.9994 30.6634 11.0036C28.6512 10.9427 26.6921 11.6553 25.1893 12.9948C23.6864 11.6553 21.7273 10.9427 19.7151 11.0036C18.539 10.9994 17.3766 11.2561 16.3117 11.7552C15.2468 12.2543 14.3058 12.9833 13.5566 13.8899C12.2524 15.4719 10.8879 18.3363 11.7925 23.0044C13.2364 30.4589 24.0629 36.5763 24.52 36.8267C24.7238 36.9404 24.9532 37 25.1865 37C25.4198 37 25.6492 36.9404 25.853 36.8267C26.3128 36.5708 37.1394 30.4534 38.5805 23.0044C39.4906 18.3363 38.1261 15.4719 36.8219 13.8899ZM35.8995 22.4844C34.8786 27.7546 27.4583 32.6568 25.1893 34.05C21.9923 32.1203 15.4151 27.2756 14.4858 22.4844C13.7838 18.8632 14.7445 16.7597 15.6751 15.632C16.1672 15.0382 16.7847 14.5607 17.4832 14.2337C18.1816 13.9067 18.9438 13.7384 19.7151 13.7407C20.5388 13.6789 21.3644 13.8317 22.1116 14.184C22.8587 14.5363 23.5018 15.0762 23.9781 15.7511C24.0955 15.9672 24.2688 16.1479 24.4799 16.2743C24.6909 16.4007 24.932 16.4682 25.178 16.4697C25.424 16.4713 25.6659 16.4068 25.8785 16.2831C26.0911 16.1593 26.2666 15.9808 26.3867 15.7662C26.8621 15.086 27.5066 14.5415 28.2565 14.1864C29.0065 13.8312 29.836 13.6776 30.6634 13.7407C31.4363 13.7369 32.2003 13.9046 32.9006 14.2317C33.6008 14.5587 34.2198 15.037 34.713 15.632C35.6409 16.7597 36.6016 18.8632 35.8995 22.4844Z"
                  fill="#18A34A"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-green-600 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold font-['Readex_Pro']">$35k+</span>
              <span className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl font-normal font-['Readex_Pro']">Starting Salary</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;