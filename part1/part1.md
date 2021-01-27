1.it will print "prices.length" because i is declared as var, which is a global variable in JS.

2.It will print the last value stored in "discountedPrice" because variable defined by var is global and it will save the result.

3.It will print the last value stored in "finalPrice"; the same reason with question 2.

4.This will return [50,100,150], since after each calculation, the input price will * 1-0.5 = 0.5 which is half of the price, since it's just pushing old prices to the finalPrice list, all the price will cut in half such as [100/2,200/2,300/2].

5.it will show an error because i is not defined outside of its scope; it's using let to declare so it only lives inside of the "for" scope.

6.it will print the last value stored in "discountedPrices" because it's defined in the large function scope.

7.it will print the last value stored in the "finalPrice" because finalPrice is declared inside the function scope.

8.It will return [50,100,150]. After all the calculations are done inside the function discountPrices, discounted will become [50,100,150] inside the function scope, then it will just return it to the outter.

9.It will show an error because i is not defined in this scope, i is only defined in the "for" scope.

10.it will show an error since discountedPrice is not defined, the const only lives inside the "for" scope.

11.It will print 0 because const cannot be modified.

12.It will return [0,0,0], since finalPrice cannot be changed, each time we push finalPrice we are pushing 0 into the discounted array.

13.\
A.student.name\
B.student["Grad Year"]\
C.student.greeting()\
D.student["Favorite Teacher"].name\
E.student.courseLoad[0]

14.\
A.'32', 2 is converted to '2' then it gets concated with '3' to become '32'\
B. 1 , '3' get converted to number 3 then -2 gets 1\
C. 3 , null is converted to 0 by rule.\
D. '3null' , null is converted to string 'null' and concatenated with '3'\
E. 4 , true is converted to 1 by rule then add with 3, 1+3=4.\
F. 0 , false and null both are converted to 0 by rule.\
G. '3undefined' , undefined is converted to a string with the + sign.\
H. NaN, in numeric conversion, undefined will become NaN and any number deal with NaN is NaN.

15.\
A.true, '2' becomes number 2 and compare with 1, 2>1 so true\
B.false, they are treated as strings, in string compraison, JS will compare each char in ordered so '2' < '1' will return false, so it stops there.\
C.true, for comparison with ==, JS will still try to converted two things to the same type 2 is 2 so returns true.\
D.false, === in JS will compare their types first, if the type don't match, return false.\
E.false, true will become 1 by rule, 1 is not equal to 2 so false.\
F.true, since Boolean(2) returns true, true equals to true, it returns true.

16. == checks the equality with type conversion first but === doesn't. == will converts the values to numbers but === won't do the same.

17. It will print 'How are you?' because in 2 == true will be evaluated to false then Boolean(2) is true so it will log "how are you?"

19.The result will be [6,8,10]. First, when the modifyArray gets called, the second parameter callback will take in doSomething, at line 4, when a single element is passed in to the newArr.push(sth..), it will first call the doSomething(array[i], function(x)) it takes the anonymous function x * 2 as a parameter. So if 1 is passed in, it will first call evaluate doSomething 1+2 then be evaluated with the anonymous x * 2. so (1+2) * 2 = 6  

21. 
1\
4\
3\
2\
The reason is timer is slower than the other parts of the colde, 2 has 1 second timeout and 3 has 0.
