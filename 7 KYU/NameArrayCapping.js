function capMe(names) {
    return names.map(function(name) {return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();});
}