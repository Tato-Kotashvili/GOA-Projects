# 3) შექმენით ფუნქცია. შექმენით რიცხვებით სავსე სია, დაბეჭდეთ ამ სიის ყველა ლუწი ელემენტის ჯამი. გამოიყენე for ციკლი.  გამოიძახეთ ფუნქცია.

def sum_of_even_numbers():
    nums=[12, 45, 7, 23, 88, 34]
    total=0
    for i in range(len(nums)):
        if nums[i] % 2==0:
            total=total+nums[i]
    print(total)
sum_of_even_numbers()