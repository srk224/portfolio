import './App.css';
import Name from './name.js';
import About from './about.js';
import Experience from './experience.js';
import Exp_h from './exp_h.js';
import Project_Heading from './project_heading.js';

function App() {
  return (
    <div className="App">
      <Name />
      <About />
      <Exp_h/>
      <Experience role="Generative AI Intern" company_name="HomeTrust" date="September 2023 - December 2023" bullet1="Worked with the Data Science team on Generative AI applications to develop a CHAT-LLM using Abacus AI platform. Improved performance by creating validation datasets and successfully deploy it on MS Teams." bullet2="Seamlessly connected it to Microsoft Azure (Databricks) to generate Spark SQL queries, execute them on the database, and retrieve results for prompt responses." bullet3="Utilized Umbraco CMS to streamline daily updates and craft dynamic web pages for the Oaken Digital website" />
      <Experience role="Web Development Intern" company_name="BlackBerry" date="January 2023 - April 2023" bullet1="Worked with the Data Science team on Generative AI applications to develop a CHAT-LLM using Abacus AI platform. Improved performance by creating validation datasets and successfully deploy it on MS Teams." bullet2="Seamlessly connected it to Microsoft Azure (Databricks) to generate Spark SQL queries, execute them on the database, and retrieve results for prompt responses." bullet3="Utilized Umbraco CMS to streamline daily updates and craft dynamic web pages for the Oaken Digital website"/>
      <Experience role="Frontend Developer Intern" company_name="Purolator" date="September 2023 - December 2023" bullet1="Worked with the Data Science team on Generative AI applications to develop a CHAT-LLM using Abacus AI platform. Improved performance by creating validation datasets and successfully deploy it on MS Teams." bullet2="Seamlessly connected it to Microsoft Azure (Databricks) to generate Spark SQL queries, execute them on the database, and retrieve results for prompt responses." bullet3="Utilized Umbraco CMS to streamline daily updates and craft dynamic web pages for the Oaken Digital website" />
      <Project_Heading />
    </div>
  );
}

export default App;
