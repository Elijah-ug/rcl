import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const Gallery: React.FC = () => {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d",
      title: "Match Day Action",
    },
    {
      src: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
      title: "Competitive Fixtures",
    },
    {
      src: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d",
      title: "Team Celebrations",
    },
    {
      src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      title: "Corporate Networking",
    },
    {
      src: "https://images.unsplash.com/photo-1544145945-f90425340c7e",
      title: "Post-Match Dinner",
    },
    {
      src: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
      title: "League Atmosphere",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-20 px-6 sm:px-12 bg-gray-900 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">League Gallery</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          A visual highlight of matches, corporate engagement, and the professional spirit of the Rubanda Corporate
          League.
        </p>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-6 sm:px-12 bg-gray-50">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item, i) => (
            <Card key={i} className="overflow-hidden hover:shadow-lg transition">
              <img src={item.src} alt={item.title} className="h-56 w-full object-cover" />
              <CardContent className="p-4">
                <p className="text-sm font-medium text-gray-700">{item.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Empty State Message (Future Proof) */}
      <section className="py-10 text-center bg-white">
        <p className="text-gray-500 text-sm">
          More moments will be added as the league progresses throughout the season.
        </p>
      </section>
    </div>
  );
};
