FROM nginx:latest
COPY build/ /usr/share/nginx/html/build
EXPOSE 80/tcp
