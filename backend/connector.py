from googleapiclient.discovery import build
import json
from video import Video 

class Connector():
    def __init__(self):
        self.key = self.getAPIKey()
        self.youtubeAPI = build('youtube', 'v3', developerKey=self.key)

    def getAPIKey(self):
        KEY = ''
        try:
            with open('keys.json', 'r') as f:
                json_data = json.load(f)
                KEY = json_data["API_KEY"]
        except Exception as e:
                print(e," :Could not read API-Keys file")
        return KEY

    def getVideosFromURLS(self, urls):
        video_list = []
        try:
            if len(urls) > 0:
                for url in urls:
                    matching_videos = self.youtubeAPI.videos().list(part='id, snippet', id=url).execute()
                    if len(matching_videos['items']) > 0:
                        vid = Video(matching_videos['items'][0]['id'] , matching_videos['items'][0]['snippet']['title'])
                        video_list.append(vid.jsonify())
                    else:
                        print("No video found")
            return video_list
        except Exception as e:
            print(e)