
    var startval=1;
    var endval = 69;
    var navButtons = document.getElementById("nav-buttons");
    var present = document.getElementById("present");
    var absent = document.getElementById("absent");
    var head1 = document.getElementById("head1");
    var head2 = document.getElementById("head2");
    var li = document.getElementById("list1");
    var li2 = document.getElementById("list2");
    const copybtn=document.getElementById("copybtn");
    const changeformate=document.getElementById("changeformate");
    const editformate=document.getElementById("editformate");
    const form1=document.getElementById("form1");
    const texter=document.getElementById("texter");
    const texter2=document.getElementById("texter2");
    var liaction=[]
    const str1="19HR1A05"
    var notli=[10]
    var deli=[]
    var feli=[]
    changeformate.onclick=function (){
      var mk1=present.className
      var mk2=absent.className
      present.setAttribute("class",mk2);
      absent.setAttribute("class",mk1);
      var mk1=head1.innerHTML
      head1.innerHTML=head2.innerHTML;
      head2.innerHTML=mk1;
    };
    editformate.onclick=function (){
      
    };
    function fun3(){
      if(deli.length>0){
      li.innerHTML=deli[0];
      for (i=1;i<deli.length;i++)
      li.innerHTML=li.innerHTML+" , "+deli[i];
     texter.setAttribute('value',li.innerHTML);
      }
      if(feli.length>0){
     li2.innerHTML=feli[0];
     for (i=1;i<feli.length;i++)
     li2.innerHTML=li2.innerHTML+" , "+feli[i];
    texter2.setAttribute('value',li2.innerHTML);
    }
    };
    console.log(deli)
      for (i=startval;i<endval+1;i++)
      {
        if (!notli.includes(i))
        deli.push(i);
      }
  function remove_ele(arr,value) {
    return arr.filter(function(ele){ 
      return ele != value; 
  });
  };
  function fun2(){
    for (var b=0; b<deli.length;b++)
    {
 
          var button = document.createElement("button");
          button.setAttribute("class", "roll");
          button.setAttribute("id", "temp__"+deli[b]);
          button.setAttribute("onClcik","fun1(this.id)" );
          var tenthpla="";
          if (deli[b]<10) {
            tenthpla="0"
          }
          button.innerHTML=str1+tenthpla + deli[b];
          present.appendChild(button);
          
          button.addEventListener("click", function(event) {
            var btn = event.target;
            var fff=btn.id;
            if (fff.slice(0,6)=="temp__")
              {
                console.log(fff.slice(6));
                fff=parseInt(fff.slice(6));
                btn.setAttribute("id",fff);
                absent.appendChild(btn);
                
                deli=remove_ele(deli,fff);
                feli.push(fff);
                feli.sort(function(a, b){return a-b});
              }
            else{
                //ff1=fff.slice(5);
                btn.setAttribute("id","temp__"+fff);
                present.appendChild(btn);
                fff=parseInt(fff)
                feli=remove_ele(feli,fff);
                deli.push(parseInt(fff));
                deli.sort(function(a, b){return a-b});
            }
            
            
            fun3();

            console.log(fff,deli,feli);
            });
        }
        fun3();
      console.log(deli,"\n\n",feli)
     }
  fun2();
  fun3();
