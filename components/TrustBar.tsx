
import React from 'react';

const TrustBar: React.FC = () => {
  const logos = ['Stripe', 'Airbnb', 'HubSpot', 'Shopify', 'Loom'];
  
  return (
    <div className="py-12 border-y border-slate-100 bg-white">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">
          Trusted by Industry Leaders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
          {logos.map((logo) => (
            <span key={logo} className="text-2xl font-black text-slate-800 tracking-tighter cursor-default">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
