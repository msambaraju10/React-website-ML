import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import saraImg from "@/public/dbb copy.jpg";
import flightfare from "@/public/Orange copy.jpeg";
import portfolioImg from "@/public/portfolio_img copy.png";
import oculusImg from "@/public/Platform copy.webp";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer",
    company: "Jabil",
    location: "St. Petersburg, FL",
    description:
      "I worked as a Full Stack Developer to implement Support feature for the Jabil global customers.\
      Used Java, React, Kafka, SQL stored procedures for automating the Financial Reporting .",
    icon: React.createElement(LuGraduationCap),
    date: "May 2023 - May 2024",
  },
  {
    title: "Software Engineer",
    company: "Cognizant Technology Solutions",
    location: "Hyderabad, IND",
    description:
      "I worked as a Backend developer to transition the modules from SOAP to REST API endpoints to service MetLife enterprise customers.\
      Used Java and Spring Framework to develop the APIs and maintained the operations in MySQL database.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2021 - Jul 2022",
  },
  {
    title: "Software Engineering Intern",
    company: "Cognizant Technology Solutions",
    location: "Tamil Nadu, IND",
    description:
      "I worked as a Backend developer to improve Fertilizer ordering process by completely refactoring the central admin dashboard.\n\
      Used Java, Spring Boot, React and AWS cloud services",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2021 - Jun 2021",
  },
] as const;

export const projectsData = [
  {
    title: "Student Coding Platform",
    description:
      "Student coding platforms offer accessible learning, practice, community support, and career preparation for aspiring developers.",
    tags: ["Java", "Node.js", "React"],
    imageUrl: oculusImg,
  },
  {
    title: "USFdb",
    description:
      "Usfdb is a custom relational DBMS for building database systems from scratch.",
    tags: ["Java", "OpenCV"],
    imageUrl: saraImg,
  },
  {
    title: "Real Life Carry on",
    description:
      "To store maximum number of items into the bag within the given limit of bag's capacity on the bag..",
    tags: ["Python", "NumPy", "Pandas", "Scikit Learn"],
    imageUrl: flightfare,
  },
  {
    title: "Portfolio",
    description:
      "A responsive website created with modern UI design using Next.js.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    imageUrl: portfolioImg,
  },
] as const;

export const skillsData = [
  "Java",
  "Python",
  "Spring Boot",
  "Spring MVC",
  "REST API",
  "Maven",
  "Apache Kafka",
  "React",
  "Angular",
  "Docker",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Kubernetes",
  "JUnit",
  "Mockito",
  "AWS",
  "NOSQL",
  "Git",
  "Postman",
  "Tomcat",
  "Node",
  "OpenCV",
  "Prompt Engineering",
] as const;
