import { Geist, Geist_Mono } from 'next/font/google';
import './globals.scss';
import CustomCursor from '@/components/shared/CustomCursor';

export const metadata = {
  title: 'Sayed Abdelaal',
  description: 'UX Specialist',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <CustomCursor />
      </body>
    </html>
  );
}
