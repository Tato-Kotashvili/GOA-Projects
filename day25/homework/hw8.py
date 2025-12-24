# 8) შექმენი list: animals = ["dog", "cat", "horse", "cow"] მომხმარებელს შეაყვანინე ცხოველის სახელი, თუ არსებობს  დაბეჭდე მისი index-იმ, თუ არა  "Animal not found"


animals = ["dog", "cat", "horse", "cow"]
animal = input("შეიყვანეთ ცხოველის სახელი: ")
if animal in animals:
    index = animals.index(animal)
    print('ცხოველის ინდექსია:', index)
else:
    print("Animal not found")