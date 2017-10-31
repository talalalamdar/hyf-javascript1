   //1
$mkdir directory && cd directory
$touch blank.txt

  //2
$echo "Hello, hello, hello, hello, hello" > greetings.txt
$cp greetings.txt 1.txt
$cp greetings.txt 2.txt
$cp greetings.txt 3.txt
$cp greetings.txt 4.txt
$cp greetings.txt 5.txt

  //3
$echo "cat" > pets.txt
$echo "dog" >> pets.txt
$echo "hamster" >> pets.txt

  //4
$echo "cat" > command.txt
$echo "ls" >> command.txt
$echo "pwd" >> command.txt

  //5
$cat pets.txt command.txt | sort | uniq



