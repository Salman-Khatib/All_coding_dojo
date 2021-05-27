from flask import Flask, render_template, request, redirect
app = Flask('__name__')


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/result', methods=["POST"])
def show():
    print("*" * 50)
    print(" I am at show the function!")
    return render_template("show.html", name=request.form['your_name'], dojo=request.form['dojo_location'], language=request.form['favourite_language'], text=request.form['text_area'])


if __name__ == '__main__':
    app.run(debug=True)
