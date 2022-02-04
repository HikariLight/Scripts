import dropbox

# ==== CAREFUL DON'T UPLOAD YOUR API KEY TO GITHUB ====
api_key = ""
dbx = dropbox.Dropbox(api_key)

images = []
for entry in dbx.files_list_folder('/Camera Uploads').entries:
    images.append(entry.name)

for element in images:
    if("mp4" in element):
        images.remove(element)

for image in images:
    f = open("{}".format(image), "wb")
    metadata, res = dbx.files_download(path="/Camera Uploads/{}".format(image))
    f.write(res.content)
