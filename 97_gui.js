//GUI Stuff
add_top_button(1, 'Update Code', function () {
    updateCode()
});
add_top_button(2, 'Refresh Party', function () {
    refreshCharacters(true)
});
add_top_button(3, 'Dev', function () {
    parent.require('electron').remote.getCurrentWebContents().openDevTools();
});
// Clear Drawings
setInterval(function () {
    clear_drawings();
}, 300);