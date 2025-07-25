import { useEffect, useRef } from "react";
import ME1 from "../../assets/Me.png?url";
import MeBlack_White from "../../assets/MeBlack_White.png?url";
// import MeBlack_White from "../assets/Me.png?url";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollIndicator from "../common/ScrollIndicator";
import useIntersectionObserver from "../../hooks/useInterSectionObsever";
gsap.registerPlugin(ScrollTrigger);

export default function AboutMe(props:{sectionRef:React.RefObject<HTMLDivElement>})
{
    // const age = "XXI XXI XXI XXI XXI XXI XXI XXI XXI XXI XXI XXI XXI XXI XXI XXI XXI XXI";
    // const about_me = "ABOUT MeBlack_White ABOUT MeBlack_White ABOUT MeBlack_White ABOUT MeBlack_White ABOUT MeBlack_White";
    const about_me = "IKARTIKMITTALKARTIKMITTALKARTIKMITTAL";
    // const bday = "0XA330XA330XA330XA330XA330XA330XA330XA33";

    const parentRef = useRef<HTMLDivElement>(null);
    const refs = [useRef<HTMLHeadingElement>(null),useRef<HTMLHeadingElement>(null),useRef<HTMLHeadingElement>(null),useRef<HTMLHeadingElement>(null),useRef<HTMLHeadingElement>(null)];
    const insideRefs = [useRef<HTMLDivElement>(null),useRef<HTMLDivElement>(null),useRef<HTMLDivElement>(null),useRef<HTMLDivElement>(null),useRef<HTMLDivElement>(null)];

    const MeRef = [useRef<HTMLDivElement>(null),useRef<HTMLDivElement>(null)];
    const imageRef = useRef<HTMLImageElement>(null);


    const tagsRef = [useRef<HTMLDivElement>(null),useRef<HTMLDivElement>(null),useRef<HTMLDivElement>(null),useRef<HTMLDivElement>(null)]
    useEffect(() => {        
        const ctx = gsap.context(() => {
            
            refs.forEach((ref,index)=>{
                gsap.fromTo(
                    ref.current,{
                        xPercent:-5 - 2 * index
                    },
                    {
                        xPercent:0,
                        scrollTrigger:{
                            trigger:parentRef.current,
                            start:"top 100%",
                            end:"bottom top",
                            scrub:true,
                            // markers:true
                        }
                    }
                )
            })
            insideRefs.forEach((ref,index)=>{
                gsap.from(
                    ref.current,{
                        xPercent:-10,
                        yPercent:100,
                        opacity:0,
                        delay:.35*index,
                        ease:"power4.out",
                        duration:2,
                        scrollTrigger:{
                            trigger:MeRef[0].current,
                            start:"top 100%",
                            // scrub:true,
                            // markers:true
                        }
                    }
                )
            })

            gsap.from(
                MeRef[0].current,{
                    yPercent:100,
                    opacity:0,
                    duration:2,
                    ease: "power4.out",
                    scrollTrigger:{
                        trigger:MeRef[0].current,
                        start:"top 100%",
                        end:"bottom top",
                        // scrub:true,
                        // markers:true
                    }
                }
            )
            gsap.fromTo(
                MeRef[1].current,{
                    yPercent:100,
                    opacity:0
                },
                {
                    yPercent:0,
                    duration:2,
                    delay:.5,
                    opacity:1,
                    ease: "power4.out",
                    scrollTrigger:{
                        trigger:MeRef[1].current,
                        start:"top 100%",
                        end:"bottom top",
                        // scrub:true,
                        // markers:true
                    }
                }
            )
            gsap.from(
                imageRef.current,{
                    yPercent:100,
                    // opacity:0,
                    duration:2,
                    delay:0.5,
                    ease: "power4.out",
                    scrollTrigger:{
                        trigger:MeRef[0].current,
                        start:"top 100%",
                        end:"bottom top",
                        // scrub:true,
                        // markers:true
                    }
                }
            )

            tagsRef.forEach((ref,index)=>{
                gsap.from(
                    ref.current,{
                        yPercent:100,
                        opacity:0,
                        ease:"power2.out",
                        delay:index*.25,
                        scrollTrigger:{
                            trigger:ref.current,
                            start:"top 100%",
                            end:"bottom top",
                            // scrub:true,
                            // markers:true
                        }
                    }
                )
            })

        }); // <- optional additional param, scopes all selector text inside the context to this component (default is document)
        
        return () => ctx.revert(); // cleanup! 
    }, []);

    const isIntersecting = useIntersectionObserver(imageRef,{threshold:.7});

    return (
        <div ref={props.sectionRef} className="relative">
            <ScrollIndicator>
                <h1 className="text-xs opacity-50">Explore More</h1>
            </ScrollIndicator>
            <div className='overflow-x-clip 2xl:-mb-[24rem] xl:-mb-[15rem] lg:-mb-[4rem] hidden lg:block'>
                <div ref={parentRef} className='w-max'>
                    <div ref ={refs[1]} className="overflow-y-clip">
                        <h3 ref ={insideRefs[1]} className='mt-4 text-9xl font-extrabold'>{about_me}</h3>
                    </div>
                </div>
            </div>
            <div className="md:container md:mx-auto flex flex-row items-end gap-8 px-8">
                <div className='w-full lg:w-3/4'>
                    <div className="overflow-y-clip">
                        <h1 ref={MeRef[0]} className='text-xl sm:text-5xl font-extrabold mt-1'>KARTIK <span className='text-primary'>MITTAL</span></h1>
                    </div>
                    <hr className='border-primary border-2 mt-4'/>
                    <div className="mt-4 flex flex-wrap gap-1">
                        {
                            ["Full Stack Developer","Problem-Solver","Tech-Enthusiast","Explorer"].map((value,index)=>{
                                return <div key={index} ref={tagsRef[index]} className="cursor-pointer fill-hover relative grow border-2 border-white/10 rounded-lg flex p-2 lg:p-4 justify-center hover:grow-[2] transition-[flex-grow] duration-300 text-xs"><span>{value}</span></div>
                            })
                        }
                    </div>
                    <p ref={MeRef[1]} className='text-justify mt-6 text-xs font-light md:text-base mb-4'>
                        Currently pursuing B.Tech in Computer Science & Engineering from National Institute of Technology, Delhi. I am looking for Internship as well as full time roles as a Software Development Engineer.
                    </p>
                </div>
                <div className="w-full overflow-y-clip hidden lg:block relative">
                    <div className="group" ref={imageRef}>
                        <img className={`absolute top-0 left-0 z-10 w-100 h-200 duration-700 ${isIntersecting?"opacity-0":""}`} src={MeBlack_White} alt="" />
                        <img className='w-100 h-200  white-outline' src={ME1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}