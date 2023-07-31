import {
  jenisBeras,
  massbeat,
  minimalistPortfolio,
  modernPortfolio,
  pinjamRuangan,
  rotte,
  webDesign,
} from "../assets/img/projects";

const projects = [
  {
    title: "Supply Chain System Study Case Rotte Bakery",
    desc: "4th semester project for supply chain management, data visualization, and framework programming courses. Provide supply chain management web system for each stakeholder, as well as visualization of historical data owned.",
    tag: [
      "Supply Chain Management",
      "Data Visualization",
      "Framework Programming",
      "MERN Stack",
    ],
    date: "July 14, 2023",
    link: "https://github.com/hibatillah/capstone-tim1",
    image: rotte,
  },
  {
    title: "Monochrome Portfolio",
    desc: "Monochrome minimalist portfolio with responsive and darkmode design.",
    tag: ["Portfolio", "Personal Web", "Dark Mode", "React JS", "TailwindCSS"],
    date: "June 5, 2023",
    link: "https://hibatillah.vercel.app",
    image: minimalistPortfolio,
  },
  {
    title: "Sistem Informasi Peminjaman Ruangan Kelas",
    desc: "Classroom lending website with room availability features, room loan forms as well as activity and room borrowing history.",
    tag: [
      "Web Development",
      "Form",
      "School Project",
      "CSS Nesting",
      "Javascript",
    ],
    date: "June 4, 2023",
    link: "https://pinjamruangan.vercel.app",
    image: pinjamRuangan,
  },
  {
    title: "Modern Portfolio",
    desc: "Personal portfolio with modern and responsive design.",
    tag: [
      "Portfolio",
      "Personal Web",
      "Modern Design",
      "React JS",
      "TailwindCSS",
    ],
    date: "April 2023",
    link: "https://hibatillah-modernportfolio.vercel.app",
    image: modernPortfolio,
  },
  {
    title: "Web Design Collection",
    desc: "Create collection of various innovative web designs.",
    tag: ["Web Design", "UI/UX", "TailwindCSS"],
    date: "March 28, 2023",
    link: "https://github.com/hibatillah/web-design",
    image: webDesign,
  },
  {
    title: "MassBeat - Workout App and Trainer Consultation",
    desc: "An app that provides a workout program and coach consultation services, healthy food recommendations and communities to interact with each other in providing support for healthy living.",
    tag: [
      "UI/UX Study Case",
      "Business Plan",
      "Mobile App",
      "Web App",
      "Design Thinking",
    ],
    date: "January 2023",
    link: "https://www.behance.net/gallery/162029955/MassBeat-Aplikasi-Workout-Dan-Konsultasi-Trainer",
    image: massbeat,
  },
  {
    title: "Web Identification of Rice Types based on Color",
    desc: "3rd semester project of Data Mining course at Politeknik Caltex Riau. Applies the concept of deep learning and image processing with Python to identify the inputted images and classify them based on color.",
    tag: [
      "Data Mining",
      "Deep Learning",
      "Image Processing",
      "Python",
      "JQuery",
    ],
    date: "January 2023",
    link: "https://hibatillah.github.io/ProjectPD/",
    image: jenisBeras,
  },
];

export default projects;