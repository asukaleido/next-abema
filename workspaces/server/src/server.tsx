import * as path from 'path';
import * as React from 'react';
import * as Fastify from 'fastify';
import { renderToString } from 'react-dom/server';
import manifest from './manifest';
import RouterContainer from '../../core/src/router/container/RouterContainer';
import * as action from '../../core/src/router/action/RouterAction';
import TopContainer from '../../apps/src/top/container/TopContainer';
import TimetableContainer from '../../apps/src/timetable/container/TimetableContainer';

const fastify = (Fastify as any).default() as Fastify.FastifyInstance;

interface FastifyReply extends Fastify.FastifyReply {
  view: (page: string, data?: Object) => void;
}

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, '../../../client'),
  prefix: '/assets/',
})

fastify.register(require('point-of-view'), {
  engine: {
    ejs: require('ejs')
  },
  templates: './server/server/src/templates',
})

fastify.get('/', (_, reply: FastifyReply) => {
  action.change({ Container: TopContainer });
  reply.view('index.ejs', { manifest, app: renderToString(<RouterContainer />) })
})

fastify.get('/timetable', (_, reply: FastifyReply) => {
  action.change({ Container: TimetableContainer });
  reply.view('index.ejs', { manifest, app: renderToString(<RouterContainer />) })
})

fastify.listen(3000, err => {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})
