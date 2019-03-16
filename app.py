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

@app.route("/memory1")
def memory1():
    return render_template('memory1.html')

@app.route("/memory0")
def memory0():
    x = "HAHA"
    return render_template('memory0.html', y=x)



if __name__ == '__main__':
    app.run(debug=True)

