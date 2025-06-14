import mypohoto2 from '../assets/pictures/myphoto2.jpg';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                 Hello! I'm K.Sashith Thushan, an enthusiastic IT undergraduate at the Institute of Technology, University of Moratuwa. 
                 I'm passionate about full stack development and enjoy building functional, user-focused web applications.
              </p>
              <p>
                 My journey in tech began with a curiosity about how systems work—from the UI down to the database—and has grown into a strong interest 
                in creating complete software solutions. I take pride in turning ideas into real, impactful digital products.
              </p>
              <p>
                Outside of development, I love exploring new technologies, collaborating on group projects, and sharpening my skills 
                through continuous learning. I’m always excited to take on new challenges and grow as a developer.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
            </div>
          </div>

          {/* Image */}
          <div className="animate-slide-up lg:order-first">
            <div className="relative">
              <img
                src={mypohoto2}
                alt="K.Sashith Thushan"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-600 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-600 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;