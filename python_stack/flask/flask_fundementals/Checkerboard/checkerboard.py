from flask import Flask, render_template
app = Flask(__name__)


@app.route('/')
def basic():
    return render_template('index.html')


@app.route('/4/')
def change_to_4_row():
    return render_template('index2.html')


@app.route('/<int:x>/<int:y>/')
def change_rows(x, y):
    return render_template('index3.html', num_box=x, num_row=y)


@app.route('/<int:x>/<int:y>/<color1>/<color2>/')
def change_rows_colors(x, y, color1, color2):
    return render_template('index4.html', num_box=x, num_row=y, first_color=color1, second_color=color2)


if __name__ == '__main__':
    app.run(debug=True)
