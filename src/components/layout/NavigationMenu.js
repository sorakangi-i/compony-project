import React from 'react';
import {
  NavigationMenu as Nav,
  NavigationMenuList as MenuList,
  NavigationMenuItem as MenuItem,
} from '@/components/ui/navigation-menu';

import {
  DropdownMenu as DropMenu,
  DropdownMenuTrigger as DropMenuTrigger,
  DropdownMenuContent as Depth2Content,
  DropdownMenuGroup as Depth2Group,
  DropdownMenuItem as Depth2Item,
} from '@/components/ui/dropdown-menu';

import { Link } from 'react-router-dom';

const NavigationMenu = () => {
  return (
    <Nav>
      <MenuList>
        <MenuItem>
          <DropMenu>
            <DropMenuTrigger className='px-4 py-2 hover:text-blue-500'>
              공통기준관리
            </DropMenuTrigger>
            <Depth2Content>
              <Depth2Group>
                <Depth2Item>
                  <Link to='/common/info'>기준정보관리</Link>
                </Depth2Item>
                <Depth2Item>
                  <Link to='/common/code'>코드관리</Link>
                </Depth2Item>
              </Depth2Group>
            </Depth2Content>
          </DropMenu>
        </MenuItem>

        <MenuItem>
          <DropMenu>
            <DropMenuTrigger className='px-4 py-2 hover:text-blue-500'>자원관리</DropMenuTrigger>
            <Depth2Content>
              <Depth2Group>
                <Depth2Item>
                  <Link to='/resource/status'>자원현황</Link>
                </Depth2Item>
                <Depth2Item>
                  <Link to='/resource/history'>자원이력</Link>
                </Depth2Item>
              </Depth2Group>
            </Depth2Content>
          </DropMenu>
        </MenuItem>

        <MenuItem>
          <DropMenu>
            <DropMenuTrigger className='px-4 py-2 hover:text-blue-500'>설비관리</DropMenuTrigger>
            <Depth2Content>
              <Depth2Group>
                <Depth2Item>
                  <Link to='/equipment/status'>설비현황</Link>
                </Depth2Item>
                <Depth2Item>
                  <Link to='/equipment/history'>설비이력</Link>
                </Depth2Item>
              </Depth2Group>
            </Depth2Content>
          </DropMenu>
        </MenuItem>
      </MenuList>
    </Nav>
  );
};

export default NavigationMenu;
