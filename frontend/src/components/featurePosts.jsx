import React from 'react';
import { Link } from 'react-router';
import OptimizedImage from './OptimizedImage';

// Import the image directly to ensure proper bundling
import featuredImg from '../assets/featured1.jpg';

const FeaturePosts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Main Feature */}
      <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
        <div className="relative">
          {/* Image wrapper with overlay */}
          <div className="relative h-80 overflow-hidden">
            <OptimizedImage
              src={featuredImg}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              alt="Feature 1"
              priority={true}
              placeholder="empty"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
          </div>
          
          {/* Content positioned over image */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="flex items-center gap-4 mb-3">
              <span className="font-semibold text-blue-300">01</span>
              <Link className="bg-blue-800/80 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full hover:bg-blue-900 transition-colors">
                Web Design
              </Link>
              <span className="text-gray-300 text-sm">2 days ago</span>
            </div>
            
            <Link to="/test" className="text-xl md:text-2xl lg:text-3xl font-semibold group-hover:text-blue-200 transition-colors line-clamp-2">
              A Beginner's Guide to Learning JavaScript: Unveiling the Secrets of the Web
            </Link>
          </div>
        </div>
      </div>
      
      {/* Secondary Features */}
      <div className="flex flex-col gap-6">
        {/* Feature 2 */}
        <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
          <div className="flex items-center">
            <div className="w-1/3 h-32 relative overflow-hidden">
              <OptimizedImage
                src={featuredImg}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Feature 2"
                placeholder="empty"
              />
            </div>
            
            <div className="w-2/3 p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-semibold text-blue-800">02</span>
                <Link className="text-blue-800 text-xs">Web Design</Link>
                <span className="text-gray-500 text-xs">2 days ago</span>
              </div>
              
              <Link to="/test" className="text-lg font-medium group-hover:text-blue-800 transition-colors line-clamp-2">
                A Beginner's Guide to Learning JavaScript: Unveiling the Secrets of the Web
              </Link>
            </div>
          </div>
        </div>
        
        {/* Feature 3 */}
        <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
          <div className="flex items-center">
            <div className="w-1/3 h-32 relative overflow-hidden">
              <OptimizedImage
                src={featuredImg}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Feature 3"
                placeholder="empty"
              />
            </div>
            
            <div className="w-2/3 p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-semibold text-blue-800">03</span>
                <Link className="text-blue-800 text-xs">Web Design</Link>
                <span className="text-gray-500 text-xs">2 days ago</span>
              </div>
              
              <Link to="/test" className="text-lg font-medium group-hover:text-blue-800 transition-colors line-clamp-2">
                A Beginner's Guide to Learning JavaScript: Unveiling the Secrets of the Web
              </Link>
            </div>
          </div>
        </div>
        
        {/* Feature 4 */}
        <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
          <div className="flex items-center">
            <div className="w-1/3 h-32 relative overflow-hidden">
              <OptimizedImage
                src={featuredImg}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Feature 4"
                placeholder="empty"
              />
            </div>
            
            <div className="w-2/3 p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-semibold text-blue-800">04</span>
                <Link className="text-blue-800 text-xs">Web Design</Link>
                <span className="text-gray-500 text-xs">2 days ago</span>
              </div>
              
              <Link to="/test" className="text-lg font-medium group-hover:text-blue-800 transition-colors line-clamp-2">
                A Beginner's Guide to Learning JavaScript: Unveiling the Secrets of the Web
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturePosts;
