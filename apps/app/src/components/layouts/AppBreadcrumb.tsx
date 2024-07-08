import type { FC } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from 'ui';

interface AppBreadcrumbProps {
  items: string[];
}

export const AppBreadcrumb: FC<AppBreadcrumbProps> = ({ items }) => {
  const concatPrefix = (index: number) => {
    return `/${items.slice(0, index + 1).join('/')}`;
  };
  return (
    <Breadcrumb className='mx-10 mb-4'>
      <BreadcrumbList>
        {items.map((item, index) =>
          index === items.length - 1 ? (
            <BreadcrumbItem key={item}>
              <BreadcrumbPage>{item}</BreadcrumbPage>
            </BreadcrumbItem>
          ) : (
            <div className='flex items-center' key={item}>
              <BreadcrumbItem>
                <BreadcrumbLink href={concatPrefix(index)}>
                  {item}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </div>
          ),
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
