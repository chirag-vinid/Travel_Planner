import os
from flask import Flask, send_from_directory

react_app_path = os.path.join(os.getcwd(), '..', 'frontend', 'my-react-app', 'build')

app = Flask(__name__, static_folder=react_app_path, template_folder=react_app_path)

@app.route('/')
def serve_react_app():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/<path:path>')
def serve_static_files(path):
    if os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True)