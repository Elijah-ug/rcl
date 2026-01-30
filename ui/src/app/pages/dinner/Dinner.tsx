import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const Dinner: React.FC = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <section
        className="h-[70vh] flex items-center justify-center text-center px-6"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1528605248644-14dd04022da1')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black/60 p-8 rounded-2xl max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Post-Match Corporate Dinner</h1>
          <p className="text-gray-200 text-lg">Where football ends and meaningful corporate connections begin.</p>
        </div>
      </section>

     <div className="flex flex-col items-center justify-center gap-12 py-7 px-6 sm:px-12 bg-gray-50">
       {/* Why Dinner Matters */}
      <section className="">
        <h2 className="text-2xl font-bold text-center mb-10">Why the Dinner Experience Matters</h2>

        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              title: "Corporate Networking",
              desc: " Executives, managers, and professionals connect beyond the pitch in a relaxed and professional setting.",
            },
            {
              title: "Brand Relationship Building",
              desc: " Companies strengthen relationships with partners, sponsors, and peers through shared experiences.",
            },
            {
              title: "Professional Atmosphere",
              desc: "Curated venues, quality service, and structured engagement keep the experience premium and respectful.",
            },
          ].map((item, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className=" ">
        <h2 className="text-2xl font-bold text-center mb-10">How the Dinner Is Organized</h2>

        <div className="grid sm:grid-cols-3 gap-8">
          {[
            {
              title: "1. Match Day",
              desc: "Teams compete in scheduled league fixtures under fair and professional standards.",
            },
            {
              title: "2. Transition",
              desc: "After the match, teams and guests transition to a reserved dinner venue.",
            },
            {
              title: "3. Dinner & Networking",
              desc: "Participants engage in conversations, share ideas, and build long-term professional relationships.",
            },
          ].map((item, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Image Strip */}
      <section className="grid sm:grid-cols-4 place-items-center gap-2">
        {[{img:"https://images.unsplash.com/photo-1544145945-f90425340c7e",txt:"Dinner setup"},{img:"https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c",txt:"Corporate dining"},{img:"https://images.unsplash.com/photo-1521737604893-d14cc237f11d",txt:"Networking"},{img:"https://images.unsplash.com/photo-1521737604893-d14cc237f11d",txt:"Networking"}].map((item, i)=>

        <div key={i} className="relative flex flex-col items-center max-w-full w-xs sm:w-sm">
          
          <img
            src={item.img}
            alt={item.txt}
            className="h-60 w-full object-cover"
          />
          <div className="absolute bg-white/50 bottom-8 p-3 rounded-md text-gray-600">
            <span className="font-semibold">{item.txt}</span>
          </div>
        </div>)}
      </section>
     </div>
    </div>
  );
};
