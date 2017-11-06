import * as path from 'path';
import * as Fastify from 'fastify';
import { router } from './router';

export function bootstrap(fastify: Fastify.FastifyInstance) {
  fastify.register(require('fastify-static'), {
    root: path.join(__dirname, '../../../assets'),
    prefix: '/assets/',
  })

  fastify.register(require('point-of-view'), {
    engine: {
      ejs: require('ejs')
    },
    templates: path.join(__dirname, './templates'),
  })

  router(fastify);

  fastify.listen(3000, err => {
    if (err) throw err
    console.log(`server listening on ${fastify.server.address().port}`)
  })
}
