import React from 'react';

const Footer2 = () => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-500 to-teal-500 py-8 sm:py-12 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-8 sm:gap-10">
        <div className="flex flex-col items-center gap-5 text-center">
          <h2 className="text-gray-200 text-xl sm:text-2xl md:text-3xl font-normal font-['Readex_Pro'] leading-loose tracking-wide">
            Questions? We’re here to help
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 md:gap-20">
            {/* Call Us Section */}
            <div className="flex items-center gap-2.5 p-2.5">
              <svg width="24" height="24" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-8 sm:h-8">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M25.8086 32.9221C22.8626 32.184 16.8317 30.1031 11.3642 24.6357C5.89676 19.1683 3.81594 13.1373 3.07783 10.1913C2.65366 8.49835 3.4175 6.86466 4.71266 5.93953L8.10802 3.51427C10.0947 2.09523 12.8584 2.57676 14.248 4.58407L16.3856 7.67173C17.293 8.98239 16.98 10.7788 15.6828 11.7053L13.9784 12.9228C14.2364 13.9095 15.0387 15.9359 17.5514 18.4486C20.0641 20.9613 22.0905 21.7635 23.0772 22.0215L24.2946 20.317C25.2212 19.02 27.0176 18.7068 28.3282 19.6142L31.4159 21.7518C33.4232 23.1416 33.9047 25.9052 32.4856 27.8919L30.0604 31.2873C29.1352 32.5825 27.5016 33.3463 25.8086 32.9221ZM13.4266 22.5733C18.3987 27.5454 23.8855 29.4335 26.5174 30.0929C26.9021 30.1892 27.3671 30.0397 27.687 29.592L30.1123 26.1966C30.5853 25.5345 30.4248 24.6132 29.7556 24.1499L26.668 22.0123L25.3615 23.8415C24.8276 24.589 23.8402 25.1753 22.6904 24.9272C21.2554 24.6176 18.6027 23.6246 15.489 20.511C12.3753 17.3973 11.3823 14.7446 11.0727 13.3096C10.8246 12.1598 11.411 11.1724 12.1585 10.6384L13.9876 9.33192L11.85 6.24427C11.3867 5.57515 10.4655 5.41465 9.8033 5.88766L6.40794 8.31293C5.96017 8.63275 5.81068 9.09782 5.90706 9.48249C6.56649 12.1144 8.45459 17.6013 13.4266 22.5733Z"
                  fill="white"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </svg>
              <span className="text-white text-lg sm:text-xl md:text-2xl font-medium font-['Readex_Pro'] leading-8 tracking-wide">
                Call us: 07435263322
              </span>
            </div>
            {/* Email Section */}
            <div className="flex items-center gap-2.5 p-2.5">
              <svg width="24" height="24" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-8 sm:h-8">
                <path
                  d="M6.33325 10.7086L15.3749 17.4897C16.9305 18.6564 19.0693 18.6564 20.6249 17.4897L29.6666 10.7085"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28.2083 7.79175H7.79167C6.18084 7.79175 4.875 9.09758 4.875 10.7084V25.2917C4.875 26.9026 6.18084 28.2084 7.79167 28.2084H28.2083C29.8192 28.2084 31.125 26.9026 31.125 25.2917V10.7084C31.125 9.09758 29.8192 7.79175 28.2083 7.79175Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-white text-lg sm:text-xl md:text-2xl font-medium font-['Readex_Pro'] leading-8 tracking-wide">
                Email: info@righttimemedical.co.uk
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer2;