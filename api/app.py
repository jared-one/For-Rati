from flask import Flask, render_template
import os

app = Flask(__name__,
            template_folder=os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'templates')),
            static_folder=os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'static')))

@app.route('/')
def home():
    return render_template('index.html')

# No need for if __name__ == '__main__': app.run() for Vercel
