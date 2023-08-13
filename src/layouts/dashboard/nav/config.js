// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Messages',
    path: '/dashboard/app',
    icon: icon('ic_message'),
  },
  {
    title: 'Resume Screening',
    path: '/dashboard/user',
    icon: icon('ic_resume'),
  },
  {
    title: 'Job Description',
    path: '/dashboard/products',
    icon: icon('ic_job'),
  },
  {
    title: 'Leave Management',
    path: '/dashboard/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'Performance Management',
    path: '/dashboard/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
