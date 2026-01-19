# 8) შექმენით რიცხვებით სავსე სია, თქვენი დავალებაა რომ დაპრინტოთ ახალი სია რომელშიც იქნება თქენს პირველ სიაში მყოფი მხოლოდ ლუწი რიცხვები. გამოიყენეთ შესაბამისი სიის ფუნქცია და for ციკლი.ანუ ძველი სიიდან ახალში გადაყარეთ მხოლოდ ლუწი რიცხვები


number_list=[10, -5, 23, -8, 0, 15, -42, 7, -1]
even_number_list=[]
for number in range(len(number_list)):
    if number_list[number]%2==0:
        even_number_list.append(number_list[number])
print("ლუწი რიცხვების სია არის:",even_number_list)