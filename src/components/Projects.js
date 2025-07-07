import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    id: 1,
    name: "GreenSync Pakistan",
    href: "https://github.com/MuskanAwais/Mini-Operating-System", // Add your live link if available
    imageSrc:
      "https://reneweconomy.com.au/wp-content/uploads/2018/06/greensync-logo-590x394.png"
      , // Replace with your own image
    used: "Next.js, AI Integration",
    description:
      "An AI-powered waste reporting platform where users upload a picture to report waste issues and workers earn points.",
  },
  {
    id: 2,
    name: "Event Ticketing Platform",
    href: "https://github.com/MuskanAwais/EventTicketingPlatform", // Add your GitHub or live link
    imageSrc:
      "https://picsum.photos/id/1005/600/400", // Replace with your own image
    used: "MERN Stack",
    description:
      "A campus event management system for planning, registration, and ticket booking with secure authentication and donation handling.",
  },
  {
    id: 3,
    name: "Full-Stack To-Do App",
    href: "#",
    imageSrc:
      "https://picsum.photos/id/1024/600/400", // Replace with your own image
    used: "MERN Stack",
    description:
      "A task management app with features like task creation, editing, deletion, priority settings, due dates, and user authentication.",
  },
  {
    id: 4,
    name: "Mini Operating System",
    href: "https://github.com/MuskanAwais/Mini-Operating-System",
    imageSrc:
      "https://picsum.photos/id/1040/600/400", // Replace with your own image
    used: "Linux, Shell, OS Concepts",
    description:
      "A mini Linux-based console OS with utilities like a calculator, time display, and file operations, demonstrating OS fundamentals.",
  },
  {
    id: 5,
    name: "Automated Blood Donation System",
    href: "https://www.youtube.com/watch?v=GKi5IZLGcuI",
    imageSrc:
      "https://picsum.photos/id/1050/600/400", // Replace with your own image
    used: "Database + Frontend",
    description:
      "A system to streamline donor-recipient info, reduce wait times, and ensure timely access to blood for patients.",
  },
  {
    id: 6,
    name: "IoT Weather Station",
    href: "https://www.youtube.com/watch?v=x-78w-BBDFs",
    imageSrc:
      "https://picsum.photos/id/1062/600/400", // Replace with your own image
    used: "Arduino UNO, Assembly Language",
    description:
      "A smart IoT weather station that monitors humidity, water level, fire, and smoke using sensors with real-time data output.",
  },
];

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div id="projects">
      <div className="mx-auto text-center max-w-2xl px-6 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <h2 className="text-lg leading-7">Browse my recent</h2>
        <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
          Projects
        </p>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative ring-2 ring-base-300 bg-base-200 rounded-2xl shadow-xl"
              data-aos="flip-left"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:brightness-75 duration-300 delay-100 lg:h-80 rounded-t-2xl ">
                <img
                  src={project.imageSrc}
                  alt={project.name}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between p-4">
                <div className="p-4">
                  <h3 className="text-lg font-bold">
                    <a href={project.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {project.name}
                    </a>
                  </h3>
                  <p className="mt-1 mb-5 text-sm">{project.description}</p>
                  <p className="text-sm font-medium">{project.used}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <button className="btn btn-outline">View More</button>
        </div>
      </div>
    </div>
  );
}