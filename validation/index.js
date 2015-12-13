window.onload = function(){

    var tab1 = document.querySelector('.tab1');
    var tab2 = document.querySelector('.tab2');

    var form1 = document.querySelector('#myForm1');
    var form2 = document.querySelector('#myForm2');


    function tabs1() {
        form1.style.display = 'block';
        form2.style.display = "none";
    }

    function tabs2(){
        form2.style.display = 'block';
        form1.style.display = 'none';
    }

    tab1.addEventListener('click', tabs1, false);
    tab2.addEventListener('click', tabs2, false);



    var state = {
        currField: null,
        position: 0,
        currTab: null,
        result: [],
        className: 'hasError'
    }





};