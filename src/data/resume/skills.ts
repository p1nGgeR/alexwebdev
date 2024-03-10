import {
  SkillCategory,
  SkillContent,
  SkillUsage,
} from "@/ts/models/resume/fact";

export const skillsByCategory = new Map<
  SkillCategory,
  Pick<SkillContent, "name" | "usage">[]
>([
  [
    SkillCategory.BackEnd,
    [
      { name: "PHP", usage: SkillUsage.Production },
      { name: "Symfony", usage: SkillUsage.Production },
      { name: "Laravel", usage: SkillUsage.Pet },
      { name: "Node.js", usage: SkillUsage.Pet },
      { name: "Python", usage: SkillUsage.Pet },
      { name: "MySQL", usage: SkillUsage.Production },
      { name: "PostgreSQL", usage: SkillUsage.Pet },
      { name: "MongoDB", usage: SkillUsage.Pet },
      { name: "ElasticSearch", usage: SkillUsage.Production },
      { name: "Redis", usage: SkillUsage.Production },
      { name: "RabbitMQ", usage: SkillUsage.Pet },
    ],
  ],
  [
    SkillCategory.FrontEnd,
    [
      { name: "JavaScript", usage: SkillUsage.Production },
      { name: "Typescript", usage: SkillUsage.Production },
      { name: "React", usage: SkillUsage.Pet },
      { name: "Next.js", usage: SkillUsage.Pet },
      { name: "Vue2", usage: SkillUsage.Production },
      { name: "Vue3", usage: SkillUsage.Pet },
      { name: "Nuxt.js", usage: SkillUsage.Pet },
      { name: "Tailwindcss", usage: SkillUsage.Production },
      { name: "HTML", usage: SkillUsage.Production },
      { name: "CSS", usage: SkillUsage.Production },
    ],
  ],
  [
    SkillCategory.AWS,
    [
      { name: "EC2", usage: SkillUsage.Production },
      { name: "RDS", usage: SkillUsage.Production },
      { name: "OpenSearch", usage: SkillUsage.Production },
      { name: "DynamoDB", usage: SkillUsage.Production },
      { name: "ElastiCache", usage: SkillUsage.Production },
      { name: "S3", usage: SkillUsage.Production },
      { name: "SQS", usage: SkillUsage.Production },
      { name: "SNS", usage: SkillUsage.Production },
      { name: "CloudFront", usage: SkillUsage.Production },
      { name: "Lambda", usage: SkillUsage.Production },
      { name: "CodeDeploy", usage: SkillUsage.Production },
      { name: "ElasticBeanstalk", usage: SkillUsage.Pet },
    ],
  ],
  [
    SkillCategory.Tools,
    [
      { name: "docker", usage: SkillUsage.Production },
      { name: "docker-compose", usage: SkillUsage.Production },
      { name: "git", usage: SkillUsage.Production },
      { name: "Bitbucket Pipelines", usage: SkillUsage.Production },
      { name: "GitHub Actions", usage: SkillUsage.Pet },
    ],
  ],
]);
