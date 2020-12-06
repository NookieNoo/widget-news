FROM ubuntu:18.04

ENV TZ=Europe/Moscow
ENV PHPV 7.4

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN apt-get update

RUN apt-get install -y --no-install-recommends  apt-utils dialog \
    software-properties-common nano mc git
RUN add-apt-repository -y ppa:ondrej/php

RUN apt-get update

RUN apt-get -y install apache2

WORKDIR "/var/www/html"

COPY ./ /var/www/html

#COPY ./widget-news.conf /etc/apache2/sites-available/widget-news.conf
#
RUN a2enmod rewrite

RUN apt-get -y install curl php${PHPV} libapache2-mod-php${PHPV} \
    php${PHPV}-xml \
    php${PHPV}-mysql \
    php${PHPV}-gd \
    php${PHPV}-mbstring \
    php${PHPV}-json \
    php${PHPV}-intl \
    php${PHPV}-zip \
    php${PHPV}-curl \
    php${PHPV}-xdebug

RUN a2enmod php${PHPV}
RUN update-alternatives --set php /usr/bin/php${PHPV}
RUN php -v

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

ADD docker/xdebug.ini /usr/local/etc/php/conf.d/xdebug.ini

CMD composer install

CMD chown www-data:www-data -R /var/www/html

CMD apachectl -D FOREGROUND