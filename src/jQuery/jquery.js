var isMenuOpen = false;
$('#nav-toggle').click(function() {
    isMenuOpen = !isMenuOpen;
    $(this).attr('aria-expanded', isMenuOpen);
    $('#nav-content').attr('aria-expanded', isMenuOpen);
});