import type { LucideIcon, LucideProps } from 'lucide-react';
import {
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Github,
  Loader2,
  Menu,
  Moon,
  SunMedium,
  User,
  X,
  Timer,
  Settings,
  Search,
  Home,
  FolderKanban,
  CreditCard,
  Plus,
  PlusCircle,
  HelpCircle,
  Wand,
  Folder,
  Cat,
  Dog,
  Fish,
  Rabbit,
  Snail,
  Turtle,
  Squirrel,
  Bird,
  Bug,
  Rat,
  Egg,
  CircleOff,
  AlignJustify,
  StickyNote,
  Sparkles,
  Edit,
  Pause,
  Play,
  BookCopyIcon,
  RotateCw,
  Download,
  Receipt,
  Quote,
  Computer,
  AlertCircle,
  Trash2,
  Upload,
  Save,
  Share2,
  ScanEye,
  Check,
  Rocket,
  PackageOpen,
  PiggyBank,
  Languages,
  TrendingDown,
} from 'lucide-react';
import { forwardRef } from 'react';
import { cn } from '../../lib/utils';

const Google: LucideIcon = forwardRef((props: LucideProps, ref) => (
  <svg
    height='100'
    ref={ref}
    viewBox='0 0 50 50'
    width='100'
    x='0px'
    xmlns='http://www.w3.org/2000/svg'
    y='0px'
    {...props}
  >
    <path d='M 26 2 C 13.308594 2 3 12.308594 3 25 C 3 37.691406 13.308594 48 26 48 C 35.917969 48 41.972656 43.4375 45.125 37.78125 C 48.277344 32.125 48.675781 25.480469 47.71875 20.9375 L 47.53125 20.15625 L 46.75 20.15625 L 26 20.125 L 25 20.125 L 25 30.53125 L 36.4375 30.53125 C 34.710938 34.53125 31.195313 37.28125 26 37.28125 C 19.210938 37.28125 13.71875 31.789063 13.71875 25 C 13.71875 18.210938 19.210938 12.71875 26 12.71875 C 29.050781 12.71875 31.820313 13.847656 33.96875 15.6875 L 34.6875 16.28125 L 41.53125 9.4375 L 42.25 8.6875 L 41.5 8 C 37.414063 4.277344 31.960938 2 26 2 Z M 26 4 C 31.074219 4 35.652344 5.855469 39.28125 8.84375 L 34.46875 13.65625 C 32.089844 11.878906 29.199219 10.71875 26 10.71875 C 18.128906 10.71875 11.71875 17.128906 11.71875 25 C 11.71875 32.871094 18.128906 39.28125 26 39.28125 C 32.550781 39.28125 37.261719 35.265625 38.9375 29.8125 L 39.34375 28.53125 L 27 28.53125 L 27 22.125 L 45.84375 22.15625 C 46.507813 26.191406 46.066406 31.984375 43.375 36.8125 C 40.515625 41.9375 35.320313 46 26 46 C 14.386719 46 5 36.609375 5 25 C 5 13.390625 14.386719 4 26 4 Z' />
  </svg>
));

const Oneflow: LucideIcon = forwardRef((props: LucideProps, ref) => (
  <svg
    version='1.0'
    xmlns='http://www.w3.org/2000/svg'
    width='500.000000pt'
    height='500.000000pt'
    viewBox='0 0 500.000000 500.000000'
    preserveAspectRatio='xMidYMid meet'
    ref={ref}
    {...props}
    className={cn('rounded-lg', props.className)}
  >
    <metadata>
      Created by potrace 1.16, written by Peter Selinger 2001-2019
    </metadata>
    <g
      transform='translate(0.000000,500.000000) scale(0.100000,-0.100000)'
      fill='#4f46e5'
      stroke='none'
    >
      <path
        d='M0 2500 l0 -2500 2500 0 2500 0 0 2500 0 2500 -2500 0 -2500 0 0
-2500z m2666 1520 c439 -36 734 -209 927 -545 138 -239 205 -562 194 -930 -10
-325 -74 -579 -203 -811 -235 -419 -632 -645 -1128 -644 -486 2 -829 183
-1037 550 -116 206 -177 436 -200 755 -22 314 19 602 121 851 178 436 531 709
991 768 134 18 178 18 335 6z'
      />
      <path
        d='M2370 3764 c-272 -72 -442 -344 -507 -808 -24 -172 -24 -631 0 -806
43 -307 121 -506 254 -650 124 -134 297 -191 475 -156 107 21 171 56 259 145
183 183 281 495 298 944 29 797 -137 1236 -504 1332 -73 19 -202 18 -275 -1z'
      />
    </g>
  </svg>
));

const VerticalEllipsis: LucideIcon = forwardRef((props: LucideProps, ref) => (
  <svg
    className='lucide lucide-ellipsis-vertical'
    fill='none'
    height='24'
    ref={ref}
    stroke='currentColor'
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth='2'
    viewBox='0 0 24 24'
    width='24'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <circle cx='12' cy='12' r='1' />
    <circle cx='12' cy='5' r='1' />
    <circle cx='12' cy='19' r='1' />
  </svg>
));

export type Icon = LucideIcon;

export const Icons = {
  TrendingDown,
  logo: Oneflow,
  close: X,
  Spinner: Loader2,
  ChevronLeft,
  ChevronRight,
  User,
  Sun: SunMedium,
  Moon,
  Github,
  Menu,
  ShieldCheck,
  Timer,
  Settings,
  Search,
  Home,
  FolderKanban,
  CreditCard,
  Plus,
  PlusCircle,
  HelpCircle,
  Wand,
  Folder,
  Cat,
  Dog,
  Fish,
  Rabbit,
  Snail,
  Turtle,
  Squirrel,
  Bird,
  Bug,
  Rat,
  Egg,
  CircleOff,
  AlignJustify,
  StickyNote,
  Sparkles,
  Edit,
  Pause,
  Play,
  Google,
  BookCopyIcon,
  RotateCw,
  Download,
  Receipt,
  Quote,
  Computer,
  AlertCircle,
  VerticalEllipsis,
  Trash2,
  Upload,
  Save,
  Share2,
  ScanEye,
  Check,
  Rocket,
  PackageOpen,
  PiggyBank,
  Languages,
};

export function nameToIcon(name: string) {
  switch (name) {
    case 'cat':
      return <Icons.Cat />;
    case 'dog':
      return <Icons.Dog />;
    case 'fish':
      return <Icons.Fish />;
    case 'rabbit':
      return <Icons.Rabbit />;
    case 'snail':
      return <Icons.Snail />;
    case 'turtle':
      return <Icons.Turtle />;
    case 'squirrel':
      return <Icons.Squirrel />;
    case 'bird':
      return <Icons.Bird />;
    case 'bug':
      return <Icons.Bug />;
    case 'rat':
      return <Icons.Rat />;
    case 'egg':
      return <Icons.Egg />;
    default:
      return <Icons.logo />;
  }
}
