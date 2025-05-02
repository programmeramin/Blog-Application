import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const SocialIcons = () => {
  return (
    <div className="flex gap-3">
      {[
        { icon: Facebook, url: '#' },
        { icon: Twitter, url: '#' },
        { icon: Instagram, url: '#' },
        { icon: Linkedin, url: '#' },
        { icon: Mail, url: '#' },
      ].map((social, index) => (
        <a
          key={index}
          href={social.url}
          className="group relative inline-flex items-center justify-center rounded-full p-2 transition-all hover:scale-105"
          aria-label={`${social.icon.displayName} link`}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <social.icon className="h-5 w-5 relative z-10 text-gray-500 group-hover:text-white transition-colors duration-300" />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
