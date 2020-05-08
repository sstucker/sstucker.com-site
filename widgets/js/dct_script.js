var major_colors = ["rgb(255,0,0)",
    "rgb(255,176,20)",
    "rgb(239, 230, 0)",
    "rgb(0,211,0)",
    "rgb(72,0,255)",
    "rgb(184,0,229)",
    "rgb(255,0,203)"];
var major_degrees = ["I", "ii", "iii", "IV", "V", "vi", "vii°"];
var minor_degrees = ["III", "iv", "v", "VI", "VII", "i", "ii°"];

var active_keys = [12];
var active_key = 12;

var chordsLUT = [
    ["Cmaj", "Dmin", "Emin", "Fmaj", "Gmaj", "Amin", "Bdim°"],  // C
    ["Gmaj", "Amin", "Bmin", "Cmaj", "Dmaj", "Emin", "F♯dim°"],  // G
    ["Dmaj", "Emin", "F♯min", "Gmaj", "Amaj", "Bmin", "C♯dim°"],  // D
    ["Amaj", "Bmin", "C♯min", "Dmaj", "Emaj", "F♯min", "G♯dim°"],  // A
    ["Emaj", "F♯min", "G♯min", "Amaj", "Bmaj", "C♯min", "D♯dim°"],  // E
    ["Bmaj", "C♯min", "D♯min", "Emaj", "F♯maj", "G♯min", "A♯dim°"],  // B
    ["F♯maj", "G♯min", "A♯min", "Bmaj", "C♯maj", "D♯min", "E♯dim°"],  // G♭
    ["D♭maj", "E♭min", "Fmin", "G♭maj", "A♭maj", "B♭min", "Cdim°"],  // D♭
    ["A♭maj", "B♭min", "Cmin", "D♭maj", "E♭maj", "Fmin", "Gdim°"],  // A♭
    ["E♭maj", "Fmin", "Gmin", "A♭maj", "B♭maj", "Cmin", "Ddim°"],  // E♭
    ["B♭maj", "Cmin", "Dmin", "E♭maj", "Fmaj", "Gmin", "Adim°"],  // B♭
    ["Fmaj", "Gmin", "Amin", "B♭maj", "Cmaj", "Dmin", "Edim°"],  // F
];

var notesLUT = {
    "Cmaj": "C E G",
    "C♯maj": "C♯ E♯ G♯",
    "Dmaj": "D F♯ A",
    "E♭maj": "E♭ G B♭",
    "Emaj": "E G♯ B",
    "Fmaj": "F A C",
    "F♯maj": "F♯ A♯ C♯",
    "Gmaj": "G B D",
    "A♭maj": "A♭ C E♭",
    "Amaj": "A C♯ E",
    "B♭maj": "B♭ D F",
    "Bmaj": "B D♯ F♯",
    "Cmin": "C E♭ G",
    "C♯min": "C♯ E G♯",
    "Dmin": "D F A",
    "E♭min": "E♭ G♭ B♭",
    "Emin": "E G B",
    "Fmin": "F A♭ C",
    "F♯min": "F♯ A C♯",
    "Gmin": "G B♭ D",
    "A♭min": "A♭ B E♭",
    "Amin": "A C E",
    "B♭min": "B♭ D♭ F",
    "Bmin": "B D F♯",
    "Cdim°": "C E♭ G♭",
    "C♯dim°": "C♯ E G",
    "Ddim°": "D F A♭",
    "E♭dim°": "E♭ G♭ A",
    "Edim°": "E G B♭",
    "Fdim°": "F A♭ B",
    "F♯dim°": "F♯ A C",
    "Gdim°": "G B♭ D♭",
    "A♭dim°": "A♭ B D",
    "Adim°": "A C E♭",
    "B♭dim°": "B♭ D♭ E",
    "Bdim°": "B D F",
}

var keyboardfileLUT = {
    "Cmaj": "img/piano/Cmaj.svg",
    "C♯maj": "img/piano/C#maj.svg",
    "Dmaj": "img/piano/Dmaj.svg",
    "E♭maj": "img/piano/Ebmaj.svg",
    "Emaj": "img/piano/Emaj.svg",
    "Fmaj": "img/piano/Fmaj.svg",
    "F♯maj": "img/piano/F#maj.svg",
    "Gmaj": "img/piano/Gmaj.svg",
    "A♭maj": "img/piano/Abmaj.svg",
    "Amaj": "img/piano/Amaj.svg",
    "B♭maj": "img/piano/Bbmaj.svg",
    "Bmaj": "img/piano/Bmaj.svg",
    "Cmin": "img/piano/Cmin.svg",
    "C♯min": "img/piano/C#min.svg",
    "Dmin": "img/piano/Dmin.svg",
    "E♭min": "img/piano/Ebmin.svg",
    "Emin": "img/piano/Emin.svg",
    "Fmin": "img/piano/Fmin.svg",
    "F♯min": "img/piano/F#min.svg",
    "Gmin": "img/piano/Gmin.svg",
    "A♭min": "img/piano/Abmin.svg",
    "Amin": "img/piano/Amin.svg",
    "B♭min": "img/piano/Bbmin.svg",
    "Bmin": "img/piano/Bmin.svg",
    "Cdim°": "img/piano/Cdim.svg",
    "C♯dim°": "img/piano/C#dim.svg",
    "Ddim°": "img/piano/Ddim.svg",
    "E♭dim°": "img/piano/Ebdim.svg",
    "Edim°": "img/piano/Edim.svg",
    "Fdim°": "img/piano/Fdim.svg",
    "F♯dim°": "img/piano/F#dim.svg",
    "Gdim°": "img/piano/Gdim.svg",
    "A♭dim°": "img/piano/Abdim.svg",
    "Adim°": "img/piano/Adim.svg",
    "B♭dim°": "img/piano/Bbdim.svg",
    "Bdim°": "img/piano/Bdim.svg",
}

var interval;

var cue = $(".cue");
var chord_name_text = $("#chord-name");
var scale_degree_text = $("#degree")
var notes_list_text = $("#notes-list");

var toggle = $("#play-pause");
var play_icon = $(".arrow");
var pause_icon = $(".pause");
var playing = false;

var tempo_slider = document.getElementById("tempo_slider");
var output = document.getElementById("tempo_view");
var beat = 0;
var period = 1 / (40 * 1 / 60000)

var clock = $("#clock");

var metronome_checkbox = $("#metronome_checkbox");
var met1 = $('audio#metronome_up');
var met2 = $('audio#metronome');

var multiple_checkbox = $("#multiple_checkbox");
var chord_checkbox = $("#chord_checkbox")
var degree_checkbox = $("#degree_checkbox");
var notes_checkbox = $("#notes_checkbox");
var piano_checkbox = $("#piano_checkbox");

var keyboard = $("#keyboard img");

var maj_circle = $("#maj_circle");
var min_circle = $("#min_circle");

// Get period from tempo slider
tempo_slider.oninput = function () {
    output.innerHTML = "Tempo (" + this.value + " BPM)";
    period = 1 / (tempo_slider.value * 1 / 60000)
}

var apply_color_to_slice = function (i, selected) {
    if (i < 12) {  // Minor
        if (selected) {
            min_circle.children().eq(i).find(".text").css("background-color", "#1F2041");
        }
        else {
            min_circle.children().eq(i).find(".text").css("background-color", "#A095BC");
        }
    }
    else {  // Major
        if (selected) {
            maj_circle.children().eq(i % 12).find(".text").css("background-color", "#820F19");
        }
        else {
            maj_circle.children().eq(i % 12).find(".text").css("background-color", "#CC3144");
        }
    }
}

var clear_circles = function () {
    for (i = 0; i < 12; i++) {
        min_circle.children().eq(i).find(".text").css("background-color", "#A095BC");
    }
    for (i = 11; i < 24; i++) {
        maj_circle.children().eq(i % 12).find(".text").css("background-color", "#CC3144");
    }
}

var update_keys = function (key, scale) {
    if (active_keys.includes(key * 12 + scale)) {  // Deselect
        active_keys = jQuery.grep(active_keys, function (value) {  // Remove clicked fron list
            return value != key * 12 + scale;
        });
        apply_color_to_slice(key * 12 + scale, false);
    }
    else {  // Select new
        if (multiple_checkbox.is(":checked")) {
            active_keys.push(key * 12 + scale);
            apply_color_to_slice(key * 12 + scale, true);
        }
        else {
            active_keys = [key * 12 + scale];
            clear_circles();
            apply_color_to_slice(key * 12 + scale, true);
        }
    }
}

var display_chord = function () {
    if (active_keys.length > 0) {
        cue.css("opacity", "0");
        var rand_key = active_keys[Math.floor(Math.random() * active_keys.length)];
        var rand_deg = Math.floor(Math.random() * 7);
        if (chord_checkbox.is(":checked")) {
            var rand_chord = chordsLUT[rand_key % 12][rand_deg];
            chord_name_text.text(rand_chord);
        }
        else {
            chord_name_text.text("");
        }
        if (degree_checkbox.is(":checked")) {
            if (rand_key > 11) {  // Major
                scale_degree_text.text(major_degrees[rand_deg]);
                scale_degree_text.css("color", major_colors[rand_deg])
            }
            else {  // Minor
                scale_degree_text.text(minor_degrees[rand_deg]);
                scale_degree_text.css("color", major_colors[(rand_deg + 2) % 7]);
            }
        }
        else {
            scale_degree_text.text("");
        }
        if (notes_checkbox.is(":checked")) {
            notes_list_text.text(notesLUT[chordsLUT[rand_key % 12][rand_deg]]);
        }
        else {
            notes_list_text.text("");
        }
        if (piano_checkbox.is(":checked")) {
            keyboard.attr("src", keyboardfileLUT[chordsLUT[rand_key % 12][rand_deg]]);
        }
        else {
            keyboard.attr("src", "");
        }

        cue.css("opacity", "1");
    }
    else {
        cue.innerHTML = "";
    }
}

var advance = function (quiet) {
    if (playing) {
        if (beat == 0) {
            clock.children().eq(3).css("background-color", "rgb(238,238,238)");
            if (!quiet) {
                met1[0].play();
            }
            display_chord();
        }
        else {
            clock.children().eq(beat - 1).css("background-color", "rgb(238,238,238)");
            if (!quiet) {
                met2[0].play();
            }
            if (beat == 3) {
                beat = -1;
            }
        }
        clock.children().eq(beat).css("background-color", "#1F2041");
        beat += 1;
        setTimeout(function () { // Recursively call advance function with period from slider
            if (metronome_checkbox.is(":checked")) {
                advance(false);
            }
            else {
                advance(true);
            }
        }, period);
    }
}

$(document).ready(function () {
    multiple_checkbox.change(function () {
        if ((!this.checked) && (active_keys.length > 0)) {
            active_keys = [active_keys[active_keys.length - 1]]; // Truncate to last selected key
        }
    });
    $('#min_circle li').click(function () {
        update_keys(0, $(this).index());
    });
    $('#maj_circle li').click(function () {
        update_keys(1, $(this).index());
    });
    toggle.click(function () {
        if (playing == true) {  // Stop
            playing = false;
            play_icon.css("display", "inline-block");
            pause_icon.css("display", "none");
            for (i = 0; i < 4; i++) {
                clock.children().eq(i).css("background-color", "rgb(238,238,238)");
            }
            beat = 0;
            cue.css("opacity", "0");
        }
        else {  // Start
            playing = true;
            play_icon.css("display", "none");
            pause_icon.css("display", "inline-block");
            if (metronome_checkbox.is(":checked")) {
                advance(false);
            }
            else {
                advance(true);
            }
        }
    });
});
