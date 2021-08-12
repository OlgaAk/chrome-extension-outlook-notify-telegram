// chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
//     /* If the received message has the expected format... */
//     if (msg.text && (msg.text == "report_back")) {
//         /* Call the specified callback, passing
//            the web-pages DOM content as argument */
// 		   document.getElementsByClassName("gLFyf gsfi")[0].value="hello!"
//     sendResponse(document.title);
//     }
// });

// var btn = document.createElement("BUTTON")
// var t = document.createTextNode("CLICK ME");
// btn.appendChild(t);
// //Appending to DOM
// document.body.appendChild(btn);

const colorTitlesRed = () => {
  const list = document.querySelectorAll("[autoid='_lv_5']");
  console.log(list.length);

  for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
    list[i].style.color = "red";
  }
};

const editDom = () => {
  const mailBox = document.querySelector(
    "._lv_31.customScrollBar.scrollContainer"
  );

  // colorTitlesRed();

  observe(mailBox);
};

const observe = (el) => {
  const config = { attributes: true, childList: true, subtree: true };
  const observer = new MutationObserver(callback);
  observer.observe(el, config);
  console.log("started observe");
};

const callback = function (mutationsList, observer) {
  console.log("something was mutated");
  for (const mutation of mutationsList) {
    if (mutation.type === "childList") {
      console.log("A child node has been added or removed.");

      // const theme =
      //   document.querySelectorAll("[autoid='_lv_5']")[0].textContent;

      const theme = document.querySelector("[autoid='_lv_3']").innerText;
      notifyOnTelegram(theme);
    }
    // else if (mutation.type === 'attributes') {
    //     console.log('The ' + mutation.attributeName + ' attribute was modified.');
    // }
  }
};

const notifyOnTelegram = (theme) => {
  fetch(API_URL + theme)
    .then((response) => response.json())
    .then((data) => console.log(data));
};

setTimeout(() => {
  editDom();
}, 3000);

setTimeout(() => {
  document.querySelector("[autoid='_n_5']").style.backgroundColor = "#f5ec42";
}, 4000);
