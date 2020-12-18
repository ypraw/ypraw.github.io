# YprawBlog

A [GatsbyJS](https://www.gatsbyjs.org/) blog starter. <br /><br />


[![GitHub license](https://img.shields.io/github/license/greglobinski/gatsby-starter-hero-blog.svg)](https://github.com/greglobinski/gatsby-starter-personal-blog/blob/master/LICENSE)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

![deploy branch](https://github.com/ypraw/ypraw.github.io/workflows/github%20pages%20builder/badge.svg?branch=develop)



## Description

Source code untuk blog saya. Dibuat menggunakan GatsbyJS dan ReactJS

## Fitur:

- Easy editable content in **Markdown** files (posts, pages and parts)
- **CSS** with `styled-jsx` and `PostCSS`
- **SEO** (sitemap generation, robot.txt, meta and OpenGraph Tags)
- **Social** sharing (Twitter, Facebook, Google, LinkedIn)
- **Comments** (Disqus)
- **Images** lazy loading and `webp` support (gatsby-image)
- Post **categories** (multiple categories based post list)
- Full text **searching** (Algolia)
- Form elements and validation with `ant-design`
- **RSS** feed
- 100% **PWA** (manifest.webmanifest, offline support, favicons)
- Google **Analytics**
- App **favicons** generator (node script)
- Easy customizable base **styles** via `theme` object generated from `yaml` file (fonts, colors, sizes)
- React **v.16.3** (gatsby-plugin-react-next)
- **Components** lazy loading (social sharing)
- **ESLint** (google config)
- **Prettier** code styling
- Webpack `BundleAnalyzerPlugin`
- **Gravatar** image (optional) instead local Avatar/Logo image
- **Create Post** for now only tested on Linux, Mac, Unix-like :(
- **Pagination 5 articles per page**

## Instalasi GatsbyJS

Pastikan bahwa nodeJS telah terinstall pada komputer anda. Jika belum anda dapat menginstallnya dari sini [NodeJS](https://nodejs.org/en/).

Kemudian install gatsby-cli dengan syntaks berikut,

```bash
npm install --global gatsby-cli
```

Info lebih lanjut dapat ditemukan dalam tautan berikut ini [GatsbyJS.org](https://www.gatsbyjs.org/tutorial/part-one)


## Memulai Instalasi Tema

Install tema menggunakan command dibawah ini

```bash
gatsby new [NEW_SITE_DIRECTORY_FOR_YOUR_BLOG] https://github.com/ypraw/ypraw.github.io.git

#contoh

gatsby new my_blog https://github.com/ypraw/ypraw.github.io.git
```

arahkan ke folder yang telah dibuat lalu mulai dengan perintah dibawah ini untuk melihat tema.

```bash
cd my_blog \
gatsby develop
```

setelah prosesi generate selesai, buka browser anda lalu arahkan pada `localhost:8000` atau `127.0.0.1:8000`, anda akan melihat tampilan web dengan mode developer.

untuk tahap produksi gunakan perintah berikut
```text
gatsby build
```

perintah ini akan membuat folder (/public) yang siap diupload pada hosting yang anda gunakan.

## Service Tambahan

Tema ini menggunakan beberapa service untuk beberapa fungsi seperti komentar, pencarian, dan google analitik. untuk mengakses service-service tersebut maka diperlukan beberapa konfigurasi. Pada folder root , buatlah sebuah file `.env` dan isikan seperti berikut ini,

```text
GOOGLE_ANALYTICS_ID=...
ALGOLIA_APP_ID=...
ALGOLIA_SEARCH_ONLY_API_KEY=...
ALGOLIA_ADMIN_API_KEY=...
ALGOLIA_INDEX_NAME=...
```

**PERINGATAN** :
- **_Pada dasarnya file .env akan di ignore oleh gitignore, pastikan kembali bahwa file `.gitignore` mengandung .env, jika belum tulis .env pada file .gitignore_**

- **_Jika anda tidak mengisi data Algolia pada file `.env`, maka proses build akan gagal, untuk itu anda diwajibkan untuk mendaftar algolia terlebih dahulu, [algolia](https://www.algolia.com/), sebagai catatan bagi anda yang masih mahasiswa, dosen, ataupun civitas akedemi lainnya yang memiliki email berdomain akademik seperti `.ac.id`,   `.edu`, dsb gunakanlah fitur github education pack untuk mendapatkan beberapa package premium seperti github developer, domain namecheap dan algolia education pack [disini](https://education.github.com/pack)_**

### Instruksi dan tutorial
- #### Comments System
    - Untuk mengaktifkan komentar sistem menggunakan disqus, isikan `disqusShortname` anda pada file [config.js](/content/meta/config.js)
- #### Create Post {_only unix-like, Linux, MacOS_}
    - Jalankan perintah berikut
    ```bash
    npm run create-post [JUDUL] <space>[Kategori] <space> [Author]
    ```
    contoh,
    ```bash
    npm run create-post "New Post" "Kategorinya" "ypraw"
    ```

## Windows users

You should take a look at this: [Gatsby on Windows](https://www.gatsbyjs.org/docs/gatsby-on-windows/)

## Authors

- [Yunindyo Prabowo](https://github.com/ypraw)

- Thanks to Base Theme develop by [@greglobinski](https://github.com/greglobinski)

## Contributing

- Fork the repo
- Create your feature branch (git checkout -b feature/fooBar)
- Commit your changes (git commit -am 'Add some fooBar')
- Push to the branch (git push origin feature/fooBar)
- Create a new Pull Request

## Licence

MIT License

Copyright (c) 2017 gatsbyjs <br />Copyright (c) 2018 greg lobinski <br />Copyright (c) 2019 Yunindyo Prabowo

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
