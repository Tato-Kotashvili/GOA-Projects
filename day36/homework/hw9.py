# 9) შექმენი ფუქნცია რომელიც მიიღებს რიცხვების სიას და დააბრუნებს მხოლოდ ლუწ რიცხვებს
def even_numbers():
    even_nums=[]
    numbers_list=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    for num in numbers_list:
        if num%2==0:
            even_nums.append(num)
    print(even_nums)
even_numbers()
