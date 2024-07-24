const items = document.querySelectorAll('.item');

const itemThreePropsList = items[3].querySelector('.props__list').cloneNode(true);
const itemFivePropsList = items[4].querySelector('.props__list').cloneNode(true);

items[3].after(items[0]);


items[0].querySelectorAll('.props__item_four')[2]
.after(items[2].querySelector('.props__item_four'));

items[4].querySelector('.props__list').replaceWith(itemThreePropsList);
items[3].querySelector('.props__list').replaceWith(itemFivePropsList);

items[2].querySelector('.props__list')
.append(...items[5].querySelectorAll('.props__item_two'));

const titles = document.querySelectorAll('.item__title');

const titleTwo = titles[0].cloneNode(true);
const titleFive = titles[3].cloneNode(true);
const titleSix = titles[4].cloneNode(true);

titles[0].replaceWith(titleFive);
titles[3].replaceWith(titleSix);
titles[4].replaceWith(titleTwo);

titles[1].textContent = 'This и прототипы объектов';

document.querySelector('.ads').remove();

console.log(titleTwo, titleThree, titleFive, titleSix);