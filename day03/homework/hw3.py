#3) (hard) მომხმარებელს მოთხოვეთ ჩაწეროს რაიმე რიცხვი ან მოკლე ტექტი (სტრინგის სახით) და ის ტექსტი გამოიტანეთ ოთხკუთხედში

text=input('Enter first thing that comes to your mind: ')

print('#' * (len(text) + 2))
print('#' + text + '#')
print('#' * (len(text) + 2))
