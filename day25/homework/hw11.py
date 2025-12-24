# 11) შექმენი ცარიელი list მომხმარებელს შემოაყვანინე რიცხვები მანამ სანამ არ დაწერს "stop", ყველა რიცხვი დაამატე ლისთში append()ის გამოყენებით და საბოლოოდ დაბეჭდე ლისთი


numbers = []
while True:
    user_input = input("შეიყვანეთ რიცხვი ან დაწერეთ 'stop' შეწყვეტისთვის: ")
    if user_input == "stop":
        print("შეყვანილი რიცხვების ლისტი:", numbers)
        break
    else:
        number = int(user_input)
        numbers.append(number)