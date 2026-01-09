# 2) მომხმარებელს შემოაყვანინე სიტყვა, თუ შემოყვანილი სიტყვა უდრის "yes" მაშინ დაპრინტე "ok", გამოიყენე lower,upper, capitalize, რომელიც საჭირო იქნება.

word = input("Please enter a word: ")

if word.lower() == "yes":
    print("ok")
elif word.upper() == "YES":
    print("ok")
elif word.capitalize() == "Yes":
    print("ok")
else:
    print("The word you entered is not 'yes'.")