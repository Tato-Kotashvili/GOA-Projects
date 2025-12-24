# 1) შექმენი list: names = ["nika", "luka", "giorgi"] მომხმარებელს შეაყვანინე: ინდექსი და სახელი, insert()-ის გამოყენებით ჩასვი სახელი მითითებულ ადგილას და დაბეჭდე შედეგი

names = ["nika", "luka", "giorgi"]
index = int(input("შეიყვანეთ ინდექსი: "))
name = input("შეიყვანეთ სახელი: ")
names.insert(index, name)
print(names)
