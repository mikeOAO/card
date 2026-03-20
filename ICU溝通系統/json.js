// 點擊卡片選中 / 再點取消
function toggleSelect(card){
  card.classList.toggle('selected');
  if(card.classList.contains('selected')){
    card.style.border = "3px solid #4CAF50";
  } else {
    card.style.border = "2px solid #ccc";
  }
}