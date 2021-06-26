---
title: "Dash Plotly Bootstrap"
category: ["python","dash","data engineer", "data scientist"]
author: yunindyo prabowo
---

Pada kesempatan kali ini, saya akan menjelaskan bagaimana styling menggunakan [bootstrap css framework](https://getbootstrap.com/) pada aplikasi dash yang akan kita buat.

Untuk kesempatan kali ini, saya akan menjelaskan pula mengenai struktur aplikasi dengan konsep `mvc` _model, view, controller_, untuk memudahkan kita dalam memanage dan memaintain aplikasi kita untuk kedepannya.

### Prepared Installation Packages
Dilangkah ini kita akan menginstall package/library yang akan kita butuhkan, utamakan menggunakan virtual-env dan diutamakan untuk mengikuti tutorial dash ini dari awal untuk memudahkan management library yang digunakan, silahkan buka link berikut untuk memulai dari awal [Dash Plotly solusi Tim Data untuk visualisasi](/dash-plotly-learn/)

#### Dash Bootstrap Components

Pertama-tama kita akan menginstall [dash-bootstrap-components](https://dash-bootstrap-components.opensource.faculty.ai/) yang merupakan sebuah library bootstrap component untuk dash plotly. Dengan langkah sebagai berikut,

```bash
pip install dash-bootstrap-components
```

#### Flask_caching dan python-dotenv

Karena backend dari Dash terdiri dari flask, kita juga bisa menggunakan library yang diperuntukan kepada flask, misalnya [flask-caching](https://flask-caching.readthedocs.io/en/latest/) yang digunakan untuk menyimpan cache agar aplikasi kita dapat meningkat performancenya. Langkah pertama yaitu dengan menginstall `flask caching` dengan menggunkaan perintah berikut :

```BASH
pip install flask_caching
```

Untuk memudahkan juga dengan credential variabel, kita juga dapat menginstall [python-dotenv](https:/[python-dotenv](https://github.com/theskumar/python-dotenv) /github.com/theskumar/python-dotenv) dengan perintah berikut :

```BASH
pip install python-dotenv
```

### Structure the Apps

Untuk memudahkan dalam management aplikasi dan tentu juga pada aplikasi web umumnya memiliki banyak komponen dan banyak halaman, tentu struktur dari projek akan mempengaruhi kemudahan dalam me-manage aplikasi. Untuk itu, saya merekomendasikan struktur yang nanti kita akan buat pada tutorial ini.

<re-img src="tree.png" width=100% height=auto></re-img>

#### Assets Folder

Layaknya folder asset pada umumnya, folder ini dapat berisikan file js, css ataupun gambar yang akan kita embed langsung kedalam project dash web. Untuk lebih jelasnya bisa dilihat disini [Adding CSS & JS and Overriding the Page-Load Template](https://dash.plotly.com/external-resources)

#### Cache Directory

Folder ini terbentuk secara otomatis oleh library [Flask_caching](https://flask-caching.readthedocs.io/en/latest/) karena callback pada Dash bersifat fungsional sehingga kita dapat menset memoization cache pada callback tertentu, tujuannya agar hasil nilai kembali dari sebuah fungsi disimpan sehingga kita dapat memanggilnya jika dibutuhkan.

Untuk konfigurasinya terdapat pada file `app.py` dengan perintah berikut,

```Python
cache = Cache(app.server,
              config={
                  'CACHE_TYPE': 'filesystem',
                  'CACHE_DIR': 'cache-directory',
                  'CACHE_THRESHOLD': 5,
              })
```

dan memanggilnya dalam bentuk decorator pada fungsi tertentu, dalam contoh ini saya memanggilnya pada saat kita melakukan pemanggilan data dalam model seperti dibawah ini :

```Python
@cache.memoize(timeout=TIMEOUT)
def query_data():
    # This could be an expensive data querying step
    data_skripsi = pd.read_csv(DATA_PATH.joinpath('judul_skripsi.csv'), sep=';')
    return data_skripsi.to_json(date_format='iso', orient='split')
```

Atau mungkin saat kita melakukan query :

```Python
@cache.memoize(timeout=TIMEOUT)
def query_get_all(dbTable=None):
    preparedSQL = "SELECT * FROM {}".format(dbTable)
    result_data = query_select(preparedSQL, **DB_CONFIG)
    return result_data
```

#### Components

Pada folder ini, kita dapat mendefinisikan beberapa komponen untuk membantu dalam reuse atau menggunakan kembali komponen yang sama apabila dibutuhkan, dalam hal ini semisal header, dimana header pada aplikasi dapat dipastikan sama antar pages/layout pada aplikasi keseluruhan. Misalnya kita mendifinisikan header :

```Python
import dash_html_components as html
import dash_core_components as dcc
import dash_bootstrap_components as dbc


def Header():
    return html.Div([get_header(), html.Br([])])


def get_header():
    header = html.Div(
        [
            dbc.NavbarSimple(
                children=[
                    dbc.ButtonGroup(
    # Use row and col to control vertical alignment of logo / brand
                        [
                            dbc.Button(
                                "Dash Bootstrap",
                                href="/dashboard/dash-bootstrap-learn",
                                className="btn-link",
                                color="primary",
                                size="lg",
                                outline=True,
                                style={"color": "#fff"},
                            ),
                        ],),
                ],
                brand="Dash Bootstrap Learn",
                brand_style={
                    "font-size": "2.1rem",
                    "font-weight": "bold",
                },
                color="#05445E",
                dark=True,
                fluid=True,
            ),
        ],)

    return header

```


#### config

Pada direktori ini, kita mendefinisikan konfigurasi yang akan kita gunakan dalam aplikasi kita, misalnya konfigurasi dot env ataupun konfigurasi server bahkan konfigurasi database sekalipun.

Dalam konteks tutorial ini, saya mendefinisikan dot env dan juga konfigurasi server yang digunakan seperti berikut :

```Python
# config.py
import os
from os.path import join, dirname
from dotenv import load_dotenv

dotenv_path = os.getenv("ENVIRONMENT_FILE")
load_dotenv(dotenv_path=dotenv_path, override=True)

APP_HOST = os.environ.get("HOST")
APP_PORT = os.environ.get("PORT")
APP_DEBUG = os.environ.get("DEBUG")
DEV_TOOLS_PROPS_CHECK = os.environ.get('DEV_TOOLS_PROPS_CHECK')
APP_THREADED = os.environ.get("THREADED")

# DB_HOST = os.environ.get("DB_HOST")
# DB_DATABASE = os.environ.get("DB_DATABASE")
# DB_USER = os.environ.get("DB_USER")
# DB_PASSWORD = os.environ.get("DB_PASSWORD")
```

#### layout

Folder Layout berisikan main base design aplikasi yang akan selalu di render, umumnya terdapat beberapa reuse component seperti header, sidebar, footer dsb.
Untuk code pada layout sebagai berikut :

```Python
import dash_html_components as html
import dash_core_components as dcc
from components.header import Header

content = html.Div(id="page-content")

layout = html.Div([dcc.Location(id="url"), html.Div([Header()]), content])

```

#### Pages Folder

Pada aplikasi web yang kompleks, tentu akan terdiri dari banyak pages, dan pada setiap pages, kita membuat folder-folder yang dipisahkan menjadi 3 file, yaitu `layout file`, `callback file`, `model file`, dimana konfigurasi seperti ini bisa disebut sebagai `MVC Architectural pattern`. Pada contoh disini saya menggunakan nama `bootstrap apps` dimana terdapat 3 file :

* bootstrap_layout.py

file ini berisikan base layout untuk page bootstrap
```Python
import dash_core_components as dcc
import dash_html_components as html
from dash_html_components.H4 import H4
from app import app
from pages.bootstrap.bootstrap_model import query_dataframe
import dash_bootstrap_components as dbc

layout = html.Div([
    # Start Container
    dbc.Container(
        [
    #
    # html.Div(html.Nav(html.H4("hello"))),
            html.Div([    # start Row
                dbc.Row(
                    dbc.Col(
                        html.Div(
                            [
                                dbc.Card([
                                    dbc.CardHeader(
                                        html.H4("Simple Graph with Bootstrap"),
                                        className="bg-info",
                                        style={
                                            "text-align": "center",
                                            "color": "white"
                                        }),
                                    dbc.CardBody([
                                        dcc.Graph(
                                            id='graph-with-slider',
                                            config={"displayModeBar": False},
                                        ),
                                    ]),
                                    dbc.CardFooter(
                                        dcc.Slider(
                                            id='year-slider',
                                            min=query_dataframe()
                                            ['Tahun_Lulus'].min(),
                                            max=query_dataframe()
                                            ['Tahun_Lulus'].max(),
                                            value=query_dataframe()
                                            ['Tahun_Lulus'].min(),
                                            marks={
                                                str(year): str(year)
                                                for year in query_dataframe()
                                                ['Tahun_Lulus'].unique()
                                            },
                                            step=None),)
                                ]),
                            ],
                            style={
                                "margin-bottom": "35px",
                            },
                        ),
                        width={
                            "size": 6,
                            "offset": 3
                        },
                    ),
    # End Row
                ),
    # Start Tag Div
                html.Div(
                    [
    # Start Row
                        dbc.Row([
                            dbc.Col([
                                dbc.Spinner(
                                    children=html.Div(id='table-data-skripsi'),
                                    color="success",
                                    size="lg",
                                ),
                            ],
                                    md=12,
                                    lg=12,
                                    xl=12,
                                    sm=12,
                                    xs=12,
                                    className="col"),
                        ],
                                justify="between"),
    # End Row
                    ],
                    style={
                        "margin-bottom": "35px",
                    },
                ),
    # End Tag Div
            ]),
        ],
    # Start Container
        fluid=True,
    ),
])
```

Seperti yang ditampilkan pada code diatas, component-component pada bootstrap dapat kita gunakan setelah kita mengimport library `dash-component-bootstrap` dengan memanggil nama componentnya, semisal

```Python
dbc.Row(
    [
    dbc.Col(
        [
            html.H1("Hello")
        ]
        ),
    ],
    )
```

code diatas, akan membuat [grid](https://dash-bootstrap-components.opensource.faculty.ai/docs/components/layout/) pada dash-bootstrap-component. Untuk lebih jelasnya dapat melihat dokumentasi [dash-bootstrap-component](https://dash-bootstrap-components.opensource.faculty.ai/docs)

* bootstrap_callback.py

File ini berisikan callback yang akan memproses dan mengupdate pages.

```Python
from dash.dependencies import Input, Output
from app import app
import dash_bootstrap_components as dbc
import plotly.graph_objs as go
import dash_html_components as html
from pages.bootstrap.bootstrap_model import query_dataframe


@app.callback(Output('graph-with-slider', 'figure'),
              Input('year-slider', 'value'))
def update_figure(selected_year):
    skripsi_data = query_dataframe()
    filtered_df = skripsi_data[skripsi_data['Tahun_Lulus'] == selected_year]
    filtered_df = filtered_df.groupby(
        'Kategori')["Kategori"].count().reset_index(name='Total')
    graph = {
        "data": [
            go.Bar(
                x=filtered_df['Kategori'],
                y=filtered_df['Total'],
                text=filtered_df['Total'],
                textposition='inside',
                textfont=dict(size=14,),
                marker={
                    "color": "#75E6DA",
                    "line": {
                        "color": "rgb(255, 255, 255)",
                        "width": 2,
                    },
                },
            ),
        ],
        "layout":
            go.Layout(
                autosize=True,
                bargap=0.35,
                font={
                    "family": "Raleway",
                },
                hovermode="closest",
                legend={
                    "x": -0.0228945952895,
                    "y": -0.189563896463,
                    "orientation": "h",
                    "yanchor": "top",
                },
                margin={
                    "r": 0,
                    "t": 20,
                    "b": 10,
                    "l": 10,
                },
                showlegend=True,
                xaxis={
    # "autorange": True,
                    "fixedrange": True,
                    "showline": True,
                    "title": "Gender",
                    "type": "category",
                    "automargin": True,
                },
                yaxis={
                    "showgrid": True,
                    "showline": True,
                    "title": "Grand Total",
                    "automargin": True,
                    "fixedrange": True,
                },
            ),
    }
    return graph


@app.callback(Output('table-data-skripsi', 'children'),
              Input('year-slider', 'value'))
def update_table(selected_year):
    skripsi_data = query_dataframe()
    filtered_df = skripsi_data[skripsi_data['Tahun_Lulus'] == selected_year]
    filtered_df.columns = ['Tahun Lulus', 'Judul', 'Kategori']
    top5 = filtered_df.sample(n=10)
    filtered_df = filtered_df.groupby(
        'Kategori')["Kategori"].count().reset_index(name='Total')
    summaryRes = [
        dbc.Card([
            dbc.CardHeader(html.H4("10 Data Sample"),
                           className="bg-info",
                           style={
                               "text-align": "center",
                               "color": "white"
                           }),
            dbc.CardBody([
                html.H5(className="card-title font-size-custom"),
                dbc.Row(
                    dbc.Col(dbc.Table.from_dataframe(top5,
                                                     striped=True,
                                                     bordered=True,
                                                     hover=True,
                                                     className="thead-dark"),
                            width={
                                "size": 10,
                                "offset": 1,
                            }),
                    align="center",
                ),
            ]),
        ],)
    ]

    return summaryRes
```

* bootstrap_model.py

file ini berisikan bagaimana cara kita untuk mendapatkan data, bisa dengan membaca file csv misalnya, atau bahkan query kedalam database. Sebagai contoh saya membuat fungsi untuk membaca file csv

```Python
import pandas as pd

from app import cache
from utils.constants import TIMEOUT
import pathlib
# get relative data folder
PATH = pathlib.Path(__file__).parent
DATA_PATH = PATH.joinpath("../../data").resolve()


@cache.memoize(timeout=TIMEOUT)
def query_data():
    # This could be an expensive data querying step
    data_skripsi = pd.read_csv(DATA_PATH.joinpath('judul_skripsi.csv'), sep=';')
    return data_skripsi.to_json(date_format='iso', orient='split')


def query_dataframe():
    return pd.read_json(query_data(), orient='split')
```

* Routing.py

Tentu dalam sebuah aplikasi yang besar dan terdiri dari banyak pages, kita akan membutuhkan routing ke setiap pages-pages tersebut, sehingga kita membuat file routing yang berisikan sebagai berikut :

```Python
import dash_bootstrap_components as dbc
import dash_html_components as html
from dash.dependencies import Input, Output
from app import app
from pages.bootstrap import bootstrap_layout


@app.callback(Output('page-content', 'children'), Input('url', 'pathname'))
def display_page(pathname):
    if pathname == '/dashboard/dash-bootstrap-learn':
        return bootstrap_layout.layout

    else:
        return bootstrap_layout.layout

```

* app.py dan index.py

Secara default, instance dari Dash didefinisikan pada file `app.py` dan entry point dimulai dari `index.py` . Pemisahan ini bertujuan untuk menghindari `circular import` file yang berisi definisi callback memerlukan akses ke instance aplikasi Dash namun jika ini diimpor dari index.py , pemanggilan awal index.py pada akhirnya akan mengharuskan me,amggil dirinya sendiri kembali, sehingga akan terjadi `circular import`.

Contoh `app.py` :

```Python
import dash
import dash_bootstrap_components as dbc

from flask_caching import Cache

# from utils.external_assets import FONT_AWSOME, CUSTOM_STYLE
from layout.layout import layout

import flask

server = flask.Flask(__name__)    # define flask app.server

FONT_AWESOME = (
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
)

app = dash.Dash(
    __name__,
    server=server,
    suppress_callback_exceptions=True,
    meta_tags=[{
        'name': 'viewport',
        'content': 'width=device-width, initial-scale=1'
    }],
    external_stylesheets=[dbc.themes.MINTY, FONT_AWESOME],
)
app.title = "Dash Bootstrap"

cache = Cache(app.server,
              config={
                  'CACHE_TYPE': 'filesystem',
                  'CACHE_DIR': 'cache-directory',
                  'CACHE_THRESHOLD': 5,
              })

app.layout = layout

server = app.server
```

pada file ini, kita mendifinisikan beberapa konfigurasi seperti `external stylesheet` yang digunakan untuk memanggil bootstrap dan juga fontawesome. Sedangkan  untuk file `index.py` berisikan sebagai berikut :

```Python
from logging import debug
from threading import Thread
import dash_core_components as dcc
import dash_html_components as html
from dash.dependencies import Input, Output

from routes import display_page
from app import app, server

from pages.bootstrap.bootstrap_callbacks import update_figure, update_table
from config.config import APP_DEBUG, APP_HOST, APP_PORT, DEV_TOOLS_PROPS_CHECK, APP_THREADED

if __name__ == '__main__':
    # print(
    #     f' host={APP_HOST}\n port={APP_PORT}\n debug={APP_DEBUG}\n dev_tools_props_check={DEV_TOOLS_PROPS_CHECK}\n Threaded={APP_THREADED}'
    # )

    app.run_server(
        host=APP_HOST,
        port=APP_PORT,
        debug=APP_DEBUG,
        dev_tools_props_check=DEV_TOOLS_PROPS_CHECK,
        threaded=APP_THREADED,
        dev_tools_ui=True,
    )

```

Seperti dilangkah awal, kita menggunakan file `.env` yang kita definisikan pada file `config.py` pada folder `config` yang kita import disini. Selanjutnya juga, Dan kunci penting pada file ini adalah, kita memanggil semua callback yang ada dalam page disini, untuk memberitahu kepada dash bahwa ada callback yang harus dipanggil. Karena pada dasarnya, callback didefinisikan pada `app.py` yang sebenernya tidak ada pada file tersebut, sehingga dash akan memberitahu exception error. Hal ini dapat dicegah denan menambahkan `suppress_callback_exception=True` pada file `app.py`. Dan untuk menjalankan aplikasi kita dapat menggunakan perintah :

```BASH
python index.py
```

Dan voilaaa.

Untuk tutorial selanjutnya, saya akan membahas bagaimana men-dockerize aplikasi dash dan mungkin juga sedikit membahas bagaimana kita membuat model machine learning pada aplikasi dash.

### Screenshoot

#### Homepage graph

<re-img src="homepage_graph.png" width=100% height=auto></re-img>

#### Homepage Table

<re-img src="homepage_table.png" width=100% height=auto></re-img>

Apabila ada pertanyaan jangan sungkan untuk bertanya di kolom komentar,
Stay tune guys ...

Untuk source code dapat diunduh pada repository github saya [dash learn source code](https://github.com/ypraw/Dash-learn)

### Reference

[1. Dash bootstrap component](https://dash-bootstrap-components.opensource.faculty.ai/docs/)

[2. python-dotenv](https://github.com/theskumar/python-dotenv)

[3. flask-caching](https://flask-caching.readthedocs.io/en/latest/)
