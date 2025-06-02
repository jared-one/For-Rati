from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    # You can send any data if needed, like name or messages
    return render_template('index.html', name="Rati")

if __name__ == "__main__":
    app.run(debug=True)

