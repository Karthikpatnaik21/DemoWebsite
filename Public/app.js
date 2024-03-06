// slider
const productContainers = [...document.querySelectorAll('.products')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];
var buttonTags = ['.d-elements','.best-deals'];

function scrollSetUp(tag, index, item, scrollItems){
  const card =[...document.querySelectorAll(tag + ' .card')];
  let cardArray = [];
  let cardDisp =[];
  card.forEach((item) =>{
    let cardDimentions = item.getBoundingClientRect();
    let cardX = cardDimentions.x;
    cardArray.push(cardX);
  });
  var scrolldata = [];
  var i = 0;
  for (i; i<= cardArray.length-2;i++){
    scrolldata.push((cardArray[i+1]-cardArray[i]));
  }
  var scrollDist = scrolldata.slice(0,scrollItems);
  var scroll = 0;
  scrollDist.forEach((item) =>{
    scroll += item;
  })

  nxtBtn[index].addEventListener('click', () => {
      item.scrollLeft += scroll;
  });

  preBtn[index].addEventListener('click', () => {
      item.scrollLeft -= scroll;
  });
}

productContainers.forEach((item, i) => {
  scrollSetUp(buttonTags[i], i, item, 2);
})
// Loading Page

$(window).on("load", function(){
  $("#Loading").fadeOut("slow");
});
