

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
