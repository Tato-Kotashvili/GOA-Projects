# 4) შექმენი ფუნქცია რომელიც მიიღებს სიტყვების სიას და დააბრუნებს მხოლოდ იმ სიტყვებს რომლებიც იწყება დიდი ასოთი

def words_with_capital(words):
    capital_words=[]
    for word in words:
        if word[0]==word[0].upper():
            capital_words.append(word)
    return capital_words
words_list=["Hello", "world", "Python", "programming", "Language"]
print(words_with_capital(words_list))