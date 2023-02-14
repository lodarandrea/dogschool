import {
  HomeIcon,
  AcademicCapIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'

// export interface Menu {
//   name: string
//   url: string
//   icon?: any
// }

export const menu = [
  {
    name: 'Home',
    url: '/',
    icon: <HomeIcon className="footerIcon" />,
  },
  {
    name: 'Customers',
    url: '/customers',
    icon: <UserGroupIcon className="footerIcon" />,
  },
  {
    name: 'Instructors',
    url: '/instructors',
    icon: <AcademicCapIcon className="footerIcon" />,
  },
]
