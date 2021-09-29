import re
class Parser():
    def __init__(self, URLS):
        self.URLS = URLS
        self.urlList = self.urlsToList()


    def urlsToList(self):
        return re.split('\n', self.URLS)

    