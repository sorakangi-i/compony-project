import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Link } from 'react-router-dom';

const HamburgerMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='ghost' size='icon'>
          <Menu className='h-6 w-6' />
        </Button>
      </SheetTrigger>
      <SheetContent side='right'>
        <nav className='flex flex-col space-y-4 mt-8'>
          <Link to='/common' className='px-4 py-2 hover:bg-gray-100 rounded'>
            공통기준관리
          </Link>
          <Link to='/resource' className='px-4 py-2 hover:bg-gray-100 rounded'>
            자원관리
          </Link>
          <Link to='/facility' className='px-4 py-2 hover:bg-gray-100 rounded'>
            설비관리
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default HamburgerMenu;
