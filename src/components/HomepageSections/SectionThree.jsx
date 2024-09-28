import styles from "./SectionThree.module.css";
import { useState } from "react";

const textPages = [
  {
    id: 1,
    title: "Welcome to CV Creator",
    label: "Home",
    content: `Welcome to the CV Creator! Our application is designed to help you easily craft a professional CV that stands out. 
                Whether you're a recent graduate or an experienced professional, our tool provides you with all the necessary features to create a compelling resume.
                Let’s get started on your journey to land your dream job!`,
  },
  {
    id: 2,
    title: "Key Features",
    label: "Features",
    content: `- User-Friendly Interface: Simple and intuitive design to input your information seamlessly.
                - Customizable Templates: Choose from a variety of templates tailored for different industries.
                - Guided Steps: Step-by-step prompts guide you to include essential details like work history and skills.
                - Download Options: Save your CV in multiple formats including PDF and Word documents.
                - Pre-written Content Suggestions: Access examples and suggestions to enhance your CV.
                - Instant Updates: Edit and re-download your CV whenever you need to.`,
  },
  {
    id: 3,
    title: "Benefits",
    label: "Benefits",
    content: `- Time-Saving: Quickly create a professional-looking CV without any hassle.
                - Professional Appearance: Ensures your CV meets industry standards and attracts employers’ attention.
                - Accessibility: Create or update your CV from any device with internet access.
                - Customizable: Tailor your CV for specific job applications to better match employer expectations.
                Overall, our CV creator simplifies the process of crafting a compelling CV that showcases your qualifications effectively.`,
  },
  {
    id: 4,
    title: "CV Tips",
    label: "Tips",
    content: `- Tailor Your CV: Customize your CV for each job application, emphasizing relevant experiences and skills.
                - Keep It Concise: Limit your CV to 1-2 pages; focus on the most important information.
                - Use Action Verbs: Start bullet points with strong action verbs to demonstrate achievements.
                - Proofread: Ensure there are no spelling or grammatical errors; a polished CV reflects attention to detail.
                - Include Keywords: Use industry-specific keywords to pass through Applicant Tracking Systems (ATS).
                Start creating your CV today and take the first step towards your career goals!`,
  },
];

export default function SectionThree() {
  const [selected, setSelected] = useState(1);

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.navbar}>
          <ul>
            {textPages.map((page) => (
              <li
                key={page.id}
                onClick={() => setSelected(page.id)}
                className={`${selected === page.id ? styles.selected : ""} ${
                  styles.navItem
                }`} // Add any additional styles as needed
              >
                <span>{page.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.content2}>
          <h2>{textPages.find((page) => page.id === selected)?.title}</h2>
          <p>{textPages.find((page) => page.id === selected)?.content}</p>
        </div>
      </div>
    </div>
  );
}
