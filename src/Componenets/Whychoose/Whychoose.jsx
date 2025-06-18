import React from 'react';

const WhyChoose = () => {
  return (
    <div className="w-full bg-white py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
        <h2 className="text-center text-gray-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-['Readex_Pro']">
          Why Choose RightTime Medicals?
        </h2>
        <p className="text-center text-gray-500 text-base sm:text-lg md:text-xl lg:text-2xl font-normal font-['Readex_Pro'] leading-relaxed max-w-3xl">
          We believe in taking care of those who take care of others. Join a company that values your dedication and invests in your future.
        </p>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Competitive Compensation */}
          <div className="bg-white rounded-lg shadow-[0px_4px_5px_rgba(0,0,0,0.15)] p-6 sm:p-8 flex flex-col items-center gap-4 sm:gap-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-green-100 rounded-full relative">
              <svg
                width="32"
                height="32"
                viewBox="0 0 61 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
              >
                <path
                  d="M45.8259 17.7318C44.8694 16.5745 43.6682 15.6438 42.3087 15.0067C40.9493 14.3695 39.4654 14.0418 37.964 14.0472C35.3952 13.9694 32.8942 14.8792 30.9757 16.5892C29.0572 14.8792 26.5562 13.9694 23.9874 14.0472C22.486 14.0418 21.0021 14.3695 19.6427 15.0067C18.2832 15.6438 17.082 16.5745 16.1255 17.7318C14.4605 19.7514 12.7187 23.4081 13.8735 29.3674C15.7167 38.8837 29.5379 46.6932 30.1214 47.0129C30.3815 47.158 30.6744 47.2341 30.9722 47.2341C31.27 47.2341 31.5629 47.158 31.823 47.0129C32.4101 46.6862 46.2312 38.8768 48.0709 29.3674C49.2327 23.4081 47.4909 19.7514 45.8259 17.7318ZM44.6484 28.7035C43.3451 35.4315 33.8724 41.6896 30.9757 43.4681C26.8945 41.0047 18.498 34.82 17.3118 28.7035C16.4155 24.0807 17.642 21.3954 18.83 19.9558C19.4582 19.1978 20.2465 18.5882 21.1381 18.1708C22.0298 17.7533 23.0028 17.5384 23.9874 17.5414C25.0389 17.4625 26.093 17.6575 27.0467 18.1073C28.0005 18.5571 28.8215 19.2463 29.4295 20.1078C29.5795 20.3838 29.8007 20.6144 30.0701 20.7758C30.3395 20.9371 30.6473 21.0233 30.9613 21.0252C31.2753 21.0272 31.5841 20.9449 31.8555 20.7869C32.1269 20.629 32.351 20.4011 32.5044 20.1271C33.1113 19.2588 33.934 18.5637 34.8914 18.1103C35.8488 17.6569 36.9078 17.4608 37.964 17.5414C38.9506 17.5366 39.926 17.7506 40.82 18.1681C41.7139 18.5856 42.5041 19.1962 43.1337 19.9558C44.3182 21.3954 45.5446 24.0807 44.6484 28.7035Z"
                  fill="#18A34A"
                />
              </svg>
            </div>
            <h3 className="text-center text-gray-900 text-xl sm:text-2xl md:text-3xl font-medium font-['Readex_Pro'] leading-tight">
              Competitive Compensation
            </h3>
            <p className="text-center text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl font-normal font-['Readex_Pro'] leading-relaxed">
              Attractive salary packages starting from $25,000 with regular reviews and performance bonuses.
            </p>
          </div>

          {/* Supportive Team Environment */}
          <div className="bg-white rounded-lg shadow-[0px_4px_5px_rgba(0,0,0,0.15)] p-6 sm:p-8 flex flex-col items-center gap-4 sm:gap-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-green-100 rounded-full relative">
              <svg
                width="32"
                height="32"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
              >
                <path
                  d="M40 27.5C44.15 27.5 47.475 24.15 47.475 20C47.475 15.85 44.15 12.5 40 12.5C35.85 12.5 32.5 15.85 32.5 20C32.5 24.15 35.85 27.5 40 27.5ZM20 27.5C24.15 27.5 27.475 24.15 27.475 20C27.475 15.85 24.15 12.5 20 12.5C15.85 12.5 12.5 15.85 12.5 20C12.5 24.15 15.85 27.5 20 27.5ZM20 32.5C14.175 32.5 2.5 35.425 2.5 41.25V47.5H37.5V41.25C37.5 35.425 25.825 32.5 20 32.5ZM40 32.5C39.275 32.5 38.45 32.55 37.575 32.625C40.475 34.725 42.5 37.55 42.5 41.25V47.5H57.5V41.25C57.5 35.425 45.825 32.5 40 32.5Z"
                  fill="#18A34A"
                />
              </svg>
            </div>
            <h3 className="text-center text-gray-900 text-xl sm:text-2xl md:text-3xl font-medium font-['Readex_Pro'] leading-tight">
              Supportive Team Environment
            </h3>
            <p className="text-center text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl font-normal font-['Readex_Pro'] leading-relaxed">
              Work alongside experienced professionals in a collaborative and caring work environment.
            </p>
          </div>

          {/* Flexible Scheduling */}
          <div className="bg-white rounded-lg shadow-[0px_4px_5px_rgba(0,0,0,0.15)] p-6 sm:p-8 flex flex-col items-center gap-4 sm:gap-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-green-100 rounded-full relative">
              <svg
                width="32"
                height="32"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
              >
                <path
                  d="M4.16663 39.5833C4.16663 43.125 6.87496 45.8333 10.4166 45.8333H39.5833C43.125 45.8333 45.8333 43.125 45.8333 39.5833V22.9166H4.16663V39.5833ZM39.5833 8.33329H35.4166V6.24996C35.4166 4.99996 34.5833 4.16663 33.3333 4.16663C32.0833 4.16663 31.25 4.99996 31.25 6.24996V8.33329H18.75V6.24996C18.75 4.99996 17.9166 4.16663 16.6666 4.16663C15.4166 4.16663 14.5833 4.99996 14.5833 6.24996V8.33329H10.4166C6.87496 8.33329 4.16663 11.0416 4.16663 14.5833V18.75H45.8333V14.5833C45.8333 11.0416 43.125 8.33329 39.5833 8.33329Z"
                  fill="#18A34A"
                />
              </svg>
            </div>
            <h3 className="text-center text-gray-900 text-xl sm:text-2xl md:text-3xl font-medium font-['Readex_Pro'] leading-tight">
              Flexible Scheduling
            </h3>
            <p className="text-center text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl font-normal font-['Readex_Pro'] leading-relaxed">
              Choose from full-time, part-time, and flexible shift patterns that work with your lifestyle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;