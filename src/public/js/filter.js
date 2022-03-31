const filterBtns = document.querySelectorAll('.filter-btn');
const albumList = document.querySelectorAll('.album');

const nowActive = {};
filterBtns.forEach((filterBtn) => {
  if (!nowActive[filterBtn.dataset.type]) {
    nowActive[filterBtn.dataset.type] = [];
  }
  nowActive[filterBtn.dataset.type].push(filterBtn.innerText);
});

function filterAlbum() {
  albumList.forEach((album) => {
    const { 앨범유형: activeType, 발매연도: activeYear } = nowActive;
    const albumYear = album.firstChild.querySelector('.album-date').innerText.slice(0, 4);
    const albumType = album.firstChild.querySelector('.album-type').innerText;

    if (activeYear.includes(albumYear) && activeType.includes(albumType)) {
      album.classList.remove('d-none');
    } else {
      album.classList.add('d-none');
    }
  });
}

function toggleFilterBtnStyle(button) {
  button.classList.toggle('btn-outline-secondary');
  button.classList.toggle('btn-secondary');
}

function toggleBtnOnOff(e) {
  const button = e.target;
  const { type, state } = button.dataset;
  const filter = button.innerText;

  if (state === 'on') {
    nowActive[type].splice(nowActive[type].indexOf(filter), 1);
    button.dataset.state = 'off';
  } else {
    nowActive[type].push(filter);
    button.dataset.state = 'on';
  }

  filterAlbum();
  toggleFilterBtnStyle(button);
}

filterBtns.forEach((filterBtn) => {
  filterBtn.addEventListener('click', toggleBtnOnOff);
});
