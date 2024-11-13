'use client';

import { Button, cn, Icons, Input } from 'ui';
import { Suspense, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const buttonData = [
  {
    icon: Icons.HelpCircle,
    text: '你是？',
    iconClass: 'text-yellow-500',
    url: '/chat/new?query=你是？',
  },
  {
    icon: Icons.Store,
    text: '各大跨境电商平台的优缺点是什么？',
    iconClass: 'text-purple-500',
    url: '/chat/new?query=各大跨境电商平台的优缺点是什么？',
  },
  {
    icon: Icons.Store,
    text: '如何选择适合我产品的跨境电商平台？',
    iconClass: 'text-red-500',
    url: '/chat/new?query=如何选择适合我产品的跨境电商平台？',
  },
  {
    icon: Icons.CircleDollarSign,
    text: '有哪些可靠的国际支付服务提供商？',
    iconClass: 'text-sky-500',
    url: '/chat/new?query=有哪些可靠的国际支付服务提供商？',
  },
  {
    icon: Icons.CircleDollarSign,
    text: '选择国际支付服务时应考虑哪些因素？',
    iconClass: 'text-blue-500',
    url: '/chat/new?query=选择国际支付服务时应考虑哪些因素？',
  },
  {
    icon: Icons.CircleDollarSign,
    text: '跨境电商如何处理各国的税务问题？',
    iconClass: 'text-yellow-500',
    url: '/chat/new?query=跨境电商如何处理各国的税务问题？',
  },
];

export default function QueryInput() {
  const [query, setQuery] = useState('');
  const { push } = useRouter();
  const handleSubmit = () => {
    push(`/chat/new?query=${query}`);
  };

  return (
    <div className='relative'>
      <div className='bg-background rounded-lg border shadow'>
        <div className='flex items-center gap-2 px-3 py-2'>
          {/* <Button variant="ghost" size="icon" className="shrink-0">
            <Paperclip className="h-5 w-5" />
          </Button> */}
          <Input
            className='flex-1 border-none text-[16px] shadow-none focus-visible:ring-0 focus-visible:ring-offset-0'
            onChange={e => {
              setQuery(e.target.value);
            }}
            placeholder='請告訴我們您的需求'
            value={query}
          />
          <Button
            className='group shrink-0'
            onClick={handleSubmit}
            size='icon'
            variant='ghost'
          >
            <Icons.ArrowUp className='h-5 w-5 transition-transform group-hover:-translate-y-0.5' />
          </Button>
        </div>
      </div>
      <div className='mt-4 flex flex-wrap gap-2'>
        <Suspense>
          {buttonData.map(({ icon: Icon, text, iconClass, url }, index) => (
            <Link href={url as '/chat/new'} key={index}>
              <Button className={cn('group')} variant='outline'>
                <Icon className={`mr-2 h-4 w-4 ${iconClass}`} />
                {text}
                <Icons.ArrowUpRight className='ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
              </Button>
            </Link>
          ))}
        </Suspense>
      </div>
    </div>
  );
}
