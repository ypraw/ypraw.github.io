---
title: Tutorial Dasar Flask Framework (ke-tiga)
category: "flask tutorial dasar"
author: Yunindyo Prabowo
---

Yeay, Akhirnya Tutorial Dasar Flask memasuki tahap akhir. Yaitu tahap koneksi dengan database. Tutorial ini merupakan tutorial ketiga mengenai Flask dasar dan juga merupakan bagian kelima dari tutorial dasar Flask, yaitu <b>CRUD menggunakn raw query Mysql</b>. Sesuai dengan tujuan mengapa tutorial ini dibuat yaitu membuat **_The Real Apps On Flask_**, sebenernya sih bukan aplikasi beneran dengan segala macam kompleksitasnya hahaha, melainkan aplikasi yang mencakup Templating, Routing, viewing dan CRUD sebagai dasar pondasi Aplikasi yang kelak dibangun oleh pembaca masing-masing.
<!--more-->
Sebagai rangkuman, pada tutorial-tutorial sebelumnya kita telah mempelajari:

  | Tutorial                                                            | Bagian    |   Konten              |
  |-------                                                              |---------  |---------              |
  |[Tutorial kesatu](/Tutorial-Flask-Framework)              | Kesatu    | Say Hello From Flask  |
  |[Tutorial kesatu](/Tutorial-Flask-Framework)              | Kedua     | Templating            |
  |[Tutorial kesatu](/Tutorial-Flask-Framework)              | Ketiga    | Routing dan Hyperlink |
  |[Tutorial kedua](/Tutorial-Flask-Framework-Bagian-2)      | Keempat   | The Real App on Flask |

# Memilih dan dipilih
Sub-judulnya kok agak gimana ya gitu :p, hahaha. Didalam Flask kita diperkenankan untuk menggunakan query langsung ataupun menggunakan ORM seperti SQL-Alchemy. Umumnya para penggiat flask menggunakan Sql-Alchemy sebagai pendamping Flask, ini dikarenakan
penggunaan ORM lebih unggul dalam hal efisiensi kode dan tentunya adalah sekuritasnya. Ngomong-ngomong, udah tau ORM itu apa ? Singkatnya ORM adalah teknik untuk menghubungkan paradigma pemrograman OOP dan mengkonversi datanya dengan lingkungan database relasional atau dengan kata lain teknik penyimpanan data dalam bentuk objek. Untuk lebih jelasnya bisa [googling](https://en.wikipedia.org/wiki/Object-relational_mapping) sendiri wkwkwkwk.

Pada Tutorial bagian kelima ini yang juga sebagai penutup keseluruhan tutorial dasar Flask, kita akan membuat Koneksi kedalam database menggunakan database MySql dengan metode raw query.

Seperti biasa, dalam tiap tutorial baik template maupun views kita bedakan berdasarkan bagiannya dengan contoh penamaan untuk template bagian 1 namaTemplate1.html dan untuk Views nya views1.py dan begitu seterusnya.

# Membuat Kelas Koneksi
Sebagai pengingat, Python dalam hal ini adalah bahasa pemrograman berbasis OOP yang juga mendukung koneksi terhadap database, jika belum tahu cara menghubungkan python dengan database, bisa dilihat [disini](/2017/06/08/Membuat-Koneksi-Database-pada-Python), dan saya anggap pembaca telah mengerti cara membuat database.
Jika sudah taruhlah pada folder root aplikasi.

# Membuat views (Controller)
Tentu seperti yang saya bahas pada awal tutorial ini, Aplikasi flask diatur oleh views, atau controller. Karena kita akan membuat aplikasi yang sedikit kompleks, views menjadi sangat vital untuk digunakan.

Berikut ini merupakan views pada tutorial bagian kelima ini,

```python
#!flask/bin/python

from flask import Flask, render_template, request, url_for, redirect, session
import connection as db

app = Flask(__name__, static_url_path='')

konek = db.MysqlUserDB('127.0.0.1', 'root', '', 'pos')
cur = konek.getDB()


@app.route('/')
def index():
    if 'username' in session:
        return redirect("/dashboard")
    return render_template('home5.html')


@app.route('/login', methods=['GET', 'POST'])
def login():
    error = None
    if request.method == 'POST':
        if validasi_login(request.form['username'], konek.computeMD5hash(request.form['password'])):
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
    cur.execute("SELECT * from tb_user WHERE username=%s AND password=%s",
                (username, password))
    if cur.fetchone():
        return True
    else:
        return False


@app.route('/dashboard')
def dashboard():
    if 'username' in session:
        cur.execute("SELECT * from product")
        resultProduct = cur.fetchall()
        return render_template('dashboard5.html', resultProduct=resultProduct)
    else:
        return redirect(url_for('index'))


@app.route('/product/add', methods=['GET', 'POST'])
def add_product():
    # cek apakah user sudah login, untuk mencegah akses data pada database
    if 'username' in session:
        if request.method == "GET":
            return render_template("add_product5.html")
        # ambil data dari form add product
        name = request.form["name"]
        price = request.form["price"]
        stock = request.form["stock"]

        # input ke database
        cur.execute("INSERT INTO product values ((%s),(%s),(%s),(%s))",
                    (None, name, price, stock,))

        return redirect("/dashboard")
    # jika belum login maka diarahkan ke login page
    else:
        return redirect(url_for('login'))


@app.route('/product/update', methods=['GET', 'POST'])
def update_product():

    # cek apakah user sudah login, untuk mencegah akses data pada database
    if 'username' in session:
        product_id = request.args['id']
        if request.method == "GET":
            cur.execute("SELECT * from product WHERE id = (%s)", product_id)
            result = cur.fetchone()
            return render_template("edit_product5.html", result=result)

        # ambil data dari form edit product
        name = request.form["name"]
        price = request.form["price"]
        stock = request.form["stock"]

        # Get , while rule reques method is POST
        cur.execute("UPDATE product SET name= (%s), price= (%s), stock= (%s)"
                    "Where id= ( %s)",
                    (name, price, stock, product_id))
        return redirect("/dashboard")
    # jika belum login maka diarahkan ke login page
    else:
        return redirect(url_for('login'))


@app.route("/product/delete")
def product_delete():
    """Delete product"""
    product_id = request.args['id']
    cur.execute("SELECT * from product WHERE id = (%s)", product_id)

    if cur.fetchone():
        # delete product by id
        cur.execute("DELETE FROM product WHERE id =(%s)", product_id)
    return redirect("/dashboard")


#   End Bagian kelima
# if __name__ == '__main__':
app.debug = True
app.secret_key = '4KuC1nT@K4MU'
app.run()

```
Pada aplikasi ini, terdapat 5 bagian yaitu homepage, login-page, dashboard-page, edit-page, add-page. Selain homepage, 4 lainnya merupakan bagian pokok aplikasi Crud yang nantinya kita akan terapkan. Dan kesemuanya di atur pada views.

## Method Login pada views5.py
Seperti pada tutorial [sebelumnya](/2017/06/06/Tutorial-Flask-Framework-Bagian-2) telah dijelaskan penggunaan session untuk login, pada tutorial kali ini source hanya di modifikasi agar menyesuaikan login dengan kelas koneksi yang kita buat.

```python
@app.route('/login', methods=['GET', 'POST'])
def login():
    error = None
    if request.method == 'POST':
        if validasi_login(request.form['username'], konek.computeMD5hash(request.form['password'])):
            session['username'] = request.form.get('username')
            return redirect(url_for('dashboard'))
        else:
            error = "incorrect password or username"
    return render_template('login.html', error=error)
```
pada syntax diatas, kita mengambil value dari form username dan value dari form password yang telah di rubah menjadi md5 (bisa dilihat di kelas koneksi untuk fungsi md5 nya).
kemudian kita membuat session untuk username, jika matching antara username dan password pada database, maka kita mengarahkan ke halaman dashboar.

## Method dashboard

```python

@app.route('/dashboard')
def dashboard():
    if 'username' in session:
        cur.execute("SELECT * from product")
        resultProduct = cur.fetchall()
        return render_template('dashboard5.html', resultProduct=resultProduct)
    else:
        return redirect(url_for('index'))
```
Pada method ini, pertama kali adalah mengecek session, hal ini untuk mencegah user yang belum login untuk mengakses halaman ini. Disini kita melakukan query untuk menampilkan semua produk dari database yang ditampilkan pada table di halaman ini.

## Method add_product
```python
@app.route('/product/add', methods=['GET', 'POST'])
def add_product():
    # cek apakah user sudah login, untuk mencegah akses data pada database
    if 'username' in session:
        if request.method == "GET":
            return render_template("add_product5.html")
        # ambil data dari form add product
        name = request.form["name"]
        price = request.form["price"]
        stock = request.form["stock"]

        # input ke database
        cur.execute("INSERT INTO product values ((%s),(%s),(%s),(%s))",
                    (None, name, price, stock,))

        return redirect("/dashboard")
    # jika belum login maka diarahkan ke login page
    else:
        return redirect(url_for('login'))

```
pada method ini,kita juga melakukan pengecekan session, setelah itu, kita mengecek apakah ada request terhadap method get (dalam hal ini kita menggunakan method POST) karena itu kita akan melanjutkan ke syntax berikutnya, yaitu mengambil data dari form kemudian mengeksekusinya menggunakan Inser.

## Method update_product
```python
@app.route('/product/update', methods=['GET', 'POST'])
def update_product():

    # cek apakah user sudah login, untuk mencegah akses data pada database
    if 'username' in session:
        product_id = request.args['id']
        if request.method == "GET":
            cur.execute("SELECT * from product WHERE id = (%s)", product_id)
            result = cur.fetchone()
            return render_template("edit_product5.html", result=result)

        # ambil data dari form edit product
        name = request.form["name"]
        price = request.form["price"]
        stock = request.form["stock"]

        # Get , while rule reques method is POST
        cur.execute("UPDATE product SET name= (%s), price= (%s), stock= (%s)"
                    "Where id= ( %s)",
                    (name, price, stock, product_id))
        return redirect("/dashboard")
    # jika belum login maka diarahkan ke login page
    else:
        return redirect(url_for('login'))

```
Pada method ini pertama kali yang kita lakukan adalah mengambil argumen id pada url (perhatikan url pada template dashboard bagian edit) disini saya mengambil id berdasarkan item yang di klik oleh user, kemudian kita melakukan query untuk mengisikan form pada halaman edit_product5.html guna menampilkan status info saat ini yang akan di edit oleh user.
setelah ditampilkan, langkahnya hampir sama dengan method add, kita mengambil variabel dar form (dalam hal ini adalah yang sudah diedit) kemudian kita mengeksekusinya kedalam database.

## Method product_delete
```python
@app.route("/product/delete")
def product_delete():
    """Delete product"""
    product_id = request.args['id']
    cur.execute("SELECT * from product WHERE id = (%s)", product_id)

    if cur.fetchone():
        # delete product by id
        cur.execute("DELETE FROM product WHERE id =(%s)", product_id)
    return redirect("/dashboard")

```
pada method ini kita mengambil id pada url, kemudian kita melakukan query. Jika query berhasil dilakukan maka kita akan mendelete berdasarkan product id yang kita ambil sebelumnya.

# Template
Sebenernya template pada template yang saya buat, tidak banyak koding dari Flask itu sendiri, lebih kepada markup html dan bootstrap. tapi sebagai formalitas wkwkwk, saya juga akan menjelaskan beberapa bagian pada template yang dibagun.

## Template dashboard

Pada template dashboard terdapat syntax
```html
{% for item in resultProduct %}
<tr>
    <td>
        {{ item[0] }}
    </td>
    <td>
        {{ item[1] }}
    </td>
    <td>
        {{ item[2] }}
    </td>
    <td>
        {{ item[3] }}
    </td>
    <td>
        <a href="/product/update?id={{ item[0] }}">edit</a>
        <a href="/product/delete?id={{ item[0] }}">delete</a>
    </td>
</tr>
{% endfor %}
```
Syntax diatas merupakan syntax hasil query (lihat views dashboard) yang saya return menggunakan nama resultProduct. Setelah kita mereturn (dalam hal ini resultnya masih berupa tuple) sehingga kita harus memecah value nya menggunakan looping. Untuk memanggil valuenya kita menggunakan pemanggilan index.
pada hyperlink edit dan delete, url yang akan dipanggil di kerucutkan berdasarkan id produk yang di klik oleh user yang berada pada index ke 0 (lihat susunan database, id berada pada kolom paling kiri yang artinya berada pada index 0 jika direpresenasikan kedalam tuple).

untuk template-template lainnya juga sama, semua looping ataupun pemanggilan paramater didala template merupakan hasil return render_template dari method-method terkait pada views.

# ScreenShoot

## Halaman Depan
<img src="https://res.cloudinary.com/ypraw/image/upload/v1497044623/flask3-1_ptlvs0.png" width="100%" height="auto">

## Halaman login
<img src="https://res.cloudinary.com/ypraw/image/upload/v1497044747/flask3-2_qmjqh7.png" width="100%" height="auto">

## Halaman Dasboard
<img src="https://res.cloudinary.com/ypraw/image/upload/v1497044741/flask3-3_z3ejfe.png" width="100%" height="auto">

## Halaman Add product
<img src="https://res.cloudinary.com/ypraw/image/upload/v1497044743/flask3-4_jzqmeg.png" width="100%" height="auto">

## Halaman Update Product
<img src="https://res.cloudinary.com/ypraw/image/upload/v1497044743/flask3-5_hckvs5.png" width="100%" height="auto">

# Penutup
Alhamdulillah akhirnya tutorial akhir Dasar Flask telah berakhir, semoga dengan tutorial akhir ini para pemabaca dapat memahami apa itu FLask dan fungsi-fungsi dasar dalam membangun aplikasi web berbasis python dengan Framework flask.
Untuk tutorial selanjutnya saya akan menjelaskan mengenai Flask dengan ORM SQL-Alchemy

Untuk Source Code keselurahan tutorial ini dapat di download dari github [saya](https://github.com/ypraw/Tutorial-Flask/tree/master/webFlask)
