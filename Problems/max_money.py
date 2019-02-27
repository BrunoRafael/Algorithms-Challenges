def maxMoney(n, k):
	# sum P.A.
	sum_money_students = ((n+1)*n)/2
	money_sum = 0
	bigger_sum = 0
	for i in range(1, n + 1):
		#remove actual value and sum values
		subtract_actual_students = (sum_money_students - i)
		if(subtract_actual_students > bigger_sum):
			bigger_sum = subtract_actual_students
	        
		# Sum actual value (i) with money_sum and verify if sum result is bigger than unlucky number(k)
		money_sum += i
		if(money_sum == k):
			# If money_sum is equals to unlucky value, so julia starts the remove students value process
			return bigger_sum
		elif(money_sum > k):
			# If money_sum is bigger than k, else julia did not see unlucky number in no time
			return sum_money_students
    
	return bigger_sum

if __name__ == "__main__":
	n = int(input())
	k = int(input())

	result = maxMoney(n, k)
	print(str(result) + "\n")