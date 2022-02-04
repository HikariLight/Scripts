import requests

def getBackstory(id):

    url = "https://character-service.dndbeyond.com/character/v3/character/{}".format(id)

    sheet_data = requests.get(url).text

    first_split = sheet_data.split("backstory")[1]
    put_together = "".join(first_split)
    second_split = put_together.split("otherNotes")

    return second_split[0]

zealous_id = 47763942
jae_id = 46662283
quixy_id = 46601837

print(getBackstory(zealous_id))