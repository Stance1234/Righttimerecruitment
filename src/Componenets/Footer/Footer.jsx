import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-teal-500 py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-8 sm:gap-12 lg:gap-16">
        {/* Call to Action Section */}
        <div className="flex flex-col items-center gap-4 sm:gap-6 lg:gap-8 text-center">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-['Readex_Pro'] leading-tight">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-normal font-['Readex_Pro'] leading-relaxed max-w-3xl">
            Join hundreds of healthcare professionals who have found their calling with RightTime Medicals. Your rewarding career in healthcare starts here.
          </p>
          <a
            href="/Apply"
            className="inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-white rounded-xl shadow-[0px_4px_60px_rgba(80,145,198,0.3)] text-green-600 text-lg sm:text-xl md:text-2xl font-medium font-['Readex_Pro'] hover:bg-gray-100 transition-colors"
          >
            Apply now
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_16_610)">
                <path
                  d="M0.576915 8.07691H13.0298L7.09326 14.0163C6.98581 14.1244 6.9255 14.2706 6.9255 14.4231C6.9255 14.5755 6.98581 14.7217 7.09326 14.8298C7.20136 14.9372 7.34758 14.9976 7.49999 14.9976C7.65241 14.9976 7.79863 14.9372 7.90672 14.8298L14.8298 7.90672C14.8571 7.87968 14.8813 7.84969 14.9019 7.81729C14.9111 7.80818 14.9198 7.79854 14.9279 7.78845C14.9279 7.76825 14.9481 7.75095 14.9567 7.73075L14.974 7.67306C14.9757 7.65676 14.9757 7.64033 14.974 7.62402C14.9888 7.54975 14.9888 7.4733 14.974 7.39902C14.9757 7.38272 14.9757 7.36629 14.974 7.34999L14.9567 7.29229C14.9567 7.2721 14.9365 7.25479 14.9279 7.2346C14.9203 7.21956 14.9116 7.2051 14.9019 7.19133C14.8813 7.15893 14.8571 7.12894 14.8298 7.10191L7.90672 0.17883C7.855 0.118437 7.79136 0.0693874 7.71978 0.0347586C7.64821 0.0001297 7.57025 -0.019331 7.49079 -0.0223999C7.41134 -0.0254688 7.33211 -0.0120802 7.25808 0.0169239C7.18404 0.045929 7.1168 0.0899239 7.06058 0.146148C7.00436 0.202372 6.96036 0.26961 6.93136 0.343644C6.90235 0.417678 6.88896 0.496908 6.89203 0.576362C6.8951 0.655815 6.91456 0.733776 6.94919 0.805351C6.98382 0.876927 7.03287 0.940573 7.09326 0.992292L13.0298 6.92306H0.576915C0.423905 6.92306 0.277163 6.98384 0.168968 7.09204C0.0607748 7.20023 -7.62939e-06 7.34698 -7.62939e-06 7.49999C-7.62939e-06 7.653 0.0607748 7.79974 0.168968 7.90793C0.277163 8.01613 0.423905 8.07691 0.576915 8.07691Z"
                  fill="#18A34A"
                />
              </g>
              <defs>
                <clipPath id="clip0_16_610">
                  <rect width="15" height="15" fill="white" transform="matrix(-1 0 0 -1 15 15)" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>

        {/* Divider */}
        <div className="w-full max-w-4xl">
          <svg width="100%" height="4" viewBox="0 0 1624 4" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M2 2H1622" stroke="white" stroke-opacity="0.5" stroke-width="3" stroke-linecap="round" />
          </svg>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-center gap-4 sm:gap-6 lg:gap-8 text-center">
          <h3 className="text-gray-200 text-base sm:text-lg md:text-xl lg:text-2xl font-normal font-['Readex_Pro'] leading-loose tracking-wide">
            Questions? We’re here to help
          </h3>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 lg:gap-12">
            <div className="flex items-center gap-3">
              <svg width="24" height="24" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M25.8087 32.4223C22.8627 31.6843 16.8317 29.6034 11.3642 24.1359C5.89679 18.6685 3.81597 12.6376 3.07787 9.69159C2.65369 7.9986 3.41753 6.3649 4.71269 5.43978L8.10805 3.01451C10.0947 1.59548 12.8584 2.07701 14.2481 4.08431L16.3856 7.17197C17.293 8.48263 16.9801 10.279 15.6829 11.2056L13.9784 12.423C14.2364 13.4098 15.0387 15.4361 17.5514 17.9488C20.0641 20.4615 22.0905 21.2638 23.0772 21.5217L24.2946 19.8172C25.2212 18.5202 27.0176 18.2071 28.3282 19.1145L31.416 21.2521C33.4232 22.6419 33.9047 25.4054 32.4856 27.3921L30.0604 30.7875C29.1353 32.0827 27.5016 32.8466 25.8087 32.4223ZM13.4266 22.0736C18.3987 27.0456 23.8856 28.9337 26.5174 29.5932C26.9021 29.6894 27.3672 29.5399 27.687 29.0922L30.1123 25.6968C30.5853 25.0347 30.4249 24.1135 29.7556 23.6502L26.6681 21.5125L25.3615 23.3417C24.8276 24.0893 23.8402 24.6755 22.6905 24.4275C21.2555 24.1179 18.6027 23.1249 15.4891 20.0112C12.3754 16.8975 11.3824 14.2448 11.0727 12.8098C10.8247 11.66 11.411 10.6726 12.1585 10.1387L13.9876 8.83217L11.85 5.74451C11.3868 5.0754 10.4655 4.91489 9.80333 5.3879L6.40797 7.81317C5.9602 8.133 5.81071 8.59806 5.90709 8.98274C6.56652 11.6147 8.45462 17.1015 13.4266 22.0736Z"
                  fill="white"
                  stroke="white"
                  stroke-width="0.5"
                />
              </svg>
              <a
                href="tel:07435263322"
                className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-medium font-['Readex_Pro'] leading-relaxed tracking-wide hover:text-gray-200 transition-colors"
              >
                Call us: 07435263322
              </a>
            </div>
            <div className="flex items-center gap-3">
              <svg width="24" height="24" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.33331 10.2081L15.375 16.9893C16.9306 18.1559 19.0694 18.1559 20.625 16.9893L29.6666 10.208"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M28.2083 7.2915H7.79167C6.18084 7.2915 4.875 8.59734 4.875 10.2082V24.7915C4.875 26.4023 6.18084 27.7082 7.79167 27.7082H28.2083C29.8192 27.7082 31.125 26.4023 31.125 24.7915V10.2082C31.125 8.59734 29.8192 7.2915 28.2083 7.2915Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
              <a
                href="mailto:info@righttimemedical.co.uk"
                className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-medium font-['Readex_Pro'] leading-relaxed tracking-wide hover:text-gray-200 transition-colors"
              >
                Email: info@righttimemedical.co.uk
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;