# შექმენით სია [0, 5, 0, 3, 0, 7, 8], ამ სიიდან წავშალოთ ყველა 0 რიცხვი

list=[0, 5, 0, 3, 0, 7, 8]

i=0
while i<len(list):
    if list[i]==0:
        list.pop(i)
    else:
        i=i+1
        
#second version        
print(list)

while 0 in list:
    list.remove(0)
print(list)