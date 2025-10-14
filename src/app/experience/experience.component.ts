import { Component, OnInit } from '@angular/core';

export interface experienceData {
  logo: String;
  title: String;
  company: String;
  location: String;
  date: String;
  bulletPoints: String[];
  toolTip: String;
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})

export class ExperienceComponent implements OnInit {


  public Experience: experienceData[] = [
    {
      logo: "groq.png",
      title: "Cloud Backend Engineering Intern",
      company: "Groq (Co-op x 2)",
      location: "Mountain View, CA",
      date: "Jan. 2025 - Aug. 2025",
      bulletPoints: [
        "Built a tracing service in Go that processes 200M+ cloudflare logs/day using OpenTelemetry, gRPC & Pub/Sub",
        "Implemented WebAssembly plugin & callout to inject custom headers for tracing across load balancers",
        "Migrated log pipeline to support multiple providers and simplified architecture, significantly reducing costs",
        "Integrated services with refinery for monitoring, exported to Honeycomb, deployed on GKE (Kustomize & Terraform)",
        "Implemented a custom propagator to support trace context, enabling end-to-end visibility with backend services",
        "Built system for engineers to request temporary GKE cluster & project access using Privileged Access Manager",
        "Developed using Flask, OAuth, Tailscale, k8 and Terraform, reducing security incidents by JIT access to infrastructure",
      ],
      toolTip: "Groq",
    },
    {
      logo: "manulife.svg",
      title: "Software Engineer Intern",
      company: "Manulife",
      location: "Waterloo, Canada",
      date: "May 2024 - Aug. 2024",
      bulletPoints: [
        "Developed a privacy-focused PII redaction system with Azure serverless functions, saving outsourcing cost",
        "Automated resource provisioning on Azure with Terraform for infrastructure-as-code and Jenkins for deployment",
        "Improved the accuracy of text recognition in documents by 30% using Azure AI OCR & Python",
        "Achieved 98% accuracy in redaction by leveraging LangChain and OpenAI for classification of personal information",
      ],
      toolTip: "Manulife",
    },
    {
      logo: "hometrust.png",
      title: "Generative AI Intern",
      company: "HomeTrust",
      location: "Toronto, Canada",
      date: "Sept. 2023 - Dec. 2023",
      bulletPoints: [
        "Built two GenAI Chat-LLM with AbacusAI, saving hours for HR and data teams; deployed on Microsoft Teams",
        "Leveraged Python to build the first bot, enabling users to query the database via natural language prompts",
        "Connected to Databricks using JDBC drivers to generate and execute Spark SQL queries for fetching data",
        "Engineered context-driven prompts to enhance the accuracy of queries by 25%, validated through datasets",
        "Automated metrics updates on web pages with Umbraco CMS and VBA scripts, saving engineers 5 hours/week",
      ],
      toolTip: "HomeTrust",
    },
    {
      logo: "blackberry.svg",
      title: "Full-Stack Developer Intern",
      company: "Blackberry",
      location: "Waterloo, Canada",
      date: "Jan. 2023 - Apr. 2023",
      bulletPoints: [
        "Developed over 15+ custom AEM components using HTL, and JavaScript, enhancing website functionality",
        "Used CoralUI, jQuery, and a custom internal API Sling servlet to build HTML tables based on a XLSX file",
        "Reduced JavaScript bundle file size from 7 MB to 1.1 MB by eliminating dead code and optimizing imports",
      ],
      toolTip: "Blackberry",
    },
    {
      logo: "purolator.svg",
      title: "Front End Developer Intern",
      company: "Purolator",
      location: "Mississauga, Canada",
      date: "May 2022 - Aug. 2022",
      bulletPoints: [
        "Developed 10+ frontend pages for internal marketing campaigns and events using Orchestra CMS",
        "Built custom components with HTML, CSS, and jQuery, ensuring mobile-first responsive design using media queries",
      ],
      toolTip: "Purolator",
    }
  ]

  constructor() { }

  ngOnInit(): void {}

  public experienceLink() {
    window.location.href = "#experience";
  }

}
