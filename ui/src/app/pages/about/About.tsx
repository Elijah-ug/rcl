import React from "react";
import { Hero } from "./Hero";
import { leader } from "@/app/statics/images";

export const About: React.FC = () => {
  return (
    <main>
      {/* HERO SECTION */}
      <Hero />
      {/* MISSION & VISION */}
      <section className="py-20 px-6 sm:px-12 ">
        <div className="max-w-5xl mx-auto grid gap-8 sm:grid-cols-2">
          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To provide a structured, transparent, and professional sports platform that promotes teamwork, wellness,
              and collaboration among corporate institutions within Rubanda and beyond.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To become a recognized regional corporate league that sets the standard for organization, integrity, and
              community impact through sport.
            </p>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 px-6 sm:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">What We Stand For</h2>

          <div className="grid gap-6 sm:grid-cols-4">
            {[
              {
                title: "Professionalism",
                desc: "High standards in planning, execution, and conduct.",
              },
              {
                title: "Fair Competition",
                desc: "Respect for rules, teams, and match officials.",
              },
              {
                title: "Transparency",
                desc: "Clear communication and accountable league operations.",
              },
              {
                title: "Community",
                desc: "Building strong corporate relationships through sport.",
              },
            ].map((item, i) => (
              <div key={i} className="border border-gray-200 bg-white rounded-2xl p-6 text-center hover:shadow-sm transition">
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANAGEMENT / ORGANIZING COMMITTEE */}
      <section className="py-20 px-6 sm:px-12 ">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">Organizing Committee</h2>

          <div className="grid gap-8 sm:grid-cols-3">
            {[
              {
                name: "Martin Odegard",
                title: "League Chairperson",
                role: "Overall leadership & governance",
              },
              {
                name: "Declan Rice",
                title: "Competition Director",
                role: "Fixtures, rules & match operations",
              },
              {
                name: "Bukayo Saka",
                title: "Communications Lead",
                role: "Media, updates & stakeholder engagement",
              },
            ].map((member, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-1 bg-white rounded-2xl text-gray-500 p-8 shadow-sm text-center hover:shadow-md transition"
              >
                <img src={leader} alt="" className="w-17 h-17 bg-gray-200 rounded-full" />
                {/* <div className="w-20 h-20 mx-auto rounded-full bg-gray-200 mb-4" /> */}
                <h3 className="font-bold ">{member.name}</h3>
                <h4 className="text-sm font-semibold ">{member.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
