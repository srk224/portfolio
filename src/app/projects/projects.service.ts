import { Injectable } from "@angular/core";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faFigma, faSpotify, faAngular, faApple, faAws, faGoogle, faFontAwesomeFlag, faHtml5, faCss3Alt, faJsSquare, faBootstrap } from '@fortawesome/free-brands-svg-icons';

export interface project {
  class: string,
  title: string,
  video: string,
  imgInfo: imgInfo[],
  chips: chipsInfo[],
  blurb: string,
  github: string,
}

export interface imgInfo {
  img: string,
  imgText: string,
}

export interface chipsInfo {
  icon: IconProp | null,
  text: string,
}

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  public groqcessibleChips: chipsInfo[] = [
    {
      icon: null,
      text: "Python",
    },
    {
      icon: null,
      text: "Flask",
    },
    {
      icon: null,
      text: "React",
    },
    {
      icon: null,
      text: "Groq API",
    },
    {
      icon: null,
      text: "Play AI",
    },
    {
      icon: null,
      text: "Whisper STT",
    },
    {
      icon: null,
      text: "Computer Vision",
    },
    {
      icon: null,
      text: "Hackathon Winner",
    },
  ];
  public codeCureChips: chipsInfo[] = [
    {
      icon: null,
      text: "Python",
    },
    {
      icon: faJsSquare,
      text: "JavaScript",
    },
    {
      icon: null,
      text: "Azure OpenAI",
    },
    {
      icon: null,
      text: "VS Code Extension",
    },
    {
      icon: null,
      text: "AI-Powered",
    },
    {
      icon: null,
      text: "Code Analysis",
    },
  ];

  public voiceNewsChips: chipsInfo[] = [
    {
      icon: null,
      text: "React",
    },
    {
      icon: null,
      text: "Alan AI",
    },
    {
      icon: null,
      text: "Material UI",
    },
    {
      icon: null,
      text: "Voice Control",
    },
    {
      icon: null,
      text: "Accessibility",
    },
    {
      icon: null,
      text: "Vercel",
    },
  ];

  public uwaterlooAIChips: chipsInfo[] = [
    {
      icon: null,
      text: "Python",
    },
    {
      icon: null,
      text: "React",
    },
    {
      icon: null,
      text: "Node.js",
    },
    {
      icon: null,
      text: "AI-Powered",
    },
    {
      icon: null,
      text: "Vercel",
    },
    {
      icon: null,
      text: "Jenkins CI/CD",
    },
    {
      icon: null,
      text: "Cloud Integration",
    },
  ];

  public groqcessibleImgInfo: imgInfo[] = [
    {
      img: "../../assets/work_logos/groq.png",
      imgText: "Groqcessible: Voice-first app for the visually impaired to assess food quality and nutrition through AI conversation.",
    },
  ];

  public codeCureImgInfo: imgInfo[] = [
    {
      img: "../../assets/projects/codecure.png",
      imgText: "Code Cure: AI-powered VS Code extension that automatically detects Python errors and provides intelligent patches.",
    },
  ];

  public voiceNewsImgInfo: imgInfo[] = [
    {
      img: "../../assets/projects/newsmix.png",
      imgText: "Voice-controlled news app with hands-free navigation for accessibility, built with React and Alan AI.",
    },
  ];

  public uwaterlooAIImgInfo: imgInfo[] = [
    {
      img: "../../assets/projects/uwaterlooai.png",
      imgText: "UwaterlooAI: AI-powered assistant for University of Waterloo course, location, and service information.",
    },
  ];
  
  public projects: project[] = [
    {
      class: "groqcessible",
      title: "Groqcessible - Hackathon Winner",
      video: "",
      imgInfo: this.groqcessibleImgInfo,
      chips: this.groqcessibleChips,
      blurb: "Voice-first app enabling visually impaired users to point their camera at food items and assess quality & nutrition via real-time AI conversation. Built using GroqAPI for ultra-fast inference, Whisper for speech-to-text, and PlayAI for text-to-speech in a React/Flask stack delivering responses in under 2 seconds. Won hackathon for innovative accessibility solution.",
      github: "https://github.com/rsomanigroq/SnackOverflow",
    },
    {
      class: "codecure",
      title: "Code Cure",
      video: "",
      imgInfo: this.codeCureImgInfo,
      chips: this.codeCureChips,
      blurb: "Developed an AI-powered VS Code extension in JavaScript specifically for Python developers. Automatically detects Python code errors in real-time and provides intelligent, context-aware patches using Azure OpenAI directly in the terminal. Streamlines debugging workflow and helps developers fix issues faster with AI-driven suggestions.",
      github: "https://github.com/srk224/Hack-the-six",
    },
    {
      class: "uwaterlooai",
      title: "UwaterlooAI",
      video: "",
      imgInfo: this.uwaterlooAIImgInfo,
      chips: this.uwaterlooAIChips,
      blurb: "AI-powered assistant designed to provide seamless access to University of Waterloo's course, location, and service information. Features include AI-powered responses for precise answers, cloud integration hosted on Vercel for fast and scalable performance, real-time data for course schedules and dining hours, a modern responsive frontend with clean design, and a fully automated CI/CD pipeline using Jenkins for smooth deployment workflow.",
      github: "https://github.com/srk224",
    },
    {
      class: "voicenews",
      title: "Voice Controlled News App",
      video: "",
      imgInfo: this.voiceNewsImgInfo,
      chips: this.voiceNewsChips,
      blurb: "Developed an accessibility-first news app with React for hands-free navigation, empowering differently-abled users. Integrated AlanAI for real-time voice interactions, allowing users to listen to headlines and open articles without touch. Used MaterialUI for a responsive user interface and deployed the app on Vercel. Control absolutely everything in the app using your voice.",
      github: "https://github.com/srk224",
    }
  ];

  constructor() { }
}