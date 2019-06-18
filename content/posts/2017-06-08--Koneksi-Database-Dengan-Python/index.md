---
title: Membuat Database dengan Python
category: "python"
author: Yunindyo Prabowo
---

Seperti yang kita ketahui, Python merupakan bahasa pemrograman yang mendukung hampir semua platform seperti desktop, web dan yang terbaru yaitu mobile android dengan kivy, selain itu kebanyakan penggunan python sebagai dasar scripting untuk berbagai aplikasi.

Tentu sebagai bahasa scripting, python juga mensupport koneksi dengan database, sebagai contoh, python secara default mendukung penggunaan SQLite, dan tentu juga mensupport database lainnya seperti postgresql, mysql, ataupun database nosql seperti mongoDB dsb.
<!--more-->
Pada tutorial ini, saya ingin menjelaskan sedikit mengenai cara koneksi Python dengan Database Mysql.

# Persiapan Environtment
Untuk menggunakan Mysql pada Python, tentunya kita harus menginstall mysql server, sebagai contoh anda dapat menggunakan xampp/lampp atau juga mysql server yang bisa di download [disini](https://dev.mysql.com/downloads/).
Pada tutorial ini, saya menggunakan Lampp sebagai mysql servernya.
Saya menganggap bahwa anda telah menginstall mysql-server di laptop anda masing-masing.

Setelah itu, kita dapat menyiapkan mysql driver sebagai penghubung antara python dengan mysql-server. Ada banyak jenis driver untuk mysql, seperti [Mysql-Connector](https://dev.mysql.com/downloads/connector/python/), [PyMysql](https://github.com/PyMySQL/PyMySQL), ataupun [MysqlClient](https://github.com/PyMySQL/mysqlclient-python).
Dalam tutorial ini, saya merekomendasikan menggunakan mysqlclient, karena dari dua sebelumnya memiliki kekurangan seperti performansi dan jarang update (saya gak akan bahas hal ini XD).

## Install MysqlClient

Sebelum memulai, untuk pengguna linux berbasis debian,ubuntu ataupun pengguna macOS, harus menginstall python dan mysql headers development dengan cara sebagai berikut :

```bash
sudo apt-get install python3-dev libmysqlclient-dev
```

atau pada MacOS

```bash
brew install mysql-connector-c
```

setelah menginstall development header dilanjutkan dengan menginstall mysqlclient melalu pip
```bash
pip install mysqlclient
```

> Note Bagi pengguna Windows, jika mengalami eror dapat mecoba beberapa cara berikut :
> * Install visual c++ (biasanya terjadi jika belum menginstall visual c++2010 atau ikuti requirement pada pesan erornya)
> * Install menggunakan file whl yang dapat di download [disini](http://www.lfd.uci.edu/~gohlke/pythonlibs/#mysqlclient)
> * downgrade versi mysqlclient dengan
> ```bash
> pip install mysqlclient==1.3.9
> atau
> pip install mysqlclient==1.3.4
> ```

Tentu secara umum python dapat menggunakan berbagai macam metode untuk memanggil suatu library, dengan metode direct, fungction ataupun model Objek orientasi.

Dalam bagian ini, saya akan menunjukkan 2 cara, menggunakan metode langsung dan metode OOP

# Membuat Database
Untuk cara pertama, kita menggunakan cara koneksi langsung. Sebelumnya kita harus membuat database terlebih dahulu yaaaa XD,
oke mari ketikkan script berikut

```mysql

CREATE TABLE `product` (
  `id` int(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  `price` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
 PRIMARY KEY (`id`));

```
lalu isikan dengan data menggunakan script berikut,
```mysql
INSERT INTO `product` (`id`, `name`, `price`, `stock`) VALUES
(1, 'Sabun Mandi Lux', 3500, 10),
(2, 'Marlboro Black Filter', 20700, 12),
(3, 'Sabun cuci Muka', 15000, 100);
```
# Direct Connection SELECT
Setelah data masuk kedalam database, langkah berikutnya kita akan melakukan query menggunakan python. Dalam contoh ini saya menggunakan metode direct connection yang artinya cara mengkoneksikannya langsung tanpa menggunakan kelas.

oke berikut ini contohnya :
``` python
import MySQLdb as db

connection = db.connect('127.0.0.1', 'root', '', 'pos')

cursor = connection.cursor()

query = "SELECT * from product"

cursor.execute(query)
result = cursor.fetchall()
for items in result:
    print(items)

```
pertama kali kita harus memanggil MysqlDB menggunakan syntax import.
kemudian kita mengkonekkan dengan database dan menyimpannya pada variabel connection.

Setelah itu kita mendefinisikan cursor pada object connection dan menyimpannya dengan nama yang sama yaitu cursor dimana cursor ini akan digunakan untuk mengesekusi query.

ketika query di eksekusi oleh kursor, maka kita dapat menampilnya dengan beberapa cara, fetchall yaitu mengambil semua baris pada database, kemudian ada fetchone yang mengambil data paling teratas.

dan result dari kode diatas adalah sebagai berikut
<img src="https://res.cloudinary.com/ypraw/image/upload/v1496964956/db1_bksohk.png" width="100%" height="auto">

# Direct Connection INSERT dan DELETE
Seperti umummnya koneksi dengan database, tentu ada yang namanya **_CRUD_** atau _**CREATE, READ, UPDATE Delete**_, maka kali ini kita akan mencoba untuk insert dan delete database.

Berikut contoh insert database ;
``` python
import MySQLdb as db

connection = db.connect('127.0.0.1', 'root', '', 'pos')

cursor = connection.cursor()
cursor.execute("INSERT INTO `product` VALUES (%s, %s, %s, %s)",
               ('', 'Chiki', '5000', '50',))
connection.commit()
```
pada insert database , kita menggunakan syntax dasar mysql yaitu insert, yang diikuti string lateral dengan metode bind paramater, yaitu kita membuat paramater menggunakan list, bukan mempassing string, karena hal ini akan mudah di SQL Injection.

untuk contoh delete :
```Python
import MySQLdb as db

connection = db.connect('127.0.0.1', 'root', '', 'pos')
cursor.execute("DELETE FROM `product` WHERE `product`.`id` = 12")
connection.commit()
```

# Direct Connection UPDATE
selanjutnya adalah update data pada database,

```python
import MySQLdb as db

connection = db.connect('127.0.0.1', 'root', '', 'pos')
cursor.execute("UPDATE product SET name= (% s), price= (%s), stock= (%s)"
               "Where id= ( % s)",
               ("Permen", "500", "10", "1"))
connection.commit()
```
sama seperti sebelum-sebelumnya, kita memanfaatkan bind paramater, dengan membuat isinya menjadi bentuk list sebagai salah satu upaya menghindari sql injection,

# Connection Class
Metode selanjutnya adalah menggunakan kelas untuk menginisialisasi koneksi pada database. Pada contoh ini saya hanya menggunakan kelas sebagai inisiator untuk menghubungkan ke database, untuk querynya tetap menggunakan metode biasa, sebagai catatan, ada 1 tools yang lebih baik dari segi efesiensi kode dan keamanan yaitu dengan menggunakan orm seperti sql-alchemy yang akan dibahas dalam tutorial Flask Versi 2.

Oke mari kita implementasi langsugn, pertama kita membuat kelas koneksi, dalam hal ini saya menamakan filenya connection.py

```python
import MySQLdb as mysql
import hashlib
import sys
import warnings


class MysqlUserDB:
    # initialization Connection Database
    # Init Start
    warnings.filterwarnings('error')

    def __init__(self, DBrootHost, DBrootUser, DBrootPass, DBrootDatabase):
        self.DBrootHost = DBrootHost
        self.DBrootUser = DBrootUser
        self.DBrootPass = DBrootPass
        self.DBrootDatabase = DBrootDatabase

        try:
            print("Checking connection of MYSQL ...")
            self.con = mysql.connect(DBrootHost, DBrootUser, DBrootPass, DBrootDatabase)
            self.cursor = self.con.cursor()
            self.cursor.execute('Select version()')
            print("Connected to Mysql Database\n")
        # except mysql.Error as error:
        #    print("Error %s\n Stop.\n" % error)
        #    sys.exit()
        except Warning as warn:
            print("Warning", warn)

    def CreateDB(self, DBrootDatabase):
        print("Creating database...")
        try:
            self.cursor.execute('CREATE database if NOT exists ' + DBrootDatabase)
            self.cursor.execute("SHOW DATABASES LIKE %s", (DBrootDatabase,))
            dbs = self.cursor.fetchone()
            print("Database created: ", dbs[0])
        except Warning as warn:
            print("Warning: %s \nStopping Process.\n" % warn)
            sys.exit()

    def GrantsAccess(self, DBrootDatabase):
        print("Accessing Account ...")
        try:
            self.cursor.execute("SHOW DATABASES LIKE %s", (DBrootDatabase,))
            result = self.cursor.fetchone()
            print("Access Granted for Database", result[0])
        except Warning as warn:
            print("Warningg %s" % warn)

    def getDB(self):
        return self.cursor

    def delCon(self):
        print("Finishing operation ...")
        self.cursor.close()
        self.con.close()
        print("Finished")
# Init End
```
dalam kelas fungsi diatas, kita menginisialisasi paramater untuk koneksi yang dinisialisasi pada method init, Sedangkan untuk me-return hasil koneksi, kita menggunakan method getDB hal ini untuk mereturn cursor untuk dipanggil saat kita melakukan eksekusi, dan untuk memutuskan koneksi kita menggunakan method delcon, sedangkan sisa method lainnya hanya sebagai method pendukung, sebenernya untuk lebih memudahkan lagi, kita bisa membuat method-method khusus crud seperti method untuk melakukan select dan sebagainya, namun karena keterbatasan waktu, maka saya hanya membuat dasarnya saja.

Setelah itu, kita membuat file baru untuk mengetes apakah koneksi kita berhasil dan melakukan query.
dalam hal ini saya menggunakan connectionTes.py

```python
import connection as dbs
import warnings
warnings.filterwarnings('error')

mysqli = dbs.MysqlUserDB(DBrootHost='127.0.0.1', DBrootUser='root',
                         DBrootPass='', DBrootDatabase='pos')

db = mysqli.getDB()

try:
    db.execute("select * from product")
    results = db.fetchall()
    for result in results:
        print(result)
except db.Error as error:
    print(error)
mysqli.delCon()
```

dalam hal ini saya, mengimport kelas connection sebagai db. Setelah itu di inisialisasi dengan variabel baru bernaman mysqli.
dan membuat object cursor pada db dengan memanggil object kelas mysql.getDB()

untuk querynya hampir sama dengan yang sebelumnya. perbedannya adalah kita mengkoneksikannya menggunakan kelas,

# PENUTUP

selebihnya adalah tergantung baimana para pembaca mengopimasi baik dari sisi program maupun dari sisi query, karena pada dasarnya tidak ada sistem yang aman. Hal inilah yang membuat banyak developer berlomba-lomba mengembangkan teknik ataupun tools demi memberikan keamanan yang lebih, seperti yang saya singgung sebelumnya yaitu menggunakan orm seperti sql-alchemy.
akhir kata, dengan tutorial singkat ini insya allah para pembaca dapat sedikit mengetahui teknik-teknik untuk membuat koneksi dengan database, untuk tutorial selanjutnya yaitu mengimplementasikannya menggunakan [FLASK](/Dasar-Flask-Framework-Bagian-kesatu/).

untuk source code bisa di download di [Github saya](https://github.com/ypraw/Python-In-Action/tree/master/Database%20Connection)
