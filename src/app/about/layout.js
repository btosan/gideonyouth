import React from 'react'

export const metadata = {
  title: 'About — Gideon Youth Foundation',
  description: 'Working To Create a Better Tomorrow. We target schools in our immediate vicinity and draw up a program of events which include training on personal effectiveness and development, sex education, drugs and substance abuse awareness, testimonials from people who have succeeded in spite of their circumstances and leadership training..',
  }

export default function layout({ children }) {
  return (
    <div>
      {children}
    </div>
  )
}
