export const resume = {
  name: "Jayanth Lankalapalli",
  nickname: "Jayanth",
  email: "lankalapallijayanth@gmail.com",
  linkedin: "https://www.linkedin.com/in/jayanthlankalapalli",
  github: "https://github.com/lankalapalljn",
  location: "United States",

  education: {
    school: "Virginia Commonwealth University",
    degree: "Bachelor of Science in Computer Science",
    graduation: "May 2022",
    gpa: "3.8",
  },

  experience: [
    {
      id: "amex",
      title: "Software Engineer",
      company: "American Express",
      period: "2022 – 2025",
      bullets: [
        "Member of the AMEX Network Modernization Team, building applications and tools that increase efficiency for network transactions and data processing in Java, Python, & React",
        "Developed Cloud Infrastructure Solutions using Terraform and OpenShift Redhat cloud that were deployed to production",
        "Created front-end automation tool using React.js to allow SRE teams to monitor, debug, and make changes to services on lower environments",
      ],
    },
    {
      id: "amex-intern",
      title: "Software Engineering Intern",
      company: "American Express",
      period: "2021",
      bullets: [
        "Developed a frontend web application to process backend customer card authentication data",
        "Collaborated on a team using Agile Development using React.js, VS Code, Postman, and Docker",
      ],
    },
    {
      id: "qsm",
      title: "Cyber Security Analyst",
      company: "Quality Systems Management Inc.",
      period: "2021 – 2022",
      bullets: [
        "Researched and developed Cybersecurity solutions and configurations",
        "Implemented vulnerability management, risk management, and CUI encryption management solutions",
        "Developed viable solutions to comply with CMMC guidelines",
      ],
    },
    {
      id: "vcu-research",
      title: "Undergraduate Research Assistant",
      company: "Virginia Commonwealth University",
      period: "2020 – 2021",
      bullets: [
        "Designed a Bio-Instrumentation Android Application for early COVID-19 identification using Java and Android Studio",
        "Led a multidisciplinary research team with mechanical and biomedical engineering research assistants",
      ],
    },
  ],

  skills: {
    languages: ["Java", "HTML/CSS", "C", "Python", "Selenium", "SQL", "React", "C#", "Groovy", "SpringBoot"],
    tools: ["GitHub", "Android Studio", "Linux", "Eclipse", "PuTTY", "VSCode", "Filezilla", "IntelliJ", "MySQL Workbench", "SQLite", "Docker", "Postman", "Terraform", "AWS", "MongoDB", "Couchbase"],
    methods: ["Agile Development", "Waterfall Development", "Test-Driven Development"],
  },

  projects: [
    {
      id: "whatsPoppin",
      title: "What's Poppin",
      subtitle: "Social Event Web Application",
      year: "2026",
      description:
        "Individually developed using React.js, Supabase, and MapBox to help users find local events and activities. Users can create an account, create events, and view events created by other users. The application uses MapBox to display event locations on a map and Supabase to store user and event data.",
      tech: ["React.js", "Supabase", "MapBox", "VSCode", "GitHub", "Figma", "SQL"],
      github: "",
    },
        {
      id: "gg_assist",
      title: "GG Assistant",
      subtitle: "AI Gaming Assistant",
      year: "2026",
      description:
        "Developed using React.js, Google Gemini API, and Supabase. GG Assistant is an AI gaming assistant that provides users with game strategies, tips, and tricks for popular games. Users can ask the assistant questions about game mechanics, character builds, and general gameplay advice. The application uses the Google Gemini API to generate responses and Supabase to store user data and interaction history.",
      tech: ["Python", "Selenium", "VSCode", "Gemini API", "Supabase", "React.js", "Figma"],
      github: "https://github.com/lankalapallijayanth/gg_assistant",
    },
    {
      id: "reviewhub",
      title: "ReviewHub",
      subtitle: "Review Site for seeing review on TV Shows, Movies, and Video Games",
      year: "2026",
      description:
        "Created using React.js and Supabase. Allows users to read reviews on new and popular TV shows, movies, and video games. Users can write reviews, and view reviews written by other users. All submitted articles are reviewd before being posted to ensure quality content. The application uses Supabase to store user and review data.",
      tech: ["React.js", "Supabase", "VSCode", "GitHub", "Figma", "SQL"],
      github: "",
      link: "https://reviewhubreviews.lovable.app/",
    },
    {
      id: "instabot",
      title: "InstaBot",
      subtitle: "Python Automation Program",
      year: "2020",
      description:
        "Individually developed using Python and Selenium on VSCode. Allows user to enter Instagram credentials so the program can collect a list of all their followers to perform tasks like gaining more followers and auto-liking posts. Data scrapes follower lists and traverses through followers quickly.",
      tech: ["Python", "Selenium", "VSCode"],
      github: "https://github.com/lankalapalljn/InstaBot",
    },
    {
      id: "halfway",
      title: "Halfway",
      subtitle: "Android Application",
      year: "2019",
      description:
        "Developed using Android Studio, Java, and Google API. Led team using Agile Software development process. Allows user to locate a midpoint address between two given addresses, generates special location information such as restaurants and parks, and allows the generated address to be shared.",
      tech: ["Android Studio", "Java", "Google API"],
      github: "https://github.com/lankalapalljn/HalfWayApp",
    },
  ],
};
