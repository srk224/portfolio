import './App.css';
import Name from './name.js';
import About from './about.js';
import Experience from './experience.js';
import Exp_h from './exp_h.js';
import Project_Heading from './project_heading.js';
import Project from './project.js';
import Contact from './contact_h.js';
import Resume from './Resume.js'

function App() {
  return (
    <div className="App">
      <Name />
      <Resume/>
      <About />
      <Exp_h/>
      <Experience role = "Software Engineer Interm" company_name="Manulife" date = "May 2024 - August 2024" bullet1=" Designed and implemented an automated PII redaction system using Azure Functions, Blob Storage, and Python. Automated Azure resource deployment and management using Terraform and integrating Azure RBAC for security." bullet2="Integrated Azure AI OCR capabilities to automate text extraction applying advanced data engineering practices.
Leveraged LangChain to integrate with Azure OpenAI API for analyzing and classifying PII, further redacting it." bullet3="Implemented client-side encryption and decryption for Blob storage using Key Vault ensuring secure data upload. Created a pipeline to automate the build and deployment, ensuring an efficient development using Jenkins. Developed and tested Apex classes, triggers, Lightning Web Components (LWC), and executed workflow migrations."/>
      <Experience role="Generative AI Intern" company_name="HomeTrust" date="September 2023 - December 2023" bullet1="Worked with the Data Science team on Generative AI applications to develop a CHAT-LLM using Abacus AI platform. Improved performance by creating validation datasets and successfully deploy it on MS Teams." bullet2="Seamlessly connected it to Microsoft Azure (Databricks) to generate Spark SQL queries, execute them on the database, and retrieve results for prompt responses." bullet3="Utilized Umbraco CMS to streamline daily updates and craft dynamic web pages for the Oaken Digital website" />
      <Experience role="Web Development Intern" company_name="BlackBerry" date="January 2023 - April 2023" bullet1="Worked with the Data Science team on Generative AI applications to develop a CHAT-LLM using Abacus AI platform. Improved performance by creating validation datasets and successfully deploy it on MS Teams." bullet2="Seamlessly connected it to Microsoft Azure (Databricks) to generate Spark SQL queries, execute them on the database, and retrieve results for prompt responses." bullet3="Utilized Umbraco CMS to streamline daily updates and craft dynamic web pages for the Oaken Digital website"/>
      <Experience role="Frontend Developer Intern" company_name="Purolator" date="September 2023 - December 2023" bullet1="Worked with the Data Science team on Generative AI applications to develop a CHAT-LLM using Abacus AI platform. Improved performance by creating validation datasets and successfully deploy it on MS Teams." bullet2="Seamlessly connected it to Microsoft Azure (Databricks) to generate Spark SQL queries, execute them on the database, and retrieve results for prompt responses." bullet3="Utilized Umbraco CMS to streamline daily updates and craft dynamic web pages for the Oaken Digital website" />
      <Project_Heading />
      <Project />
      <Contact/>
    </div>
  );
}

export default App;
