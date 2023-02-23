
function add(have, need) {
  //已有數量-需求數量
  let total = have - need;
  if (total < 0) {
    total = -total;
    //如果扣完的結果是負的要轉正
  } else if (total > 0) {
    total = 0;
  }
  return total;
}
