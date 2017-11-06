import * as Fastify from 'fastify';
import { bootstrap } from './src/server';

const fastify = (Fastify as any).default() as Fastify.FastifyInstance;

bootstrap(fastify);
