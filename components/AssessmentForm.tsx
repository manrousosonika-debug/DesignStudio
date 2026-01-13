
import React, { useState } from 'react';

const AssessmentForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('https://formspree.io/f/mlggezkl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', website: '' });
      } else {
        const data = await response.json();
        // Fixed: Using Object.prototype.hasOwnProperty.call instead of Object.hasOwn for ES compatibility
        if (data && Object.prototype.hasOwnProperty.call(data, 'errors')) {
          console.error(data.errors.map((error: any) => error.message).join(", "));
        }
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000); // Reset to idle after 5 seconds
    }
  };

  if (status === 'success') {
    return (
      <div className="max-w-lg mx-auto bg-green-50 border border-green-200 rounded-3xl p-10 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-lg shadow-green-500/20">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-green-900 mb-2">Request Received!</h3>
        <p className="text-green-700">We've received your information. A senior designer will review your site and send the assessment within 24 hours.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-8 text-green-800 font-bold hover:underline"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative border border-slate-100">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-2 bg-blue-600 rounded-full"></div>
      
      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm font-medium animate-in fade-in slide-in-from-top-2">
          Oops! There was a problem submitting your request. Please check your connection and try again.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
          <input 
            id="name"
            name="name"
            type="text" 
            required
            className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Work Email</label>
          <input 
            id="email"
            name="email"
            type="email" 
            required
            className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="john@company.com"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
        
        <div>
          <label htmlFor="website" className="block text-sm font-bold text-slate-700 mb-2">Current Website URL</label>
          <input 
            id="website"
            name="website"
            type="url" 
            required
            className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="https://yourwebsite.com"
            value={formData.website}
            onChange={(e) => setFormData({...formData, website: e.target.value})}
          />
        </div>

        <button 
          type="submit"
          disabled={status === 'loading'}
          className={`w-full py-5 bg-blue-600 text-white font-black text-lg rounded-xl shadow-xl shadow-blue-500/30 transition-all flex items-center justify-center space-x-2 ${
            status === 'loading' ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700 active:scale-95'
          }`}
        >
          {status === 'loading' ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Sending...</span>
            </>
          ) : (
            'Claim My Free Assessment'
          )}
        </button>
        
        <p className="text-center text-xs text-slate-400">
          No credit card required. Private & Confidential.
        </p>
      </form>
    </div>
  );
};

export default AssessmentForm;
