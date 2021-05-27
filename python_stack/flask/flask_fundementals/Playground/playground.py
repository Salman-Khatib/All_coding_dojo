from flask import Flask, render_template
app = Flask(__name__)


@app.route('/')
def index():
    pass


@app.route('/play/')
def play():
    return render_template("index.html")


@app.route('/play/<int:x>/')
def play_times(x):
    return render_template("index.html", num_times=x)


@app.route('/play/<int:x>/<color>/')
def play_times_color(x, color):
    return render_template("index.html", num_times=x, box_color=color)


if __name__ == '__main__':
    app.run(debug=True)
