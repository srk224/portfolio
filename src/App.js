import './App.css';
import Name from './name.js';
import About from './about.js';
import Experience from './experience.js';
import Exp_h from './exp_h.js';
import Contact from './contact_h.js';
import Resume from './Resume.js'
import "react-custom-cursors/dist/index.css";
import { useEffect, useState } from 'react';

function Ball() {
  const [position, setPosition] = useState({
    top: Math.random() * 100 + '%',
    left: Math.random() * 100 + '%',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({
        top: Math.random() * 100 + '%',
        left: Math.random() * 100 + '%',
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="ball"
      style={{
        top: position.top,
        left: position.left,
      }}
    />
  );
}



function App() {
  const balls = Array.from({ length: 10 }); // Create an array with 10 items

  return (
    <div className="App">
      <div className="page-content">
      <Resume/>
      <Name />
      <About />
      <Exp_h/>
      <Experience role = "Software Engineer Intern" company_name="Manulife" date = "May 2024 - August 2024" bullet1="Designed and implemented an automated PII redaction system using serverless Functions saving outsourcing costs.
• Automated Azure resource deployment and management using Terraform and created Jenkins pipeline for build." bullet2="Integrated Azure AI OCR capabilities to automate text extraction applying advanced data engineering practices.
• Leveraged LangChain to integrate with Azure OpenAI API for analyzing and classifying PII, further redacting it.
• Configured client-side encryption and decryption for Blob storage using Key Vault ensuring secure data upload." bullet3="• Replaced Azure App Config with Kubernetes ConfigMaps and updated Helm charts for consistent settings."/>
      <Experience role="Generative AI Intern" company_name="HomeTrust" date="September 2023 - December 2023" bullet1="Worked with the Data Science team on Generative AI applications to develop a CHAT-LLM using Abacus AI platform. Improved performance by creating validation datasets and successfully deploy it on MS Teams." bullet2="Seamlessly connected it to Microsoft Azure (Databricks) to generate Spark SQL queries, execute them on the database, and retrieve results for prompt responses." bullet3="Utilized Umbraco CMS to streamline daily updates and craft dynamic web pages for the Oaken Digital website" />
      <Experience role="Web Development Intern" company_name="BlackBerry" date="January 2023 - April 2023" bullet1="Developed components for Adobe Experience Manager (AEM) using HTL with Java and JavaScript backends.
• Utilized technologies like Sling, OSGi, Felix, Jackrabbit, JCR, and CRX to enhance the functionality of components.
" bullet2="• Integrated AEM with internal servers and databases using AJAX and cookies for enhanced user interaction" bullet3="• Managed tasks and tickets through JIRA for streamlined project management and accountability."/>
      <Experience role="Frontend Developer Intern" company_name="Purolator" date="September 2023 - December 2023" bullet1="• Developed and maintained the company’s intranet platform overseeing application and software solutions." bullet2="• Designed and developed over 40+ frontend pages for marketing purposes and Intranet using Orchestra CMS." bullet3="• Worked with various teams to manage stakeholder requirements for upcoming website projects and e-campaigns."/>
      <Contact />
      </div>
      {balls.map((_, index) => (
        <Ball key={index} />
      ))}
    </div>
  );
}

export default App;
