//GUI Stuff
add_top_button(1, 'Update Code', function () {
    updateCode()
});
add_top_button(2, 'Refresh Party', function () {
    refreshCharacters(true)
});
// Clear Drawings
setInterval(function () {
    clear_drawings();
}, 300);