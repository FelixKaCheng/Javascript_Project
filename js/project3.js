
$('.tab-list').ready(function(){                   // Find lists of tabs

  //These first 3 steps are going get you any of the following 3 ids: tab-1, tab-2 or tab-3
  var $this = $(this);                            // Store this list
  var $tab = $this.find('li.active');             // Get the active list item
  var $link = $tab.find('a');                     // Get link from active tab

  //once we found the id of either tab-1, etc we are going to save this element by its id
  var $panel = $($link.attr('href'));             // Get active panel

  $this.on('click', '.tab-control', function(e) { // When click on a tab

    //'$this' is any of the 3 tab-control classes meaning the <a> tag
    var $link = $(this),

    //id is either one of the #tab-1, #tab-2, #tab-3
        id = this.hash;

    //if id is set and <a> containing tab-control class is not active do
    if (id && !$link.is('.active')) {

      $panel.removeClass('active');//remove active class from id=tab-i in the divs
      $tab.removeClass('active');//remove active class from the li <a>

      //add active class to their corresponding clicked id=tab-i
      //then make panel be equal to that <div class="tab-panel active" id="tab-1">
      $panel = $(id).addClass('active');          // Make new panel active

      //add active class to either li <a> with the id
      //since $link is the <a> then the parent for <a> is the li hence -> $link.parent()
      $tab = $link.parent().addClass('active');//make <li> to have an active class
    }
  });
});
