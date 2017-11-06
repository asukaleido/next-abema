import UniversalRouter from 'universal-router';

const routes = [
  {
    path: '',
    async action() {
      const { TopContainer } = await import('../../apps/top');
      return TopContainer;
    },
  },
  {
    path: '/timetable',
    async action() {
      const { TimetableContainer } = await import('../../apps/timetable');
      return TimetableContainer;
    },
  },
];

export const router = new UniversalRouter(routes);
