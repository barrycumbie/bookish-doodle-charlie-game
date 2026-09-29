let carPosition = $('#car').position();

document.querySelector("#resetBtn")
    .addEventListener('click', resetGame); 
    // .addEventListener('click', function(){
    //     console.log('stuff in click f/n IIFE: ', 'whatever')
    // }); 

$('#car').draggable({

    stop: function() {
        carPosition = $('#car').position();
        console.log(carPosition);           
      }
    }
);
$('#cat').draggable();

$('#finish').droppable({
  
    accept: '#car',
  
    drop: function() {
    alert('you win!');
  }
});

function resetGame(){
    const vanillaCar = document.querySelector("#car");
    vanillaCar.style.left = "0px";
    vanillaCar.style.top = "0px";
}

