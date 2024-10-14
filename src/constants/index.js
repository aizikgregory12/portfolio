export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];
export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const experience = [
  {
    id: 1,
    name: "Education",
    pos: "Purdue Global University",
    duration: "2022 - Present",
    title:
      "Graduating in October 2024 with a B.S. in software development. I am passionate about creating intuitive and engaging user experiences. I am currently seeking a full-time position as a software engineer.",
    icon: `${import.meta.env.BASE_URL}/assets/schoolLogo.svg`,
    animation: "victory",
  },
  {
    id: 2,
    name: "Languages",
    pos: "React, JS, TypeScript, HTML, tailwindCSS, Python, SQL",
    duration: "2020 - 2024",
    title:
      "I am a front end developer passionate about building user-friendly and visually appealing web applications. I have experience working with HTML, CSS, JavaScript, and frameworks like React to create responsive and dynamic user interfaces.",
    icon: `${import.meta.env.BASE_URL}/assets/react.svg`,
    animation: "clapping",
  },
  {
    id: 3,
    name: "Technologies",
    pos: "AWS, Microsoft Office, Git, Node.js, GitHub",
    duration: "2020-2024",
    title:
      "Skilled in a wide variety of technologies. I have a strong understanding of cloud computing, server-side development, and version control. I am excited to continue my journey as a developer.",
    icon: `${import.meta.env.BASE_URL}/assets/github.svg`,
    animation: "salute",
  },
];
