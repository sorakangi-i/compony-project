import React from 'react';
import { Link } from 'react-router-dom';

const TopMenu = () => {
  return (
    <section className='py-2 text-sm border-b'>
      <div className='container mx-auto px-4 flex justify-end space-x-4'>
        <a href='#' target='_blank' rel='noopener noreferrer' className='hover:text-blue-500'>
          시민회관 바로가기
        </a>
        <Link to='/logout' className='hover:text-blue-500'>
          로그아웃
        </Link>
      </div>
    </section>
  );
};

export default TopMenu;
