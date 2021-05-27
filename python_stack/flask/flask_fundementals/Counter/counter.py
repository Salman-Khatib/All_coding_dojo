from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = "123456789"


@app.route('/')
def index():
    counter = 0
    session['counter'] = counter
    return redirect('/show')


@app.route('/show')
def counter_increment():
    session['counter'] += 1
    return render_template("index.html", counter=session['counter'])


@app.route('/increment')
def increment_By_2():
    session['counter'] += 2
    return render_template("index.html", counter=session['counter'])


@app.route('/destroy_session')
def destroy():
    session.clear()
    return redirect('/')


if __name__ == "__main__":
    app.run(debug=True)
