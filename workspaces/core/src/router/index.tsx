import UniversalRouter from 'universal-router';

const routes = [
  {
    path: '',
    async action() {
      return await import('../../../apps/src/top/container/TopContainer');
    },
  },
  {
    path: '/timetable',
    async action() {
      return await import('../../../apps/src/timetable/container/TimetableContainer');
    },
  },
];

export default new UniversalRouter(routes);
