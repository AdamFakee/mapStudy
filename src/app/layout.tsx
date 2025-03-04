import '@/styles/global.css';
import Header from '@/components/user/Header';
import Footer from '@/components/user/Footer';
import AuthContext from '@/contexts/AuthContext';
import HeaderSearchPopup, { HeaderSearchPopupMobile } from '@/components/user/HeaderSearchPopup';
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
          {/* search */}
          <div 
            data-header-search-popup='pop-up' 
            className='hidden h-[100vh] backdrop-blur-sm w-[100%] fixed z-50 top-0'
          >
            <HeaderSearchPopup/>
          </div>
          {/* search for mobile */}
          <div 
            data-header-search-popup-mobile='pop-up' 
            className='hidden h-[100vh] backdrop-blur-sm bg-red-300 w-[100%] fixed z-50 top-0'
          >
            <HeaderSearchPopupMobile/>
          </div>
          {/* content */}
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