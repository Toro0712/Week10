// keyword="prank"
let rowNum= 0;
document.getElementById('enter').addEventListener('click', () =>{
    let table= document.getElementById('guess');
    let row= table.insertRow();
    rowNum++;
    console.log(rowNum);
    row.setAttribute('class','text-center');
    row.insertCell(0).innerHTML= document.getElementById('1').value.toUpperCase();
    row.insertCell(1).innerHTML= document.getElementById('2').value.toUpperCase();
    row.insertCell(2).innerHTML= document.getElementById('3').value.toUpperCase();
    row.insertCell(3).innerHTML= document.getElementById('4').value.toUpperCase();
    row.insertCell(4).innerHTML= document.getElementById('5').value.toUpperCase();
//-----------------------------------------------------------------------------------------------
        if(document.getElementById('1').value.toUpperCase()==`P`){
            table.rows[rowNum].cells[0].setAttribute('class','bg-success');
            
        }
        else if([`R`,'A','N','K'].includes(document.getElementById('1').value.toUpperCase())){
            table.rows[rowNum].cells[0].setAttribute('class','bg-warning');
        
        }
        else{};
//----------------------------------------------------------------------------------------------
        if(document.getElementById('2').value.toUpperCase()==`R`){
            table.rows[rowNum].cells[1].setAttribute('class','bg-success');
            
        }
        else if([`P`,'A','N','K'].includes(document.getElementById('2').value.toUpperCase())){
            table.rows[rowNum].cells[1].setAttribute('class','bg-warning');
        
        }
        else{};
//----------------------------------------------------------------------------------------------
        if(document.getElementById('3').value.toUpperCase()==`A`){
            table.rows[rowNum].cells[2].setAttribute('class','bg-success');
            
        }
        else if([`R`,'P','N','K'].includes(document.getElementById('3').value.toUpperCase())){
            table.rows[rowNum].cells[2].setAttribute('class','bg-warning');
        
        }
        else{};
//----------------------------------------------------------------------------------------------
        if(document.getElementById('4').value.toUpperCase()==`N`){
            table.rows[rowNum].cells[3].setAttribute('class','bg-success');
            
        }
        else if([`R`,'A','P','K'].includes(document.getElementById('4').value.toUpperCase())){
            table.rows[rowNum].cells[3].setAttribute('class','bg-warning');
        
        }
        else{};
//----------------------------------------------------------------------------------------------
        if(document.getElementById('5').value.toUpperCase()==`K`){
            table.rows[rowNum].cells[4].setAttribute('class','bg-success');
            
        }
        else if([`R`,'A','N','P'].includes(document.getElementById('5').value.toUpperCase())){
            table.rows[rowNum].cells[4].setAttribute('class','bg-warning');
        
        }
        else{};

  
    
});