'use client'
import { useEffect, useState } from 'react'

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.body.scrollHeight - window.innerHeight
      const scrolled = (scrollTop / docHeight) * 100
      setProgress(scrolled)
    }

    // Use requestAnimationFrame for smoother updates
    const onScroll = () => requestAnimationFrame(handleScroll)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--color-border)]">
      <div
        className="h-full bg-[var(--color-accent)] transition-[width] duration-100 ease-linear"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
