const showMenue = () => {

    const hamburger = document.getElementById('menuitems');
    hamburger.classList.add('showMenu')

}

const closeMenuItems = () => {
    const hamburger = document.getElementById('menuitems');
    hamburger.classList.remove('showMenu')
}


const showMore1 = () => {
    const itemsList = document.getElementById('showMoreItems');
    if (itemsList.style.display == "none") {

        itemsList.style.setProperty('display', 'block');


    } else {
        itemsList.style.setProperty('display', 'none');
    }
}

const showMore2 = () => {
    const itemsList2 = document.getElementById('showMoreItems2');
    if (itemsList2.style.display == "none") {

        itemsList2.style.setProperty('display', 'block');


    } else {
        itemsList2.style.setProperty('display', 'none');
    }
}


const desktopNavBar1 = () => {
    const navListItem1 = document.getElementById('navListItem1');
    if (navListItem1.style.display == "none") {

        navListItem1.style.setProperty('display', 'block');


    } else {
        navListItem1.style.setProperty('display', 'none');
    }
}

const desktopNavBar2 = () => {
    const navListItem2 = document.getElementById('navListItem2');
    if (navListItem2.style.display == "none") {

        navListItem2.style.setProperty('display', 'block');


    } else {
        navListItem2.style.setProperty('display', 'none');
    }
}