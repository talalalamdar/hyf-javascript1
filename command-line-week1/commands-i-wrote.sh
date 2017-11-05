   //1
$mkdir directory && cd directory
$touch blank.txt

  //2
$echo "Hello, hello, hello, hello, hello" > greetings.txt
$for i in {1..5};do cp greetings.txt $i.txt; done


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



