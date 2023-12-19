import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script';
import '../public/assets/css/bootstrap.min.css';
import '../public/assets/css/font-awesome.min.css';
import '../public/assets/css/feathericon.min.css';
import '../public/assets/plugins/morris/morris.css';
import '../public/assets/css/style.css';
import Main from './(SharedComponents)/Main';
import MainLayout from './(SharedComponents)/MainLayout';
import Header from './(SharedComponents)/Header';
import Sidebar from './(SharedComponents)/Sidebar';
import { SessionProvider } from 'next-auth/react';
import { Providers } from '@/redux/providers';
import { useAppSelector } from '@/redux/hooks';
import { getServerSession } from 'next-auth';
import { options } from './api/auth/[...nextauth]/option';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import AuthProvider from './context/AuthProvider';

export const metadata: Metadata = {
  title: 'Doctors Hub - Pharmacy',
  description: 'Pharmacy Module of Doctors Hub',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(options)
  return (
    <html lang="en">
      
      <body suppressHydrationWarning={true}>
      <Providers>
        <MainLayout session={session}>
          <AuthProvider>
          {children}
          </AuthProvider>
          </MainLayout> 
    </Providers>                                                                         
        <Script src="/assets/js/jquery-3.2.1.min.js" />
        <Script src="/assets/js/popper.min.js" />
        <Script src="/assets/js/bootstrap.min.js" />
        <Script src="/assets/plugins/slimscroll/jquery.slimscroll.min.js" />
        <Script src="/assets/plugins/raphael/raphael.min.js" />
        <Script src="/assets/plugins/morris/morris.min.js" />
        <Script src="/assets/js/chart.morris.js" />
        <Script src="/assets/js/script.js" />
      </body>
    </html>
  )
}
