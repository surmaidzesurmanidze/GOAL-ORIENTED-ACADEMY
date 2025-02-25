#davaleba1
count = 1

while count <= 10:
    
    print(count)
    count += 1


# დავიწყოთ 10-დან და დავითვლით უკუსვლით
i = 10

# გამოიყენეთ while ციკლი რიცხვების დაბეჭდვისთვის
while i > 0:
    print(i)
    i -= 1  # შემცირება i-ს ერთით


#დავიწყოთ 0-დან
i = 0

# გამოიყენეთ while ციკლი ლუწ რიცხვების დაბეჭდვისთვის
while i <= 100:
    if i % 2 == 0:
        print(i)
    i += 2

i = 99
while i>=0:
    if i% 2 !=0:
        print(i)
   


# შექმენით ცვლადი ჯამისთვის
sum_of_numbers = 0
i = 1

# გამოიყენეთ while ციკლი ჯამის გამოთვლისთვის
while i <= 10:
    sum_of_numbers += i
    i += 1

print(sum_of_numbers)





A = int(input("enter your number"))
B = int(input("enter your number"))
while A < B:
    print(A)
    A += 1