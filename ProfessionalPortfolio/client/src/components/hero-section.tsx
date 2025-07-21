import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-bg">
      <div className="text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">BHAVISH PK </h1>
        <p className="text-xl md:text-2xl mb-8 font-light">JAVA DEVELOPER </p>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-90">
          Passionate about creating innovative web solutions that deliver exceptional user experiences
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => scrollToSection("projects")}
            className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition-all duration-300 bg-transparent"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
