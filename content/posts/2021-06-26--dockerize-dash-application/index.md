---
title: "Dockerize Dash Application"
category: ["python","dash","data engineer", "data scientist","docker","docker-compose","gunicorn"]
author: yunindyo prabowo
---

Hello guys, melanjutkan tutorial mengenai [Dash](https://ypraw.github.io/category/dash) untuk membuat website data visualisasi, kita akan membungkus aplikasi kita kedalam container docker untuk tahap production di real world. Silahkan untuk mendownload source codenya dan masuk kedalam folder [dash-bootstrap-docker](https://github.com/ypraw/dash-learn), Untuk menjalankan tanpa docker, gunakan perintah,

```BASH
python index.py
```

Pada kesempatan ini, saya akan menjelaskan bagaimana menggunakan `gunicorn` dan juga `docker` pada aplikasi dash.

## Persiapan Instalasi Docker dan Docker-Compose

Pastikan `docker` dan `docker-compose` telah terinstall pada perangkat kalian, jika belum dapat menginstallnya dengan panduan berikut,
[Instalasi docker](https://docs.docker.com/get-docker/) lalu dilanjutkan dengan [instalasi docker-compose](https://docs.docker.com/compose/install/)

## Instalasi gunicorn

Untuk webserver, kita akan menggunakan [gunicorn](https://gunicorn.org/) sebagai pengganti flask development server yang secara default sudah terkonfigurasi saya kita menjalankan perintah `python index.py`. Instalasi gunicorn dapat dilakukan dengan perintah,

```BASH
pip install gunicorn
```

## Dockerize the App

Kita akan membuat dockerfile dengan isi sebagai berikut :

```dockerfile
FROM python:3.9
LABEL maintainer "Yunindyo Prabowo <yunindyo.prabowo@gmail.com>"
WORKDIR /code
COPY requirements.txt /
RUN pip install -r /requirements.txt
COPY ./ ./
ENV ENVIRONMENT_FILE=".env"

EXPOSE 8050
ENTRYPOINT ["gunicorn", "--config", "gunicorn_config.py", "index:server"]
```

Karena aplikasi akan disajikan dengan gunicorn sebagai webserver, maka kita perlu membuat `gunicorn_config.py` dengan isi sebagai berikut :

```Python
bind = "0.0.0.0:8050"
workers = 4
threads = 4
timeout = 120
```

Didalam docker image, host harus bernilai `0.0.0.0`, selain itu maka tidak dapat diakses dari local host ataupun host yang telah didefinisikan.

kita juga perlu mendifisikan file `Procfile` :

```Procfile
web: gunicorn index:server
```

Dapat dilihat kita akan menjalankan server flask seperti yang telah didefinisikan pada file `app.py` dari entypoint `index.py`.

Kita juga perlu mendifisikan file `docker-compose.yml` untuk memudahkan kita mem-build image dan menjalankan Docker image,

```yml
version: "3.7"

#
services:
  dash-bootstrap:
    build:
      context: .
    container_name: dash-bootstrap
    ports:
      - "8050:8050"
    networks:
      - dash-bootstrap-networks
    #   devnet:
    #     external:
    #       name: development
    restart: unless-stopped

networks:
  dash-bootstrap-networks:
    driver: bridge
```

Kemudian kita build dari terminal dengan perintah berikut :

```BASH
docker-compose up -d --build
```

Tunggu hingga prosesnya selesai kemudian buka [127.0.0.1:8050](localhost:8050)

Dan taraaa, kita telah berhasil mendeploy Aplikasi dash kita menggunakan docker.