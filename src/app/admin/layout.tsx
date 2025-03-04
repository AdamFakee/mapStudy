import '@/styles/global.css';

function RootLayout ({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="font-beVnPro">
                {children}
            </body>
        </html>
    )
}

export default RootLayout;