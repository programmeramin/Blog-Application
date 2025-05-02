import Container from '@/components/Container';
import { Link } from 'react-router';
import SocialIcons from './ui/socialIcons';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {['Home', 'Blogs', 'Contact', 'About', 'Help'].map(item => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>
          {/* Social Icons */}
          <div className="flex justify-center gap-3">
          <SocialIcons />
          </div>
        </div>

        {/* Copyright and Tagline */}
        <div className="mt-8 text-center">
          <p className="text-lg font-medium text-gray-900 mb-2">
            Indulge in Every Word, Crafted with Joy
          </p>
          <p className="text-sm text-gray-500">
            Blog App © {new Date().getFullYear()}. Nourishing Minds, Safeguarded
            by Design
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
