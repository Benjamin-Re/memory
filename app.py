from flask import Flask, render_template, request

# create app object
app = Flask(__name__)  # create app object

# Request handler
@app.route("/")
def index():
    return render_template('index.html')

@app.route("/memory")
def memory():
    return render_template('memory.html')

if __name__ == '__main__':
    app.run(debug=True)

