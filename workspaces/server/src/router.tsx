import * as Fastify from 'fastify';
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import {
  RouterAction as action,
  RouterContainer,
} from '../../core/router';
import { TopContainer } from '../../apps/top';
import { TimetableContainer } from '../../apps/timetable';
import manifest from './manifest';

interface FastifyReply extends Fastify.FastifyReply {
  view: (page: string, data?: Object) => void;
}

export function router(fastify: Fastify.FastifyInstance) {
  fastify.get('/', (_, reply: FastifyReply) => {
    action.change({ Container: TopContainer });
    reply.view('index.ejs', { manifest, app: renderToString(<RouterContainer />) })
  })

  fastify.get('/timetable', (_, reply: FastifyReply) => {
    action.change({ Container: TimetableContainer });
    reply.view('index.ejs', { manifest, app: renderToString(<RouterContainer />) })
  })
}
