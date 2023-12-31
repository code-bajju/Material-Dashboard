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
    path: '/dashboard/message',
    icon: icon('ic_message'),
  },
  {
    title: 'Resume Screening',
    path: '/dashboard/user',
    icon: icon('ic_resume'),
  },
  {
    title: 'Job Description',
    path: '/dashboard/JobDesc',
    icon: icon('ic_job'),
  },
  {
    title: 'Leave Management',
    path: '/dashboard/leavemgmt',
    icon: icon('ic_leave'),
  },
  {
    title: 'Performance Management',
    path: '/dashboard/performance',
    icon: icon('ic_performance'),
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
];

export default navConfig;
