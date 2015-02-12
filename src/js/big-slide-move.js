// Nearly the same as the move-item demo, but
// adding in the ability to snap items
app.bigSlideMove = function () {

  // $('.big-slide').droppable({
  //       tolerance: 'fit'
  // });



  $('.draggable-item').draggable({
        revert: 'invalid',
        stop: function(){
            $(this).draggable('option','revert','invalid');
        containment: 'parent'
        }
  });

  $('.draggable-item sandbox').droppable({
        greedy: true,
        tolerance: 'touch',
        drop: function(event,ui){
            ui.draggable.draggable('option','revert',true);
        }
  });



  $('.draggable-item').resizable({
        containment: 'parent'
  });



};
