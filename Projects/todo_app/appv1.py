from flask import Flask, request, redirect, url_for, render_template
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)


@app.route('/')
def home1():
    return 'hi there'









if __name__ == '__main__':
    app.run('', 8000, debug=True)