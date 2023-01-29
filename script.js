const aBInput = document.getElementById("aBookInput");
const bBInput = document.getElementById("bBookInput");
const cBInput = document.getElementById("cBookInput");

const aSkillBefore = document.getElementById("aSkillBefore");
const aSkillAfter = document.getElementById("aSkillAfter");

const eSkillBefore = document.getElementById("eSkillBefore");
const eSkillAfter = document.getElementById("eSkillAfter");

const qSkillBefore = document.getElementById("qSkillBefore");
const qSkillAfter = document.getElementById("qSkillAfter");

const submitBtn = document.querySelector("#input-submit");

const materialList = {
  book: {
    c: {
      1: 0,
      2: 3
    },
    s: {
      3: 2,
      4: 4,
      5: 6,
      6: 9,
    },
    g: {
      7: 4,
      8: 6,
      9: 12,
      10: 16
    }
  },
  material: {}
}
let gBookTotalNeed = 0;
let bBookTotalNeed = 0;
let pBookTotalNeed = 0;


submitBtn.addEventListener('click', function () {
  let gBook = aBInput.value;
  let bBook = bBInput.value;
  let pBook = cBInput.value;

  let aSkillStart = aSkillBefore.value;
  let aSkillEnd = aSkillAfter.value;

  let eSkillStart = eSkillBefore.value;
  let eSkillEnd = eSkillAfter.value;

  let qSkillStart = qSkillBefore.value;
  let qSkillEnd = qSkillAfter.value;


  // console.log(process(aSkillEnd) - process(aSkillStart));
  let aNeed = answer(aSkillStart, aSkillEnd, gBook, bBook, pBook);
  let eNeed = answer(eSkillStart, eSkillEnd, gBook, bBook, pBook);
  let qNeed = answer(qSkillStart, qSkillEnd, gBook, bBook, pBook);

});

function process(a) {
  let gCount = 0;
  let bCount = 0;
  let pCount = 0;
  //---大於6是金書 大於2銀書 分別用三個變數裝著---//
  if (a >= 7) {
    for (let i = 7; i <= a; i++) {
      pCount += materialList.book.g[i];
    }
    for (let j = 3; j <= 6; j++) {
      bCount += materialList.book.s[j];
    }
    for (let k = 1; k <= 2; k++) {
      gCount += materialList.book.c[k];
    }
  } else if (a >= 3) {
    for (let j = 3; j <= a; j++) {
      bCount += materialList.book.s[j];
    }
    for (let k = 1; k <= 2; k++) {
      gCount += materialList.book.c[k];
    }
  } else {
    for (let k = 1; k <= a; k++) {
      gCount += materialList.book.c[k];
    }
  }
  return [gCount, bCount, pCount];
}

function consume(x, y) {
  // x == 需求 y==已有
  return [x[0] - y[0], x[1] - y[1], x[2] - y[2]];
}

function answer(start, end, gB, bB, pB) {
  // 目標數量跟已有數量相減 todo 還沒做多餘的書轉換
  let have = process(start);
  let need = process(end);
  let total = consume(need, have);
  console.log(total);

  gBookTotalNeed = gB - total[0];
  bBookTotalNeed = bB - total[1];
  pBookTotalNeed = pB - total[2];

  if (gBookTotalNeed < 0) {
    gBookTotalNeed = -gBookTotalNeed;
  }
  if (bBookTotalNeed < 0) {
    bBookTotalNeed = -bBookTotalNeed;
  }
  if (pBookTotalNeed < 0) {
    pBookTotalNeed = -pBookTotalNeed;
  }
  return [gBookTotalNeed, bBookTotalNeed, pBookTotalNeed]
}
function add() {
  //最後需求加總 
}