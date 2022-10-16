 var startval=1;
 var dict2 = {};
 var dict1 = {};
    var endval = 3;
    var date = new Date();
	  var current_date =date.getDate()+"-"+(date.getMonth()+1)+"-"+ date.getFullYear();
    var navButtons = document.getElementById("nav-buttons");
    var present = document.getElementById("present");
    var absent = document.getElementById("absent");
    var head1 = document.getElementById("head1");
    var head2 = document.getElementById("head2");
    var li = document.getElementById("list1");
    var li2 = document.getElementById("list2");
    var allmembers = document.getElementById("allmembers");
    const copybtn=document.getElementById("copybtn");
    const sharebtn=document.getElementById("sharebtn");
    const sharebtn2=document.getElementById("sharebtn2");
    const copybtn2=document.getElementById("copybtn2");
    const changeformate=document.getElementById("changeformate");
    const editformate=document.getElementById("editformate");
    const form1=document.getElementById("form1");
    const localbtneditplace=document.getElementById("localbtneditplace");
    const texter=document.getElementById("texter");
    const texter2=document.getElementById("texter2");
    const date1=document.getElementById("date");
    const date2=document.getElementById("date1");
    const submitbtn=document.getElementById("submitbtn");
    const databtn=document.getElementById("databtn");
    const savepoint=document.getElementById("savepoint");
    const cleardatabase=document.getElementById("cleardatabase");
    var mylist = document.getElementById("myList");
    var timeslist = document.getElementById("timeslist");
    var whatsapp = document.getElementById("whatsapp");
    var changelocalstoragebutton = document.getElementById("changelocalstoragebutton");
    var flagehexdecimal=true
     var str1="5"
    var notli=[10]
    notli.sort(function(a, b){return a-b});
    var deli=[]
    var feli=[]
    var all_li=[]
    let myDataBase = []
    let myDataBase2 = []
    let myDataBase3 = []
    let templist=[]
    let hulk=[]
    const dataBaseFromLocalStorage = JSON.parse(localStorage.getItem("myDataBase"))
    const dataBaseFromLocalStorage2 = JSON.parse(localStorage.getItem("myDataBase2"))
    var dataBaseFromLocalStorage3 = JSON.parse(localStorage.getItem("myDataBase3"))
    var bool = 0
    function textgive(val){
      if (isInt(val)){
        if(flagehexdecimal){
            if (val>99){
              q1=Math.trunc(val/10);
              r1=val%10;
              return q1.toString(16)+r1.toString(10);
            }
            return val
      }return val
      }else{
        return "oooo.."
      }
    }
    function isInt(value) {
      return !isNaN(value) && 
             parseInt(Number(value)) == value && 
             !isNaN(parseInt(value, 10));
    }
    if (dataBaseFromLocalStorage) {
        myDataBase = dataBaseFromLocalStorage
        myDataBase2 = dataBaseFromLocalStorage2
        myDataBase3 = dataBaseFromLocalStorage3
        render(myDataBase,myDataBase2,myDataBase3)
    }
    sharebtn.addEventListener('click', function(event) {
      timeis=timeslist.options[timeslist.selectedIndex].text;
      var ff="CSE-A  "+current_date+"%0A"+timeis+ "%0A"+head1.innerHTML.slice(0,7).trim()+"ees:%0A"+li.innerHTML
      whatsapp.setAttribute("href","https://api.whatsapp.com/send/?text="+ff);
      whatsapp.click();
    });
    sharebtn2.addEventListener('click', function(event) {
      timeis=timeslist.options[timeslist.selectedIndex].text;
      var ff="CSE-A %20"+current_date+"%0A"+"%0A"+timeis+ "%0A"+head2.innerHTML.slice(0,7).trim()+"ees"+":%0A"+li2.innerHTML;
      console.log(ff);
      whatsapp.setAttribute("href","https://api.whatsapp.com/send/?text="+ff);
     whatsapp.click();
    });
    copybtn.addEventListener('click', function(event) {
      alert("copyied");
      timeis=timeslist.options[timeslist.selectedIndex].text;
      console.log(timeis);
      navigator.clipboard.writeText("\nCSE-A   "+head1.innerHTML.slice(9,21)+" :   "+timeis+"\nStudentes ::"+li.innerHTML);
    });
    copybtn2.addEventListener('click', function(event) {
      alert("copyied");
      
      timeis=timeslist.options[timeslist.selectedIndex].text;
      console.log(timeslist.options[timeslist.selectedIndex].text);
      navigator.clipboard.writeText("\nCSE-A  "+head2.innerHTML.slice(9,21)+" :    "+timeis+"\nStudentes ::"+li2.innerHTML);
    });
    texter.addEventListener('change', function (event) {
      console.log(texter.value);
    });
    function setter(){
    var button = document.createElement("button");
    button.setAttribute("id", "order1");
    button.setAttribute("style", "display:none;");
    button.innerHTML=" sort it "
    head1.innerText+="     "+current_date+"  ";
    head1.appendChild(button);
    head2.innerHTML+="     "+current_date+"  ";
    var button1 = document.createElement("button");
    button1.innerHTML="      sort it "
    button1.setAttribute("id", "order2");
    button1.setAttribute("style", "display:none;");
    head2.appendChild(button1);
    };
    setter();
    changeformate.onclick=function (){
      if (allmembers.className=="mark1"){
        allmembers.className="mark"
      }else{
        allmembers.className="mark1"
      }
      var mk1=present.className
      var mk2=absent.className
      present.setAttribute("class",mk2);
      absent.setAttribute("class",mk1);
      var mk1=head1.innerHTML
      head1.innerHTML=head2.innerHTML;
      head2.innerHTML=mk1;
    };
    changelocalstoragebutton.onclick=function(){
      if (localbtneditplace.style.display === "none") {
        localbtneditplace.style.display = "block";
      } else {
        localbtneditplace.style.display = "none";
      }
      localbtneditplace.innerHTML=""
      var dataBaseFromLocalStorage3 = JSON.parse(localStorage.getItem("myDataBase3"))
      for (i=0;i<dataBaseFromLocalStorage3.length;i++){
        var templocalbtn = JSON.parse(localStorage.getItem(dataBaseFromLocalStorage3[i]))
      templocalbtn[0]//constant name
      templocalbtn[1]//detain list
      templocalbtn[2]//button name
      templocalbtn[3]//checked for hexadecimal numbers
      templocalbtn[4]//new list for creating only specific numbers
      templocalbtn[5]//name of the localstorage
      templocalbtn[6]//index in all sets
      v1=`<button onclick="delectinglocalbtn('${templocalbtn[5]}')" class="btn btn-info m-2" id="${templocalbtn[6]}">
      ${templocalbtn[2]}</button> `
          localbtneditplace.innerHTML+=v1
      }
    }
    function delectinglocalbtn(kkk){
      console.log(kkk);
      var k222=getInd( myDataBase3 ,kkk)
      kkk=k222[0]
        myDataBase.splice(kkk,1);
        myDataBase2.splice(kkk,1);
        var temp=myDataBase3.splice(kkk,1);
          localStorage.setItem(temp, JSON.stringify(""))
          localStorage.setItem("myDataBase", JSON.stringify(myDataBase))
          localStorage.setItem("myDataBase2", JSON.stringify(myDataBase2))
          localStorage.setItem("myDataBase3", JSON.stringify(myDataBase3))
          render(myDataBase,myDataBase2,myDataBase3)
          changelocalstoragebutton.click();
    }
    var order1 = document.getElementById("order1");
    var order2 = document.getElementById("order2");
    order1.onclick=function (){
      for(i=0;i<present.children.length;i++){
        var ff=present.children[i];
        var f2=parseInt( present.children[i].id.slice(6));
        dict1[f2]=ff;
      }
      present.innerHTML=""
      present.appendChild(head1)
      for(i=0;i<deli.length;i++){
        present.appendChild(dict1[deli[i]])
      }
    };
    order2.onclick=function (){
      for(i=1;i<absent.children.length;i++){
        var ff=absent.children[i];
        var f2=parseInt( absent.children[i].id);
        dict2[f2]=ff;
      }
      absent.innerHTML=""
      absent.appendChild(head2)
      for(i=0;i<feli.length;i++){
        absent.appendChild(dict2[feli[i]])
      }
    };
    editformate.onclick=function (){
      if (form1.style.display === "none") {
        form1.style.display = "block";
      } else {
        form1.style.display = "none";
      }
    };
    function funrupeshklrmtiet(kk){
      k22=kk.split(",")
      var newtemplist=[]
      for (i=0;i<k22.length;i++){
        if (isInt(k22[i])){
          newtemplist.push(parseInt(k22[i]))
        }
      }
        return newtemplist
    }
    submitbtn.onclick=function(){
          var myList=document.getElementById("myList");
          var formstart=document.getElementById("startnumber");
          var formend=document.getElementById("endnumber");
          
          var constantstring=document.getElementById("constantstring");
          templist=[];
          templist.push(constantstring.value)
          var elminatelist=document.getElementById("elminatelist");
          if (elminatelist.value===""){
            console.log("empty")
            templist.push([])
          }else{
            templist.push(funrupeshklrmtiet(elminatelist.value))
          }
          var buttonname=document.getElementById("buttonname");
          if (buttonname.value===""){
            var string1="{"+formstart.value+"-"+formend.value+"}"
            templist.push(string1)
          }else{
          templist.push(buttonname.value)
          }
          var fixed_lengthlist=document.getElementById("fixed_lengthlist");
          if (fixed_lengthlist.value===""){
            console.log("empty")
            hulk=[]
          }else{
            hulk=fixed_lengthlist.value.split(",")
          }
          var flexCheckChecked=document.getElementById("flexCheckChecked");
          templist.push(flexCheckChecked.checked)
          templist.push(hulk)
          console.log(templist);
          var temp,sm,lg;
          if(formend.value==""){
            sm=1;
          }else{
            sm=parseInt(formend.value);
          }
          if(formstart.value==""){
            lg=3;
          }else{
            lg=parseInt(formstart.value);
          }
          if (sm>lg){
            temp=sm;
            sm=lg;
            lg=temp;
          }
          startval=sm;
          endval=lg;
          fun2();
    };
    
    function triggerfun2(){
      console.log("called");
      console.log(timeslist.options[timeslist.selectedIndex].text)
    }
    function triggerfun(){
      console.log(mylist.options)
      console.log(mylist.options[mylist.selectedIndex])
      console.log(mylist.options[mylist.selectedIndex].text)
      switch (mylist.options[mylist.selectedIndex].text) {
        case "only numbers":
        console.log("---------");
          break;
        case "only unit place digit":
          break;
        case "hexa decimal value":
          break;
        case "college attendence number":
          break;
        case "--custom--":
          break;
      }
    };
    function fun4(k1,k2){
      startval=k1;
      endval=k2;
      all_li=[];
      fun2();
    };
    function render(leads,leads2,leads3) {
      let listItems = ""
      for (let i = 0; i < leads.length; i++) {
      var dataBaseFromLocalStorage3 = JSON.parse(localStorage.getItem(leads3[i]))
          listItems += `
          <button class="btn btn-primary m-2 step1" onclick=" dependenceny('${leads3[i]}',${leads[i]},${leads2[i]})">${dataBaseFromLocalStorage3[2]}</button>
          `
      }
      databtn.innerHTML = listItems
    };
    function dependenceny(v11,stval,enval){
      var dataBaseFromLocalStorage3 = JSON.parse(localStorage.getItem(v11))
     str1=dataBaseFromLocalStorage3[0]//constant name
     notli=dataBaseFromLocalStorage3[1]//detain list
          dataBaseFromLocalStorage3[2]//button name
      flagehexdecimal=dataBaseFromLocalStorage3[3]//checked for hexadecimal numbers
        dataBaseFromLocalStorage3[4]//new list for creating only specific numbers
        dataBaseFromLocalStorage3[5]//name of the localstorage
        dataBaseFromLocalStorage3[6]//index in all sets
      fun4(stval,enval)
    };
    savepoint.addEventListener("click", function() {
      all_li=[]    
      submitbtn.click()
          var flag=0
          if(myDataBase.includes(startval) && myDataBase2.includes(endval))
          {
            var li=getInd(myDataBase,startval)
            for(i=0;i<li.length;i++){
              if(myDataBase2[li[i]]==endval)
                flag+=1
            }
          }
          if(flag===0){
          myDataBase.push(startval)
          myDataBase2.push(endval)
          console.log(myDataBase,"kjhkj");
          var templocalname="rupeshklr"+startval+endval+hulk+templist[0]+templist[2]
          console.log(templocalname);
          myDataBase3.push(templocalname)
          templist.push(templocalname)
          templist.push(myDataBase2.length-1)
          localStorage.setItem(templocalname, JSON.stringify(templist))
          localStorage.setItem("myDataBase", JSON.stringify(myDataBase))
          localStorage.setItem("myDataBase2", JSON.stringify(myDataBase2))
          localStorage.setItem("myDataBase3", JSON.stringify(myDataBase3))
          render(myDataBase,myDataBase2,myDataBase3)
          }
    });
    cleardatabase.addEventListener("click", function() {
      if(confirm("Need to clear all data from database.")){
      localStorage.clear()
      myDataBase = []
      myDataBase2 = []
      myDataBase3 = []
      render(myDataBase,myDataBase2,myDataBase3)
      }
    });
    function fun3(){
      if(deli.length>0){
      li.innerHTML=textgive(deli[0]);
      for (i=1;i<deli.length;i++)
      li.innerHTML=li.innerHTML+" , "+textgive(deli[i]);
    }
    else li.innerHTML="";
    texter.setAttribute('value',li.innerHTML);
    if(feli.length>0){
     li2.innerHTML=textgive(feli[0]);
     for (i=1;i<feli.length;i++)
     li2.innerHTML=li2.innerHTML+" , "+textgive(feli[i]);
     console.log("ghj",feli[i]);
    }
    else li2.innerHTML="";
    texter2.setAttribute('value',li2.innerHTML);
    fun5();
    }; 
    function getInd(arr, val) {
      var index = [], i = -1;
      while ((i = arr.indexOf(val, i+1)) != -1){
          index.push(i);
      }
      return index;
  };     
  function remove_ele(arr,value) {
    return arr.filter(function(ele){ 
      return ele != value; 
  });
  };
    function fun1(){
      feli=[]
      deli=[]
    for (i=startval;i<endval+1;i++)
      {
        if (!notli.includes(i)){
          deli.push(i);
          all_li.push(i);}
      }
    };
  function fun5() {
    
    allmembers.innerHTML=""
    console.log(  );
    order1.click()
    order2.click()
    var cc2="<h1>hello</h1>";
    for(it=0;it<all_li.length;it++){
      i=all_li[it]
      if (deli.includes(i)){
      allmembers.appendChild(dict1[i]);
    }
      else{
        allmembers.appendChild(dict2[i]);
      }
    }
  }
  function fun2(){
    fun1();
    console.log(str1,notli);
      present.innerText="";
    for (var b=0; b<deli.length;b++)
    {  
          var button = document.createElement("button");
          button.setAttribute("class", "btn roll m-3 p-6  btn-lg mybtn");
          button.setAttribute("id", "temp__"+deli[b]);
          button.setAttribute("onClcik","fun1(this.id)" );
          var tenthpla="";
          if (deli[b]<10) {
            tenthpla="0"
          }
          button.innerHTML=str1+tenthpla + textgive(deli[b]);
          present.appendChild(button);
          
          head1.innerText= head1.innerText.slice(0,19)+"   "+deli.length;
          head2.innerText= head2.innerText.slice(0,19)+"   "+feli.length;
          button.addEventListener("click", function(event) {
            var btn = event.target;
            var fff=btn.id;
            if (fff.slice(0,6)=="temp__")
              {
                fff=parseInt(fff.slice(6));
                btn.setAttribute("class", "btn roll1  m-3 p-6 btn-lg mybtn");
                btn.setAttribute("type", "button");
                btn.setAttribute("id",fff);
                absent.appendChild(btn);
                deli=remove_ele(deli,fff);
                feli.push(fff);
                feli.sort(function(a, b){return a-b});
              }
            else{
                btn.setAttribute("id","temp__"+fff);
                btn.setAttribute("class", "btn roll  m-3 p-6 btn-lg mybtn");
                btn.setAttribute("type", "button");
                present.appendChild(btn);
                fff=parseInt(fff)
                feli=remove_ele(feli,fff);
                deli.push(parseInt(fff));
                deli.sort(function(a, b){return a-b});
            }
            head1.innerText= head1.innerText.slice(0,19)+"   "+deli.length;
            head2.innerText= head2.innerText.slice(0,19)+"   "+feli.length;
           fun3();
            });
        }
      fun3();
     };
fun2();
  fun3();


    
