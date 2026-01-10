import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const Dinner: React.FC = () => {
  return (
    <div className="w-full">
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

      {/* Why Dinner Matters */}
      <section className="py-16 px-6 sm:px-12 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-10">Why the Dinner Experience Matters</h2>

        <div className="grid sm:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">Corporate Networking</h3>
              <p className="text-gray-600 text-sm">
                Executives, managers, and professionals connect beyond the pitch in a relaxed and professional setting.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">Brand Relationship Building</h3>
              <p className="text-gray-600 text-sm">
                Companies strengthen relationships with partners, sponsors, and peers through shared experiences.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">Professional Atmosphere</h3>
              <p className="text-gray-600 text-sm">
                Curated venues, quality service, and structured engagement keep the experience premium and respectful.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 sm:px-12 bg-white">
        <h2 className="text-2xl font-bold text-center mb-10">How the Dinner Is Organized</h2>

        <div className="grid sm:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="font-semibold mb-2">1. Match Day</h3>
            <p className="text-gray-600 text-sm">
              Teams compete in scheduled league fixtures under fair and professional standards.
            </p>
          </div>

          <div className="text-center">
            <h3 className="font-semibold mb-2">2. Transition</h3>
            <p className="text-gray-600 text-sm">
              After the match, teams and guests transition to a reserved dinner venue.
            </p>
          </div>

          <div className="text-center">
            <h3 className="font-semibold mb-2">3. Dinner & Networking</h3>
            <p className="text-gray-600 text-sm">
              Participants engage in conversations, share ideas, and build long-term professional relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Image Strip */}
      <section className="grid sm:grid-cols-3 gap-2">
        <img
          src="https://images.unsplash.com/photo-1544145945-f90425340c7e"
          alt="Dinner setup"
          className="h-60 w-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c"
          alt="Corporate dining"
          className="h-60 w-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Networking"
          className="h-60 w-full object-cover"
        />
      </section>
    </div>
  );
};
