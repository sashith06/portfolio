import mypohoto from '../assets/pictures/myphoto.jpeg';
import myphoto3 from '../assets/pictures/myphoto3.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-600 to-blue-800 text-white">
      <div className="container-custom text-center">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8">
            <img
              src={myphoto3}
              alt="K.Sashith Thushan"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto border-4 border-white shadow-xl object-cover"
            />
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-slide-up">
            K.Sashith Thushan
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-light mb-8 text-blue-100 animate-slide-up">
            Full stack developer
          </h2>

          {/* Tagline */}
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 text-blue-100 leading-relaxed animate-slide-up">
            Passionate Full Stack Developer dedicated to building end-to-end web solutions. 
            I turn complex problems into seamless, user-centered applications—from intuitive frontends to robust backends.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <button 
              onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary bg-white text-primary-600 hover:bg-gray-100"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-6 rounded-lg transition-all duration-200"
            >
              Get In Touch
            </button>
          <a 
              href= "/my_cv.pdf"
              download 
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-6 rounded-lg transition-all duration-200"
            >
              Download CV
            </a>  
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;