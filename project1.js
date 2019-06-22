var title, note,save,titleValue,noteValue,cardLink,noteForm,cardBody,yesNo,cardHeader,search,searchValue,searchBox,card,count,j;
var add;
count=0;
var i=0;
add=document.getElementById('section');

save= document.getElementById('save');
title= document.getElementById('title');
note= document.getElementById('note');
cardHeader=document.querySelector('.card-header');

noteForm=document.querySelector('.noteform');
search=document.querySelector('.no-boder');
cardLink= document.querySelector('.card-link');
	cardBody=document.querySelector('.card-body');
searchBox=document.querySelector('.row');
noteForm.addEventListener('submit',function(e){
	e.preventDefault();
	titleValue=title.value.trim();
	noteValue=note.value.trim();
	
	

// if(titleValue)
// cardLink.textContent=titleValue;
// if(noteValue)
// cardBody.textContent=noteValue;
const html=`<div class="card " id="card${i}">
		       <div class="card-header">
                  <a class="card-link " data-toggle="collapse" href="#collapse${i}"  aria-expanded="false" 
                  aria-controls="collapseExample" id="num${i}">
                   ${titleValue}
                  </a>
                  <a class="" href="#deletremainder" data-toggle="modal">
                  <i class="fas fa-trash trash"></i>
                  </a>
              </div>    
              <div class="collapse" id="collapse${i}">
                 <div class="card card-body">
                   ${noteValue}
                 </div>
         </div>



    </div>`;

add.innerHTML +=html;
i++;
noteForm.reset();

});



document.getElementById('section').addEventListener('click',function(e){
e.preventDefault();
if(e.target.classList.contains('trash')){
      var a=confirm("Are you sure, you want to delete it");

      if(a===true){
	     var parent1=e.target.parentElement;
	     
	     var parent2=parent1.parentElement;
         var parent3=parent2.parentElement;
	     
	     parent3.remove();
         }
};    
     

});
searchBox.addEventListener('submit',function(e){
	e.preventDefault();
});

searchBox.addEventListener('click',function(e){
	e.preventDefault();
	console.log("hello world");
	searchValue=search.value;
	if(searchValue){
		for(j=0;j<=100;j++){
		if(searchValue==document.getElementById('num'+j).textContent.trim()){
			console.log("found");
			document.getElementById('card'+j).classList.add('found');
			document.getElementById('card'+j).classList.remove('hide');
            count++;
		}
		else{
		console.log('lol');
	document.getElementById('card'+j).classList.add('hide');
document.getElementById('card'+j).classList.remove('found');

}
	
}
if(count===0)
console.log("no result found");
}
searchBox.reset();
});


function ready(){
	
	console.log("cool");
	for(j=0;j<=100;j++){
	document.getElementById('card'+j).classList.remove('hide');
	document.getElementById('card'+j).classList.remove('found');}
};