---
title: "Pypspark Bolierplate for ETL Project"
category: ["python","data engineer","etl","elt","pyspark"]
author: yunindyo prabowo
---

Untuk para data engineer, siapa yang tidak mengenal library [Apache Spark](https://spark.apache.org/) ??? sebuah mesin analitikal untuk pemrosesan dataset yang besar. Umumnya pemrosesan data yang dilakukan berkaitan dengan mengambil dari berbagai sumber data dan melakukan proses aggregasi atau penggabungan data sehingga menghasilkan suatu informasi baik berupa report, ataupun sebuah rekomendasi jika didalamnya terdapat proses pembelajaran oleh algoritma machine learning. Dari kompleksitas diatas, ada istilah umum yang sering digunakan, yaitu [ETL (Extract, Transform, Load)](https://en.wikipedia.org/wiki/Extract,_transform,_load). Untuk itu, pada artikel ini, saya akan menjelaskan mengenai cara menggunakan spark dengan interaksi high-level api menggunakan pyspark yang berbasis Python.

Dalam artikel ini, kita akan membuat sebuah kerangka kerja atau bolierplate pyspark sebagai pendekatan untuk melakukan proses ETL. Yang akan kita bahas meliputi

* Instalasi dan management virtual environtment python
* Penyusunan struktur project pyspark
* Menangani struktur dependency dan paket untuk flow pyspark

## Persiapan Instalasi Paket

Untuk memulai project python, saya pribadi lebih sering menggunakan virtual environtment agar dependensi projeknya tidak tercampur aduk antara satu projek dengan projek lainnya. Seringnya saya menggunakan pipenv sebagai paket manager projek. Untuk referensinya dapat dibaca pada tautan berikut [Pipenv](https://ypraw.github.io/management-paket-dan-virtual-environtment-menggunakan-pipenv/).
Atau anda dapat pula menggunakan venv.

langkah pertama, pastikan spark telah terinstall pada perangkat anda, jika belum anda dapat melakukan instalasi melalui tautan berikut [spark](https://spark.apache.org/downloads.html)

Langkah berikutnya yaitu memasang pyspark dengan perintah :

* Jika menggunakan pipenv

```BASH
pipenv install pyspark
```

* Jika menggunakan pip

```BASH
pip install pyspark
```
