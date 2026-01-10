import React from "react";

export const Hero: React.FC = () => {
  return (
    <section
      className="relative h-screen flex items-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 px-6 sm:px-12 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">About Rubanda Corporate League</h1>
        <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
          Rubanda Corporate League (RCL) is a professionally organized corporate sports initiative bringing together
          institutions and organizations to compete, collaborate, and build lasting professional relationships through
          structured football competition.
        </p>
      </div>
    </section>
  );
};
