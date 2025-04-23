function MenuVertis() {
    const menuImg = document.getElementById('menu-vertis-img')
    const MenuVertisBox = document.getElementById('menu-vertis-box')

    MenuVertisBox.style.display = 'block'

    MenuVertisBox.addEventListener('mouseleave', function() {
        MenuVertisBox.style.display = 'none'
    })
}

export default MenuVertis;