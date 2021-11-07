const li = document.querySelectorAll('#list-data li')
const menu = document.querySelector('.menu')
const nav = document.querySelector('nav')
const navHeader = document.querySelector('nav header')
const navFooter = document.querySelector('footer')
const avatarFooter = document.querySelector('footer .user')

function setNavData() {
  li.forEach(li => {
    const data = li.getAttribute('data-set')
    li.innerHTML = `
      <div><img src="./images/${data}.svg" alt="${data}"/></div>
      <span class="hidden">${data}</span>
      `
  })
}

function toggle() {
  const elements = document.querySelectorAll('ul li span')

  elements.forEach(el => {
    if (el.getAttribute('class') == 'hidden') {
      el.classList.remove('hidden')
      nav.style.width = '29rem'
      navHeader.classList.add('header')
      navFooter.classList.add('footer')
      avatarFooter.style.display = 'flex'
    } else if (el.getAttribute('class') != 'hidden') {
      el.classList.add('hidden')
      nav.style.width = '7.8rem'
      navHeader.classList.remove('header')
      navFooter.classList.remove('footer')
      avatarFooter.style.display = 'none'
    }
  })
}

menu.addEventListener('click', toggle)

setNavData()
