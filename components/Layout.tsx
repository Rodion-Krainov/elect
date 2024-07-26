import React from 'react';
import Header from './Shared/Header';
import Navigation from './Shared/Navigation';
import Footer from './Shared/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-row bg-secondary-background dark:bg-dark-secondary-background">
      <Navigation />
      <div className="flex flex-col w-11/12">
        <Header />
        <main className="rounded-tl-30 pt-30 pl-40 bg-background dark:bg-dark-background">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
