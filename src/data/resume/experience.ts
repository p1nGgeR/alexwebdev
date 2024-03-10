import { JobContent } from "@/ts/models/resume/fact";

export const experience: JobContent[] = [
  {
    role: "Senior Full Stack Web Dev / Backend Team Lead",
    company: "Polytech Software",
    timeframe: "2018-Present",
    achievements: [
      "Led the migration of the classic MPA project to SPA (Nuxt.js) + REST API (Symfony). " +
        "It has improved application performance, user experience and developer experience",
      "Significantly improved the performance of core API endpoints using various data retrieval and caching strategies",
      "Redesigned schemas of key database tables to reduce the amount of data stored and improve overall DB performance",
      "Migrated reporting functionality from main SQL database to OpenSearch + static files (S3). " +
        "It allowed to reduce the load of the main DB and to display report charts/tables efficiently",
      "Configured infrastructure for unit and integration testing of the back-end application. " +
        "Added automated testing to CI/CD pipelines",
      "Created a tool to monitor the versions of software installed on supported projects " +
        "and notify dedicated developers of required updates.",
      "Implemented, released and supported dozens of projects",
    ],
    responsibilities: [
      "Design back-end and database architecture",
      "Improve application performance and find ways to reduce AWS costs",
      "Configure CI/CD pipelines",
      "Create technical documentation",
      "Optimize development and release processes",
      "Review pull requests",
      "Mentor junior developers",
      "Conduct technical interviews",
      "Perform load testing",
    ],
  },
  {
    role: "Full Stack Web Dev",
    company: "BeeJee",
    timeframe: "2017-2018",
    achievements: [
      "Created a social network for scientists. " +
        "A website where people can post and discuss science-related articles, journals and conferences",
      "Worked on processing a significant amount of photo/video content",
      "Integrated multiple payment gateways",
      "Integrated multiple live video streaming solutions",
    ],
    responsibilities: [
      "Implement new features and fix bugs",
      "Optimize SQL query performance",
      "Contribute to the in-house PHP framework",
    ],
  },
  {
    role: "Junior Full Stack Web Dev",
    company: "21 Web Studio",
    timeframe: "2016-2017",
    achievements: [
      "Built from scratch and released multiple projects",
      "Completed migration of a large website from one CMS to another",
    ],
    responsibilities: [
      "Build and maintain websites on WordPress, MODX and Joomla",
      "Convert designs from PSD to HTML/CSS",
      "Fix bugs and solve performance issues",
    ],
  },
];
