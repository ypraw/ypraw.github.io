---
title: Tutorial Dasar Flask Framework (Ke-satu)
category: "flask tutorial dasar"
author: Yunindyo Prabowo
---

Dunia web tak akan lepas dari yang namanya pemrograman. Karena pada dasarnya website dibangun dari berbagai macam program yang tentu juga dibangun dari bahasa program tertentu. Semisal web server seperti _Apache_ yang dibangun dari bahasa c dan XMl, atau _nginx_ yang juga dibangun dengan bahasa c, atau bahkan website itu sendiri yang secara umum dibangun dengan _Html_, _javascript_ dan _css_. Lalu untuk _backendnya_ juga dibangun dengan bahasa pemrograman seperti _php_, _javascript (NodeJS, Angular, Kraken)_ atau yang akan kita bahas dalam tutorial kali ini, _**Python**_

# Mengapa Flask
Sebelum berangkat lebih jauh ada baiknya kita mengenal web framework yang khusus dibangun dari bahasa python untuk membuat web.
Diantara sekian banyak, boleh dikatakan bahwa 2 Framework, Django dan flask merupakan Framework paling populer bagi developer web yang berkonsentrasi pada bahasa pyhon.
Karena dua Framework ini populer tentu penulis menyarankan untuk menggunakan 1 diantara keduanya. Tapi bukan berarti tidak diperbolehkan untuk belajar framework lainnya. Penulis tidak ingin memperdebatkan mana yang paling baik, atau mana yang lebih unggul. Just write the code okay...

Oke balik lagi ke kedua Framework yang paling populer, Django dan Flask. Menurut pendapat saya, Django merupakan Framework yang cukup powerfull terutama dalam kemudahan maintance dengan skala aplikasi yang cukup besar, urusan kecepatan developing aplikasi skala besar saya rasa Django bisa memberikan itu semua. Kemudian flask, merupakan micro-framework yang di desain sedemikian rupa untuk kecepatan pembuatan aplikasi skala kecil-menengah. Lalu pertanyaannya bisakah django untuk aplikasi skala kecil dan flask untuk aplikasi skala besar ? Ya, tentu bisa dan dimungkinkan, hanya saja untuk flask butuh library tambahan seperti blueprint untuk memudahkan maintance kode, sedangkan pada django sudah terkonfigurasi secara otomatis beserta admin-management dan control management. Dan itu semua balik lagi ke selera masing-masing.

Kenapa penulis memilih Flask, ya seperti yang sudah saya jelaskan diatas, flask mudah dipelajari karena memiliki struktur yang lebih ringkas dibandingkan dengan django dan tentu untuk pembelajaran akan lebih mudah dalam penyampaian materinya. Semoga wkwkwkwk

# MVC vs MTV
Pada dasarnya ada paradigma umum yang digunakan pada hampir setiap Framework , yaitu MVC (Model-view-controller), yang belum tau itu apa, silahkan googling XD wkwkwkwk [googling](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller),
pada flask ataupun django juga dikenal konsep demikian. yaitu MTV (Model-Template-View), macem channel tv aja yak wwkwkwk.
inti dari keduanya adalah sama. Yep, dalam konsep, diatas kertas keduanya sama, hanya saja khusus Framework yang dibangun dengan python, menggunakan penamaan lain, Model sama dengan model pada umumnya, Template sama dengan View pada konsep MVC, dan View pada MTV sama dengan Controller pada MVC.

# Persiapan Flask
tentu sebelum memulai aplikasi, kita harus menginstall flask pada komputer atau laptop kita.
ada dua pilihan sebelum memulai, install dengan virtual environment atau tanpa virtual environment,
ada baiknya kita menggunakan virtual environment untuk mendevelop aplikasi pada bahasa pemrograman python. virtual environment memudahkan kita untuk menggunakan apa saja library yang sesuai dengan kebutuhan aplikasi yang kita buat. Untuk selebihnya menggunakan Virtual environment bisa dibaca [disini](/2017/05/29/Mengenal-Virtual-Environment-pada-Python).
setelah bertapa untuk memilih menggunakan venv atau tidak, selanjutnya kita install flask menggunakan pip :

```bash
pip install flask
```

## Bagian Pertama, Hello World From Flask
kemudian kita buat file views1.py pada folder webFlask dengan koding sebagai berikut :

```python
#!flask/bin/python

from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return "hello world"

if __name__ == '__main__':
    app.run()

```
kemudian kita export environtmet app nya menggunakan skrip
```bash
export FLASK_APP=views1.py
flask run
```
untuk pengguna windows ganti export menjadi set.
kemudian akan muncul
```bash
* running on http://127.0.0.1:5000/
 ```
 buka browser arahkan pada url tersebut. dan lihat hasilnya

 pada kode diatas, pertama kita memanggil kelas flask. kemudian kita membuat instance kelas dan memanggil fungsi index sebagai view atau controller yang me-return string "hello world", untuk routingnya kita menggunakan decorator route untuk mengarahkan ke halaman mana aplikasi diload, dalam hal ini untuk index aplikasi di simbolkan dengan tanda '/'.

## Bagian Kedua Templating pada flask
Seperti yang dijelaskan di awal, istilah view pada mvc dikenal sebagai template pada flask. Dalam hal ini kita membuat template dan static file untuk membuat file html.

pada folder webFlask buatlah folder templates dan static dimana didalam folder static kita akan menempatkan file css dan js dengan struktur static/assets/css atau  static/assets/js sebenarnya tidak harus menggunakan folder assets, namun untuk memudahkan struktur aplikasi web terutama managemen files berdasarkan tipenya, digunakan struktur yang umumnya menggunakan folder assets , sedangkan pada folder templates kita akan menaruh file html.
berikut ini merupakan struktur foldernya :

<img src="https://res.cloudinary.com/ypraw/image/upload/v1496012486/flask2_ckojgs.png" width="200" height="200">


kita isikan pada folder static kita dengan bootstrap, yang dapat di download [disini](http://getbootstrap.com/getting-started/).
buat file index2.html didalam folder template dan tuliskan kode berikut :

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>FLASK TUTORIAL</title>
    <link rel="stylesheet" href="/assets/css/bootstrap.min.css">
    <!--[if lt IE 9]>
      <script src="https://cdn.jsdelivr.net/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://cdn.jsdelivr.net/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
     <div class="row">
         <div class="col-md-4">

         </div>
         <div class="col-md-4 ">
             <div class="panel panel-danger">
               <div class="panel-heading">
                 <h3 class="panel-title">Yeay, Tutorial Flask</h3>
               </div>
               <div class="panel-body">
                 Panel bootstrap yang ditulis dengan Flask
               </div>
             </div>
         </div>
         <div class="col-md-4">
         </div>
     </div>


    <script src="https://cdn.jsdelivr.net/jquery/2.1.3/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/bootstrap/3.3.5/js/bootstrap.min.js"></script>
  </body>
</html>
```

keliatan panjang ??? hahaha abaikan aja, gunakanlah fitur autocomplete dan tentunya teks editor yang compatible dengan HTML dan juga python seperti [atom](https://atom.io) untuk memudahkan pengetikan tag-tag html.

setelah itu kita membuat views2.py dan ketikkan skrip berikut :

```python
#!flask/bin/python

from flask import Flask, render_template
app = Flask(__name__, static_url_path='')

@app.route('/')
def index(name="Yunindyo"):
    return render_template('index2.html', name=name)

if __name__ == '__main__':
    app.run()
```
kode diatas sama seperti sebelumnya hanya kita menambahkan kelas render_template untuk merender halaman index2.html dan secara otomatis meload file pada folder tempate dimana yang akan diload adalah file index2.html dan juga kita memberitahukan aplikasi bahwa kita memiliki static folder dengan syntax static_url_path, yang secara otomatis akan mencari folder static.
ketikkan kode dibawah ini pada terminal/cmd :

```bash
export FLASK_APP=views2.py
flask run
     * running on http://127.0.0.1:5000/
```

pasti pada bingung kok di fungsi index ada paramater name ? lah gunanya apa ???
nah disini saya mencontohkan untuk mempassing variable dari view ke tempalte.
let's code guys :

``` html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>FLASK TUTORIAL</title>

    <link rel="stylesheet" href="/assets/css/bootstrap.min.css">


    <!--[if lt IE 9]>
      <script src="https://cdn.jsdelivr.net/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://cdn.jsdelivr.net/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
     <div class="row">
         <div class="col-md-4">

         </div>
         <div class="col-md-4 ">
             <div class="panel panel-danger">
               <div class="panel-heading">
                 <h3 class="panel-title">Yeay, Tutorial Flask</h3>
               </div>
               <div class="panel-body">
                 Panel bootstrap yang ditulis dengan Flask
               </div>
               <div class="panel-footer">
                   ditulis oleh {{name}}
                   <ul>
                       {%for i in range (1,11,1)%}
                       <li>ini merupakan looping ke {{i}}</li>
                       {%endfor%}
                   </ul>
               </div>
             </div>
         </div>
         <div class="col-md-4">

         </div>
     </div>


    <script src="https://cdn.jsdelivr.net/jquery/2.1.3/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/bootstrap/3.3.5/js/bootstrap.min.js"></script>
  </body>
</html>
```

di dalam skript diatas, kita mempassing nilai variabel name dan looping angka. Untuk mempassing variabel kita menggunakan tag {{variabel}} dan untuk menuliskan skripting kita menggunakan { % % }
tambahkan kode diatas pada file index.html sebelumnya, lalu jalankan kembali.

<img src="https://res.cloudinary.com/ypraw/image/upload/v1496015088/flask4_xsct9c.png" width=100% height=auto>

# Penutup
Demikian Tutorial flask tahap pertama mengenai view
dan templating, kenapa?? karena masih ada tahap untuk membuat koneksi database menampilkan nya didalam template, tentunya akan lebih seru lagi.
see you pada tutorial selanjutnyaaaaaaa

untuk Source Codenya bisa di download [disini](https://github.com/ypraw/Tutorial-Flask) pilih directory webFlask
