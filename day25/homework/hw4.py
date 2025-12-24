# 4) შექმენი list: colors = ["red", "blue", "green", "yellow"] მომხმარებელს შეაყვანინე ფერი, თუ არსებობს  დაბეჭდე მისი index(), თუ არა  დაბეჭდე "Not found"


colors = ["red", "blue", "green", "yellow"]
color = input("შეიყვანეთ ფერი: ")
if color in colors:
    index = colors.index(color)
    print('ფერის ინდექსია:', index)
else:
    print("Not found")