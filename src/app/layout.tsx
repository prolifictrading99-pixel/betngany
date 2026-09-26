import './globals.css'
export const metadata = { title: 'ContCrops', description: 'سوق المحاصيل' }
export default function RootLayout({children}:{children:React.ReactNode}){
  return (<html lang="ar" dir="rtl"><head><link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap" rel="stylesheet"/></head><body>{children}</body></html>)
}
