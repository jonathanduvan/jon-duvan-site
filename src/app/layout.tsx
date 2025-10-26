import './globals.css'
import ModernNav from '@/components/ModernNav'

export const metadata = {
  title: 'Jonathan Duvan Gonzalez | Systems, Software, Solar',
  description:
    'Portfolio and writing from Jonathan Gonzalez — bridging software, clean energy, and systems thinking.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* we’ll allow system color scheme (light/dark) unless user overrides with data-theme */}
      <body className="bg-primary text-primary antialiased">
        <ModernNav />
        {children}
      </body>
    </html>
  )
}
