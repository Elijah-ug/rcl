import React from 'react'

export const About:React.FC = () => {
  return (
    <section className="py-16 sm:flex sm:items-center justify-center">
  <div className="">
    <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
    What We Do
  </h2>

  <div className="grid gap-6 sm:grid-cols-3 place-items-center">
    {[
      {
        title: "Competitive Matches",
        desc: "Organized corporate games that promote teamwork, discipline, and healthy competition.",
        icon: "🏆",
      },
      {
        title: "Corporate Dinners",
        desc: "Post-match dinners designed to encourage interaction beyond the pitch.",
        icon: "🍽️",
      },
      {
        title: "Professional Networking",
        desc: "A platform for professionals to connect, collaborate, and grow beyond sport.",
        icon: "🤝",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition "
      >
        <div className="text-3xl mb-4">{item.icon}</div>
        <h3 className="font-semibold text-gray-900 mb-2">
          {item.title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          {item.desc}
        </p>
      </div>
    ))}
  </div>
  </div>
</section>

  )
}
