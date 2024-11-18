import { useState } from "react";
import { FAQs } from "../Constant";
import { aboutContent } from "../Constant";
import aboutpic from './img/about.jpg'

import FAQ from "../Components/FAQ";

const About = () => {
  const [visibleSection, setVisibleSection] = useState("");

  const toggleVisibility = (id) => {
    setVisibleSection((prevVisibleSection) => (prevVisibleSection === id ? "" : id));
  };

  return (
    <div className="container mx-auto px-4  py-8">
      {/* Heading */}
   

      {/* Image */}
      <img
        className="w-full max-w-lg mx-auto mb-6 rounded-lg shadow-lg"
        src={aboutpic} // Add a valid image path or replace with dynamic content
        alt="About Us"
      />

      {/* About Content */}
      <h3 className="text-2xl  text-red-500  font-semibold mb-4">{aboutContent.title}</h3>
      <p className="text-lg leading-relaxed text-gray-700">{aboutContent.description}</p>

      {/* FAQ Section */}
      <div className="mt-10">
        <h3 className="text-2xl  text-red-500  font-semibold mb-6">Frequently Asked Questions</h3>
        {FAQs.map((FAQContent) => (
          <FAQ
            key={FAQContent.id}
            id={FAQContent.id}
            title={FAQContent.title}
            description={FAQContent.description}
            isVisible={visibleSection === FAQContent.id}
            setIsVisible={() => toggleVisibility(FAQContent.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
