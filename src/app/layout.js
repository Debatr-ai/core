
'use client'
import "./globals.css";
import SessionProvider from "@/components/NextAuthProvider";
import NextAuthProvider from "@/components/NextAuthProvider";
// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

import { UserContext } from "@/components/UserContext";
export default function RootLayout({
  children,
  session
}) {
  return (
    <html lang="en">
       <head>
        <link rel='icon' href='/favicon.ico'/>
      </head>
      <body>
        <NextAuthProvider >
          {/* <UserContext.Provider> */}
          {children}

          {/* </UserContext.Provider> */}
        </NextAuthProvider>
      </body>
    </html>
  );
}
