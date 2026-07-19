export default function FooterFeatures() {
  const features = [
    {
      title: "Custom Websites",
      description: "Beautiful, functional websites built to represent your brand.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#f5d08b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
          <path d="M6 7h4M6 11h12M14 7h4"></path>
        </svg>
      )
    },
    {
      title: "Mobile Responsive",
      description: "Seamless experiences on every device.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#f5d08b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
          <path d="M10 6L14 10"></path>
          <path d="M14 6L10 10"></path>
        </svg>
      )
    },
    {
      title: "Fast & Optimized",
      description: "Lightweight, performant sites that rank and convert.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#f5d08b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
          <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
        </svg>
      )
    },
    {
      title: "Clean Code",
      description: "Built with modern standards for a strong foundation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#f5d08b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
          <rect x="7" y="3" width="10" height="18" rx="2" ry="2" transform="rotate(15 12 12)"></rect>
        </svg>
      )
    }
  ];

  return (
    <section className="bg-[#02060c] text-white py-24 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center text-center group"
          >
            <div className="mb-6 opacity-80 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300">
              {feature.icon}
            </div>
            <h4 className="text-lg font-semibold text-[#f2f2f2] mb-3 tracking-wide">
              {feature.title}
            </h4>
            <p className="text-white/60 font-light text-sm leading-relaxed max-w-[250px]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
