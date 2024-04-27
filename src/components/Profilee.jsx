import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const ProfileCard = ({ name, position, imageUrl, linkedin, github, instagram }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 font-['Neue Montreal'] overflow-hidden shadow-lg m-5 border border-white rounded-xl" >
      <img className="w-full h-48 sm:h-64 object-cover" src={imageUrl} alt={name} />
      <div className="px-6 py-4">
        <div className="font-['Neue Montreal'] text-xl sm:text-2xl mb-2">{name}</div>
        <p className="text-white font-['Neue Montreal'] text-sm sm:text-lg">{position}</p>
      </div>
      <div className="px-6 py-4 flex justify-center">
        <a href={linkedin} className="w-6 sm:w-7 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 sm:px-4 rounded mx-1 flex items-center justify-center">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href={github} className="w-6 sm:w-7 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-3 sm:px-4 rounded mx-1 flex items-center justify-center">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href={instagram} className="w-6 sm:w-7 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-3 sm:px-4 rounded mx-1 flex items-center justify-center">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  instagram: PropTypes.string.isRequired,
};

const Profilee = () => {
  const teamMembers = [
    {
      name: 'Nityom Tikhe',
      position: 'Developer',
      imageUrl: 'https://i.postimg.cc/Cxz5nJ0t/IMG-20240226-160318-862.webp',
      linkedin: 'https://www.linkedin.com/in/nityom-tikhe-bb53b3249/',
      github: 'https://github.com/Nityom',
      instagram: 'https://www.instagram.com/nityomrr/',
    },
    {
      name: 'Atharva Joshi',
      position: 'Developer',
      imageUrl: 'https://i.postimg.cc/3wVkZMyc/Whats-App-Image-2024-04-26-at-10-10-30-b10f9cf2.jpg',
      linkedin: 'https://www.linkedin.com/in/atharva-joshi-50305323b/',
      github: 'https://github.com/Atharvajoshiii',
      instagram: 'https://www.instagram.com/atharvaajayjoshi/',
    },
    {
      name: 'Nimish Mittal',
      position: 'Developer',
      imageUrl: 'https://i.postimg.cc/8Pmrgn37/Whats-App-Image-2024-04-22-at-23-02-35-506016bb.jpg',
      linkedin: 'https://www.linkedin.com/in/nimish-mittal-1a957a24b/',
      github: 'https://github.com/nimish-nimishmittal',
      instagram: 'https://www.instagram.com/dev.nimishmittal/',
    },
    // Add other team members here
  ];

  return (
    <div className="w-full px-5 md:px-20 border-b-[1px] border-zinc-700 pb-10 md:pb-20">
    <div className="flex flex-wrap justify-center gap-5 min-h-screen bg-zinc-900 p-5 sm:p-10 md:p-20">
      <h2 className="text-[6vw] mb-10  font-semibold uppercase leading-none  text-4xl md:text-8xl font-['Neue_Montreal'] tracking-tight sm:text-5xl  mt-10 w-full" id='team'>Team:</h2>
      {teamMembers.map((member, index) => (
        <ProfileCard key={index} {...member} />
      ))}
    </div>
    </div>
  );
};

export default Profilee;