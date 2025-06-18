import React from 'react'

const Applicationprocess = () => {
  return (
    <div className="w-full min-h-screen md:h-[1400px] relative bg-white overflow-hidden py-10 md:py-0 flex flex-col justify-center">
      {/* Application Process Section */}
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center gap-10 md:gap-16 px-4 md:px-0 mt-4 md:mt-[89px]">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-gray-900 text-3xl md:text-5xl font-bold font-['Readex_Pro']">
            Simple Application Process
          </h2>
          <p className="text-gray-500 text-lg md:text-3xl font-normal font-['Readex_Pro'] leading-7 md:leading-10 tracking-wide mt-4 md:mt-6">
            Getting started is easy. Follow these simple steps to join our team.
          </p>
        </div>
        {/* Process Steps */}
        <div className="w-full flex flex-col gap-8 md:gap-16">
          {/* First Row of Steps */}
          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-28 w-full">
            <ProcessStep 
              stepNumber={1}
              icon={
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                  <path d="M35 14.2309H43.1538C43.2964 14.2348 43.4382 14.2097 43.5706 14.157C43.7031 14.1043 43.8234 13.0251 43.9242 13.9243C44.025 13.8235 44.1042 13.7032 44.1569 13.5707C44.2096 13.4383 44.2347 13.2964 44.2308 13.1539C44.2401 13.0109 44.2173 12.8676 44.164 12.7345C44.1108 12.6014 44.0285 12.4819 43.9231 12.3847L33.7692 2.23086C33.6721 2.12548 33.5525 2.04315 33.4195 1.98992C33.2864 1.93668 33.143 1.91387 33 1.92317C32.8575 1.91919 32.7157 1.94432 32.5832 1.99703C32.4508 2.04975 32.3304 2.12893 32.2296 2.22973C32.1288 2.33054 32.0497 2.45085 31.9969 2.58331C31.9442 2.71577 31.9191 2.85758 31.9231 3.00009V11.1539C31.9256 11.9692 32.2506 12.7504 32.8271 13.3268C33.4036 13.9033 34.1847 14.2283 35 14.2309Z" fill="#18A34A"/>
                  <path d="M42.6923 18.8464H31.9231C30.6998 18.8439 29.5273 18.3568 28.6623 17.4918C27.7973 16.6268 27.3102 15.4543 27.3077 14.231V3.4618C27.3077 3.05378 27.1456 2.66246 26.8571 2.37394C26.5686 2.08543 26.1773 1.92334 25.7692 1.92334H10.3846C9.16132 1.92588 7.98885 2.41296 7.12385 3.27796C6.25884 4.14296 5.77177 5.31543 5.76923 6.53872V43.4618C5.77177 44.6851 6.25884 45.8576 7.12385 46.7226C7.98885 47.5876 9.16132 48.0746 10.3846 48.0772H39.6154C40.8387 48.0746 42.0111 47.5876 42.8761 46.7226C43.7411 45.8576 44.2282 44.6851 44.2308 43.4618V20.3849C44.2308 20.1828 44.191 19.9828 44.1137 19.7961C44.0363 19.6095 43.923 19.4399 43.7802 19.297C43.6373 19.1542 43.4677 19.0408 43.281 18.9635C43.0944 18.8862 42.8943 18.8464 42.6923 18.8464ZM11.9231 17.308C11.9403 16.9099 12.1093 16.5336 12.3955 16.2564C12.6816 15.9791 13.0631 15.8221 13.4615 15.8176H19.7596C19.9566 15.8163 20.1519 15.8539 20.3344 15.9281C20.5168 16.0023 20.6829 16.1117 20.8231 16.2501C20.9633 16.3885 21.0748 16.5532 21.1514 16.7347C21.2279 16.9162 21.268 17.111 21.2692 17.308V18.8368C21.257 19.2375 21.0918 19.6183 20.8074 19.9009C20.523 20.1835 20.1412 20.3464 19.7404 20.356H13.4615C13.2609 20.36 13.0616 20.3233 12.8755 20.2484C12.6894 20.1734 12.5204 20.0617 12.3785 19.9198C12.2367 19.7779 12.1249 19.6089 11.05 19.4228C11.975 19.2367 11.9384 19.0374 11.9423 18.8368L11.9231 17.308ZM35 37.2791C35 37.6871 34.8379 38.0785 34.5494 38.367C34.2609 38.6555 33.8696 38.8176 33.4615 38.8176H13.4615C13.0535 38.8176 12.6622 38.6555 12.3737 38.367C12.0852 38.0785 11.9231 37.6871 11.9231 37.2791V35.7695C11.9231 35.3615 12.0852 34.9702 12.3737 34.6816C12.6622 34.3931 13.0535 34.231 13.4615 34.231H33.4615C33.8696 34.231 34.2609 34.3931 34.5494 34.6816C34.8379 34.9702 35 35.3615 35 35.7695V37.2791ZM38.0769 28.0483C38.0808 28.2528 38.0438 28.456 37.9682 28.6459C37.8926 28.8359 37.7799 29.009 37.6366 29.1549C37.4934 29.3008 37.3225 29.4167 37.1339 29.4958C36.9454 29.575 36.7429 29.6157 36.5385 29.6157H13.4615C13.0535 29.6157 12.6622 29.4536 12.3737 29.165C12.0852 28.8765 11.9231 28.4852 11.9231 28.0772V26.5387C11.9231 26.1307 12.0852 25.7394 12.3737 25.4509C12.6622 25.1624 13.0535 25.0003 13.4615 25.0003H36.5385C36.9465 25.0003 37.3378 25.1624 37.6263 25.4509C37.9148 25.7394 38.0769 26.1307 38.0769 26.5387V28.0483Z" fill="#18A34A"/>
                </svg>
              }
              title="Submit Application"
              description="Complete our simple online application form with your details and experience"
            />

            <ProcessStep 
              stepNumber={2}
              icon={
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <path d="M40 27.5C44.15 27.5 47.475 24.15 47.475 20C47.475 15.85 44.15 12.5 40 12.5C35.85 12.5 32.5 15.85 32.5 20C32.5 24.15 35.85 27.5 40 27.5ZM20 27.5C24.15 27.5 27.475 24.15 27.475 20C27.475 15.85 24.15 12.5 20 12.5C15.85 12.5 12.5 15.85 12.5 20C12.5 24.15 15.85 27.5 20 27.5ZM20 32.5C14.175 32.5 2.5 35.425 2.5 41.25V47.5H37.5V41.25C37.5 35.425 25.825 32.5 20 32.5ZM40 32.5C39.275 32.5 38.45 32.55 37.575 32.625C40.475 34.725 42.5 37.55 42.5 41.25V47.5H57.5V41.25C57.5 35.425 45.825 32.5 40 32.5Z" fill="#18A34A"/>
                </svg>
              }
              title="Interview Process"
              description="Meet with our friendly team to discuss your experience and career goals."
            />
          </div>
          {/* Second Row of Steps */}
          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-28 w-full">
            <ProcessStep 
              stepNumber={3}
              icon={
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                  <path d="M4.16666 39.5834C4.16666 43.1251 6.87499 45.8334 10.4167 45.8334H39.5833C43.125 45.8334 45.8333 43.1251 45.8333 39.5834V22.9167H4.16666V39.5834ZM39.5833 8.33342H35.4167V6.25008C35.4167 5.00008 34.5833 4.16675 33.3333 4.16675C32.0833 4.16675 31.25 5.00008 31.25 6.25008V8.33342H18.75V6.25008C18.75 5.00008 17.9167 4.16675 16.6667 4.16675C15.4167 4.16675 14.5833 5.00008 14.5833 6.25008V8.33342H10.4167C6.87499 8.33342 4.16666 11.0417 4.16666 14.5834V18.7501H45.8333V14.5834C45.8333 11.0417 43.125 8.33342 39.5833 8.33342Z" fill="#18A34A"/>
                </svg>
              }
              title="Orientation & Training"
              description="Comprehensive onboarding program to set you up for success."
            />

            <ProcessStep 
              stepNumber={4}
              icon={
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M55 30C55 43.807 43.807 55 30 55C16.1929 55 5 43.807 5 30C5 16.1929 16.1929 5 30 5C43.807 5 55 16.1929 55 30ZM40.0758 22.4242C40.808 23.1564 40.808 24.3436 40.0758 25.0758L27.5758 37.5758C26.8435 38.308 25.6565 38.308 24.9242 37.5758L19.9242 32.5758C19.192 31.8435 19.192 30.6565 19.9242 29.9243C20.6564 29.192 21.8436 29.192 22.5758 29.9243L26.25 33.5983L31.837 28.0113L37.4243 22.4242C38.1565 21.692 39.3435 21.692 40.0758 22.4242Z" fill="#18A34A"/>
                </svg>
              }
              title="Start Your Career"
              description="Begin making a difference in people's lives with full support from day one."
            />
          </div>
        </div>
      </div>
    </div>

  )
}

// Reusable ProcessStep component
function ProcessStep({ stepNumber, icon, title, description }) {
  return (
    <div className="w-full max-w-xs md:w-[550px] h-auto md:h-[463px] bg-white rounded-[10px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center p-6 md:p-12">
      {/* Step Number */}
      <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mb-6">
        <span className="text-white text-3xl font-normal font-['Readex_Pro']">
          {stepNumber}
        </span>
      </div>

      {/* Icon */}
      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-gray-900 text-3xl font-medium font-['Readex_Pro'] text-center mb-6">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-xl font-normal font-['Readex_Pro'] leading-loose tracking-wide text-center">
        {description}
      </p>
    </div>
  );
}

export default Applicationprocess