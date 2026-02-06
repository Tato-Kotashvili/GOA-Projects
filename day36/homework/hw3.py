# 3) შექმენი ფუქნცია რომელიც მიიღებს რიცხვების სიას [3, 7, 1, 9] და დააბრუნებს ყველაზე დიდ რიცხვს
def find_largest_number():
    sia=[3, 7, 1, 9]
    largest=sia[0]
    for num in range(len(sia)):
        if sia[num]>largest:
            largest=sia[num]
    return largest
print(find_largest_number())