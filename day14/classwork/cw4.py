# 4) while loop ის გამოყენებით დაბეჭდეთ რიცხვები ერთიდან 20მდე და გვერდით მიუწერეთ ამ რიცხვებს ლუწია თუ კენტი


i = 0
while i < 20:
    i=i + 1

    if i % 2 == 0:
        print(str(i) + " even")
    else:
        print(str(i) + " odd")