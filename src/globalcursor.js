var clicksfxs, hoversfxs, releasesfxs;
clicksfxs = [
  "../audio/ui/sfx_rrui_watch_ui_select_click_01",
  "../audio/ui/sfx_rrui_watch_ui_select_click_02",
  "../audio/ui/sfx_rrui_watch_ui_select_click_03",
  "../audio/ui/sfx_rrui_watch_ui_select_click_04",
  "../audio/ui/sfx_rrui_watch_ui_select_click_05",
  "../audio/ui/sfx_rrui_watch_ui_select_click_06",
];

hoversfxs = [
  "sfx_rrui_watch_ui_button_hover_general_01",
  "sfx_rrui_watch_ui_button_hover_general_02",
  "sfx_rrui_watch_ui_button_hover_general_03",
  "sfx_rrui_watch_ui_button_hover_general_04",
  "sfx_rrui_watch_ui_button_hover_general_05",
  "sfx_rrui_watch_ui_button_hover_general_06",
];

releasesfxs = [
  "sfx_rrui_watch_ui_select_up_01",
  "sfx_rrui_watch_ui_select_up_02",
  "sfx_rrui_watch_ui_select_up_03",
  "sfx_rrui_watch_ui_select_up_04",
  "sfx_rrui_watch_ui_select_up_05",
  "sfx_rrui_watch_ui_select_up_06",
];
var click, hover, release;
click = new Audio();
click.type = "audio/wav";

hover = new Audio();
hover.type = "audio/wav";

release = new Audio();
release.type = "audio/wav";

document.addEventListener("click", function () {
  sfxplay("click");
});

document.button.addEventListener("mouseover", function () {
  sfxplay("hover");
});

function sfxplay(type) {
  let x = getRndInteger(0, 6);
  switch (type) {
    case "click":
      click.src = clicksfxs[x];
      click.play();
    case "hover":
      hover.src = hoversfxs[x];
      hover.play();
    case "release":
      release.src = releasesfxs[x];
      release.play();
    default:
    // nothing happens
  }
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
