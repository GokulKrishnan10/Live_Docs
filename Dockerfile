FROM nginx:latest
COPY build/ /usr/share/nginx/html/build
RUN mv /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default_original
COPY nginx.conf /etc/nginx/conf.d
EXPOSE 80/tcp