# 5)0 დან 20 მდე გამოიტანეთ მხოლოდ ლუწი რიცხვები  forloop/while loop ორივეთი


# for loop version
for i in range(20):
    if i%2==0:
        print(i)


# while loop version
i=0
while i<20:
    print(i)
    i=i+2

# other version with while loop

i=0
while i<20:
    if i%2==0:
        print(i)
    i=i+1