var clicksfxs, hoversfxs, releasesfxs;

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

clicksfxs = [
    "sfx_rrui_watch_ui_select_click_01.wav",
    "sfx_rrui_watch_ui_select_click_02.wav",
    "sfx_rrui_watch_ui_select_click_03.wav",
    "sfx_rrui_watch_ui_select_click_04.wav",
    "sfx_rrui_watch_ui_select_click_05.wav",
    "sfx_rrui_watch_ui_select_click_06.wav",
];

hoversfxs = [
    "sfx_rrui_watch_ui_button_hover_general_01.wav",
    "sfx_rrui_watch_ui_button_hover_general_02.wav",
    "sfx_rrui_watch_ui_button_hover_general_03.wav",
    "sfx_rrui_watch_ui_button_hover_general_04.wav",
    "sfx_rrui_watch_ui_button_hover_general_05.wav",
    "sfx_rrui_watch_ui_button_hover_general_06.wav",
];

releasesfxs = [
    "sfx_rrui_watch_ui_select_up_01.wav",
    "sfx_rrui_watch_ui_select_up_02.wav",
    "sfx_rrui_watch_ui_select_up_03.wav",
    "sfx_rrui_watch_ui_select_up_04.wav",
    "sfx_rrui_watch_ui_select_up_05.wav",
    "sfx_rrui_watch_ui_select_up_06.wav",
];

var click, hover, release;

click = new Audio();
click.volume = 0.2;
click.type = "audio/wav";

hover = new Audio();
hover.volume = 0.2;
hover.type = "audio/wav";

release = new Audio();
release.type = "audio/wav";

function sfxplay(type) {
    let x = getRndInteger(0, 6);
    switch (type) {
        case "click":
            click.src = "https://cohenkirbyultra.github.io/testingroom/audio/ui/" + clicksfxs[x];
            click.cloneNode().play();
        case "hover":
            hover.src = "https://cohenkirbyultra.github.io/testingroom/audio/ui/" + hoversfxs[x];
            hover.cloneNode().play();
        case "release":
            release.src = "https://cohenkirbyultra.github.io/testingroom/audio/ui/" + releasesfxs[x];
            release.cloneNode().play();
        default:
        // nothing happens
    }
}
