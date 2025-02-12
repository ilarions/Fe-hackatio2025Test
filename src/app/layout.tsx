import "./globals.css";

import React from "react";
import { MenuLayout } from "./components/MenuLayout";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <MenuLayout>
          {children}
        </MenuLayout>
      </body>
    </html>
  );
}
