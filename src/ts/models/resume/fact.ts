export type Fact<T> = {
  id: number;
  type: FactType;
  content: T;
};

export enum FactType {
  Education = "Education",
  Biography = "Biography",
  Job = "Job",
  Skill = "Skill",
}

export type EducationContent = {
  degree: string;
  timeframe: string;
  speciality: string;
  university: string;
  qualification: string;
};

export type EducationFact = Fact<EducationContent>;

export type BiographyContent = {
  name: string;
  value: string;
};

export type BiographyFact = Fact<BiographyContent>;

export type JobContent = {
  role: string;
  company: string;
  timeframe: string;
  achievements: string[];
  responsibilities: string[];
};

export type JobFact = Fact<JobContent>;

export type SkillContent = {
  name: string;
  usage: SkillUsage;
  category: SkillCategory;
};

export type SkillFact = Fact<SkillContent>;

export enum SkillUsage {
  Production = "Production",
  Pet = "Pet",
}

export enum SkillCategory {
  BackEnd = "Backend",
  FrontEnd = "Frontend",
  AWS = "AWS",
  Tools = "Tools",
}
