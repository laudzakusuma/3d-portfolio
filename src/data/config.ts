const config = {
  title: "Laudza Kusuma | Web3 & AI Developer",
  description: {
    long: "Explore the portfolio of Laudza, a Web3 Developer and AI Enthusiast. Specializing in Sui Blockchain, Ethereum, and AI Integration. Let's build the decentralized future together!",
    short:
      "Portfolio of Laudza, a Web3 Developer building decentralized applications and AI solutions.",
  },
  keywords: [
    "Laudza",
    "Web3 Developer",
    "Sui Blockchain",
    "Ethereum",
    "AI Integrator",
    "Gunadarma",
    "Smart Contracts",
  ],

  author: "Laudza Kusuma",
  email: "laudzaxie@gmail.com",

  // for github stars button
  githubUsername: "laudzakusuma",

  site: "https://example.com", // Add the site property here

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/L508062",
    linkedin: "www.linkedin.com/in/laudza-kusuma",
    instagram: "https://www.instagram.com/le0x_______",
    github: "https://github.com/laudzakusuma",
  },
};
export { config };