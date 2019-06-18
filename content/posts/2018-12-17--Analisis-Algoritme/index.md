---
title: Analisis Algoritma
category: "strategi algoritma"
author: Yunindyo Prabowo
---

Algoritma sebagai salah satu fundamental dari cabang ilmu komputer merupakan bagian terpenting untuk dikuasai oleh orang-orang yang berada di lingkungan ini. Mulai dari para programmer sebagai praktisi dalam dunia nyata ataupun para peneliti-peneliti yang meriset mengenai perkembangan ilmu komputer. 
<!--more-->

Sebagai seorang yang terjun dalam bidang ilmu komputer, tentulah kita dituntut untuk dapat merancang serta mengembangkan algoritma berdasarkan masalah-masalah yang akan diselesaikan. Tentu dengan mempertimbangkan beberapa aspek yang nanti akan dibahas dalam tulisan ini.

Tulisan ini memiliki tujuan agar para pembaca dapat mengerti bagaimana cara mendesign dan merancang algoritma yang baik, serta dapat menganalisa algoritma yang kelak para pembaca kembangkan sehingga menghasilkan program yang baik. Serta dapat memberikan dasar untuk mengambil keputusan serta solusi-solusi kepada para pembaca dalam memilih serta merancang algoritma yang tepat.

## Algoritma

Tentu sebagai programmer ataupun orang yang berkecimpung dalam dunia ilmu komputer, kita sering mendengar kata algoritma, tentu sebelum  merancang dan mengembangkan kita terlebih tau harus mengerti apa itu _algoritma_.

> algoritma merupakan prosedur atau langkah-langkah yang logic untuk memecahkan atau menyelesaikan masalah.

Dalam mendefinisikan sebuah algoritma tentu kita memerlukan serta menggarisbawahi beberapa hal agar algoritma yang kita buat sesuai. Umumnya dalam mendesain suatu algoritma kita memerluka 3 hal berikut sebagai dasarnya, yaitu :
    
1. Masalah 
    > tentu merancang algoritma bertujuan untuk menyelesaikan masalah.
2. Input
    > Kondisi keadan atau data masukan sesuai dengan permasalahan
3. Output
    > kondisi akhir atau keluaran algoritma yang diharapkan menjadi solusi dari permasalah yang ada.

## Contoh algoritma

* Masalah
    > Menemukan total nilai dari n deret list
* Input
    > total n deret list
* Output
    > total nilai keseluruhan 

maka pertama-tama kita akan membuat pembuktiannya dalam program dengan bahasa python.

```python
def totalderet1(sizeList):
    total=0
    for value in range(1,sizeList+1):
        total+=value
    return total

size=10
print(f'total {size} bilangan adalah {totalderet1{size}}') # menghasilkan 55
```

dalam contoh program diatas, kita tahu bahwa total 10 deret bilangan dimulai dari 1 sampai 10 adalah 55, bagaiman dengan fungsi berikut ini, 

```python
def totalderet2(sizeData):
    return (sizeData*(sizeData+1))/2

size=10
print(f'total {size} bilangan adalah {totalderet2{size}}') # menghasilkan 55

```

fungsi **totalderet2** juga akan menghasilkan nilai 55 untuk 10 deret bilangan 1-10, namun yang jadi pertanyaan bagaimana dengan performancenya  ???

kita bisa membandingkan dengan timeit, 

```python
number=1000
time1 = timeit.timeit("totalderet1(size)",globals=globals(),number=number)
time2 = timeit.timeit("totalderet2(size)",globals=globals(),number=number)
```
dari hasil benchmark , didapatkan hasil sebagai berikut,

```bash
total 10 bilangan adalah dengan loop 55
total 10 bilangan adalah dengan fungsi matematika 55.0
timer dengan looop 0.00074
time dengan math 0.00018
```

sama-sama menghasilka nilai 55, namun memiliki waktu eksekusi yang berbeda, tentu ini menjadi tanda tanya bagi kita semua, mengapa hal demikian dapat terjadi.

Dengan melihat sekilas fungsi diatas kita tahu bahwa menyusun suatu algoritma tidak boleh sembarang, algoritma yang baik adalah algoritma yang dengan benar mengolah masukan menjadi keluaran yang diharapkan, yang menyelesaikan suatu permasalah, mudah diimplementasikan serta efisien dalam menggunakan resource memory terlepas dari bahasa pemrograman yang digunakan.

untuk bahasan selanjutnya, kita akan membahas mengenai notasi asimtotik BigO.