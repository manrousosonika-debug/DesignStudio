
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-black italic">D</span>
              </div>
              <span className="text-white text-xl font-bold">DesignStudio</span>
            </div>
            <p className="max-w-sm">
              Premium web design and CRO strategies for forward-thinking companies. We turn browsers into buyers.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'LinkedIn', 'Instagram', 'Dribbble'].map(social => (
                <a key={social} href="#" className="hover:text-white transition-colors text-sm font-medium">{social}</a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white">Web Design</a></li>
              <li><a href="#" className="hover:text-white">Landing Pages</a></li>
              <li><a href="#" className="hover:text-white">CRO Audits</a></li>
              <li><a href="#" className="hover:text-white">E-commerce</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Success Stories</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs">
          <p>© 2024 DesignStudio Agency. All rights reserved.</p>
          <div className="flex space-x-6">
            <span>Made with ❤️ for high conversions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
