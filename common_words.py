import requests
from bs4 import BeautifulSoup
import sys


def main(language, n):

    words = []
    link = "https://1000mostcommonwords.com/1000-most-common-{}-words/".format(language.lower())
    page = requests.get(link).text
    parsed_page = BeautifulSoup(page, 'html.parser')


    data = parsed_page.find_all('tr')
    data = data[1: n + 1]
    
    for tr in data:
        words.append(str(tr))
    
    if(language.lower() == "english"):
        column = 4
    else:
        column = 2

    for i in range(len(words)):
        words[i] = words[i].split()[column]
        words[i] = words[i].replace("<td>", "")
        words[i] = words[i].replace("</td>", "")

    return words

print(main(sys.argv[1], int(sys.argv[2])))