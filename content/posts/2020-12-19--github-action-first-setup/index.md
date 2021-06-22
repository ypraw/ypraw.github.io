---
title: "Github Action : First Setup"
category: ["github", "ci", "cd", "github action"]
author: Yunindyo Prabowo
---

Meneruskan artikel sebelumnya menengenai [github action](/github-action-solusi-cerdas-untuk-automation-deploying-static-site-generator/), pada kesempatan kali ini saya ingin menjabarkan lebih lanjut bagaimana mengkonfigurasi github action untuk pertama kali=.

Github sebagai penyedia layanan hosting pages, juga menyediakan media deploy secara otomatis yaitu github action. Dengan adanya tools ini, kita dapat dengan mudah melakukan deploy dalam satu platform tanpa harus menggunakan platform lain. Sebelum ke langkah mendeploy, pertama kali kita harus menyiapkan beberapa token dan konfigurasi yang akan kita gunakan saat menggunakan github action.


## Langkah-Langkah
Pertama dan yang paling utama adalah kalian harus memiliki repository khusus untuk menempatkan source code blog/static site kalian dan tentu dengan skema standar menggunakan 2 branch, satu branch untuk menyimpan source code, satu lagi untuk menyimpan hasil build /  html files XD.

### 1. Setup Private access token
yang kedua adalah menyiapkan _**private access token**_ dengan langkah sebagai berikut:

1. Buka bagian atas kanan halaman apapun di github, kemudian klik setting
   <re-img src="private_acess.png" width=100% height=auto></re-img>

2. Cari Bagian Developer Settings
   <re-img src="developer-settings.png" width=100% height=auto></re-img>

3. Klik _**Personal Access Token**_ lalu klik **GENERATE new Token**
4. isi deskripsi yang sesuai
5. berikan scope atau permisi yang diizinkan (dalam hal ini saya menceklist semuanya XD)
6. Generate

Setelah halaman generate muncul, tunggu dulu jangan ditutup, klik copy pada icon copy

> **NOTE: Perhatikan, bahwa token ini hanya sekali muncul, dan pastikan anda telah menyalin dengan baik dan/atau untuk berjaga-jaga jangan menutup tab ini dan pastikan bahwa langkah berikutnya telah terselesaikan dengan baik**

### 2. Setup Repository
Langkah berikutnya kita men-setup repository, dalam contoh ini, saya menggunakan source code blog pribadi saya yang bisa diakses disini [ypraw blog](https://github.com/ypraw/ypraw.github.io/)

1. Dari Repository kalian, buat directory pada root project, dengan nama folder berikut `./github/workflow`.
2. kemudian buat file `.yml` dalam kasus ini saya menggunakan nama `main.yml` berisikan konfigurasi sebagai berikut:

```yml
name: github pages builder

on:
  push:
    branches:
      - develop

jobs:
  deploy:
    runs-on: ubuntu-18.04
    steps:
      - uses: actions/checkout@v2

      - name: Setup Node
        uses: actions/setup-node@v2.1.2
        with:
          node-version: '10.x'

      - name: Cache dependencies
        uses: actions/cache@v2
        with:
          path: ~/.npm
          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-node-

      - name: INSTALL DEPENDENCIES
        run: npm ci

      - name: BUILING SITE
        run: npm run build
        env:
          ALGOLIA_APP_ID: ${{secrets.ALGOLIA_APP_ID}}
          ALGOLIA_SEARCH_ONLY_API_KEY: ${{secrets.ALGOLIA_SEARCH_ONLY_API_KEY}}
          ALGOLIA_ADMIN_API_KEY: ${{secrets.ALGOLIA_ADMIN_API_KEY}}
          ALGOLIA_INDEX_NAME: ${{secrets.ALGOLIA_INDEX_NAME}}
          FB_APP_ID: ${{secrets.FB_APP_ID}}

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.ACCESS_TOKEN }}
          deploy_key: ${{ secrets.SECRET_KEY_DEPLOY_SITE }}
          publish_dir: ./public
          publish_branch: master
          enable_jekyll: true
          force_orphan: true
          full_commit_message: ${{ github.event.head_commit.message }}
          user_name: 'github-actions[bot]'
          user_email: 'github-actions[bot]@users.noreply.github.com'
 ```

langkah terakhir push file tersebut, dan lihat hasilnya pada menu action.

> **NOTE: Perhatikan, file konfigurasi diatas hanya bekerja pada source code blog saya**

untuk kedepannya saya akan menjelaskan bagaimana github action bekerja pada static site generator dan bagaimana cara men-setup environment variable pada source code sehingga bisa digunakan untuk membuild source code kita.

Stay tune seri selanjutnya [setup github action](/category/github-action)