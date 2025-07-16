import { useEffect } from "react";
import muskanImg from "../assets/logo1921.jfif";
import {
  MapPinIcon,
  AtSymbolIcon,
  CalendarIcon,
  AcademicCapIcon,
  BriefcaseIcon,
} from "@heroicons/react/20/solid";
import AOS from "aos";
import "aos/dist/aos.css";
const features = [
  {
    name: "LinkedIn:",
    description: (
      <a
        href="https://www.linkedin.com/in/muskan-awais"
        className="text-blue-600 underline hover:text-blue-800"
        target="_blank"
        rel="noopener noreferrer"
      >
        www.linkedin.com/in/muskan-awais
      </a>
    ),
    icon: CalendarIcon,
  },
  {
    name: "GitHub:",
    description: (
      <a
        href="https://github.com/MuskanAwais"
        className="text-blue-600 underline hover:text-blue-800"
        target="_blank"
        rel="noopener noreferrer"
      >
        github.com/MuskanAwais
      </a>
    ),
    icon: BriefcaseIcon,
  },
  {
    name: "Email:",
    description: "muskanawais02@gmail.com",
    icon: AtSymbolIcon,
  },
  {
    name: "Location:",
    description: "Lahore, Pakistan",
    icon: MapPinIcon,
  },
];

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
      className="relative isolate overflow-hidden  px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
      id="about"
    >
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h2 className="text-lg leading-7"><a href="https://sam-folio.vercel.app">Get to know more</a></h2>
              <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
                About Me
              </p>
              <p className="mt-6 text-lg leading-8" data-aos="fade-right">
                I’m Muskan Awais, a passionate Full Stack Developer based in Lahore. With hands-on experience in React, Node.js, MongoDB, and Tailwind CSS, I love building sleek and responsive web applications. From organizing tech events to leading coding projects, I thrive on collaboration and creative problem-solving. I believe in writing clean, scalable code and learning continuously to keep growing in the ever-evolving tech world.When I’m not coding, you’ll find me mentoring juniors, exploring new tech trends, or designing intuitive user experiences.
              </p>

            </div>
          </div>
        </div>
        <div
          className="-ml-12 -mt-12 p-12 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
          data-aos="fade-left"
        >
          <img
            src={muskanImg}
            alt="Muskan Awais"
            className="w-40 sm:w-56 md:w-64 lg:w-80 xl:w-96 mx-auto rounded-xl shadow-xl ring-2 ring-base-300"
          />

        </div>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8">
          <div className="text-base leading-7">
            <div className="grid gap-x-6 sm:grid-cols-2">
              <div
                className="ring-2 ring-base-300 bg-base-200 rounded-2xl mt-10 p-5 shadow-xl"
                data-aos="zoom-in"
              >
                <BriefcaseIcon className="h-5 w-5 mx-auto" aria-hidden="true" />
                <h2 className="text-2xl text-center font-bold tracking-tight">Experience</h2>

                <div className="mt-4">
                  <p className="font-semibold">Python Developer Intern – Nexogics</p>
                  <p className="text-sm text-gray-600">Worked on automating internal tools and scripting with Python, gaining hands-on experience in backend logic and API integration.</p>
                </div>

                <div className="mt-4">
                  <p className="font-semibold">GenAI Engineer – DevSphere</p>
                  <p className="text-sm text-gray-600">Contributed to AI-driven projects using large language models, built GenAI tools, and helped in community engagement around AI innovation.</p>
                </div>

                <div className="mt-4">
                  <p className="font-semibold">Web Developer – Gutech International</p>
                  <p className="text-sm text-gray-600">Designed and developed a responsive website for Gutech International, improving user experience and performance across devices.</p>
                </div>
              </div>
              <div
                className="ring-2 ring-base-300 bg-base-200 rounded-2xl mt-10 p-5 shadow-xl"
                data-aos="zoom-in"
              >
                <AcademicCapIcon className="h-5 w-5 mx-auto" aria-hidden="true" />
                <h2 className="text-2xl text-center font-bold tracking-tight">Volunteering</h2>

                <div className="mt-4">
                  <p className="font-semibold">Zimal UET – Research & Report Lead</p>
                  <p className="text-sm text-gray-600">Led a creative team to publish university updates, managed captions, poster content, and ensured consistency in communication.</p>
                </div>

                <div className="mt-4">
                  <p className="font-semibold">Hackathon Mentor – UET Tech Week</p>
                  <p className="text-sm text-gray-600">Mentored beginner teams in problem-solving, project planning, and presentation strategy during university hackathons.</p>
                </div>

                <div className="mt-4">
                  <p className="font-semibold">Event Organizer – Skills Gala 2024</p>
                  <p className="text-sm text-gray-600">Played a key role in planning, logistics, and promotions for Skills Gala, a tech networking event at PC Lahore.</p>
                </div>
              </div>
              <div
                className="ring-2 ring-base-300 bg-base-200 rounded-2xl mt-10 p-5 shadow-xl"
                data-aos="zoom-in"
              >
                <AcademicCapIcon className="h-5 w-5 mx-auto" aria-hidden="true" />
                <h2 className="text-2xl text-center font-bold tracking-tight">Certifications</h2>

                <ul className="mt-4 space-y-3 text-gray-700 text-sm">
                  <li>
                    <span className="font-semibold">Advanced SQL Certification</span> — Mastered complex queries and joins.
                  </li>
                  <li>
                    <span className="font-semibold">PUCon Speed Programming</span> — Competed in timed coding challenges.
                  </li>
                  <li>
                    <span className="font-semibold">MERN Stack Training</span> — Built full-stack web apps using React & Node.
                  </li>
                  <li>
                    <span className="font-semibold">JavaScript Essentials</span> — Strengthened core language concepts.
                  </li>
                  <li>
                    <span className="font-semibold">Project Management</span> — Learned Agile, sprint planning & team workflows.
                  </li>
                </ul>
              </div>


              <div
                className="ring-2 ring-base-300 bg-base-200 rounded-2xl mt-10 p-5 shadow-xl"
                data-aos="zoom-in"
              >
                <AcademicCapIcon
                  className="h-5 w-5 mx-auto"
                  aria-hidden="true"
                />
                <h2 className=" text-2xl text-center font-bold tracking-tigh">
                  Education
                </h2>
                <p className="mt-3 list-item list-inside">
                  BS Computer Science – UET Lahore (CGPA 3./4.0)
                </p>
                <p className="mt-3 list-item list-inside">
                  Queen Mary College , Lahore (Intermediate)
                </p>
                <p className="mt-3 list-item list-inside">
                  JavaScript, Advanced SQL, Agile Methodologies, and Predictive Project Management</p>
              </div>
            </div>
            <dl
              className="mt-10 space-y-8 text-base leading-7 lg:max-w-none"
              data-aos="fade-right"
            >
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold">
                    <feature.icon
                      className="absolute left-1 top-1 h-5 w-5"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>{" "}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}