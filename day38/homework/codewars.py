# code wars 1

def repeat_str(repeat, string):
    if repeat >= 0:
        return repeat * string
    
#########################################    
    
# code wars 2

def get_count(sentence):
    vowels = "aeiou"
    count = 0
    for char in sentence:
        if char in vowels:
            count += 1
    return count

############################################

# code wars 3

def positive_sum(arr):
    sum = 0
    for num in arr:
        if num > 0:
            sum += num
    return sum

#############################################

# code wars 4

def string_to_number(s):
    s = int(s)
    return s

###############################################

# code wars 5
def greet():
    return 'hello world!'