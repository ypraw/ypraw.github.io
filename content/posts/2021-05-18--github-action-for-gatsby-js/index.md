---
title: "Github Action For Gatsby JS"
category: ["github", "ci", "cd", "github action"]
author: Yunindyo Prabowo
---
Hai para pembaca, meneruskan tutorial mengenai github action yang sebelumnya saya bahas pada pembahasan [sebelumnya](/github-action-first-setup/). Setelah kita mendifisikan credential dasar yaitu private access token pada akun github, pada pembahasan kali ini saya akan menjelaskan bagaimana kita mendifinisikan environtment variable untuk membangun static website secara spesific yaitu gatsby js.

## Preambule

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

pada artikel sebelumnya kita telah mendifinisikan file yml yang akan dijalankan saat kita melakukan push ke repository tertentu. Yang kemudian akan secara otomatis melakukan proses kompilasi file js (dalam struktur gatsby js) menjadi html yang akan di gunakan untuk merender website/static website kita di github pages.
## Penjelasan


```yml
on:
  push:
    branches:
      - develop
```
pada langkah ini, kita mendefinisikan kapan github action ini dipanggil, yaitu saat kita melakukan push ke branch `develop`. Seperti yang kita ketahui mengenai github pages, branch `master` ataupun branch `gh-pages` digunakan untuk menyimpan file html yang ingin di render pada url `username.github.io`, jadi kita buat repo lainnnya untuk menyimpan file source code terutama untuk pengguna static site generator seperti gatsby, hugo dsb.
Dalam kasus saya, saya menggunakan 3 branch, yaitu feature-develop sebagai tempat saya coba-coba mendevelop feature baru tanpa mempengaruhi branch develop dimana branch ini sebagai target untuk mentriger proses build. Untuk mentrigernya saya akan melakukan merge dari branch feature-develop ke branch development, sehingga proses build atau dalam hal ini semua proses yang telah di definisikan pada file yml diatas dijalankan, dan terakhir yaitu otomatis akan mempush hasil build ke branch master (ingat syarat untuk github pages)

```yml
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
```

pada langkah ini, kita menjalankan beberapa konfigurasi, seperti image os apa yang akan kita gunakan, node versi berapa, dan file cache untuk dependency. Dan ya, kita menggunakan thirparty yang disediakan pada [marketplace github action](https://github.com/marketplace?type=actions).

untuk penjelasan yang lebih lengkap dapat melihat di referensi berikut:
* [actions/checkout@v2](https://github.com/marketplace/actions/checkout)
* [actions/setup-node@v2.1.2](https://github.com/marketplace/actions/setup-node-js-environment)
* [action/cache@v2](https://github.com/marketplace/actions/cache)

```yml
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

pada langkah ini, kita melakukan pemasangan dependency menggunakan npm, dan melakukan proses build untuk static site gatsby dengan custom `.env` seperti yang sudah didefiniskan diatas.

proses build node Js apps pada umumnya menggunakan file `.env` sebagai file konfigurasi yang bersifat rahasia, pada github action ini kita dapat mendefinisikan isi dari apikey, ataupun konfigurasi yang bersifat rahasia lainnya. Seperti penggunaan algolia sebagai search engine dan sebagainya. Tujuannya agar semua env yang bersifat rahasia tindak dapat dilihat secara public.

Untuk mendifinikan secret variable kita dapat membuka menu settings pada repostiory dan mengarahkan pada submenu secret, dan kita dapat mendifinisikan variable-variable apa saja yang akan kita gunakan dan didefinisikan sebagai secret.

Mungkin itu saja sedikit penjelasan singkat mengenai github action dan semua feature yang ada tidak terikat hanya pada nodejs (gatsby js) namun masih banyak lagi hal yang bisa dilakukan.

Stay tune untuk artikel selanjutnya dan see yaaaa....