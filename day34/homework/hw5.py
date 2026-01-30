# 5) შექმენით ფუნქცია. შექმენი რიცხვებით სავსე სია, სადაც დუბლიკატები - ანუ გამეორებული ელემენტები აღარ იქნება, მაგრამ ელემენტების თანმიმდევრობა შენარჩუნდეს. მაგალითად თუ მოცემული გვქონდა სია: [1, 2, 2, 3, 3, 4, 5, 6, 5], უნდა დავპრინტოთ [1, 2, 3, 4, 5, 6]. გამოიყენე for ციკლი და if. გამოიძახეთ ფუნქცია.

def no_duplicates():
    list_with_duplicates=[1, 2, 2, 3, 3, 4, 5, 6, 5]
    new_list=[]
    for i in range(len(list_with_duplicates)):
        if list_with_duplicates[i] not in new_list:
            new_list.append(list_with_duplicates[i])
    print(new_list)
no_duplicates()