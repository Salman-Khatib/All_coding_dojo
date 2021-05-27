from flask import Flask  # Import Flask to allow us to create our app
# Create a new instance of the Flask class called "app"
app = Flask(__name__)


# The "@" decorator associates this route with the function immediately following
@app.route('/')
def hello_world():
    return 'Hello World!'  # Return the string 'Hello World!' as a response


@app.route('/dojo')
def dojo():
    return 'Dojo!'


@app.route('/say/<name>')
def say_name(name):
    return f'Hi {name.title()}!'


# @app.route('/repeat/<number>/<word>')
# def repeat_word(number, word):
#     return int(number) * f' {word}'


@app.route('/repeat/<int:number>/<word>')
def repeat_word1(number, word):
    return number * f' {word}'


@app.route('/<anything>')
def error_msg(anything):
    return "Sorry! No response. Try again."


if __name__ == "__main__":   # Ensure this file is being run directly and not from a different module
    app.run(debug=True)
