'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import React from 'react';
import { usePathname } from 'next/navigation';
import { Pages } from './data/data';

export const CustomBreadcrumb = () => {
  const pathname = usePathname();

  if (!pathname) {
    return;
  }
  const pathSegments = pathname.split('/').filter(Boolean);

  const breadcrumbs = pathSegments.map((segment, index) => {
    const fullPath = `/${pathSegments.slice(0, index + 1).join('/')}`;
    const page = Pages.find((page) => page.path === fullPath);
    return {
      label: page?.label || segment,
      path: fullPath,
    };
  });

  return (
    <Breadcrumb>
      <BreadcrumbList className='text-white'>
        <BreadcrumbItem>
          <BreadcrumbLink href='/'>Главная</BreadcrumbLink>
        </BreadcrumbItem>
        {breadcrumbs.map((breadcrumb, index) => (
          <React.Fragment key={breadcrumb.path}>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                href={breadcrumb.path}
                className={index === breadcrumbs.length - 1 ? 'text-[#E1056D]' : ''}
              >
                {breadcrumb.label}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
