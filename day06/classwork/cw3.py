#3)დაწერეთ მოსწავლის ჩაჭრის თუ ჩაბარების პროგრამა
#. Შემოატანინეთ მომხმარებელს თავის ქულა და თუ 81
#ის ტოლი ან მასე მეტია დაიბეჭდოს რომ მან ჩააბარა და თუ ნაკლებია 81 ზე მაშინ ჩაიჭრა.

score=int(input('Enter your score: '))

if score>=81:
    print('You passed the exam')

else:
    print('You failed the exam')