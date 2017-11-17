global.$       = global.jQuery = require('jquery');

var Draggabilly = require('draggabilly');

// var rotateConnectable = function(){

// 		$('.container').css({
// 			right: $('.connectable').offset().right,
// 			left: 'auto'
// 		})
	
// }

$(function(){
	$('.item').on('mousedown', function(){
		$('.container').addClass('isDraggable');
		$('.connectable').remove();

		$('.container').on('mousemove', function(e){

			var connectable = $('.connectable');
			var top = connectable.offset().top;
			var left = connectable.offset().left;

			// rotateConnectable();
			// if(e.pageX - left < 0 && e.pageX - left > -2 ){
			// 	console.log(e.pageX - left)
				
			// }

			connectable.css({
				width: e.pageX - left  ,
				height: e.pageY - top
			})
		});

		$('.container').append(
			$('<div/>', {
			  'class': 'connectable',
			  css: {           
			  	top: $(this).offset().top,
			  	left: $(this).offset().left - 20
			  },
			  html: '<div><select><option>on subscribe</option><option>on click</option></select></div>',
			  on: {
			    mouseenter: function() {
			      console.log('active class vs atamak için burdan ilerlenebilir');
			    },
			    click: function() {
			      console.log('tıklanınca silelim vs işlemleri için');
			    }
			  }
			})
		).bind(this);
	})

	$('.container').on('mouseup', function(){
		console.log('aaaa')
		$('.container').off('mousemove').removeClass('isDraggable');
	});

	$('.isDraggable').on('hover', function(){
		debugger;
		$('.connectable').addClass('active')
	})
});


var draggableElems = document.querySelectorAll('.draggable');
// array of Draggabillies
var draggies = []
// init Draggabillies
for ( var i=0, len = draggableElems.length; i < len; i++ ) {
  var draggableElem = draggableElems[i];
  var draggie = new Draggabilly( draggableElem, {
  	 handle: '.box-inner'
  });
  draggies.push( draggie );
}


