import {
  jenisBeras,
  jenisBerasWebp,
  massbeat,
  massbeatWebp,
  minimalistPortfolio,
  minimalistPortfolioWebp,
  modernPortfolio,
  modernPortfolioWebp,
  pinjamRuangan,
  pinjamRuanganWebp,
  rotte,
  rotteWebp,
  webDesign,
  webDesignWebp,
  reactKalkulator,
  reactKalkulatorWebp,
} from "../assets/img/projects";

// const repos = (selectedRepo) => {
//   const [repoData, setRepoData] = React.useState([]);

//   const repos = [
//     "capstone-tim1",
//     "monchrome-portfolio",
//     "modern-portfolio",
//     "peminjaman-ruangan",
//     "web-design",
//     "ProjectPD",
//   ];

//   React.useEffect(() => {
//     repos.map((repo) => {
//       fetch(`https://api.github.com/repos/hibatillah/${repo}`)
//         .then((res) => res.json())
//         .then((data) => {
//           setRepoData((prev) => [
//             ...prev,
//             {
//               title: repo,
//               date: data.updated_at.split("T")[0],
//             },
//           ]);
//         })
//         .catch((err) => console.log(err));
//     });

//     console.log("repo", repoData);
//   }, [repoData]);

//   const selectRepo = (selectedRepo) => {
//     const result = repoData.find((data) => data.title === selectedRepo);
//     return result.date;
//   };

//   return selectRepo;
// };

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
    webp: rotteWebp,
  },
  {
    title: "Monochrome Portfolio",
    desc: "Monochrome minimalist portfolio with responsive and darkmode design.",
    tag: ["Portfolio", "Personal Web", "Dark Mode", "ReactJS", "TailwindCSS"],
    date: "June 4, 2023",
    link: "https://hibatillah-monochromeportfolio.vercel.app",
    image: minimalistPortfolio,
    webp: minimalistPortfolioWebp,
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
    date: "May 29, 2023",
    link: "https://www.behance.net/gallery/162029955/MassBeat-Aplikasi-Workout-Dan-Konsultasi-Trainer",
    image: massbeat,
    webp: massbeatWebp,
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
    date: "May 20, 2023",
    link: "https://pinjamruangan.vercel.app",
    image: pinjamRuangan,
    webp: pinjamRuanganWebp,
  },
  {
    title: "Web Design Collection",
    desc: "Create collection of various innovative web designs.",
    tag: ["Web Design", "UI/UX", "TailwindCSS"],
    date: "March 28, 2023",
    link: "https://github.com/hibatillah/web-design",
    image: webDesign,
    webp: webDesignWebp,
  },
  {
    title: "Modern Portfolio",
    desc: "Personal portfolio with modern and responsive design.",
    tag: [
      "Portfolio",
      "Personal Web",
      "Modern Design",
      "ReactJS",
      "TailwindCSS",
    ],
    date: "March 25, 2023",
    link: "https://hibatillah-modernportfolio.vercel.app",
    image: modernPortfolio,
    webp: modernPortfolioWebp,
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
    date: "January 15, 2023",
    link: "https://hibatillah.github.io/ProjectPD/",
    image: jenisBeras,
    webp: jenisBerasWebp,
  },
  {
    title: "Simple Calculator React JS",
    desc: "Create simple calculator using reactjs and tailwindcss.",
    tag: ["Calculator", "ReactJS", "TailwindCSS"],
    date: "January 2023",
    link: "https://hibatillah.github.io/ReactKalkulator/",
    image: reactKalkulator,
    webp: reactKalkulatorWebp,
  },
];

export default projects;
