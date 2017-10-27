FROM nginx:mainline-alpine
MAINTAINER asukaleido

RUN apk update \
  && apk add ca-certificates \
  && update-ca-certificates \
  && ln -sf /home/repo/docker/frntend/nginx/nginx.conf /etc/nginx/nginx.conf \
  && ln -sf /home/repo/docker/frntend/nginx/server.crt /etc/nginx/server.crt \
  && ln -sf /home/repo/docker/frntend/nginx/server.key /etc/nginx/server.key

WORKDIR /etc/nginx

CMD ["nginx", "-g", "daemon off;"]

EXPOSE 80 443
