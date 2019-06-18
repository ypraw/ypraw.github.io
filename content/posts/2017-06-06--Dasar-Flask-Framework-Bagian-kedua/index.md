---
title: Tutorial Dasar Flask Framework (ke-dua)
category: "flask tutorial dasar"
author: Yunindyo Prabowo
---

Oke langsung aja kita mulai, seperti pada tutorial [sebelumnya](/Dasar-Flask-Framework-Bagian-kesatu/) saya telah menjelaskan fungsi dasar flask seperti routing, view dan templating. Dan pada kesempatan kali ini, saya ingin menjelaskan mengenai cara membuat halaman login pada flask.

## Opening
Pada bagian ini, kita akan membuat sistem login sederhana tanpa koneksi dengan database, hanya menggunakan templating dengan teknik template inheritance dan routing tanpa database. Hal ini merupakan tujuan akhir dari keseluruhan bagian dari tutorial ini. Sebagai catatan pada bagian 1, 2, dan 3 hanya sebagai pengenalan Flask, sedangkan pada Tutorial 3 dan seterusnya merupakan tutorial utuh untuk membuat aplikasi CRUD sederhana pada Flask.
Oke berikut ini merupakan penjelasan singkat file-file yang nanti kita akan buat pada bagian 3 ini,

### Template (/webFlask/Templates/)
Diletakkan pada folder templates.

* **home.html**
> Merupakan file index yang akan diakses saat pertama kali dijalankan.

* **login.html**
> Merupakan file untuk halaman login, berisikan form standar html dan bootstap untuk login.

* **dashboard.html**
> Merupakan file untuk halaman dasboard. untuk sementara kita fungsikan sebagai halaman yang diakses ketika user berhasil login.

* **base.html**
> Merupakan file untuk base keseluruhan template, atau dalam hal ini di sebut dengan teknik template inheritance

### Views (/webFlask/)
Diletakkan pada folder root aplikasi.
* **views4.py**
> Merupakan file views atau controller pada aplikasi kita. Berisikan seluruh metode untuk routing ataupun methods-methods yang kita gunakan pada aplikasi kita.

### Template Inheritance (base.html)
sebelum kita memulai, didalam templating pada flask dikenal sebuah teknik inheritance antar template, hal ini untuk memudahkan proses maintance dan tentunya menghemat penulisan kode dimana teknik ini memudahkan kita untuk membuat kerangka dasar sebagai kerangka yang berisikan elemen-elemen umum pada situs yang kita buat.

Buat sebuah file base.html pada folder templates, kemudian isikan kode berikut :
```html
<!DOCTYPE html>
<html lang="en">
  <head>
      {% block head %}
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{% block title %}{% endblock %}FLASK TUTORIAL</title>
    <link rel="stylesheet" href="/assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="/assets/css/custom.css">
    {% endblock %}
  </head>
  <body>
  {% block panel %}
                <div class="container-fluid" style="background-color:#023e79;padding-top:10px;">
                    <div class="row">
                        <div class="col-md-9 col-xs-9">
                                <a href="{{ url_for('index')}}" style="color:#fff;">
                                 <h1 ><strong>Tutorial Flask</strong> <small>oleh Yunindyo Prabowo</small></h1>
                                 </a>
                        </div>
                        <div class="col-md-3 col-xs-3" style="padding-top:10px;">
                            {% block button_login %}
                             <a href="{{url_for('login')}}" class="btn btn-info" role="button">Login Here !!!</a>
                             {% endblock %}
                        </div>
                    </div>
                </div>
      {% endblock %}
      <div class=""id="content">
          {% block content %}{% endblock %}
      </div>
     <script src="/assets/js/jquery-min.js"></script>
     <script src="/assets/js/bootstrap.min.js"></script>
  </body>
</html>
```

Secara umum untuk penulisan base.html mengikuti gaya umum penulisan html, dimana tiap-tiap bagiannya kita partisi menggunakan syntax block diikuti nama blocknya. Dan akan diturunkan ke kelas turunannya.

## Template Home (home.html)

```html
{% extends "base.html" %}
{% block title %}
Welcome
{% endblock %}
```
Untuk memulai inheritance, dibutuhkan syntax extend diikuti nama file parentnya, atau dalam hal ini adalah base.html.
perhatikan block title, saya menambahkan kata "welcome", ini akan menambahkan kata welcome pada title, sehingga title yang sekarang akan menjadi "_Welcome Flask Tutorial_" dimana kata _Flask Tutorial_ diambil dari partisi title pada base.html (perhatikan kembali base.html).

## Template login (login.html)
Langkah berikutnya kita membuat halaman login.html:

```html
{% extends "base.html" %}
{% block title %}
    Login
{% endblock %}
{% block button_login %}
{% endblock %}
    {% block content %}
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6 col-md-offset-3">
                    <h4 style="border-bottom: 1px solid #c5c5c5;">
                        <span class="glyphicon glyphicon-user"></span>
                        Account Login
                    </h4>
                    {% if error %}
                    <div class="alert alert-danger alert-dismissible" role="alert">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <strong>{{ error }}</strong>
                    </div>
                    {% endif %}
                    <form action="{{ url_for('login') }}" method="POST" style="padding:20px;">
                        <div class="form-group input-group">
                            <span class="input-group-addon">
                                @
                            </span>
                            <input class="form-control" placeholder="username" name="username" type="username" required="" autofocus="">
                        </div>
                        <div class="form-group input-group">
                            <span class="input-group-addon">
                                <i class="glyphicon glyphicon-lock"></i>
                            </span>
                            <input class="form-control" placeholder="Password" name="password" type="password" value="" required="">
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary btn-block">
                                Access
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        {% endblock %}
```
pada template login, kita juga meng-extend file base.html, hanya saja, kita membuang 1 partisi dari base.html yaitu partisi button. Untuk menghilangkan block yang tidak dibutuhkan dari parentnya, maka tulis nama blocknya diakhiri dengan endblock tanpa mengisi apapun. Sedangkan untuk content, perhatikan kembali base.html.Dalam block content saya memberikan form isian password dan username.

## Template Dashboard (dashboard.html)
berikutnya adalah template dasboard.html:
```html
{% extends "base.html" %}
{% block title %}
    Dasboard
{% endblock %}
{% block panel %}
{% endblock %}
{% block content %}
        <div class="" style="padding:10px">
            <div class="panel panel-success">
                <div class="panel-heading">
                    <div class="row">
                        <div class="col-md-6">
                            <h1><strong>Dasboard</strong> <small>oleh {{username}}</small></h1>
                        </div>
                        <div class="col-md-6">
                            <a href="{{ url_for('logout') }}"class="btn btn-info navbar-right" role="button" style="margin-top:15px;margin-right:5px;"><span class="glyphicon glyphicon-off" aria-hidden="false"></span> Logout</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <h1><strong>HELLO {{username}}</strong></h1>
                    </div>
                </div>
            </div>
        </div>
{% endblock %}
```
nah setelah mengenal inheritance, kita tidak perlu lagi untuk menulis ulang pada setiap file html, agar kode tetap minimal.

## Views Sebagai controller (views4.py)
berikut ini merupakan potongan kode views4.py:
```python
@app.route('/login', methods=['GET', 'POST'])
def login():
    error = None
    if request.method == 'POST':
        if validasi_login(request.form['username'], request.form['password']):
            session['username'] = request.form.get('username')
            return redirect(url_for('dashboard'))
        else:
            error = "incorrect password or username"
    return render_template('login.html', error=error)

@app.route('/logout')
def logout():
    session.pop('username', None)
    return redirect(url_for("index"))

def validasi_login(username, password):
    if username == password:
        return True
    else:
        return False

@app.route('/dashboard')
def dashboard():
    if 'username' in session:
        return render_template('dashboard.html', username=session['username'])
    else:
        return redirect(url_for('index'))
```
Untuk penjelasan lengkapnya sebagai berikut :

#### Method Login
perhatikan rooting login, pada rooting login menunggu request dari method GET dan POST. Kemudian kita mengecek, apakah ada request method atau tidak, jika iya maka kita memanggil method validasi_login, dalam tutorial ini validasi bernilai benar jika username dan password identik.
kemudian kita membuat session bernama username yang diambil dari form username dengan syntax requset.form.get lalu mengarahkan dashboard.
jika validasi bernilai salah, maka kita men-set error menjadi suatu informasi,
kemudian mereturn kembali halaman login. Dengan eror yang bernilai String "incorect"
jika tidak ada request apapun, maka kita juga merender halaman login, namun tidak dengan variabel error, atau dalam hal ini error bernilai **None**,

Perhatikan file login.html
disitu terdapat syntak **if Error**, syntax ini untuk mengecek apakah terjadi eror atau tidakm jika, terjadi eror maka ada alert untuk mempassing nilai error.

#### Method logout
Dalam method ini jika sesion ada pada dictionary, maka kita menghapusnya, jika tidak, maka kita return default atau dalam hal ini kembali ke page index, jika baik key dan default tidak tersedia atau didefinisikan, maka KEYERROR akan di raised sebagai exception.

#### Method validasi_login
Seperti dari awal tutorial ini, kita hanya akan membuat sistem login tanpa database, untuk memvariasikannya, maka kita membuat semacam equal logic value, dimana dua inputan yaitu password dan username harus sama.

#### Method dashboard
pada method ini, kita mengecek apakah ada session username, jika ada, maka kita akan mengarahkan ke halaman dasboard, jika tidak, maka akan kembali ke index.

# Penutup
Salah satu kelebihan framework dengan template engine adalah inheritance template yang berguna meringkas kode menjadi minimal. Untuk Tutorial selanjutnya adalah CRUD.

> Note, Source Code dapat di Download [disini](https://github.com/ypraw/Tutorial-Flask/tree/master/webFlask)