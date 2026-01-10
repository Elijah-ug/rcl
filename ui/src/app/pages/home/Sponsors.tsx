import React from "react";
import { mtn, nrm, rukigasaaco, stanbic } from "../../statics/images";

export const Sponsors: React.FC = () => {
  // Replace placeholders with actual logos later
  const sponsors = [
    { name: "Stanbic Bank", logo: stanbic },
    { name: "MTN Uganda", logo: mtn },
    { name: "Rukiga SAACO", logo: rukigasaaco },
    { name: "NRM Kimeeza", logo: nrm },
  ];

  return (
    <section className="py-16 px-6 sm:px-12 bg-gray-50">
      <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Supported By</h2>

      <div className="flex flex-wrap justify-center items-center gap-8">
        {sponsors.map((sponsor, i) => (
          <div
            key={i}
            className="flex items-center justify-center gap-3 text-sm bg-white rounded-xl shadow-sm hover:shadow-md transition p-4"
          >
            <img src={sponsor.logo} alt={sponsor.name} className="max-h-10 object-contain" />
            <span>{sponsor.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
