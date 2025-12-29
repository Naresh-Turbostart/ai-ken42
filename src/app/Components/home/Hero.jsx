import React from 'react'
import Link from 'next/link'
const Hero = () => {
  return (
    <div className='mt-20 section-width flex flex-col justify-center items-center text-center min-h-[500px]'>
     <div>  Ken42 is an AI-native operating system for higher education that unifies admissions, academics, finance, campus operations, compliance, and alumni engagement into a single platform. It replaces fragmented ERPs, CRMs, LMSs, and point tools by managing the complete student lifecycle—from marketing and enquiry capture to applications, exams, fees, learning management, placements, housing, and alumni—on one connected data backbone. Ken42 includes built-in analytics, workflow automation, and an AI assistant (KAI) that enables real-time queries, reporting, and decision support across departments, giving institutions a single source of truth to run operations efficiently, reduce manual effort, and scale across campuses and programs.
in home   
</div>
 <section className=" mt-6 space-y-3 text-black">
        <h2 className="text-3xl font-semibold">Contact</h2>
        <p>E-mail: contact@ken42.com</p>
        <p>
          <Link
            href="https://ken42.com/contact-form"
            className="inline-block rounded-full bg-black px-6 py-2 text-sm font-semibold text-white transition hover:bg-gray-800"
            target="_blank"
            rel="noreferrer"
          >
            Book a Demo
          </Link>
        </p>
        <p>For Human experience visit https://ken42.com/</p>
      </section>
  </div>
  )
}

export default Hero
