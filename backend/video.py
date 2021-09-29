class Video:
    def __init__(self, video_id, title):
        self.id = video_id
        self.title = title


    def jsonify(self):
        return {
            'id':self.id,
            'title':self.title
        }