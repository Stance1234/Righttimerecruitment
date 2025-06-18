import React from 'react';

const Team = () => {
  return (
    <div className="w-full bg-white py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-8 sm:gap-12 md:gap-16">
        <h2 className="text-center text-gray-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-['Readex_Pro']">
          Hear From Our Team
        </h2>
        <p className="text-center text-gray-500 text-base sm:text-lg md:text-xl lg:text-2xl font-normal font-['Readex_Pro'] leading-relaxed max-w-3xl">
          Discover what makes RightTime Medicals a great place to work
        </p>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {/* Testimonial 1: Sarah Johnson */}
          <div className="bg-white rounded-lg shadow-[0px_4px_5px_rgba(0,0,0,0.15)] p-6 sm:p-8 flex flex-col gap-6 sm:gap-8">
            <div className="flex justify-start gap-1">
              {[...Array(4)].map((_, i) => (
                <svg key={`star-filled-1-${i}`} width="24" height="24" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6">
                  <path d="M19.2818 7.85184C19.6677 6.9862 19.8607 6.55339 20.1293 6.4201C20.3627 6.3043 20.6367 6.3043 20.87 6.4201C21.1387 6.55339 21.3317 6.9862 21.7175 7.85184L24.7908 14.7467C24.905 15.0026 24.962 15.1306 25.0503 15.2286C25.1283 15.3153 25.2238 15.3846 25.3303 15.4321C25.4508 15.4857 25.5902 15.5004 25.8688 15.5298L33.376 16.3222C34.3185 16.4217 34.7897 16.4714 34.9995 16.6857C35.1817 16.8719 35.2663 17.1325 35.2283 17.3903C35.1847 17.6869 34.8327 18.0041 34.1287 18.6386L28.5208 23.6923C28.3128 23.8798 28.2087 23.9736 28.1428 24.0878C28.0845 24.1889 28.048 24.3011 28.0358 24.4171C28.022 24.5483 28.051 24.6853 28.1092 24.9594L29.6755 32.3439C29.8722 33.2711 29.9705 33.7346 29.8315 34.0003C29.7107 34.2313 29.489 34.3923 29.2322 34.4358C28.9365 34.4858 28.526 34.2491 27.705 33.7756L21.1658 30.0039C20.9232 29.8639 20.8018 29.7941 20.6728 29.7666C20.5587 29.7424 20.4407 29.7424 20.3265 29.7666C20.1975 29.7941 20.0762 29.8639 19.8335 30.0039L13.2944 33.7756C12.4734 34.2491 12.0629 34.4858 11.7672 34.4358C11.5104 34.3923 11.2886 34.2313 11.1679 34.0003C11.0289 33.7346 11.1272 33.2711 11.3239 32.3439L12.8902 24.9594C12.9483 24.6853 12.9774 24.5483 12.9636 24.4171C12.9513 24.3011 12.9149 24.1889 12.8566 24.0878C12.7906 23.9736 12.6866 23.8798 12.4785 23.6923L6.87076 18.6386C6.16675 18.0041 5.81473 17.6869 5.77096 17.3903C5.73296 17.1325 5.81765 16.8719 5.99988 16.6857C6.20968 16.4714 6.68093 16.4217 7.62343 16.3222L15.1306 15.5298C15.4092 15.5004 15.5485 15.4857 15.669 15.4321C15.7756 15.3846 15.871 15.3153 15.9491 15.2286C16.0373 15.1306 16.0944 15.0026 16.2085 14.7467L19.2818 7.85184Z" fill="#FACC15" stroke="#FACC15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              ))}
              <svg width="24" height="24" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6">
                <path d="M19.2818 7.85184C19.6677 6.9862 19.8607 6.55339 20.1293 6.4201C20.3627 6.3043 20.6367 6.3043 20.87 6.4201C21.1387 6.55339 21.3317 6.9862 21.7175 7.85184L24.7908 14.7467C24.905 15.0026 24.962 15.1306 25.0503 15.2286C25.1283 15.3153 25.2238 15.3846 25.3303 15.4321C25.4508 15.4857 25.5902 15.5004 25.8688 15.5298L33.376 16.3222C34.3185 16.4217 34.7897 16.4714 34.9995 16.6857C35.1817 16.8719 35.2663 17.1325 35.2283 17.3903C35.1847 17.6869 34.8327 18.0041 34.1287 18.6386L28.5208 23.6923C28.3128 23.8798 28.2087 23.9736 28.1428 24.0878C28.0845 24.1889 28.048 24.3011 28.0358 24.4171C28.022 24.5483 28.051 24.6853 28.1092 24.9594L29.6755 32.3439C29.8722 33.2711 29.9705 33.7346 29.8315 34.0003C29.7107 34.2313 29.489 34.3923 29.2322 34.4358C28.9365 34.4858 28.526 34.2491 27.705 33.7756L21.1658 30.0039C20.9232 29.8639 20.8018 29.7941 20.6728 29.7666C20.5587 29.7424 20.4407 29.7424 20.3265 29.7666C20.1975 29.7941 20.0762 29.8639 19.8335 30.0039L13.2944 33.7756C12.4734 34.2491 12.0629 34.4858 11.7672 34.4358C11.5104 34.3923 11.2886 34.2313 11.1679 34.0003C11.0289 33.7346 11.1272 33.2711 11.3239 32.3439L12.8902 24.9594C12.9483 24.6853 12.9774 24.5483 12.9636 24.4171C12.9513 24.3011 12.9149 24.1889 12.8566 24.0878C12.7906 23.9736 12.6866 23.8798 12.4785 23.6923L6.87076 18.6386C6.16675 18.0041 5.81473 17.6869 5.77096 17.3903C5.73296 17.1325 5.81765 16.8719 5.99988 16.6857C6.20968 16.4714 6.68093 16.4217 7.62343 16.3222L15.1306 15.5298C15.4092 15.5004 15.5485 15.4857 15.669 15.4321C15.7756 15.3846 15.871 15.3153 15.9491 15.2286C16.0373 15.1306 16.0944 15.0026 16.2085 14.7467L19.2818 7.85184Z" fill="#9C9C9C" stroke="#9C9C9C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <p className="text-gray-500 text-sm sm:text-base md:text-lg font-normal font-['Readex_Pro'] leading-relaxed">
              “RightTime Medicals has been the best career move I’ve made. The support from management and the work-life balance is exceptional. I truly feel valued here.”
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-100 rounded-full flex items-center justify-center">
                {/* TODO: Replace with actual profile image */}
                <span className="text-gray-500 text-xs">Image</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-gray-900 text-lg sm:text-xl md:text-2xl font-semibold font-['Readex_Pro'] leading-tight">
                  Sarah Johnson
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm md:text-base font-normal font-['Readex_Pro'] leading-relaxed">
                  Registered Nurse
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 2: Michael Thompson */}
          <div className="bg-white rounded-lg shadow-[0px_4px_5px_rgba(0,0,0,0.15)] p-6 sm:p-8 flex flex-col gap-6 sm:gap-8">
            <div className="flex justify-start gap-1">
              {[...Array(4)].map((_, i) => (
                <svg key={`star-filled-2-${i}`} width="24" height="24" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6">
                  <path d="M19.2818 7.85184C19.6676 6.9862 19.8606 6.55339 20.1293 6.4201C20.3626 6.3043 20.6366 6.3043 20.87 6.4201C21.1386 6.55339 21.3316 6.9862 21.7175 7.85184L24.7908 14.7467C24.905 15.0026 24.962 15.1306 25.0503 15.2286C25.1283 15.3153 25.2238 15.3846 25.3303 15.4321C25.4508 15.4857 25.5901 15.5004 25.8688 15.5298L33.376 16.3222C34.3185 16.4217 34.7896 16.4714 34.9995 16.6857C35.1816 16.8719 35.2663 17.1325 35.2283 17.3903C35.1846 17.6869 34.8326 18.0041 34.1286 18.6386L28.5208 23.6923C28.3128 23.8798 28.2086 23.9736 28.1428 24.0878C28.0845 24.1889 28.048 24.3011 28.0358 24.4171C28.022 24.5483 28.051 24.6853 28.1091 24.9594L29.6755 32.3439C29.8722 33.2711 29.9705 33.7346 29.8315 34.0003C29.7106 34.2313 29.489 34.3923 29.2321 34.4358C28.9365 34.4858 28.526 34.2491 27.705 33.7756L21.1658 30.0039C20.9231 29.8639 20.8018 29.7941 20.6728 29.7666C20.5586 29.7424 20.4406 29.7424 20.3265 29.7666C20.1975 29.7941 20.0761 29.8639 19.8335 30.0039L13.2943 33.7756C12.4734 34.2491 12.0629 34.4858 11.7672 34.4358C11.5104 34.3923 11.2886 34.2313 11.1679 34.0003C11.0289 33.7346 11.1272 33.2711 11.3239 32.3439L12.8901 24.9594C12.9483 24.6853 12.9773 24.5483 12.9635 24.4171C12.9513 24.3011 12.9149 24.1889 12.8565 24.0878C12.7906 23.9736 12.6866 23.8798 12.4784 23.6923L6.87075 18.6386C6.16673 18.0041 5.81471 17.6869 5.77095 17.3903C5.73295 17.1325 5.81763 16.8719 5.99986 16.6857C6.20966 16.4714 6.68091 16.4217 7.62341 16.3222L15.1306 15.5298C15.4092 15.5004 15.5485 15.4857 15.669 15.4321C15.7755 15.3846 15.871 15.3153 15.9491 15.2286C16.0373 15.1306 16.0944 15.0026 16.2084 14.7467L19.2818 7.85184Z" fill="#FACC15" stroke="#FACC15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              ))}
            </div>
            <p className="text-gray-500 text-sm sm:text-base md:text-lg font-normal font-['Readex_Pro'] leading-relaxed">
              “The training opportunities here are amazing. I’ve been able to advance my skills and take on more responsibilities. The team feels like family.”
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-100 rounded-full flex items-center justify-center">
                {/* TODO: Replace with actual profile image */}
                <span className="text-gray-500 text-xs">Image</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-gray-900 text-lg sm:text-xl md:text-2xl font-semibold font-['Readex_Pro'] leading-tight">
                  Michael Thompson
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm md:text-base font-normal font-['Readex_Pro'] leading-relaxed">
                  Care Assistant
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 3: Emma Davies */}
          <div className="bg-white rounded-lg shadow-[0px_4px_5px_rgba(0,0,0,0.15)] p-6 sm:p-8 flex flex-col gap-6 sm:gap-8">
            <div className="flex justify-start gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={`star-filled-3-${i}`} width="24" height="24" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6">
                  <path d="M19.2819 7.35184C19.6677 6.4862 19.8607 6.05339 20.1294 5.9201C20.3627 5.8043 20.6367 5.8043 20.87 5.9201C21.1387 6.05339 21.3317 6.4862 21.7175 7.35184L24.7909 14.2467C24.905 14.5026 24.962 14.6306 25.0504 14.7286C25.1284 14.8153 25.2239 14.8846 25.3304 14.9321C25.4509 14.9857 25.5902 15.0004 25.8689 15.0298L33.376 15.8222C34.3185 15.9217 34.7897 15.9714 34.9995 16.1857C35.1817 16.3719 35.2664 16.6325 35.2284 16.8903C35.1847 17.1869 34.8327 17.5041 34.1287 18.1386L28.5209 23.1923C28.3129 23.3798 28.2087 23.4736 28.1429 23.5878C28.0845 23.6889 28.048 23.8011 28.0359 23.9171C28.022 24.0483 28.051 24.1853 28.1092 24.4594L29.6755 31.8439C29.8722 32.7711 29.9705 33.2346 29.8315 33.5003C29.7107 33.7313 29.489 33.8923 29.2322 33.9358C28.9365 33.9858 28.526 33.7491 27.705 33.2756L21.1659 29.5039C20.9232 29.3639 20.8019 29.2941 20.6729 29.2666C20.5587 29.2424 20.4407 29.2424 20.3265 29.2666C20.1975 29.2941 20.0762 29.3639 19.8335 29.5039L13.2944 33.2756C12.4734 33.7491 12.063 33.9858 11.7673 33.9358C11.5104 33.8923 11.2887 33.7313 11.168 33.5003C11.029 33.2346 11.1273 32.7711 11.3239 31.8439L12.8902 24.4594C12.9483 24.1853 12.9774 24.0483 12.9636 23.9171C12.9514 23.8011 12.9149 23.6889 12.8566 23.5878C12.7907 23.4736 12.6866 23.3798 12.4785 23.1923L6.87081 18.1386C6.16679 17.5041 5.81477 17.1869 5.77101 16.8903C5.73301 16.6325 5.81769 16.3719 5.99993 16.1857C6.20973 15.9714 6.68097 15.9217 7.62347 15.8222L15.1306 15.0298C15.4093 15.0004 15.5486 14.9857 15.669 14.9321C15.7756 14.8846 15.871 14.8153 15.9491 14.7286C16.0374 14.6306 16.0944 14.5026 16.2085 14.2467L19.2819 7.35184Z" fill="#FACC15" stroke="#FACC15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              ))}
            </div>
            <p className="text-gray-500 text-sm sm:text-base md:text-lg font-normal font-['Readex_Pro'] leading-relaxed">
              “Working at RightTime Medicals has given me the flexibility I need to balance work and family time. The pay is great, and the team is so supportive.”
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-100 rounded-full flex items-center justify-center">
                {/* TODO: Replace with actual profile image */}
                <span className="text-gray-500 text-xs">Image</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-gray-900 text-lg sm:text-xl md:text-2xl font-semibold font-['Readex_Pro'] leading-tight">
                  Emma Davies
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm md:text-base font-normal font-['Readex_Pro'] leading-relaxed">
                  Support Worker
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;