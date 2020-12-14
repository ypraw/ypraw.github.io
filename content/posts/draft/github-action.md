
## Penjelasan


```yml
on:
  push:
    branches:
      - develop
```
pada langkah ini, kita mendefinisikan kapan github action ini dipanggil, yaitu saat kita melakukan push ke branch `develop`. Seperti yang kita ketahui mengenai github pages, branch `master` ataupun branch `gh-pages` digunakan untuk menyimpan file html yang ingin di render pada url `username.github.io`, jadi kita buat repo lainnnya untuk menyimpan file source code terutama untuk pengguna static site generator seperti gatsby, hugo dsb.

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

proses build node Js apps pada umumnya menggunakan file `.env` sebagai file konfigurasi yang bersifat rahasia, pada github action ini kita dapat mendefinisikan isi dari apikey, ataupun konfigurasi yang bersifat rahasia lainnya.

dan juga pada github action ini, kita memerlukan personal access token agar github action dapat bekerja dengan baik dan juga libray-library yang digunakan dapat mengakses repository kita. Pertama kita membuat acess token dengan cara,

1. Buka bagian atas kanan halaman apapun di github, kemudian klik setting
   <img src="private_acess.png" width=100% height=auto>

2. Cari Bagian Developer Settings kemudian Personal Acess Tokens
3. Klik **GENERATE new Token**
4. isi deskripsi yang sesuai
5. berikan scope atau permisi yang diizinkan (dalam hal ini saya menceklist semuanya XD)
6. Generate

Setelah halaman generate muncul, tunggu dulu jangan ditutup, klik copy pada icon copy

> **NOTE: Perhatikan, bahwa token ini hanya sekali muncul, dan pastikan anda telah menyalin dengan baik dan/atau untuk berjaga-jaga jangan menutup tab ini dan pastikan bahwa langkah berikutnya telah terselesaikan dengan baik**