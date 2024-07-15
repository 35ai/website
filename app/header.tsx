'use client';
import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react';
import {
  GitHubIcon,
} from './icons';
import { Logo } from './logo';
import { ThemeSwitcher } from './components/theme-switcher';
import { Settings } from './components/settings';

export default function Header() {

  const menuItems = [
    'Profile',
    'Dashboard',
    'Activity',
    'Analytics',
    'System',
    'Deployments',
    'My Settings',
    'Team Settings',
    'Help & Feedback',
    'Log Out',
  ];

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);


  return (
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        maxWidth='full'
        classNames={{
          item: [
            'flex',
            'relative',
            'h-full',
            'items-center',
            "data-[active=true]:after:content-['']",
            'data-[active=true]:after:absolute',
            'data-[active=true]:after:bottom-0',
            'data-[active=true]:after:left-0',
            'data-[active=true]:after:right-0',
            'data-[active=true]:after:h-[2px]',
            'data-[active=true]:after:rounded-[2px]',
            'data-[active=true]:after:bg-white',
          ],
        }}
      >
        <NavbarContent className='sm:hidden' justify='start'>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          />
          <NavbarBrand>
            <Logo />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className='hidden sm:flex gap-4' justify='center'>
          <NavbarBrand>
            <Logo />
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent
          as='div'
          className='items-center flex gap-4'
          justify='center'
        >
          <NavbarItem isActive>
            <Link color='foreground' href='#'>
              Search
            </Link>
          </NavbarItem>
          {/* <NavbarItem>
            <Link isDisabled color='foreground' href='#'>
              Tools
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link isDisabled color='foreground' href='#'>
              Chat
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link isDisabled color='foreground' href='#'>
              APIs
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link isDisabled color='foreground' href='#'>
              Knowledges
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link isDisabled color='foreground' href='#'>
              Agents
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link isDisabled color='foreground' href='#'>
              Workflows
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link isDisabled color='foreground' href='#'>
              Tasks
            </Link>
          </NavbarItem> */}
        </NavbarContent>
        <NavbarContent
          as='div'
          className='items-center flex gap-4'
          justify='end'
        >
          {/* GitHub 链接 */}
          <Link href='https://github.com/35ai/website' target='_blank'>
            <GitHubIcon className='text-default-600 dark:text-default-500' />
          </Link>
          <Settings />
          <ThemeSwitcher />
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className='w-full'
                color={
                  index === 2
                    ? 'warning'
                    : index === menuItems.length - 1
                    ? 'danger'
                    : 'foreground'
                }
                href='#'
                size='lg'
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      
  );
}
