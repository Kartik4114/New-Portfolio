import { RefObject, useRef } from "react";
import useIntersectionObserver from "../../hooks/useInterSectionObsever";

export function SkillsSection() {
  return (
    <section className="my-24">
      <h1 className="container px-8 mx-auto font-bold text-primary text-3xl mb-8">
        SKILLS
      </h1>
      <div className="flex container mx-auto px-8 gap-4 justify-center items-start flex-wrap">
        {[
          {
            title: "Frontend Development",
            fields: {
              "ReactJS": 0.95,
            //   "NextJS": 0.85,
              "HTML": 1,
              "CSS": 1,
              "TailwindCSS": 0.90,
              "Bootstrap": 0.95,
            },
          },
          {
            title: "Backend Development",
            fields: {
              "NodeJS": 1,
              "ExpressJS": 1,
              "MongoDB": 1,
              "SQL": 1,
              "BULLMQ (REDIS)": 0.90,
              "WEB SOCKETS": 0.95,
            },
          },
          {
            title: "Languages",
            fields: {
              "C/C++": 1,
              "Python": 0.70,
              "Javascript": 1,
              "Dart": 0.70,
              "MySQL": 0.90,
            },
          },
          {
            title: "Developer Tools & Design",
            fields: {
              "Canva": 0.85,
              "Github": 1,
              "Postman": 1,
              "Cisco Packet Tracer": 0.75,
              "Latex": 0.90,
              "Google colab": 0.90,
              "MySQL Workbench": 1,
            },
          },
          {
            title: "CS Fundamentals",
            fields: {
              "OOPS": 1,
              "DBMS": 1,
              "Computer Networks": 0.80,
              "Operating System": 1,
            },
          },
          {
            title: "Soft Skills",
            fields: {
              "Teamwork": 0.90,
              "Leadership": 0.90,
              "Problem Solving": 0.95,
              "Collaboration": 0.90,
              "Communication": 0.95,
            },
          },
        ].map((category, index) => {
          return (
            <SkillCard
              key={index}
              title={category.title}
              fields={category.fields}
            />
          );
        })}
      </div>
    </section>
  );
}

function SkillCard(props: {
  title: string;
  fields: { [key: string]: number | undefined };
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={cardRef} className="w-full xl:w-2/5 grow md:p-4">
      <h1 className="font-bold text-3xl">{props.title}</h1>
      <div className="flex-col flex gap-1 mt-4">
        {Object.keys(props.fields).map((field, index) => {
          return (
            <div
              key={index}
              className="mt-1 bg-primary/50 rounded-lg relative p-4 duration-300 hover:scale-[1.02] group"
            >
              <h1 className="z-10 relative font-bold opacity-90 hover:opacity-100 duration-300 uppercase">
                {field}
              </h1>
              <SkillFill
                style={{ transitionDelay: `${index}00ms` }}
                card={cardRef}
                field={field}
                fields={props.fields}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SkillFill(props: {
  fields: { [key: string]: number | undefined };
  field: string;
  card: RefObject<HTMLDivElement>;
  style: { [key: string]: string };
}) {
  const fillRef = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(props.card, {
    threshold: 0.2,
  });

  return (
    <div
      ref={fillRef}
      className={`fill-ref-class h-full absolute left-0 top-0 bg-primary rounded-lg origin-left duration-1000 ${
        isIntersecting ? "scale-x-100" : "scale-x-0"
      } flex items-center justify-end px-4`}
      style={{ ...props.style, width: props.fields[props.field]! * 100 + "%" }}
    >
      <div className="absolute w-full h-full left-0 top-0 bg-gradient-to-tr from-primary to-accent duration-300 opacity-0 group-hover:opacity-100 rounded-lg" />
      <div className="relative z-10 text-white font-medium">
        {(props.fields[props.field]! * 100).toFixed(0)}%
      </div>
    </div>
  );
}