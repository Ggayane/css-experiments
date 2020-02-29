const positionX = 30;
const positionY = 40;

const windowWidth = 700;
const windowHeight = 600;

const windowsCount = 5;


const startButton = document.querySelector('.start-button');

var windows = [];

startButton.onclick = () => {
  for (let i = 0; i < windowsCount; i++) {
    let currentWindow = window
    .open("./window.html", `window-${i}`, `menubar=no,location=no,status=1,scrollbars=no,width=${windowWidth},height=${windowHeight},screenX=${i * positionX},screenY=${i * positionY}`);

    windows.push(currentWindow);
  }

  windows.forEach(singleWindow => {
    singleWindow.onbeforeunload = () => {
      windows.forEach(item => {
        if (!item.closed) {
          item.close();
        }
      });
    };
  });
};
