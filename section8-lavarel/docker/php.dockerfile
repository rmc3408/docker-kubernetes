FROM php:8.2.4-fpm-alpine

WORKDIR /var/www/html

COPY src /var/www/html

RUN docker-php-ext-install pdo pdo_mysql

RUN chown -R www-data:www-data /var/www/html
RUN addgroup --gid 1000 laravel
RUN adduser -G laravel -g laravel -s /bin/sh -D laravel 
USER laravel

# Here, we are creating a new group named laravel using GID 1000. 
# After that, we create an user called laravel. And this user is associated to the group we’ve just created.
# we set the laravel user as default to run the container.