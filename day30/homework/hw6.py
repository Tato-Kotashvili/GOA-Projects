# 6) შექმენით სტრინგებით სავსე სია, წაშალეთ ის სტრინგ მონაცემთა ტიპის ელემენტები რომლებიც არიან 5-ზე მეტი სიგრძეში ან დგანან კენტ ინდექსზე. გამოიყენეთ remove() ფუნქცია.

list_full_of_strings = ['giorgevski', 'nika', 'irakli', 'mariami', 'lamzira', 'goga']

i = 0
while i < len(list_full_of_strings):
    if len(list_full_of_strings[i]) > 5 or list_full_of_strings.index(list_full_of_strings[i]) % 2 != 0:
        list_full_of_strings.remove(list_full_of_strings[i])
        i = i - 1
    i = i + 1
print(list_full_of_strings)