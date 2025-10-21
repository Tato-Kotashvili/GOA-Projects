#4) შეამოწმე, რომ ორივე დადებითია (ანუ ორივე მეტია 0-ზე). 
 #თუ ასეა დაბეჭდე "ორივე პირობა სწორია", წინააღმდეგ შემთხვევაში  "პირობა არასწორია".

x=int(input('Enter a number: '))
y=int(input('Enter another number: '))

if x>0 and y>0:
    print('Both statements are true')

else:
    print('The statement is false')