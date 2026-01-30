import { Card, CardContent, CardHeader } from '@/components/ui/card'
import React from 'react'

export const About:React.FC = () => {
  return (
    <section className="sm:flex sm:items-center justify-center">
  <div className="">
    <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
    What We Do
  </h2>

  <div className="grid gap-3 sm:grid-cols-3 place-items-center">
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
      
        <Card key={i} className='max-w-full w-xs sm:w-sm'>
          <CardHeader>{item.icon}</CardHeader>
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </CardContent>
                    </Card>

    ))}
  </div>
  </div>
</section>

  )
}
