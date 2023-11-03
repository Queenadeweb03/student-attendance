'use strict';
window.addEventListener('load', e => {
  const form = document.getElementById('form');
  const name = document.getElementById('name');
  const num = document.getElementById('number');
  const city = document.getElementById('city');
  const roll = document.getElementById('roll');
  const gender = document.getElementById('gender');
  const table = document.getElementById('table');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const task1 = name.value;
    const task2 = num.value;
    const task3 = city.value;
    const task4 = roll.value;
    const task5 = gender.value;
    if (!task1 || !task2 || !task3 || !task4 || !task5) {
      alert('Fill all the details');
    } else {
      let row = document.createElement('tr');
      row.classList.add('row');

      let list = document.createElement('td');
      let rowArr = document.getElementsByClassName(row);
      let serialNum = rowArr.length + 1;
      list.textContent = serialNum;

      let list1 = document.createElement('td');
      list1.textContent = task1;

      let list2 = document.createElement('td');
      list2.textContent = task2;

      let list3 = document.createElement('td');
      list3.textContent = task3;

      let list4 = document.createElement('td');
      list4.textContent = task4;

      let list5 = document.createElement('td');
      list5.textContent = task5;

      let list6 = document.createElement('td');
      let pBtn = document.createElement('input');
      pBtn.type = 'button';
      pBtn.classList.add('pbtn');
      pBtn.value = 'P';

      let aBtn = document.createElement('input');
      aBtn.type = 'button';
      aBtn.classList.add('abtn');
      aBtn.value = 'A';

      table.appendChild(row);
      row.append(list, list1, list2, list3, list4, list5, list6);
      list6.append(pBtn, aBtn);

      name.value = '';
      num.value = '';
      city.value = '';
      roll.value = '';
      gender.value = '';

      pBtn.addEventListener('click', e => {
        if (pBtn.value === 'P') {
          aBtn.remove();
          pBtn.value = 'present';
        }
      });

      aBtn.addEventListener('click', e => {
        if (aBtn.value === 'A') {
          pBtn.remove();
          aBtn.value = 'Absent';
        }
      });
    }
  });
});
