# 7) შექმენი list: letters = ["a", "b", "c", "d", "e"] მომხმარებელს შეაყვანინე ინდექსი, pop()-ით წაშალე ამ ინდექსზე მდგომი ელემენტი, დაბეჭდე წაშლილი ელემენტი და list


letters = ["a", "b", "c", "d", "e"]
index = int(input("შეიყვანეთ ინდექსი: "))
removed_letter = letters.pop(index)
print("წაშლილი ელემენტი:", removed_letter)
print("ახალი list:", letters)