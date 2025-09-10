import { ReactNode, RefObject, useEffect, useRef } from "react";
import { gsap } from "gsap";

function WorkExperience() {
  const experience = [
    {
      title: "SOFTWARE DEVELOPMENT",
      hoverTitle: "TECH MAHINDRA LIMITED",
      type: "INTERN",
      subTitle: (
        <>
          <h1 className="font-bold">MAY 2025 - JUL 2025</h1>
          <div className="mt-4">
            Engineered a ticket resolution system for State Bank of India. Built
            scalable Node.js/Express APIs processing 5,000+ tickets per batch,
            reducing manual entry by 85%. Implemented BullMQ for queue
            management, improving system throughput by 60% and enabling
            real-time ticket routing.
          </div>
        </>
      ),
      link: "",
    },
    {
      title: "Frontend Developent",
      hoverTitle: "Doorstep Delhi",
      type: "Intern",
      subTitle: (
        <>
          <h1 className="font-bold">JUN 2024 - AUG 2024</h1>
          <div className="mt-4">
            Led frontend optimization initiatives by implementing code splitting
            and lazy loading, achieving 35% faster page loads and 25% better
            user engagement. Partnered with AI team to integrate dynamic
            recommendation features, driving 20% longer user sessions and 15%
            improved platform retention rates.
          </div>
        </>
      ),
      link: "https://drive.google.com/file/d/1DjwtKhsjsHcaj7VSA8n3CSExJJQMe5FK/view?usp=sharing",
    },
    {
      title: "ML Trainee",
      hoverTitle: "Amazon ML School 2025",
      type: "Student",
      subTitle: (
        <>
          <h1 className="font-bold">Aug 2025 - Sep 2025</h1>
          <div className="mt-4">
            Selected among the top 3,000 students nationwide for the prestigious
            Amazon ML School 2025. Completed intensive training by Amazon in
            Machine Learning, Deep Learning, and Large Language Models (LLMs).
            Acquired hands-on expertise in Supervised & Unsupervised Learning,
            Neural Networks, Dimensionality Reduction, and Reinforcement
            Learning.
          </div>
        </>
      ),
      link: "https://drive.google.com/file/d/1Iww8ek-X5YG-v9NYx3RR4yr2TH16Isoe/view?usp=drive_link",
    },
  ];
  const compRefs = [
    useRef<HTMLAnchorElement>(null),
    useRef<HTMLAnchorElement>(null),
    useRef<HTMLAnchorElement>(null),
  ];
  useEffect(() => {
    const ctx = gsap.context(() => {
      compRefs.forEach((ref, index) => {
        if (ref.current === null) return;
        gsap.from(ref.current, {
          yPercent: 100,
          opacity: 0,
          ease: "power4.out",
          delay: index * 0.1,
          duration: 1,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 100%",
            end: "bottom top",
            // scrub:true,
            // markers:true
          },
        });
      });
    });
    return () => ctx.revert(); // cleanup!
  }, []);

  return (
    <section className="my-24">
      <h1 className="container px-8 mx-auto font-bold text-primary text-3xl mb-8">
        WORK EXPERIENCE
      </h1>
      {experience.map((val, key) => {
        return <Comp refElement={compRefs[key]} val={val} key={key}></Comp>;
      })}
    </section>
  );
}

function Comp(props: {
  val: {
    title: string;
    hoverTitle: string;
    subTitle: ReactNode;
    link: string;
    type: string;
  };
  refElement: RefObject<HTMLAnchorElement>;
}) {
  return (
    <a
      ref={props.refElement}
      href={props.val.link}
      target="_blank"
      className="py-8 px-4 2xl:py-0 block overflow-clip group border-b-2 border-text/10 cursor-pointer relative after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-primary after:origin-bottom hover:after:origin-left after:-z-40 after:duration-500 after:transition-transform after:scale-y-0 hover:after:scale-y-100"
    >
      <div className="container relative mx-auto flex flex-col 2xl:flex-row 2xl:justify-between 2xl:items-center">
        <div className="2xl:py-8 2xl:group-hover:-translate-y-full duration-500">
          <h1 className="flex items-center gap-8">
            <span className="text-xl md:text-5xl lg:text-7xl font-bold tracking-tighter">
              {props.val.title}
            </span>
            <span className="font-bold opacity-70">{props.val.type}</span>
          </h1>
        </div>
        <div className="2xl:py-8 2xl:hidden opacity-70">
          <h1 className="flex items-center gap-8">
            <span className="text-md md:text-xl lg:text-xl font-bold tracking-tighter">
              {props.val.hoverTitle}
            </span>
          </h1>
        </div>
        <div className="hidden 2xl:flex flex-col justify-center translate-y-full group-hover:translate-y-0 absolute top-0 left-0 w-full h-full duration-500">
          <h1 className="flex items-center gap-8">
            <span className="text-xl md:text-5xl lg:text-7xl font-bold tracking-tighter">
              {props.val.title}
            </span>
            <span className="font-bold opacity-70">{props.val.type}</span>
          </h1>
          <h1 className="flex items-center gap-8 opacity-80">
            <span className="text-md md:text-xl lg:text-3xl font-bold tracking-tighter">
              {props.val.hoverTitle}
            </span>
          </h1>
        </div>
        <div className="2xl:py-8 w-full 2xl:w-96 text-xs md:text-sm opacity-90">
          {props.val.subTitle}
        </div>
      </div>
    </a>
  );
}

export default WorkExperience;
