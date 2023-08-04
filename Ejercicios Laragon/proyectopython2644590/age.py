edad = int(input("Input your age: "))

if edad < 0:
    print("Plase, input a valid data! ")
elif edad <= 12:
    print("You're a child")
elif edad <= 21:
    print("You're a teenager")
elif edad <= 31:
    print("You're a young person")
elif edad <= 60:
    print("You're an adult")
else:
    print("You're an older adult")