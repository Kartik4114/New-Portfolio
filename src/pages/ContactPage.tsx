import { useEffect, useRef } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function ContactPage()
{
    const cardClass = "rounded-3xl hover:grow-[6] transition-grow flex items-center justify-center font-bold text-xl [&>*]:scale-75 md:[&>*]:scale-100";
    const gapClass = "gap-2";

    const refs = [useRef<HTMLAnchorElement>(null),useRef<HTMLAnchorElement>(null),useRef<HTMLAnchorElement>(null),useRef<HTMLAnchorElement>(null),useRef<HTMLAnchorElement>(null),useRef<HTMLAnchorElement>(null),useRef<HTMLAnchorElement>(null),useRef<HTMLAnchorElement>(null),useRef<HTMLAnchorElement>(null),useRef<HTMLAnchorElement>(null)];

    useEffect(() => {        
        const ctx = gsap.context(() => {
            
            refs.forEach((ref,index)=>{
                gsap.from(
                    ref.current,
                    {
                        xPercent:-200,
                        opacity:0,
                        delay:.5+.25*index,
                        ease:"power4.out",
                        duration:1
                    }
                )
            })
        });
        
        return () => ctx.revert(); // cleanup! 
      }, []);

    return (
    <>
        <div className="flex flex-col justify-between min-h-screen overflow-x-hidden">
            <Navbar margin/>
            <div className={`grow flex flex-col container mx-auto h-160 ${gapClass} p-8`}>
                <div className={`grow-[1] flex flex-wrap items-stretch hover:grow-[1.5] transition-all duration-500 ${gapClass}`}>
                    <a target='_blank' href='https://www.linkedin.com/in/kartikm4114/' ref={refs[3]} className={`${cardClass} bg-[#0077b5] w-16 grow`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <g clipPath="url(#clip0_17_68)">
                                <path d="M44.4469 0H3.54375C1.58437 0 0 1.54688 0 3.45938V44.5312C0 46.4437 1.58437 48 3.54375 48H44.4469C46.4062 48 48 46.4438 48 44.5406V3.45938C48 1.54688 46.4062 0 44.4469 0ZM14.2406 40.9031H7.11563V17.9906H14.2406V40.9031ZM10.6781 14.8688C8.39062 14.8688 6.54375 13.0219 6.54375 10.7437C6.54375 8.46562 8.39062 6.61875 10.6781 6.61875C12.9563 6.61875 14.8031 8.46562 14.8031 10.7437C14.8031 13.0125 12.9563 14.8688 10.6781 14.8688ZM40.9031 40.9031H33.7875V29.7656C33.7875 27.1125 33.7406 23.6906 30.0844 23.6906C26.3812 23.6906 25.8187 26.5875 25.8187 29.5781V40.9031H18.7125V17.9906H25.5375V21.1219H25.6312C26.5781 19.3219 28.9031 17.4188 32.3625 17.4188C39.5719 17.4188 40.9031 22.1625 40.9031 28.3313V40.9031Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_17_68">
                                <rect width="48" height="48" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                    {/* <a target='_blank' href='https://codeforces.com/profile/utkarsgupta17' ref={refs[2]} className={`${cardClass} bg-[#ffffff] w-16 grow-[4]`}>
                        <div>
                            <img src='/Codeforces_logo.png' height='100px' width='400px'></img>
                        </div>
                    </a> */}
                    <a target='_blank' href='https://github.com/Kartik4114' ref={refs[0]} className={`${cardClass} bg-[#222] w-16 grow`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <g clipPath="url(#clip0_910_44)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M24.0199 0C10.7375 0 0 10.8167 0 24.1983C0 34.895 6.87988 43.9495 16.4241 47.1542C17.6174 47.3951 18.0545 46.6335 18.0545 45.9929C18.0545 45.4319 18.0151 43.509 18.0151 41.5055C11.3334 42.948 9.94198 38.6209 9.94198 38.6209C8.86818 35.8164 7.27715 35.0956 7.27715 35.0956C5.09022 33.6132 7.43645 33.6132 7.43645 33.6132C9.86233 33.7735 11.1353 36.0971 11.1353 36.0971C13.2824 39.7827 16.7422 38.7413 18.1341 38.1002C18.3328 36.5377 18.9695 35.456 19.6455 34.8552C14.3163 34.2942 8.70937 32.211 8.70937 22.9161C8.70937 20.2719 9.66321 18.1086 11.1746 16.4261C10.9361 15.8253 10.1008 13.3409 11.4135 10.0157C11.4135 10.0157 13.4417 9.3746 18.0146 12.4996C19.9725 11.9699 21.9916 11.7005 24.0199 11.6982C26.048 11.6982 28.1154 11.979 30.0246 12.4996C34.5981 9.3746 36.6262 10.0157 36.6262 10.0157C37.9389 13.3409 37.1031 15.8253 36.8646 16.4261C38.4158 18.1086 39.3303 20.2719 39.3303 22.9161C39.3303 32.211 33.7234 34.2539 28.3544 34.8552C29.2296 35.6163 29.9848 37.0583 29.9848 39.3421C29.9848 42.5871 29.9454 45.1915 29.9454 45.9924C29.9454 46.6335 30.383 47.3951 31.5758 47.1547C41.12 43.9491 47.9999 34.895 47.9999 24.1983C48.0392 10.8167 37.2624 0 24.0199 0Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_910_44">
                                <rect width="48" height="48" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                </div>
                <div className={`grow-[2] flex flex-wrap-reverse items-stretch hover:grow-[2.5] transition-all duration-500 ${gapClass}`}>
                    <div className={`grow-[1] w-16 flex flex-col ${gapClass}`}>
                        {/* <a target='_blank' href='https://www.codechef.com/users/utkarsgupta17' ref={refs[4]} className={`${cardClass} bg-white grow`}>
                            <div>
                                <img src='/CodeChef.png' height='20px' width='200px'></img>
                            </div>
                        </a> */}
                        {/* <a target='_blank' href='https://auth.geeksforgeeks.org/user/utkarsgupta17' ref={refs[5]} className={`${cardClass} bg-white grow`}>
                        <div>
                                <img src='/gfg.png' height='20px' width='200px'></img>
                            </div>
                        </a> */}
                    </div>
                    <a target='_blank' href='https://leetcode.com/u/kartikm4114/' ref={refs[1]} className={`${cardClass} bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 w-128 grow-[2]`}>
                        <div>
                            <img src='/LeetCode.png' height='50px' width='400px'></img>
                        </div>
                    </a>
                </div>
                <div className={`grow-[1] flex flex-wrap items-stretch hover:grow-[1.5] transition-all duration-500 ${gapClass}`}>
                    <a target='_blank' href='https://www.instagram.com/kartikm.03' ref={refs[9]} className={`${cardClass} bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500  text-[#13AFF0] w-16 grow`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <g clipPath="url(#clip0_17_63)">
                                    <path d="M24 4.32187C30.4125 4.32187 31.1719 4.35 33.6938 4.4625C36.0375 4.56562 37.3031 4.95938 38.1469 5.2875C39.2625 5.71875 40.0688 6.24375 40.9031 7.07812C41.7469 7.92188 42.2625 8.71875 42.6938 9.83438C43.0219 10.6781 43.4156 11.9531 43.5188 14.2875C43.6313 16.8187 43.6594 17.5781 43.6594 23.9813C43.6594 30.3938 43.6313 31.1531 43.5188 33.675C43.4156 36.0188 43.0219 37.2844 42.6938 38.1281C42.2625 39.2438 41.7375 40.05 40.9031 40.8844C40.0594 41.7281 39.2625 42.2438 38.1469 42.675C37.3031 43.0031 36.0281 43.3969 33.6938 43.5C31.1625 43.6125 30.4031 43.6406 24 43.6406C17.5875 43.6406 16.8281 43.6125 14.3063 43.5C11.9625 43.3969 10.6969 43.0031 9.85313 42.675C8.7375 42.2438 7.93125 41.7188 7.09688 40.8844C6.25313 40.0406 5.7375 39.2438 5.30625 38.1281C4.97813 37.2844 4.58438 36.0094 4.48125 33.675C4.36875 31.1438 4.34063 30.3844 4.34063 23.9813C4.34063 17.5688 4.36875 16.8094 4.48125 14.2875C4.58438 11.9437 4.97813 10.6781 5.30625 9.83438C5.7375 8.71875 6.2625 7.9125 7.09688 7.07812C7.94063 6.23438 8.7375 5.71875 9.85313 5.2875C10.6969 4.95938 11.9719 4.56562 14.3063 4.4625C16.8281 4.35 17.5875 4.32187 24 4.32187ZM24 0C17.4844 0 16.6688 0.028125 14.1094 0.140625C11.5594 0.253125 9.80625 0.665625 8.2875 1.25625C6.70312 1.875 5.3625 2.69062 4.03125 4.03125C2.69063 5.3625 1.875 6.70313 1.25625 8.27813C0.665625 9.80625 0.253125 11.55 0.140625 14.1C0.028125 16.6687 0 17.4844 0 24C0 30.5156 0.028125 31.3312 0.140625 33.8906C0.253125 36.4406 0.665625 38.1938 1.25625 39.7125C1.875 41.2969 2.69063 42.6375 4.03125 43.9688C5.3625 45.3 6.70313 46.125 8.27813 46.7344C9.80625 47.325 11.55 47.7375 14.1 47.85C16.6594 47.9625 17.475 47.9906 23.9906 47.9906C30.5063 47.9906 31.3219 47.9625 33.8813 47.85C36.4313 47.7375 38.1844 47.325 39.7031 46.7344C41.2781 46.125 42.6188 45.3 43.95 43.9688C45.2812 42.6375 46.1063 41.2969 46.7156 39.7219C47.3063 38.1938 47.7188 36.45 47.8313 33.9C47.9438 31.3406 47.9719 30.525 47.9719 24.0094C47.9719 17.4938 47.9438 16.6781 47.8313 14.1188C47.7188 11.5688 47.3063 9.81563 46.7156 8.29688C46.125 6.70312 45.3094 5.3625 43.9688 4.03125C42.6375 2.7 41.2969 1.875 39.7219 1.26562C38.1938 0.675 36.45 0.2625 33.9 0.15C31.3313 0.028125 30.5156 0 24 0Z" fill="white"/>
                                    <path d="M24 11.6719C17.1938 11.6719 11.6719 17.1938 11.6719 24C11.6719 30.8062 17.1938 36.3281 24 36.3281C30.8062 36.3281 36.3281 30.8062 36.3281 24C36.3281 17.1938 30.8062 11.6719 24 11.6719ZM24 31.9969C19.5844 31.9969 16.0031 28.4156 16.0031 24C16.0031 19.5844 19.5844 16.0031 24 16.0031C28.4156 16.0031 31.9969 19.5844 31.9969 24C31.9969 28.4156 28.4156 31.9969 24 31.9969Z" fill="white"/>
                                    <path d="M39.6937 11.1843C39.6937 12.778 38.4 14.0624 36.8156 14.0624C35.2219 14.0624 33.9375 12.7687 33.9375 11.1843C33.9375 9.59053 35.2313 8.30615 36.8156 8.30615C38.4 8.30615 39.6937 9.5999 39.6937 11.1843Z" fill="white"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_17_63">
                                    <rect width="48" height="48" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                    </a>
                    <a target='_blank' href='mailto:221210056@nitdelhi.ac.in' ref={refs[8]} className={`${cardClass} bg-gradient-to-r from-sky-400 to-blue-500 w-16 grow`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                                <path d="M54.25 31C54.25 26.142 52.7284 21.4061 49.8986 17.4574C47.0691 13.5086 43.0735 10.5454 38.4736 8.98388C33.8734 7.42233 28.8998 7.34096 24.2509 8.75115C19.6021 10.1613 15.5119 12.9922 12.5545 16.8463C9.59721 20.7004 7.92141 25.3839 7.76245 30.2392C7.6035 35.0946 8.96941 39.8779 11.6683 43.9169C14.3673 47.9562 18.2636 51.0487 22.8102 52.7599C27.3567 54.4711 32.3253 54.715 37.0176 53.4577" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
                                <path d="M31 41.3333C36.7069 41.3333 41.3333 36.7069 41.3333 31C41.3333 25.293 36.7069 20.6666 31 20.6666C25.293 20.6666 20.6666 25.293 20.6666 31C20.6666 36.7069 25.293 41.3333 31 41.3333Z" stroke="currentColor" strokeWidth="6"/>
                                <path d="M41.3334 23.25V34.875C41.3334 38.4418 44.2249 41.3333 47.7917 41.3333C51.3585 41.3333 54.25 38.4418 54.25 34.875V31" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
                        </svg>
                    </a>
                    {/* <a target='_blank' href='https://twitter.com/alphacupcake10/' ref={refs[7]} className={`${cardClass} bg-[#14171A] w-16 grow`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <path d="M36.6526 3.8078H43.3995L28.6594 20.6548L46 43.5797H32.4225L21.7881 29.6759L9.61989 43.5797H2.86886L18.6349 25.56L2 3.8078H15.9222L25.5348 16.5165L36.6526 3.8078ZM34.2846 39.5414H38.0232L13.8908 7.63406H9.87892L34.2846 39.5414Z" fill="white"/>
                        </svg>
                    </a> */}
                    <a target='_blank' href='https://www.youtube.com/@kartikmittal-oz4bc' ref={refs[6]} className={`${cardClass} bg-[#FF0000] w-16 grow`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <path d="M47.5219 14.4001C47.5219 14.4001 47.0531 11.0907 45.6094 9.6376C43.7812 7.7251 41.7375 7.71572 40.8 7.60322C34.0875 7.11572 24.0094 7.11572 24.0094 7.11572H23.9906C23.9906 7.11572 13.9125 7.11572 7.2 7.60322C6.2625 7.71572 4.21875 7.7251 2.39062 9.6376C0.946875 11.0907 0.4875 14.4001 0.4875 14.4001C0.4875 14.4001 0 18.2907 0 22.172V25.8095C0 29.6907 0.478125 33.5813 0.478125 33.5813C0.478125 33.5813 0.946875 36.8907 2.38125 38.3438C4.20937 40.2563 6.60938 40.1907 7.67813 40.397C11.5219 40.7626 24 40.8751 24 40.8751C24 40.8751 34.0875 40.8563 40.8 40.3782C41.7375 40.2657 43.7812 40.2563 45.6094 38.3438C47.0531 36.8907 47.5219 33.5813 47.5219 33.5813C47.5219 33.5813 48 29.7001 48 25.8095V22.172C48 18.2907 47.5219 14.4001 47.5219 14.4001ZM19.0406 30.2251V16.7345L32.0062 23.5032L19.0406 30.2251Z" fill="white"/>
                        </svg>
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    </>
  )
}

export default ContactPage;