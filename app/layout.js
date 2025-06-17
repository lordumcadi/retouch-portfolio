import './globals.css'

export const metadata = {
  title: 'Портфолио ретуши',
  description: 'Сравнение фотографий до и после ретуши',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
