while True:
	try:
		standard_sens = int(input("What's your standard sensitivity: "))
		break
	except:
		print("Enter a valid number")


print("Your ADS sensitivity is: ", standard_sens/0.57)
print("Your Tac sensitivity is: ", standard_sens/0.67)
print("Your Sniper Scope sensitivity is: ", standard_sens/1.33)
print("Your 3x sensitivity is: ", standard_sens/0.8)
print("Your 4x sensitivity is: ", standard_sens)
print("Your 6x sensitivity is: ", standard_sens)
print("Your 8x sensitivity is: ", standard_sens/2)
