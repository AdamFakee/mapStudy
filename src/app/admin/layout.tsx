import { Outfit } from 'next/font/google';
import '../../styles/global.css'
import { SidebarProvider } from '@/contexts/SidebarContext';
import AuthAdminContext from '@/contexts/AuthAdminContext';


const outfit = Outfit({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthAdminContext>
        <body className={`${outfit.className}`}>
            <SidebarProvider>{children}</SidebarProvider>
        </body>
      </AuthAdminContext>
    </html>
  );
}
