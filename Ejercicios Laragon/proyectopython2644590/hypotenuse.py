from math import sqrt

lado1 = float(input("Input the value of the first hick: "))
lado2 = float(input("Input the value of the second hick: "))

hipotenusa = sqrt(lado1**2+lado2**2)

print(f"The hypotenuse is {hipotenusa}")