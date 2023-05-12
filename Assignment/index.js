  BtnArray = ["Red","Green","Yellow"]
  ColorClass = ["btn1","btn2","btn3"]

  function changeColor(color) {
    var element1 = document.getElementById("b1");
    console.log(element1.classList)
    element1.classList.remove("btn1");
    element1.classList.remove("btn2");
    element1.classList.remove("btn3");
    element1.classList.add(color);

    var element2 = document.getElementById("b2");
    element2.classList.remove("btn1");
    element2.classList.remove("btn2");
    element2.classList.remove("btn3");
    element2.classList.add(color);
    var element3 = document.getElementById("b3");
    element3.classList.remove("btn1");
    element3.classList.remove("btn2");
    element3.classList.remove("btn3");
    element3.classList.add(color);
  }

  function rotate(direction){
    if(direction=='right'){
    var x = BtnArray.pop()
    BtnArray.unshift(x);
    var y = ColorClass.pop()
    ColorClass.unshift(y);
    }
    if(direction=='left'){
    var x = BtnArray.shift()
    BtnArray.push(x);
    var y = ColorClass.shift()
    ColorClass.push(y);
    }
    document.getElementById("b1").innerHTML = BtnArray[0];
    colorRotation("b1",0)
    document.getElementById("b2").innerHTML = BtnArray[1];
    colorRotation("b2",1)
    document.getElementById("b3").innerHTML = BtnArray[2];
    colorRotation("b3",2)
  }
  function colorRotation(id,color){
  var element = document.getElementById(id);
  element.classList.remove("btn1")
    element.classList.remove("btn2");
    element.classList.remove("btn3");
    element.classList.add(ColorClass[color]);
  }

