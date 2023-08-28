import {facebook, instagram, linkedin, twitter, send, shield, star, phoenix, fade, omen, reyna, viper, kayo, neon, jett, valorant, valChampLogo, } from "../assets";



export const navLinks = [
  {
    id: "Home",
    title: "",
    to: "/home",
  },
  {
    id: "Memberships",
    title: "Memberships",
    to: "/memberships",
  },
  {
    id: "Sports",
    title: "Sports",
    submenu: [
      { id: 31, title: "Valorant", to: "/valorant" },
    ],
  },
  {
    id: "Profile",
    title: "Profile",
    to: "/profile",
  },
  {
    id: "Sign Up", // Keep the id for reference
    button: true, // Add a new property to identify it as a button
    title: "Sign Up", // Title of the button
    to: "/signup", // Route for the button
  },
];
export const heroImages = [
  fade,
  omen,
  reyna,
  viper,
  valChampLogo,
  neon,
  jett,
  phoenix,
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Data-Driven Insights",
    content:
      "Uncover key player statistics from the last 10 games, empowering your bets with informed decisions.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Easy Navigation:",
    content:
      "Navigate effortlessly through our intuitive interface to access player histories and trends.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Save Time, Bet Wisely",
    content:
      "We do the groundwork so you can concentrate on strategic betting, maximizing your winning potential.",
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];

export const services = [
  {
    id: 1,
    name: "Basic",
    description: ["Basic Stats", "Recent Game Data", "Monthly Key Matches",],
    imagePath: "path_to_image/service1.jpg"
  },
  {
    id: 2,
    name: "Analyst",
    description: ["Advanced Stats", "Recent Game Data", "Monthly Key Matches", "Upcoming Sport Events", "Statistics: Up To 3 Months", "Live Game Tracking" ],
    imagePath: "path_to_image/service2.jpg"
  },
  {
    id: 3,
    name: "Strategist",
    description: ["Premium Stats", "Recent Game Data", "Monthly Key Matches", "Upcoming Sport Events", "Statistics: Up To 6 Months","Live Game Tracking With Expert Commentary", "Exclusive E-Sport Interviews", ],
    imagePath: "path_to_image/service3.jpg"
  }
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];
