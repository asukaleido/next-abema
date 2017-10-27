FROM node:8.6.0
MAINTAINER asukaleido

ADD yarn.lock workspaces/server/package.json /var/www/

RUN curl -o- -L https://yarnpkg.com/install.sh | bash \
  && cd /var/www \
  && ~/.yarn/bin/yarn \
  && rm -rf ~/.npm

RUN ln -sf /home/repo/public/server /var/www/server \
 && ln -sf /home/repo/public/client /var/www/client

WORKDIR /var/www

ENTRYPOINT ["./node_modules/.bin/pm2", "start", "server/server/src/server.js", "--node-args=\"--inspect=9229\"", "--no-daemon", "--watch"]

EXPOSE 3000 9229
