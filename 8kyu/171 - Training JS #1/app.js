/* In JavaScript, your code is running in a function, let us step by step complete your first JS function.


Look at this example:

      --------keyword "function"
      |       ----your function name  
      |       |    ---if needed, some arguments will appear in brackets
      |       |    |
    function myfunc(){  ---------your function code will starting with "{"
      //you should type your code here
    }----------------------------ending with "}


    If we want to print some to the screen, maybe we can use Document.write() in the web, or use alert() pop your message, but Codewars did not support these methods, we should use console.log() in your function. see this example:

function printWordToScreen(){
  var somewords="This is an example."
  console.log(somewords)
}

If we run this function, This is an example. will be seen on the screen. As you see, console.log() is an useful method help your work, you will become more and more like it.
 */
function helloWorld() {
  var str = "Hello World";
  return console.log("Hello World!");
}
