import { MapPin, Mail } from "lucide-react";
import profileImage from "@assets/1738823955415_1753110150353.jpg";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-semibold mb-6">Hello, I'm Bhavish PK</h3>
            <p className="text-lg leading-relaxed mb-6 text-gray-600">
              I'm a passionate Full Stack Web Developer with over 3 years of experience creating
              dynamic and responsive web applications. I specialize in modern JavaScript frameworks
              and have a strong foundation in both frontend and backend technologies.
            </p>
            <p className="text-lg leading-relaxed mb-6 text-gray-600">
              My journey in web development started with a curiosity about how websites work,
              and it has evolved into a career where I get to solve complex problems and bring
              creative ideas to life through code.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-gray-600">
                <MapPin className="mr-2" size={20} />
                <span>Mangaluru, Karnataka</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Mail className="mr-2" size={20} />
                <span>bhavishpk1805@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img
              src={profileImage}
              alt="Bhavish PK - Professional Headshot"
              className="rounded-full w-80 h-80 object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
