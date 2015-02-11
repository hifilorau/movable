app.reorderSlides = function () {

  console.log("Might get my sort on");

  $(".reorder-container").sortable({
        axis: 'y',
        containment: "parent"
     });

   $(".reorder-container").disableSelection();

};
