var hover, click, tab, chat, toggle;
var hoversrc, clicksrc, tabsrc, chatsrc, togglesrc;

console.log("loaded script"); // to see if it loads

hover = new Audio();
hover.type = "audio/wav";
hover.src = "audio/watch/sfx_rrui_watch_ui_button_hover_general_01.wav";
hoversrc = "audio/watch/sfx_rrui_watch_ui_button_hover_general";
hover.loop = false;

click = new Audio();
click.type = "audio/wav";
click.src = "audio/watch/sfx_rrui_watch_ui_select_click_01.wav";
clicksrc = "audio/watch/sfx_rrui_watch_ui_select_click";
click.loop = false;

tab = new Audio();
tab.type = "audio/wav";
tab.src = "audio/watch/sfx_rrui_watch_ui_tab_over_01.wav";
tabsrc = "audio/watch/sfx_rrui_watch_ui_tab_over";
tab.loop = false;

chat = new Audio();
chat.type = "audio/wav";
chat.src = "audio/watch/sfx_rrui_chatbubble_chat_send_01.wav";
chatsrc = "audio/watch/sfx_rrui_chatbubble_chat_send";
chat.loop = false;

toggle = new Audio();
toggle.type = "audio/wav";
toggle.src = "audio/watch/sfx_rrui_chatbubble_chat_appear_01.wav";
togglesrc = "audio/watch/sfx_rrui_chatbubble_chat_appear";
toggle.loop = false;

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

document.querySelector("button").addEventListener("mouseover", function () {
  watchSound(hover, hoversrc, 6);
  console.log("hover");
});

document.querySelector("button").addEventListener("click", function () {
  watchSound(click, clicksrc, 6);
  console.log("click");
});

function watchSound(sfx, sfxsrc, limit) {
  sfx.pause();
  sfx.currentTime = 0;
  sfx.src = sfxsrc + "_0" + getRndInteger(1, limit) + ".wav";
  sfx.play();
}
