"use client";

import { useState } from "react";
import {
  CircleCheck,
  Clock,
  Mail,
  MapPin,
  Phone,
  Scissors,
  Send,
} from "lucide-react";
import CountUp from "./components/CountUp";
import FadeIn from "./components/FadeIn";
import SelectInput from "./components/SelectInput";
import { useScrollTO } from "./context/ScrollTO";
import CleanYouTubePlayer from "./components/CleanYoutubePlayer";

const stats = [
  { value: 1.5, label: ["Years", "Experience"] },
  { value: 180, label: ["Videos", "Edited"] },
  { value: 4, label: ["Niches", "Mastered"] },
  { value: 2, label: ["Pro", "Softwares"] },
];

const projects = [
  "z5WgjbU6PYU?si=zVk_MJAFfHoJNAkw",
  "OmRg8kqcgDE?si=BKImHKGBXGBFTMZH",
  "eGMfDUozwE8?si=KwB2fEGAiDanBLlL",
  "OmRg8kqcgDE?si=uS-rSvElwiowziGP",
];

const process = [
  {
    step: "01",
    icon: "💬",
    title: "Consultation",
    description: "Discuss your video requirements and goals.",
  },
  {
    step: "02",
    icon: "🎬",
    title: "Share Raw Content",
    description:
      "Send your raw clips, music preference, and any reference videos.",
  },
  {
    step: "03",
    icon: "✂️",
    title: "Editing",
    description:
      "I cut, color grade, and polish your video using Premiere Pro or After Effects.",
  },
  {
    step: "04",
    icon: "📦",
    title: "Delivery",
    description: "Receive your final edited video.",
  },
];

const pricingCards = [
  {
    icon: "⚡",
    title: "Basic Edit",
    description: "For Quick Edits",
    line: "Clean, engaging edits for reels and short-form content",
    servies: [
      "Up to 30 sec Reel / Short",
      "Basic cuts & transitions",
      "Background music sync",
      "1 revision included",
      "Text & captions included",
      "Delivery in 12 hours",
    ],
    buttonText: "Get Started",
  },
  {
    icon: "🎬",
    title: "AESTHETIC EDIT",
    description: "Best for creators",
    line: "Premium editing with dynamic, polished color grading sound design and visual storytelling.",
    servies: [
      "Up to 30 sec Reel / Short",
      "Pro color grading (DaVinci)",
      "Dynamic cuts & transitions",
      "Captions / text overlays",
      "Audio mix & music sync",
      "3 revisions included",
      "Delivery in 1–2 days",
    ],
    buttonText: "Book Now",
  },
  {
    icon: "🚀",
    title: "MONTHLY",
    description: "For consistent creators",
    line: "From filming to final cut, get complete video content made for your brand.",
    servies: [
      "5 short-form videos/month",
      "Full color grading",
      "Captions & graphics",
      "Priority delivery",
      "Unlimited revisions",
      "Direct WhatsApp support",
    ],
    buttonText: "Let's Talk",
  },
  {
    icon: <Scissors size={35} className="text-gray-300" />,
    title: "Customize",
    description: "For customize edits",
    line: "From filming to final cut, get complete video content made for your brand.",
    servies: [
      "Custom editing style",
      "advanced VFX & Motion graphics",
      "premium color grading",
      "Tailored to your needs",
      "Flexible revisions",
      "Pricing based on project",
    ],
    buttonText: "Customize Edits",
  },
];

const contactDetails = [
  {
    icon: <Phone size={25} className="text-red-500" />,
    title: "PHONE / WHATSAPP",
    number: "+91 626322207",
  },
  {
    icon: <Mail size={25} className="text-zinc-500" />,
    title: "Email",
    number: "harshkoshta91@gmail.com",
  },
  {
    icon: <MapPin size={25} className="text-zinc-500" />,
    title: "LOCATION",
    number: "Jabalpur, Madhya Pradesh, India",
  },
  {
    icon: <Clock size={25} className="text-zinc-500" />,
    title: "RESPONSE TIME",
    number: "Within 24 Hours",
  },
];

export default function Home() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [niche, setNiche] = useState("");
  const [message, setMessage] = useState("");
  const [service, setService] = useState("⚡ Basic Edit — ₹400/video");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { scrollTo } = useScrollTO();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!username || !email || !service || !niche || !message) {
      alert("Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    const text = `Hey here is my detailsName: ${username}\nEmail: ${email}\nService: ${service}\nNiche: ${niche}\nMessage: ${message}`;

    const encodedText = encodeURIComponent(text);
    const phone = "+91626322207";

    try {
      window.open(
        `https://api.whatsapp.com/send?phone=${phone}&text=${encodedText}`,
        "_blank",
      );
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const landInWhatsApp = (planName) => {
    const myPhoneNumber = "91626322207";

    // Custom message telling you exactly what they are looking at
    const message = `Hi! I'm interested in the ${planName} from your website. Can I get more details?`;

    const whatsappUrl = `https://wa.me/${myPhoneNumber}?text=${encodeURIComponent(message)}`;

    // Directs the user smoothly to your chat
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="no-scrollbar bg-slate-950 text-white min-h-screen overflow-x-hidden selection:bg-[#c8f400] selection:text-black py-16">
      <main>
        {/* Main Wrapper: Manages the fade-in and slide-up transition */}
        <FadeIn>
          <div className="py-10 mx-6 sm:mx-12 lg:mx-20 transform transition-all duration-1000 ease-out">
            {/* Availability Badge */}
            <button className="flex items-center gap-2 border border-[#c8f400]/30 rounded-full px-4 py-1.5 text-xs lg:text-sm text-[#c8f400] font-bold bg-[#c8f400]/5 hover:bg-[#c8f400]/10 transition-colors duration-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c8f400] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c8f400]"></span>
              </span>
              Available for Projects
            </button>

            {/* Large Typography Headers */}
            <div className="my-6 space-y-0 tracking-tighter">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black block leading-none">
                VIDEO
              </h1>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black block text-[#c8f400] leading-none">
                EDITOR
              </h1>
            </div>

            {/* Subheading intro */}
            <h2 className="text-gray-300 text-lg lg:text-2xl font-normal my-6">
              Hi, I'm{" "}
              <span className="text-[#c8f400] font-semibold">Harsh</span> —
              Freelance Short-Form Content Creator
            </h2>

            {/* Bio Paragraph (Responsive width constraints updated) */}
            <p className="text-gray-400 text-base lg:text-lg max-w-full md:max-w-[60%] lg:max-w-[45%] my-6 leading-relaxed">
              Based in Jabalpur, Madhya Pradesh, India. I’m a Video Editor
              crafting high-retention, engaging short-form videos for Education,
              Talking-Head UGC & Real Estate brands. Using -{" "}
              <span className="font-bold">Adobe Premiere Pro </span>&{" "}
              <span className="font-bold">After Effects</span>.
            </p>

            {/* Call to Actions Buttons */}
            <div className="flex items-center gap-4 mt-8">
              <button
                className="flex items-center justify-center border border-[#c8f400] rounded-xl px-6 lg:px-8 py-3 text-sm lg:text-base text-black bg-[#c8f400] font-bold hover:bg-transparent hover:text-[#c8f400] transition-all duration-300 shadow-lg shadow-[#c8f400]/10 cursor-pointer"
                onClick={() =>
                  document
                    .getElementById("pricing")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                View Pricing
              </button>
              <button
                className="flex items-center justify-center border border-white/10 rounded-xl px-6 lg:px-8 py-3 text-sm lg:text-base font-bold bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Let's Work
              </button>
            </div>
          </div>
        </FadeIn>

        <div className="bg-[#c8f400] text-black py-6 lg:py-4 px-6 md:px-12 flex flex-wrap lg:flex-nowrap justify-between items-center gap-y-6 lg:gap-y-0 divide-y divide-black/20 lg:divide-y-0 lg:divide-x lg:divide-black/20">
          {stats.map((stat, i) => (
            <div
              key={stat.label.join(" ")}
              className={`w-[50%] lg:w-full flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 px-4 lg:px-8 py-2 first:pt-0 lg:first:pt-2 ${
                i >= 2 ? "pt-6 lg:pt-2" : ""
              }`}
            >
              <CountUp
                endValue={stat.value}
                className="text-4xl lg:text-5xl font-extrabold tracking-tight"
              />
              <span className="text-xs sm:text-sm font-medium text-black/80 uppercase tracking-wider leading-tight">
                {stat.label[0]}
                <br className="hidden sm:inline" /> {stat.label[1]}
              </span>
            </div>
          ))}
        </div>

        {/* PROJECTS */}
        <div className="my-16 mx-10 lg:mx-16" id="projects">
          <div>
            <h3 className="text-[#c8f400] font-semibold">
              <span className="pr-4 ">//</span>MY WORK
            </h3>
            <h2 className="text-5xl font-bold my-4">PROJECTS</h2>
          </div>
          <FadeIn>
            <div className="sm:grid gap-8 sm:grid-cols-2 md:grid-cols-4 my-12">
              {projects.map((project, index) => (
                <div key={index} className="w-full max-w-62 mx-auto">
                  <CleanYouTubePlayer videoId={project.slice(0, 11)} />
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* PROCESS */}
        <div className="my-16 mx-10 lg:mx-16">
          <div>
            <h3 className="text-[#c8f400] font-semibold">
              <span className="pr-4 ">//</span>HOW I WORK
            </h3>
            <h2 className="text-5xl font-bold my-4">MY PROCESS</h2>
          </div>

          <FadeIn>
            <div className="sm:grid sm:grid-cols-2 md:grid-cols-4 gap-2 mt-12">
              {process.map((step, index) => (
                <div key={index} className="bg-gray-900 space-y-4 py-8 p-8">
                  <div className="flex justify-between">
                    <span className="block mb-4 text-3xl w-fit">
                      {step.icon}
                    </span>
                    <h2 className="bg-linear-to-r from-lime-800 to-lime-400 bg-clip-text text-transparent text-5xl font-bold inline-block">
                      <i>{step.step}</i>
                    </h2>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 mt-2 text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* ABOUT */}
        <div className="my-16 mx-10 lg:mx-16" id="about">
          <div>
            <h3 className="text-[#c8f400] font-semibold">
              <span className="pr-4 ">//</span>WHO I AM
            </h3>
            <h2 className="text-5xl font-bold my-4">ABOUT ME</h2>
          </div>

          <FadeIn>
            <div className="lg:grid grid-cols-2 gap-10">
              <div className="space-y-10 my-12 text-gray-400">
                <p>
                  I'm <span className="text-white font-bold">Harsh</span>, a
                  freelance video editor from Madhya Pradesh, India with{" "}
                  <span className="text-white font-bold">1.5 years</span> of
                  hands-on experience turning raw footage into scroll-stopping
                  short-form content.
                </p>

                <p>
                  I specialize in{" "}
                  <span className="text-white font-bold">
                    Education, Talking-Head UGC & Real Estate brands.
                    Specialized in storytelling, engaging hooks, smooth
                    transitions, motion graphics, and scroll-stopping visuals.
                  </span>{" "}
                  transformation videos,{" "}
                  <span className="text-white font-bold">travel</span> reels
                  with cinematic color grades, and{" "}
                  <span className="text-white font-bold">lifestyle</span>{" "}
                  content with fast-paced cuts built for social media
                  engagement.
                </p>

                <p>
                  My workflow is powered by{" "}
                  <span className="text-white font-bold">
                    Adobe Premiere Pro
                  </span>{" "}
                  for professional video editing and{" "}
                  <span className="text-white font-bold">After Effects</span>{" "}
                  for motion graphics, animations, and advanced visual effects.
                </p>

                <div className="grid grid-cols-2 gap-5">
                  <button className="border border-[#c8f400]/30 rounded-full px-4 py-1.5 text-xs lg:text-lg text-[#c8f400] font-bold bg-[#c8f400]/5 hover:bg-[#c8f400]/10 transition-colors duration-200">
                    Education
                  </button>
                  <button className="flex items-center justify-center gap-2 border border-[#c8f400]/30 rounded-full px-4 py-1.5 text-xs lg:text-lg text-red-400 font-bold bg-[#c8f400]/5 hover:bg-[#c8f400]/10 transition-colors duration-200">
                    Talking Head UGC
                  </button>
                  <button className="flex items-center justify-center gap-2 border border-[#c8f400]/30 rounded-full px-4 py-1.5 text-xs lg:text-lg text-cyan-400 font-bold bg-[#c8f400]/5 hover:bg-[#c8f400]/10 transition-colors duration-200">
                    Real Estate Brands
                  </button>
                  <button className="flex items-center justify-center gap-2 border border-[#c8f400]/30 rounded-full px-4 py-1.5 text-xs lg:text-lg text-purple-400 font-bold bg-[#c8f400]/5 hover:bg-[#c8f400]/10 transition-colors duration-200">
                    Short-Form Content
                  </button>
                </div>
              </div>

              <div className="space-y-8 bg-gray-900 py-10 px-8 rounded-xl h-fit">
                <div className="flex items-center justify-between my-2">
                  <h2 className="font-bold">Video Editing</h2>
                  <span className="text-[#c8f400] font-bold">95%</span>
                </div>
                <div className="relative flex items-center w-[96%] h-4">
                  {/* Base Track Layer (Background Line) */}
                  <div className="w-full h-1 bg-slate-800 rounded-full" />

                  {/* Active Progress Layer (Dynamic Fill Accent) */}
                  <div
                    className="absolute left-0 h-1 bg-[#c8f400] rounded-full shadow-[0_0_8px_#c8f400]/30 transition-all duration-500"
                    style={{ width: "95%" }}
                  />

                  {/* Keyframe Playhead Handle */}
                </div>

                <div>
                  <div className="flex items-center justify-between my-2">
                    <h2 className="font-bold">Color Grading</h2>
                    <span className="text-[#c8f400] font-bold">88%</span>
                  </div>
                  <div className="relative flex items-center w-[96%] h-4">
                    {/* Base Track Layer (Background Line) */}
                    <div className="w-full h-1 bg-slate-800 rounded-full" />

                    {/* Active Progress Layer (Dynamic Fill Accent) */}
                    <div
                      className="absolute left-0 h-1 bg-red-400 rounded-full shadow-[0_0_8px_#c8f400]/30 transition-all duration-500"
                      style={{ width: "88%" }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between my-2">
                    <h2 className="font-bold">Adobe Premiere Pro</h2>
                    <span className="text-[#c8f400] font-bold">90%</span>
                  </div>
                  <div className="relative flex items-center w-[96%] h-4">
                    {/* Base Track Layer (Background Line) */}
                    <div className="w-full h-1 bg-slate-800 rounded-full" />

                    {/* Active Progress Layer (Dynamic Fill Accent) */}
                    <div
                      className="absolute left-0 h-1 bg-cyan-400 rounded-full shadow-[0_0_8px_#c8f400]/30 transition-all duration-500"
                      style={{ width: "90%" }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between my-2">
                    <h2 className="font-bold">After Effects</h2>
                    <span className="text-[#c8f400] font-bold">92%</span>
                  </div>
                  <div className="relative flex items-center w-[96%] h-4">
                    {/* Base Track Layer (Background Line) */}
                    <div className="w-full h-1 bg-slate-800 rounded-full" />

                    {/* Active Progress Layer (Dynamic Fill Accent) */}
                    <div
                      className="absolute left-0 h-1 bg-purple-400 rounded-full shadow-[0_0_8px_#c8f400]/30 transition-all duration-500"
                      style={{ width: "92%" }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between my-2">
                    <h2 className="font-bold">Reels / Shorts Editing</h2>
                    <span className="text-[#c8f400] font-bold">96%</span>
                  </div>
                  <div className="relative flex items-center w-[96%] h-4">
                    {/* Base Track Layer (Background Line) */}
                    <div className="w-full h-1 bg-slate-800 rounded-full" />

                    {/* Active Progress Layer (Dynamic Fill Accent) */}
                    <div
                      className="absolute left-0 h-1 bg-[#c8f400] rounded-full shadow-[0_0_8px_#c8f400]/30 transition-all duration-500"
                      style={{ width: "96%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* PRICING */}

        <div className="px-14" id="pricing">
          <div className="space-y-2 my-16">
            <h3 className="text-[#c8f400] font-semibold text-sm">
              // WHAT I OFFER
            </h3>
            <h2 className="text-5xl font-bold">PRICING</h2>
          </div>

          <FadeIn>
            <div className="lg:grid lg:grid-cols-2 gap-8 space-y-8 lg:space-y-0">
              {pricingCards.map((c, i) => (
                <div
                  key={i}
                  className="bg-gray-900 space-y-4 py-10 p-8 rounded-xl"
                >
                  <div>
                    <span className="block mb-4 text-4xl bg-blue-800/40 p-2 rounded-xl w-fit">
                      {c.icon}
                    </span>
                    <h2 className="text-3xl font-bold">{c.title}</h2>
                    <i className="text-zinc-500 text-sm">{c.description}</i>
                  </div>
                  <div className="space-y-2 my-6">
                    {c.servies.map((s, i) => (
                      <button
                        key={i}
                        className="flex items-center text-zinc-400"
                      >
                        <CircleCheck
                          size={20}
                          className="text-[#c8f400] mr-2"
                        />
                        {s}
                      </button>
                    ))}
                  </div>
                  <button
                    className="w-full bg-linear-to-r from-lime-500 to-lime-300 text-black rounded-xl px-6 lg:px-8 py-2 text-sm lg:text-base font-bold hover:border-red-500 transition-all duration-300 cursor-pointer"
                    onClick={() => landInWhatsApp(c.title)}
                  >
                    {c.buttonText}
                  </button>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Contact */}
        <div className="px-14" id="contact">
          <div className="space-y-2 my-16">
            <h3 className="text-[#c8f400] font-semibold text-sm">
              // WHAT I OFFER
            </h3>
            <h2 className="text-5xl font-bold">LET'S WORK</h2>
          </div>

          <div className="lg:grid grid-cols-2 gap-10">
            <div className="space-y-5">
              {contactDetails.map((c, i) => (
                <div
                  key={i}
                  className="w-full border border-white/10 rounded-xl px-6 lg:px-8 py-3 text-sm lg:text-base bg-white/5 hover:bg-white/10 hover:border-[#c8f400] transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    {c.icon}
                    <div className="m-0 p-0 leading-5">
                      <span className="text-zinc-500">
                        <i>{c.title}</i>
                      </span>
                      <h2>{c.number}</h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="text-zinc-400 leading-5">YOUR NAME</label>
                  <div className="w-full border border-white/10 rounded-xl mt-1 px-6 lg:px-8 py-3 text-sm lg:text-base bg-white/5 hover:bg-white/10 hover:border-[#c8f400] transition-all duration-300">
                    <input
                      type="text"
                      placeholder="e.g Jane Doe"
                      className="w-full border-none outline-none focus:outline-none focus:ring-0"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-zinc-400">EMAIL</label>
                  <div className="w-full border border-white/10 rounded-xl mt-1 px-6 lg:px-8 py-3 text-sm lg:text-base bg-white/5 hover:bg-white/10 hover:border-[#c8f400] transition-all duration-300">
                    <input
                      type="text"
                      placeholder="e.g JaneDoe@example.com"
                      className="w-full border-none outline-none focus:outline-none focus:ring-0"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <SelectInput
                label="SERVICE"
                options={[
                  {
                    value: "⚡ Basic Edit — ₹400/video",
                    label: "⚡ Basic Edit — ₹400/video",
                  },
                  {
                    value: "🎬 Aesthetic Edit — ₹1000/video",
                    label: "🎬 Aesthetic Edit — ₹1000/video",
                  },
                  {
                    value: "🚀 Monthly Package — ₹4000/mo",
                    label: "🚀 Monthly Package — ₹4000/mo",
                  },
                  { value: "Something Custom", label: "Something Custom" },
                ]}
                className="border border-white/10 focus:bg-white/5 bg-white/5 text-white text-sm lg:text-base hover:bg-white/10 hover:border-[#c8f400] transition-all duration-300"
                value={service}
                onChange={(val) => setService(val)}
              />
              <div className="space-y-2">
                <label className="text-zinc-400">Niche / Content Type</label>
                <div className="w-full border border-white/10 rounded-xl mt-1 px-6 lg:px-8 py-3 text-sm lg:text-base bg-white/5 hover:bg-white/10 hover:border-[#c8f400] transition-all duration-300">
                  <input
                    type="text"
                    placeholder="e.g Gym, Transformation, Reels"
                    className="w-full border-none outline-none focus:outline-none focus:ring-0"
                    value={niche}
                    onChange={(e) => setNiche(e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-zinc-400">Message</label>
                <div className="w-full border border-white/10 rounded-xl mt-1 px-6 lg:px-8 py-3 text-sm lg:text-base bg-white/5 hover:bg-white/10 hover:border-[#c8f400] transition-all duration-300">
                  <textarea
                    rows={3}
                    type="text"
                    placeholder="Tell me about your project, reference videos, and any specific requirements you have."
                    className="w-full border-none outline-none focus:outline-none focus:ring-0 text-sm"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={handleSubmit}
                  className="flex items-center justify-center w-full border border-[#c8f400] rounded-xl px-6 lg:px-8 py-3 text-sm lg:text-base text-black bg-[#c8f400] font-bold hover:bg-transparent hover:text-[#c8f400] transition-all duration-300 shadow-lg shadow-[#c8f400]/10 cursor-pointer "
                >
                  Send Message <Send size={20} className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
