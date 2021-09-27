---
title: "Management paket dan virtual environtment menggunakan pipenv"
category: ["python","pipenv","virtual environtment"]
author: yunindyo prabowo
---

Ada baiknya sebelum memulai project python, kita perlu mengisolasi environtment yang digunakan pada project. Umumnya menggunakan Venv, pada kesempatan kali ini, kita akan mencoba untuk menggunakan [pipenv](https://pipenv.pypa.io/en/latest/) sebuah tool untuk management virtual env untuk project python secara otomatis serta menambahkan atau menghapus paket dari Pipefile.

Secara umum, kita dapat menginstall menggunakan perintah dibawah (pastikan bahwa python dan pip telah terinstall di perangkat anda) :

```BASH
$ pip install pipenv
```

atau pada repository arch linux dan turunannya :

```BASH
$ sudo pacman -S python-pipenv
```

atau jika anda meggunakan fedora :

```BASH
$ sudo dnf install pipenv
```

atau macos

```BASH
$ brew install pipenv
```

Setelah menginstall `pipenv`, library ini akan secara otomatis mengatur manajemen dependencies per project. Untuk menginstall kebutuhan package, pastikan anda berada pada root directory project :

```BASH
$ cd myproject
$ pipenv install pandas
```

<re-img src="install_pipenv.png" width=100% height=auto></re-img>

Dalam hal ini, saya mencontohkan untuk menginstall pandas dan pipenv akan membuat file `Pipefile` didalam root project. File ini akan melacak dependensi mana yang dibutuhkan.

Untuk mengaktivasi virtual env, gunakan perintah berikut :

```BASH
$ pipenv shell
```

setelah command diatas dijalankan, maka virual environtment akan aktif dan anda dapat memulai project anda.

Untuk mendeaktivasi virtual environtment gunakan perintah

 ```BASH
 $ exit
 ```


Untuk lebih jauh memahami `pipenv` silahkan buka dokumentasi resmi di [pipenv](https://pipenv.pypa.io/en/latest/)

Happy Coding.

### Reference
[[1] Pipenv](https://pipenv.pypa.io/en/latest/)