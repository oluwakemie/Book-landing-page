function toggleMenu(displayState) {
    const nav = document.getElementById('header_navigation');
    const closeico = document.getElementById('close-ico');
    nav.style.display = displayState
    closeico.style.display = displayState
}
