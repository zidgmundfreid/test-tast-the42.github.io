var menuItems = document.getElementsByClassName('wrapper-button');
var sliderItems = document.getElementById('wrapper-slider');
var sliderItems1 = document.getElementsByClassName('container-slider1');

var onClick = function (event) {
  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].classList.remove('active');
  }

  for (var j = 0; j < sliderItems1.length; j++) {
    sliderItems1[j].classList.remove('active1');
  }

  event.currentTarget.classList.add('active');
  sliderItems1[event.currentTarget.id].classList.add('active1');

  sliderItems.style.marginTop = `-${event.currentTarget.id * 100}vh`;
};

for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', onClick, false);
}

if (window.innerWidth < 375) {
  var onClickBackground = function (event) {
    for (var i = 0; i < menuItems.length; i++) {
      menuItems[i].style.backgroundColor = '#F6F6F6';
    }
    if (event.currentTarget.id == 0) {
      menuItems[event.currentTarget.id].style.backgroundColor = 'rgba(90, 88, 207, 0.15)';
    }
    if (event.currentTarget.id == 1) {
      menuItems[event.currentTarget.id].style.backgroundColor = 'rgba(64, 139, 252, 0.15)';
    }
    if (event.currentTarget.id == 2) {
      menuItems[event.currentTarget.id].style.backgroundColor = 'rgba(38, 134, 83, 0.2)';
    }
    if (event.currentTarget.id == 3) {
      menuItems[event.currentTarget.id].style.backgroundColor = 'rgba(249, 210, 112, 0.25)';
    }
    if (event.currentTarget.id == 4) {
      menuItems[event.currentTarget.id].style.backgroundColor = 'rgba(251, 202, 202, 0.3)';
    }
  };
}

for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', onClickBackground, false);
}

if (window.innerWidth > 1256) {
  function onScroll(event) {
    let sign;
    if (event.deltaY > 0) {
      sign = 1;
    } else {
      sign = -1;
    }

    var currentItem = document.querySelector('.active');
    var newItemId = parseInt(currentItem.id) + sign;
    newItemId = document.getElementById(newItemId);

    if (!newItemId) {
      return;
    }

    newItemId.classList.add('active');
    currentItem.classList.remove('active');

    let currentMarginTop = currentItem.id * 100;
    let newMarginTop = (currentMarginTop + sign * 100) * -1;
    console.log(newMarginTop);
    sliderItems.style.marginTop = `${newMarginTop}vh`;
  }

  document.addEventListener('wheel', function (event) {
    if (event.target.matches('.section-main')) {
      return;
    }
    onScroll(event);
  });
}


