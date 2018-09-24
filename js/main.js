document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var options = {}
    var instances = M.Sidenav.init(elems, options);
});

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.materialboxed');
    var options = {}
    var instances = M.Materialbox.init(elems, options);
});

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.parallax');
    var options = {}
    var instances = M.Parallax.init(elems, options);
});

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.tabs');
    var options = {}
    var instances = M.Tabs.init(elems, options);
});

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.datepicker');
    var options = {
        disableWeekends: true
    }
    var instances = M.Datepicker.init(elems, options);
});

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.tooltipped');
    var options = {
        disableWeekends: true
    }
    var instances = M.Tooltip.init(elems, options);
});