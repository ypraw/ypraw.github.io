---
title: "Dash Plotly Advance Learn - CallBack"
category: ["python","dash","plotly","data engineer","data"]
author: yunindyo prabowo
---

Pada tulisan [sebelumnya](/dash-plotly-learn/), kita telah membahas sedikit mengenai dash, dan bagaimana cara menggunakan komponen-komponen html ataupun komponen dash untuk mendesain web yang menggunakan dash sebagai dasar frameworknya.

Di pembahasan kali ini, kita akan membahas mengenai `callback`, sebuah fungsi pada bahasa pemrograman python yang akan di panggil oleh dash untuk merubah properti komponen kapan pun properti komponen input itu berubah secara otomatis/Singkatnya, sebuah _callback functions_ digunakan untuk merubah nilai atau memanipulasi layout komponen pada dash sehingga aplikasi yang kita buat dapat interaktif dengan interaksi user.

### Simple Callback Example

``` python
import dash
import dash_core_components as dcc
import dash_html_components as html
from dash.dependencies import Input, Output

external_stylesheets = ['https://codepen.io/chriddyp/pen/bWLwgP.css']

app = dash.Dash(__name__, external_stylesheets=external_stylesheets)

app.layout = html.Div([
    html.H6("Change the value in the text box to see callbacks in action!"),
    html.Div(["Input: ",
              dcc.Input(id='my-input', value='initial value', type='text')]),
    html.Br(),
    html.Div(id='my-output'),

])


@app.callback(
    Output(component_id='my-output', component_property='children'),
    Input(component_id='my-input', component_property='value')
)
def update_output_div(input_value):
    return 'Output: {}'.format(input_value)


if __name__ == '__main__':
    app.run_server(debug=True)
```

### Pembahasan

Saat _script_ diatas dijalankan maka tampilan yang akan muncul adalah sebagai berikut,

<re-img src="callback.png" width=100% height=auto></re-img>

kemudian rubah input box yang ada dan lihat hasilnya.

`input` dan `output` didefinisikan dalam bentuk `Syntactic Sugar` atau yang biasa disebut sebagai `decorator`. Dalam contoh diatas, `input` merupakan nilai dari properti `value` dengan id `my-input`, sedangkan untuk output, merupakan nilai balikan yang akan dikembalikan kepada properti `children` dengan id `my-output`. Kapan pun nilai dari properti input berubah, fungsi callback akan selalu di panggil secara otomatis.

Dengan callback decorator yang di tentukan, kita dapat membuat aplikasi kita menjadi lebih interaktif dan dinamis apabila ada perubahan tampilan baik tulisan, gambar, grafik visualisasi, tabel dan sebagainya.

Contoh lain, kita akan menggunakan multi input dengan multi output untuk menghitung sisi miring segitiga, untuk contoh programmnya sebagai berikut,

```python
from math import pow, sqrt
import dash
import dash_core_components as dcc
import dash_html_components as html
from dash.dependencies import Input, Output

external_stylesheets = ['https://codepen.io/chriddyp/pen/bWLwgP.css']

app = dash.Dash(__name__, external_stylesheets=external_stylesheets)

app.layout = html.Div([
    dcc.Input(
        id='x',
        type='number',
        value=3,

    ),
    dcc.Input(
        id='y',
        type='number',
        value=4
    ),
    html.Table([
        html.Tr([html.Td(['a', html.Sup(2)]), html.Td(id='a-square')]),
        html.Tr([html.Td(['b', html.Sup(3)]), html.Td(id='b-square')]),
        html.Tr([html.Td(['(a+b)',html.Sup(2)] ), html.Td(id='ab-sqsum')]),
        html.Tr([html.Td(['c']), html.Td(id='ab-sqr')]),

    ]),
])


@app.callback(
    Output('a-square', 'children'),
    Output('b-square', 'children'),
    Output('ab-sqsum', 'children'),
    Output('ab-sqr', 'children'),
    Input('x', 'value'),
    Input('y', 'value'))
def callback_pytagoras(x,y):
    a_square = pow(x,2)
    b_square = pow(y,2)
    aplusb =  a_square + b_square

    c = sqrt(aplusb)

    return a_square, b_square, aplusb, c


if __name__ == '__main__':
    app.run_server(debug=True)
```

Tulisan selanjutnya akan membahas mengenai styling menggunakan bootstrap.

### Referensi

> * [Dash - Basic Callback](https://dash.plotly.com/basic-callbacks)
