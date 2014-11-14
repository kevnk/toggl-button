/*jslint indent: 2 */
/*global $: false, document: false, togglbutton: false, createTag:false*/

'use strict';

togglbutton.render('.window-header:not(.toggl)', {observe: true}, function (elem) {
  var link, container = createTag('div', 'card-detail-item clear'),
    titleElem = $('.window-title-text', elem),
    projectElem = $('.board-header > a'),
    descriptionElem = $('.card-detail-item-block'),
    tagsElem = $('.card-detail-item-labels .editable-labels').getElementsByClassName('card-label'),
    tags = [];

  for (var i = tagsElem.length - 1; i >= 0; i--) {
    tags.push(tagsElem[i].innerText);
  };

  link = togglbutton.createTimerLink({
    className: 'trello',
    description: titleElem.innerText,
    tags: tags,
    projectName: projectElem.innerText
  });

  container.appendChild(link);
  descriptionElem.parentNode.insertBefore(container, descriptionElem);
});

/* Checklist buttons */
togglbutton.render('.checklist-item-details:not(.toggl)', {observe: true}, function (elem) {
  var link,
    projectElem = $('.board-header > a'),
    titleElem = $('.window-title-text'),
    taskElem = $('.checklist-item-details-text', elem);

  link = togglbutton.createTimerLink({
    className: 'trello',
    buttonType: 'minimal',
    projectName: projectElem.innerText,
    description: titleElem.innerText + ' - ' + taskElem.innerText,
  });

  link.classList.add('checklist-item-button');
  elem.parentNode.appendChild(link);
});
