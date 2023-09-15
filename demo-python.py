class Calculator:
    def __init__(self):
        self.result = 0

    def add(self, x, y):
        self.result = x + y

    def subtract(self, x, y):
        self.result = x - y

    def multiply(self, x, y):
        self.result = x * y

    def divide(self, x, y):
        if y != 0:
            self.result = x / y
        else:
            print("")

def main():
    calc = Calculator()

    print("Welcome to the Calculator App!")
    while True:
        print("\nChoose an operation:")
        print("1. Add")
        print("2. Subtract")
        print("3. Multiply")
        print("4. Divide")
        print("5. Quit")

        choice = input("Enter your choice (1/2/3/4/5): ")

        if choice == '1':
            x = float(input("Enter the first number: "))
            y = float(input("Enter the second number: "))
            calc.add(x, y)
            print("Result:", calc.result)
        elif choice == '2':
            x = float(input("Enter the first number: "))
            y = float(input("Enter the second number: "))
            calc.subtract(x, y)
            print("Result:", calc.result)
        elif choice == '3':
            x = float(input("Enter the first number: "))
            y = float(input("Enter the second number: "))
            calc.multiply(x, y)
            print("Result:", calc.result)
        elif choice == '4':
            x = float(input("Enter the first number: "))
            y = float(input("Enter the second number: "))
            calc.divide(x, y)
            print("Result:", calc.result)
        elif choice == '5':
            print("Goodbye!")
            break
        else:
            print("Invalid choice. Please choose a valid option.")

if __name__ == "__main__":
    main()
