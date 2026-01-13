
import React from 'react';

const testimonials = [
  {
    quote: "DesignStudio didn't just rebuild our site; they redesigned our entire business funnel. Our leads tripled in 30 days.",
    author: "Sarah Jenkins",
    role: "CEO at TechFlow",
    img: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    quote: "The free assessment was eye-opening. They pointed out flaws I didn't even know we had. The ROI was immediate.",
    author: "Mark Thompson",
    role: "Marketing Director",
    img: "https://picsum.photos/seed/mark/100/100"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Results That Speak For Themselves</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-slate-50 p-10 rounded-3xl relative">
              <div className="text-blue-600 mb-6">
                <svg className="w-10 h-10 opacity-20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H11.017V21H14.017ZM5.01698 21L5.01698 18C5.01698 16.8954 5.91238 16 7.01698 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H7.01698C6.4647 8 6.01698 8.44772 6.01698 9V12C6.01698 12.5523 5.56926 13 5.01698 13H2.01698V21H5.01698Z" />
                </svg>
              </div>
              <p className="text-xl font-medium text-slate-800 leading-relaxed italic mb-8">
                "{t.quote}"
              </p>
              <div className="flex items-center space-x-4">
                <img src={t.img} alt={t.author} className="w-12 h-12 rounded-full ring-2 ring-white shadow-sm" />
                <div>
                  <p className="font-bold text-slate-900">{t.author}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
