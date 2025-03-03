import React from 'react';
import TopMenu from './TopMenu';
import NavigationMenu from './NavigationMenu';
import HamburgerMenu from './HamburgerMenu';

const Header = () => {
  return (
    <header className='border-b'>
      <div className='container mx-auto px-4'>
        {/* 상단 메뉴 */}
        <TopMenu />

        <div className='py-4 flex justify-between items-center'>
          {/* 로고 */}
          <div className='logo'>
            <img src='/logo.png' alt='logo' className='h-8' />
          </div>

          {/* PC 메인 메뉴 */}
          <div className='hidden md:block'>
            <NavigationMenu />
          </div>

          {/* 모바일 햄버거 메뉴 */}
          <div className='block md:hidden'>
            <HamburgerMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
