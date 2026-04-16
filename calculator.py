num1 = float(input("Enter number: "))
num2 = float(input("Enter number: "))

print("+ for addition")
print("- for subtraction")
print("* for multiplication")
print("/ for division")

op = input("Choose operation: ")

if op == "+":
    print("Result:", num1 + num2)

elif op == "-":
    print("Result:", num1 - num2)

elif op == "*":
    print("Result:", num1 * num2)

elif op == "/":
    if num2 != 0:
        print("Result:", num1 / num2)
    else:
        print("Cannot divide by zero")

else:
    print("Invalid operation")
