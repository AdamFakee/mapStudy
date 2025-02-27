import '@/styles/global.css';
import Header from '@/components/user/Header';
import Footer from '@/components/user/Footer';
import AuthContext from '@/contexts/AuthContext';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AuthContext>
        <body className="font-beVnPro bg-background">
          <Header/>
          <div className='ml-[24px] mr-[28px] sm:mb-0 mb-12 mt-6'>
            <div className='h-[56px]'></div>
            {children}
          </div>
          <Footer/>
        </body>
      </AuthContext>
    </html>
  );
}