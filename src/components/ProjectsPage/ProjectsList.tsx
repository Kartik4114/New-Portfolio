import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ProjectsList() {
  const Projects = [
    {
      sectionTitle: "Web Development Projects",
      data: [
        {
          title: "Code Connect",
          hoverTitle: "DSA & Interview Prep Platform",
          subTitle:
            "A comprehensive platform for students to practice DSA, participate in coding contests, take mock interviews using AI, and engage in technical discussions",
          link: "",
        },
        {
          title: "PORTFOLIO WEBSITE",
          hoverTitle: "MAYBE RECURSION?",
          subTitle: "A website to showcase all my skills and work.",
          link: "",
          notBlank: true,
        },
        {
          title: "Career Connect",
          hoverTitle: "Real-time Job Analytics Dashboard",
          subTitle:
            "A platform that aggregates and tracks company job postings, providing insights on hiring trends and market opportunities for college students",
          link: "https://github.com/Kartik4114/Career-Connect",
        },
        {
          title: "CINE-YATRA",
          hoverTitle: "Movie Booking & Management System",
          subTitle:
            "A comprehensive movie platform with three distinct views: User booking interface, Theatre management dashboard, and Admin control panel for seamless movie operations",
          link: "https://github.com/Kartik4114/Movie-booking-system-CineYatra-",
        },
        {
          title: "Razorpay-Clone",
          hoverTitle: "Payment Gateway UI Clone",
          subTitle:
            "A pixel-perfect frontend clone of Razorpay's landing page featuring responsive design, Tailwind CSS styling, and modern UI components",
          link: "https://github.com/Kartik4114/Razorpay-Clone",
        },
        {
          title: "SPORTS-360",
          hoverTitle: "Sports Equipment Management System",
          subTitle:
            "A comprehensive system for managing sports equipment inventory, rentals, maintenance tracking, and equipment lifecycle management with real-time availability status",
          link: "https://github.com/Kartik4114/Sports-Management-System-Sports-360-",
        },
        {
          title: "QUIZ QUEST",
          hoverTitle: "Interactive Quiz Platform",
          subTitle: "A dynamic quiz application featuring multiple categories, real-time scoring, progress tracking, and instant feedback for an engaging learning experience ",
          link: "https://kartik4114.github.io/Online-Quiz-App/",
        },
      ],
    },
  ];

  return (
    <>
      {Projects.map((project, index) => {
        return (
          <section key={index} className="my-24">
            <section className="container mx-auto p-4">
              <h1 className="font-bold text-xl text-primary">
                {project.sectionTitle}
              </h1>
            </section>
            {project.data.map((val, key) => {
              return <Comp key={key} val={val}></Comp>;
            })}
          </section>
        );
      })}
    </>
  );
}

function Comp(props: {
  val:
    | {
        title: string;
        hoverTitle: string;
        subTitle: string;
        notBlank?: boolean;
        link: string;
      }
    | {
        title: string;
        hoverTitle: string;
        link: string;
        notBlank?: boolean;
        subTitle?: undefined;
      };
}) {
  const compRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(compRef.current, {
        yPercent: 100,
        opacity: 0,
        ease: "power4.out",
        duration: 1,
        scrollTrigger: {
          trigger: compRef.current,
          start: "top 100%",
          end: "bottom top",
          // scrub:true,
          // markers:true
        },
      });
    });
    return () => ctx.revert(); // cleanup!
  }, []);
  return (
    <a
      ref={compRef}
      href={props.val.link}
      target={props.val.notBlank ? "" : "_blank"}
      className="info-tile px-4 md:px-8 block overflow-clip group border-b-2 border-text/10 cursor-pointer relative after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-primary after:origin-bottom hover:after:origin-top after:-z-10 after:duration-500 after:transition-transform after:scale-y-0 hover:after:scale-y-100"
    >
      <div className="container relative mx-auto flex justify-between items-center">
        <div className="h-full w-full relative">
          <h1 className="text-xl md:text-5xl lg:text-7xl font-bold tracking-tighter py-12 group-hover:-translate-y-full duration-500">
            {props.val.title}
          </h1>
          <div className="absolute h-full top-0 left-0 flex flex-col justify-center group-hover:translate-y-0 translate-y-full duration-500">
            <h1 className="text-xl md:text-5xl lg:text-7xl font-bold tracking-tighter py-2">
              {props.val.title}
            </h1>
            <h1 className="text-lg md:text-2xl lg:text-3xl font-medium opacity-70 py-2">
              {props.val.hoverTitle}
            </h1>
          </div>
        </div>
        <p className="text-text/70 w-3/5 lg:group-hover:opacity-70 lg:opacity-0 transition-opacity text-xs md:text-base">
          {props.val.subTitle}
        </p>
      </div>
    </a>
  );
}
