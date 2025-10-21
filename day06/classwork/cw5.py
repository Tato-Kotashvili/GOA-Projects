#5) მოცემულია ორი რიცხვი a და b. 
 #თუ  ერთ-ერთი მაინც  მეტია 5-ზე, დაბეჭდე "ერთ-ერთი პირობა მაინც სწორია", წინააღმდეგ შემთხვევაში — "არც ერთი პირობა არ შესრულდა".

a=int(input('Enter a number a: '))
b=int(input('Enter a number b: '))

if a>5 or b>5:
    print('At least one statements is true')

else:
    print('None of the statements is true')    