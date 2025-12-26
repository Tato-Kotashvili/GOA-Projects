# შექმენით სია ["cat", "elephant", "dog", "tiger", "ox"], წაშალეთ ყველა სიტყვა რომლის სიგრძეც ნაკლებია 4-ზე


list=["cat", "elephant", "dog", "tiger", "ox"]
i=0
while i<len(list):
    if len(list[i])<4:
        list.pop(i)
    else:
        i=i+1
print(list)