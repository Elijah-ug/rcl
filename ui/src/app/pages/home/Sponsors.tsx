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
    <section className="py-16 px-6 sm:px-12 sm:flex sm:items-center justify-center">
      <div className="">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Supported By</h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 place-items-center sm">
        {sponsors.map((sponsor, i) => (
          <div
            key={i}
            className="flex items-center justify-center gap-3 text-sm bg-white rounded-xl shadow-md hover:shadow-md transition p-4 hover:scale-105 duration-300 "
          >
            <img src={sponsor.logo} alt={sponsor.name} className="max-h-10 object-contain" />
            <span>{sponsor.name}</span>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};
