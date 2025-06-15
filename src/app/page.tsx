import HeadingButton from "../components/Buttons/HeadingButton";
import MainButton from "../components/Buttons/MainButton";
import Heading from "../components/Elements/Heading";
import { IconArrow } from "../components/Elements/IconArrow";
import Paragraph from "../components/Elements/Paragraph";
import AboutMe from "../components/Sections/AboutMe";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[#050505] relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-[100%] min-h-[100%] w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 opacity-[0.08] object-cover"
        >
          <source src="/HeroBackground.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center flex-nowrap gap-[70px] pt-[120px] px-[18px] pb-[80px] sm:pt-[160px] sm:pr-[40px] sm:pb-[100px] sm:pl-[40px] w-full min-h-screen">
        {/* Header Info */}
        <div className="max-w-[1200px] w-full flex flex-col items-start gap-8">
          <HeadingButton heading={"Scrolling Starts the Story."} />
          <div className="flex flex-col gap-4 max-w-[600px] select-none">
            <div className="flex items-center justify-start gap-4 overflow-hidden">
              <Heading first="Mahesh" second="Pokale" className="text-[44px] md:text-6xl lg:text-7xl max-w-screen-xl" />
              <IconArrow />
            </div>
            <Paragraph para="I'm a full-stack developer with a strong DSA foundation, building real-time, scalable, and performance-driven web apps. Let's build something impactful." />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
            <MainButton name="See All Projects" />
            <MainButton name="Contact Now" variant="light" />
          </div>
        </div>

        {/* Project Preview */}
        <div id="projects" className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {/* Project cards will be added here */}
        </div>
      </section>

      {/* About Section */}
      <AboutMe></AboutMe>
    </main>
  );
}