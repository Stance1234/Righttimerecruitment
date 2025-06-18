import React, { useState } from 'react';

const ApplicationForm = () => {
  // State for form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    availability: '',
    qualifications: '',
    motivation: '',
    termsAccepted: false,
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-['Readex_Pro']">
            Apply Today
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-500 font-['Readex_Pro'] leading-relaxed">
            Take the first step towards your rewarding career in healthcare
          </p>
        </div>

        {/* Form Container */}
        <form
          onSubmit={handleSubmit}
          action="mailto:your@email.com"
          method="POST"
          enctype="text/plain"
          className="bg-white rounded-3xl shadow-sm border border-neutral-200 p-6 sm:p-8 md:p-12"
        >
          <div className="space-y-8">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="firstName"
                  className="block text-lg font-medium text-gray-900 font-['Readex_Pro']"
                >
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Enter your first name"
                  className="w-full p-3 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-700"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="lastName"
                  className="block text-lg font-medium text-gray-900 font-['Readex_Pro']"
                >
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Enter your last name"
                  className="w-full p-3 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-700"
                  required
                />
              </div>
            </div>

            {/* Contact Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-900 font-['Readex_Pro']"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  className="w-full p-3 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-700"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="block text-lg font-medium text-gray-900 font-['Readex_Pro']"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="07123 456789"
                  className="w-full p-3 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-700"
                  required
                />
              </div>
            </div>

            {/* Dropdown Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="position"
                  className="block text-lg font-medium text-gray-900 font-['Readex_Pro']"
                >
                  Position *
                </label>
                <div className="relative">
                  <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-neutral-200 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-700"
                    required
                  >
                    <option value="" disabled>
                      Select position
                    </option>
                    <option value="nurse">Nurse</option>
                    <option value="doctor">Doctor</option>
                    <option value="technician">Technician</option>
                  </select>
                  <svg
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-700"
                    fill="none"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.292308 4.86572C-0.097436 5.2706 -0.097436 5.92623 0.292308 6.33008L8.55587 14.8926C9.33636 15.7023 10.6025 15.7023 11.383 14.8926L19.7075 6.26807C20.0933 5.86732 20.0983 5.21989 19.7175 4.81397C19.3288 4.39977 18.6882 4.39475 18.2935 4.80274L10.6765 12.6963C10.2857 13.1012 9.65314 13.1012 9.2624 12.6963L1.70538 4.86572C1.31563 4.46083 0.683051 4.46083 0.292308 4.86572Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="experience"
                  className="block text-lg font-medium text-gray-900 font-['Readex_Pro']"
                >
                  Experience *
                </label>
                <div className="relative">
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-neutral-200 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-700"
                    required
                  >
                    <option value="" disabled>
                      Select experience
                    </option>
                    <option value="0-2">0-2 years</option>
                    <option value="2-5">2-5 years</option>
                    <option value="5+">5+ years</option>
                  </select>
                  <svg
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-700"
                    fill="none"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.292308 4.86572C-0.097436 5.2706 -0.097436 5.92623 0.292308 6.33008L8.55587 14.8926C9.33636 15.7023 10.6025 15.7023 11.383 14.8926L19.7075 6.26807C20.0933 5.86732 20.0983 5.21989 19.7175 4.81397C19.3288 4.39977 18.6882 4.39475 18.2935 4.80274L10.6765 12.6963C10.2857 13.1012 9.65314 13.1012 9.2624 12.6963L1.70538 4.86572C1.31563 4.46083 0.683051 4.46083 0.292308 4.86572Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="availability"
                  className="block text-lg font-medium text-gray-900 font-['Readex_Pro']"
                >
                  Availability *
                </label>
                <div className="relative">
                  <select
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-neutral-200 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-700"
                    required
                  >
                    <option value="" disabled>
                      Select availability
                    </option>
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="contract">Contract</option>
                  </select>
                  <svg
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-700"
                    fill="none"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.292308 4.86572C-0.097436 5.2706 -0.097436 5.92623 0.292308 6.33008L8.55587 14.8926C9.33636 15.7023 10.6025 15.7023 11.383 14.8926L19.7075 6.26807C20.0933 5.86732 20.0983 5.21989 19.7175 4.81397C19.3288 4.39977 18.6882 4.39475 18.2935 4.80274L10.6765 12.6963C10.2857 13.1012 9.65314 13.1012 9.2624 12.6963L1.70538 4.86572C1.31563 4.46083 0.683051 4.46083 0.292308 4.86572Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Qualifications */}
            <div className="space-y-2">
              <label
                htmlFor="qualifications"
                className="block text-lg font-medium text-gray-900 font-['Readex_Pro']"
              >
                Qualifications & Certifications *
              </label>
              <textarea
                id="qualifications"
                name="qualifications"
                value={formData.qualifications}
                onChange={handleInputChange}
                placeholder="Please list your relevant qualifications, certifications, and training..."
                className="w-full p-3 border border-neutral-200 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-700"
                required
              />
            </div>

            {/* Motivation */}
            <div className="space-y-2">
              <label
                htmlFor="motivation"
                className="block text-lg font-medium text-gray-900 font-['Readex_Pro']"
              >
                Why do you want to join RightTime Medicals *
              </label>
              <textarea
                id="motivation"
                name="motivation"
                value={formData.motivation}
                onChange={handleInputChange}
                placeholder="Tell us about your motivation to work in healthcare and why you’d like to join our team..."
                className="w-full p-3 border border-neutral-200 rounded-md h-40 focus:outline-none focus:ring-2 focus:ring-green-600 text-gray-700"
                required
              />
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="termsAccepted"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleInputChange}
                className="w-5 h-5 border border-neutral-300 rounded focus:ring-green-600"
                required
              />
              <label
                htmlFor="termsAccepted"
                className="text-lg font-medium text-neutral-700 font-['Readex_Pro']"
              >
                I agree to the terms and conditions and privacy policy *
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-4 bg-green-600 text-white text-xl font-medium rounded-2xl hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
            >
              Submit Application
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 16 15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.07691 8.07691H13.5298L7.59326 14.0163C7.48581 14.1244 7.4255 14.2706 7.4255 14.4231C7.4255 14.5755 7.48581 14.7217 7.59326 14.8298C7.70136 14.9372 7.84758 14.9976 7.99999 14.9976C8.15241 14.9976 8.29863 14.9372 8.40672 14.8298L15.3298 7.90672C15.3571 7.87968 15.3813 7.84969 15.4019 7.81729C15.4111 7.80818 15.4198 7.79854 15.4279 7.78845C15.4279 7.76825 15.4481 7.75095 15.4567 7.73075L15.474 7.67306C15.4757 7.65676 15.4757 7.64033 15.474 7.62402C15.4888 7.54975 15.4888 7.4733 15.474 7.39902C15.4757 7.38272 15.4757 7.36629 15.474 7.34999L15.4567 7.29229C15.4567 7.2721 15.4365 7.25479 15.4279 7.2346C15.4203 7.21956 15.4116 7.2051 15.4019 7.19133C15.3813 7.15893 15.3571 7.12894 15.3298 7.10191L8.40672 0.17883C8.355 0.118437 8.29136 0.0693874 8.21978 0.0347586C8.14821 0.0001297 8.07025 -0.019331 7.99079 -0.0223999C7.91134 -0.0254688 7.83211 -0.0120802 7.75808 0.0169239C7.68404 0.045929 7.6168 0.0899239 7.56058 0.146148C7.50436 0.202372 7.46036 0.26961 7.43136 0.343644C7.40235 0.417678 7.38896 0.496908 7.39203 0.576362C7.3951 0.655815 7.41456 0.733776 7.44919 0.805351C7.48382 0.876927 7.53287 0.940573 7.59326 0.992292L13.5298 6.92306H1.07691C0.923905 6.92306 0.777163 6.98384 0.668968 7.09204C0.560775 7.20023 0.499992 7.34698 0.499992 7.49999C0.499992 7.653 0.560775 7.79974 0.668968 7.90793C0.777163 8.01613 0.923905 8.07691 1.07691 8.07691Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;