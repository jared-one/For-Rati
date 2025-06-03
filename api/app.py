from flask import Flask, render_template, url_for
import os

app = Flask(__name__, template_folder='../templates', static_folder='../static')

# Ensure the static folder path is correctly understood by Flask, especially for Vercel.
# Vercel typically places the 'api' directory at the root for serverless functions.
# If your static/templates are at the root of your repo, adjust paths:
# app = Flask(__name__, template_folder=os.path.join(os.getcwd(), 'templates'), static_folder=os.path.join(os.getcwd(), 'static'))


@app.route('/')
def home():
    # Example of how you might pass dynamic data, though not strictly needed for this setup
    # For image paths, url_for in the template is generally sufficient.
    return render_template('index.html', title="Happy Birthday Rati!")

if __name__ == '__main__':
    # This part is for local development. Vercel will use a WSGI server.
    app.run(debug=True)

