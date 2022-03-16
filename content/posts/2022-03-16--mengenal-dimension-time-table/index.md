---
title: "Mengenal dimension time table"
category: ["python", "data engineer", "sql", "dim time"]
author: Yunindyo Prabowo
---

Halo para pembaca, sudah lama saya tidak menulis artikel mengenai dunia programming. Pada kesempatan kali ini saya akan sedikit bercerita mengenai _daily task_ saya sebagai seorang _data engineer_ lebih khususnya lagi pengenalan mengenai _**dimension time table**_ atau lebih sering dikenal sebagai \_**dim time**.

Sebagai _data engineer_ kita sering dituntut untuk berkolaborasi dengan tim data lainnya seperti _business intelligence_ untuk menyediakan data yang konsisten, terstruktur dan juga valid, sehingga dapat diolah sehingga menghasilkan informasi yang berguna misalnya report. Berbicara mengenai report bagi para _business intelligence_ tentu akan sering berkutat mengenai bagaimana performansi sebuah produk, sales, penjualan dan sebagainya dan biasanya pula pencapaian-pencapaian ini akan diukur berdasarkan waktu-waktu tertentu, seperti quartal, semester, dan sebagainya. Untuk itu pada kesempatan kali ini saya akan membahas mengenai time dimension dan bagaimana keberadaannya dapat membantu dalam penyajian data yang lebih komprehensif.

## Apa itu Time dimension

_Time Dimension_ merupakan definisi waktu tertentu pada periode tertentu yang digunakan sebagai acuan dalam menganalisa suatu model. Misalnya model _financial accounting_ untuk melihat performansi penjualan suatu produk. _Dim Time_ tidak terikat pada aturan tertentu ataupun prosedur tertentu, dan sebaliknya _dim time_ akan selalu mengikuti kebutuhan model yang digunakan, laporan yang ingin dihasilkan. _Dim time_ secara umum meliputi beberapa periode waktu tertentu seperti quartal tahun, semester, minggu tahunan, minggu bulanan dan sebagainya.

Sebagai contoh perhatikan tabel dibawah ini

| date       | day_name  | day | month   | week of year | year | quarter | year_half | week_in_month |
| ---------- | --------- | --- | ------- | ------------ | ---- | ------- | --------- | ------------- |
| 2022-01-01 | Saturday  | 1   | January | 1            | 2022 | 1       | 1         | 1             |
| 2022-01-02 | Sunday    | 2   | January | 1            | 2022 | 1       | 1         | 1             |
| 2022-01-03 | Monday    | 3   | January | 2            | 2022 | 1       | 1         | 1             |
| 2022-01-04 | Tuesday   | 4   | January | 2            | 2022 | 1       | 1         | 1             |
| 2022-01-05 | Wednesday | 5   | January | 2            | 2022 | 1       | 1         | 1             |
| 2022-01-06 | Thursday  | 6   | January | 2            | 2022 | 1       | 1         | 1             |
| 2022-01-07 | Friday    | 7   | January | 2            | 2022 | 1       | 1         | 1             |
| 2022-01-08 | Saturday  | 8   | January | 2            | 2022 | 1       | 1         | 2             |
| 2022-01-09 | Sunday    | 9   | January | 2            | 2022 | 1       | 1         | 2             |

tabel diatas merupakan contoh sederhana dari sebuah _dim time_. Dimana setiap tanggal akan di ekstrak berdasarkan minggu keberapa pada tahun tersebut, apakah tanggal tersebut masuk kedalam quarter, semeter dan minggu pada bulan serta sebagainya.

Tabel bantu diatas dapat membantu untuk menganalisa data dan menghasilkan report yang sesuai dengan permintaan misalnya jika tim finance ingin mencari ```produk mana yang penjualannya melampaui target pada quartal ke tiga tahun 2022??``` dan sebagainya. Dengan _dim time table_ pertanyaan ini akan dengan mudah dijawab.

## Membuat time dimension menggunakan python

Untuk itu sebagai seorang data enginner biasanyad dituntut untuk menyediakan table ini, agar dapat digunakan oleh tim _BI_ misalnya. Untuk membuat table diatas saya mencontohkan dengan menggunakan python dan hasilnya kita tampung pada file csv, dimana nantinya file ini dapat kita unload ke database baik _on prem_ maupun layanan cloud service seperti Redshift pada aws ataupun Google big Query.

## Persiapan

Langkah pertama kita akan menginstall beberapa library untuk memudahkan ~_**'Ingat jika ada yang susah kenapa harus cari yang mudah**_'~.

saya biasanya menggunakan jupyter lab dan pandas untuk melakukan manipulasi data terutama file csv. Namun bukan berarti anda tidak bisa melakukannya secara langsung pada python dengan _built in function_ yang disediakan.

Sebelum menginstall pandas dan jupyter lab, sebaiknya kita menggunkana virtual env agar management package lebih rapih dan mudah, jika belum tau silahkan baca link berikut [Pipenv solusi mudah management package pada python](/management-paket-dan-virtual-environtment-menggunakan-pipenv/)

Pastikan virtual env telah aktif kemudian install dengan perintah berikut

```BASH
pip install pandas jupyterlab
```

## Dim Time Python Script

Setelah melakukan installasi dan menjalankan jupyter lab, selanjutnya kita akan menulis python script untuk membentuk dim time,

berikut script yang ditulis menggunakan bahasa python

```python
import pandas as pd
import math

from datetime import datetime, timedelta
from enum import IntEnum

WEEKDAY = IntEnum('WEEKDAY', 'MON TUE WED THU FRI SAT SUN', start=1)

def get_week_number(start, date):
    year_start = datetime(date.year, 1, 1) - timedelta(days=(datetime(date.year, 1, 1).isoweekday() - start) % 7)
    # return date.year, (date-year_start).days // 7 + 1, (date-year_start).days % 7 + 1
    return (date - year_start).days // 7 + 1

import pandas as pd
import math

def dates_generator(start_date, end_date):
    dates_dataframe = pd.DataFrame({"date": pd.date_range(start=start_date, end=end_date)})
    dates_dataframe["day_name"] = dates_dataframe.date.dt.day_name()
    dates_dataframe["day"]  = dates_dataframe.date.dt.day
    dates_dataframe["month"] = dates_dataframe.date.dt.month_name()
    dates_dataframe["month_index"] = dates_dataframe.date.dt.month
    dates_dataframe["year"] = dates_dataframe.date.dt.year
    dates_dataframe["day_of_year"] = dates_dataframe.date.dt.dayofyear
    dates_dataframe["quarter"] = dates_dataframe.date.dt.quarter
    dates_dataframe["year_half"] = (dates_dataframe.quarter + 1) // 2
    dates_dataframe['week_in_month'] = pd.to_numeric(dates_dataframe.date.dt.day/7)
    dates_dataframe['week_in_month'] = dates_dataframe['week_in_month'].apply(lambda x: math.ceil(x))
    dates_dataframe['is_month_start'] = dates_dataframe.date.dt.is_month_start
    dates_dataframe['is_month_end'] = dates_dataframe.date.dt.is_month_end
    dates_dataframe['is_quarter_start'] = dates_dataframe.date.dt.is_quarter_start
    dates_dataframe['is_quarter_end'] = dates_dataframe.date.dt.is_quarter_end
    return dates_dataframe


if __name__ == '__main__':

    res = dates_generator('2022-1-1','2050-12-31')
    res["week of year"] = res.apply(
        lambda row: get_week_number(
            WEEKDAY.WED,
            datetime(row['year'], row['month_index'], row['day'])), axis=1)
    res = res.reindex(columns=[
        'date', 'day_name', 'day', 'month', 'month_index', 'week of year', 'year',
        'day_of_year', 'quarter', 'year_half', 'week_in_month', 'is_month_start',
        'is_month_end', 'is_quarter_start', 'is_quarter_end'
    ])

    res.to_csv(
    './time_dimension_wed_start.csv',
    encoding='utf-8',
    index=False,
    sep=";",
    header=True,
)


```
