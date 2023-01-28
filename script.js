const aBInput = document.getElementById("aBookInput");
const bBInput = document.getElementById("bBookInput");
const cBInput = document.getElementById("cBookInput");

const aSkillBefore = document.getElementById("aSkillBefore");
const aSkillAfter = document.getElementById("aSkillAfter");

const submitBtn = document.querySelector("#input-submit");

const materialList = {
  book: {
    1: 0,
    2: 3,
    3: 2,
    4: 4,
    5: 6,
    6: 9,
    7: 4,
    8: 6,
    9: 12,
    10: 16
  },
  material: {}
}
submitBtn.addEventListener('click', function () {
  let cBookTotalNeed = 0;
  let bBookTotalNeed = 0;
  let pBookTotalNeed = 0;

  let gBook = aBInput.value;
  let bBook = bBInput.value;
  let pBook = cBInput.value;

  let aSkillStart = aSkillBefore.value;
  let aSkillEnd = aSkillAfter.value;

  console.log(aSkillStart);
  console.log(aSkillEnd);
  console.log(materialList.book[2]);

  // let eSkillStart = eSkillBefore.value;
  // let eSkillEnd = eSkillAfter.value;

  // let qSkillStart = qSkillBefore.value;
  // let qSkillEnd = qSkillAfter.value;

  for (let i = aSkillStart; i <= aSkillEnd; i++) {
    cBookTotalNeed += materialList.book[i];
  }
  console.log(cBookTotalNeed);
});

