from flask import Flask, request
from parse import Parser
from connector import Connector
app = Flask(__name__)

connector = Connector()
@app.route('/api/handleURLS', methods=['POST'])
def handleURLs():
    data = request.get_json()
    print(data)
    p = Parser(data['URLS'])
    print(p.urlList)
    videos = connector.getVideosFromURLS(p.urlList)
    print("VIDEOS")
    print(videos)
    return {'videos':videos}


if __name__ == '__main__':
    app.run()
