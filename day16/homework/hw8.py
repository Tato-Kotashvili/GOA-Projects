# 8)
# შექმენი ცვლადი და შეინახე შენი პაროლი(string)

# მომხმარებელს შემოატანინე პაროლი

# სანამ შენი პაროლი არ უდრის მომხმარებლის მიერ შემოტანილ პაროლს
    # მომხმარებელს თავიდან შემოატანინე პაროლი რომ გაარტყას შენ პაროლს
# დაპრინტე "სწორია გაარტყი"

# --> გადააკეთეთ ზემოთ მოცემული ტექსტი კოდად(ინდენტაცია დაცულია)



my_password='Chemi paroli'
user_password=input('Guess my password :) ')

while my_password != user_password:
    user_password=input('Try again: ')
print('Correct, you guessed it!')