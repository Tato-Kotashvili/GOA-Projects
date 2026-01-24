# 6) შექმენით სტრინგებით სავსე სია, წაშალეთ ის სტრინგ მონაცემთა ტიპის ელემენტები რომლებიც არიან 5-ზე მეტი სიგრძეში ან დგანან კენტ ინდექსზე. გამოიყენეთ remove() ფუნქცია.

list = ['giorgevski', 'nika', 'irakli', 'mariami', 'lamzira', 'goga']

i = 0
while i < len(list):
    if len(list[i]) > 5 or list.index(list[i]) % 2 != 0:
        list.remove(list[i])
        i = i - 1
    i = i + 1
print(list)