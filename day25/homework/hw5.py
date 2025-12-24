# 5) შექმენი ნებისმიერი list 5 ელემენტით, მომხმარებელს ჰკითხე: გინდა list-ის გასუფთავება? (yes/no), თუ პასუხი "yes"  გამოიყენე clear(), ბოლოს დაბეჭდე list


my_list = [10, 20, 30, 40, 50]
answer = input("გინდა list-ის გასუფთავება? (yes/no): ")

if answer == "yes":
    my_list.clear()
print("list-ის შინაარსი:", my_list)
    