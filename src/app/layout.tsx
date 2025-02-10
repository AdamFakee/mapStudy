import '@/styles/global.css';
import Header from '@/components/user/Header';
import Footer from '@/components/user/Footer';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-beVnPro bg-background">
        <Header/>
        <div className='ml-[24px] mr-[28px]'>
          <div className='h-[56px]'></div>
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}