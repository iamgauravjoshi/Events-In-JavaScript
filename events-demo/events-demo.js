// Mouse Events
const clickBtn = document.getElementById("clickBtn");
const clickResult = document.getElementById("clickResult");
let clickCount = 0;

clickBtn.addEventListener("click", function () {
  clickCount++;
  clickResult.innerHTML = `<span class="text-green-600 font-medium">Single click detected! (${clickCount} total clicks)</span>`;
  clickBtn.classList.add("pulse-animation");
  setTimeout(() => clickBtn.classList.remove("pulse-animation"), 500);
});

clickBtn.addEventListener("dblclick", function () {
  clickResult.innerHTML = `<span class="text-purple-600 font-medium">🎉 Double click detected! That was fast!</span>`;
});

// Mouse Over/Out Events
const hoverBox = document.getElementById("hoverBox");
const tooltip = document.getElementById("tooltip");
const hoverResult = document.getElementById("hoverResult");

hoverBox.addEventListener("mouseover", function () {
  tooltip.classList.add("show");
  hoverResult.innerHTML = `<span class="text-blue-600 font-medium">🖱️ Mouse entered the area!</span>`;
  hoverBox.style.transform = "scale(1.05)";
});

hoverBox.addEventListener("mouseout", function () {
  tooltip.classList.remove("show");
  hoverResult.innerHTML = `<span class="text-orange-600 font-medium">👋 Mouse left the area!</span>`;
  hoverBox.style.transform = "scale(1)";
});

// Keyboard Events
const keyInput = document.getElementById("keyInput");
const keyEvents = document.getElementById("keyEvents");
const specialKeyInput = document.getElementById("specialKeyInput");
const specialKeyEvents = document.getElementById("specialKeyEvents");

keyInput.addEventListener("keydown", function (e) {
  addKeyEvent(`⬇️ Key pressed: "${e.key}" (Code: ${e.code})`);
});

keyInput.addEventListener("keyup", function (e) {
  addKeyEvent(`⬆️ Key released: "${e.key}"`);
});

function addKeyEvent(message) {
  const eventDiv = document.createElement("div");
  eventDiv.className = "text-green-600 bg-green-50 px-2 py-1 rounded";
  eventDiv.textContent = message;
  keyEvents.insertBefore(eventDiv, keyEvents.firstChild);

  // Keep only last 5 events
  while (keyEvents.children.length > 5) {
    keyEvents.removeChild(keyEvents.lastChild);
  }
}

specialKeyInput.addEventListener("keydown", function (e) {
  let modifiers = [];
  if (e.ctrlKey) modifiers.push("Ctrl");
  if (e.shiftKey) modifiers.push("Shift");
  if (e.altKey) modifiers.push("Alt");
  if (e.metaKey) modifiers.push("Meta");

  let message = "";
  if (modifiers.length > 0) {
    message = `🔥 ${modifiers.join("+")} + ${e.key}`;
  } else {
    message = `Key: ${e.key}`;
  }

  addSpecialKeyEvent(message);
});

function addSpecialKeyEvent(message) {
  const eventDiv = document.createElement("div");
  eventDiv.className = "text-purple-600 bg-purple-50 px-2 py-1 rounded";
  eventDiv.textContent = message;
  specialKeyEvents.insertBefore(eventDiv, specialKeyEvents.firstChild);

  while (specialKeyEvents.children.length > 5) {
    specialKeyEvents.removeChild(specialKeyEvents.lastChild);
  }
}

// Form Events
// demoForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   formLog.innerHTML = `<span class="text-green-600 font-medium">✅ Form submitted successfully! (prevented actual submission for demo)</span>`;

//   // Add a little animation
//   formLog.style.transform = "scale(1.02)";
//   setTimeout(() => {
//     formLog.style.transform = "scale(1)";
//   }, 200);
// });

function addToLog(logId, message) {
  const formLog = document.getElementById(logId);
  formLog.innerHTML += `<div class="text-green-600">${message}</div>`;
  formLog.scrollTop = formLog.scrollHeight;
}

// Form events
function handleFocus(field) {
  addToLog("formLog", `📝 Focused on ${field} field`);
}

function handleBlur(field) {
  addToLog("formLog", `📝 Left ${field} field`);
}

function handleChange(field) {
  addToLog("formLog", `📝 ${field} field value changed`);
}

function handleSelectChange(value) {
  addToLog("formLog", `📝 Selected color: ${value}`);
}

function handleFormSubmit(event) {
  event.preventDefault();
  addToLog("formLog", "📋 Form submitted! (prevented default)");
}

// Change Events
const selectField = document.getElementById("selectField");
const rangeField = document.getElementById("rangeField");
const checkField = document.getElementById("checkField");
const changeEvents = document.getElementById("changeEvents");

selectField.addEventListener("change", function () {
  addChangeEvent(`📋 Select changed to: "${this.value}"`);
});

rangeField.addEventListener("input", function () {
  addChangeEvent(`🎚️ Range slider: ${this.value}%`);
});

checkField.addEventListener("change", function () {
  addChangeEvent(`☑️ Checkbox ${this.checked ? "checked" : "unchecked"}`);
});

function addChangeEvent(message) {
  const eventDiv = document.createElement("div");
  eventDiv.className = "text-orange-600 bg-orange-50 px-2 py-1 rounded";
  eventDiv.textContent = message;
  changeEvents.insertBefore(eventDiv, changeEvents.firstChild);

  while (changeEvents.children.length > 4) {
    changeEvents.removeChild(changeEvents.lastChild);
  }
}

// Window Events
const loadTime = document.getElementById("loadTime");
const windowSize = document.getElementById("windowSize");
const scrollProgress = document.getElementById("scrollProgress");
const scrollPercent = document.getElementById("scrollPercent");
const reloadBtn = document.getElementById("reloadBtn");

// Load event
window.addEventListener("load", function () {
  const now = new Date();
  loadTime.textContent = `Loaded at: ${now.toLocaleTimeString()}`;
});

reloadBtn.addEventListener("click", function () {
  const now = new Date();
  loadTime.textContent = `Simulated reload at: ${now.toLocaleTimeString()}`;
  reloadBtn.textContent = "Reloaded!";
  setTimeout(() => {
    reloadBtn.textContent = "Simulate Reload";
  }, 1000);
});

// Resize event
function updateWindowSize() {
  windowSize.textContent = `${window.innerWidth} × ${window.innerHeight}px`;
}

window.addEventListener("resize", updateWindowSize);
updateWindowSize(); // Initial call

// Scroll event
function updateScrollProgress() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent =
    docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;

  const progressBar = document.getElementById("scrollProgress");
  const percentText = document.getElementById("scrollPercent");

  if (progressBar && percentText) {
    progressBar.style.width = Math.max(0, Math.min(100, scrollPercent)) + "%";
    percentText.textContent = Math.max(0, Math.min(100, scrollPercent)) + "%";

    // Add color changes based on progress
    if (scrollPercent < 25) {
      progressBar.className = "scroll-indicator bg-blue-500 h-3 rounded-full";
    } else if (scrollPercent < 50) {
      progressBar.className = "scroll-indicator bg-green-500 h-3 rounded-full";
    } else if (scrollPercent < 75) {
      progressBar.className = "scroll-indicator bg-yellow-500 h-3 rounded-full";
    } else {
      progressBar.className = "scroll-indicator bg-red-500 h-3 rounded-full";
    }
  }
}

window.addEventListener("scroll", updateScrollProgress);
window.addEventListener("resize", updateScrollProgress);

// Initial call
setTimeout(updateScrollProgress, 100);

// Touch Events
const touchArea = document.getElementById("touchArea");
const touchEvents = document.getElementById("touchEvents");
const multiTouchArea = document.getElementById("multiTouchArea");
const touchPoints = document.getElementById("touchPoints");

touchArea.addEventListener("touchstart", function (e) {
  e.preventDefault();
  addTouchEvent("👆 Touch started!");
  this.style.transform = "scale(0.95)";
});

touchArea.addEventListener("touchend", function (e) {
  e.preventDefault();
  addTouchEvent("👋 Touch ended!");
  this.style.transform = "scale(1)";
});

// Also handle mouse events for desktop
touchArea.addEventListener("mousedown", function () {
  addTouchEvent("🖱️ Mouse down (simulating touch)");
  this.style.transform = "scale(0.95)";
});

touchArea.addEventListener("mouseup", function () {
  addTouchEvent("🖱️ Mouse up (simulating touch)");
  this.style.transform = "scale(1)";
});

function addTouchEvent(message) {
  const eventDiv = document.createElement("div");
  eventDiv.className = "text-pink-600 bg-pink-50 px-2 py-1 rounded";
  eventDiv.textContent = message;
  touchEvents.insertBefore(eventDiv, touchEvents.firstChild);

  while (touchEvents.children.length > 4) {
    touchEvents.removeChild(touchEvents.lastChild);
  }
}

// Multi-touch events
let currentTouches = 0;

multiTouchArea.addEventListener("touchstart", function (e) {
  e.preventDefault();
  currentTouches = e.touches.length;
  updateTouchPoints(currentTouches);
  this.style.transform = "scale(0.95)";
  this.style.backgroundColor = "#8b5cf6";
});

multiTouchArea.addEventListener("touchmove", function (e) {
  e.preventDefault();
  if (e.touches.length !== currentTouches) {
    currentTouches = e.touches.length;
    updateTouchPoints(currentTouches);
  }
});

multiTouchArea.addEventListener("touchend", function (e) {
  e.preventDefault();
  currentTouches = e.touches.length;
  updateTouchPoints(currentTouches);
  if (e.touches.length === 0) {
    this.style.transform = "scale(1)";
    this.style.backgroundColor = "";
    setTimeout(() => updateTouchPoints(0), 500);
  }
});

// Desktop simulation for multi-touch
let mousePressed = false;
let simulatedTouches = 0;

multiTouchArea.addEventListener("mousedown", function (e) {
  e.preventDefault();
  mousePressed = true;
  simulatedTouches = 1;
  updateTouchPoints(simulatedTouches);
  this.style.transform = "scale(0.95)";
  this.style.backgroundColor = "#8b5cf6";
});

multiTouchArea.addEventListener("mouseup", function (e) {
  e.preventDefault();
  mousePressed = false;
  simulatedTouches = 0;
  this.style.transform = "scale(1)";
  this.style.backgroundColor = "";
  setTimeout(() => updateTouchPoints(0), 500);
});

// Simulate multiple touches with keyboard + mouse
document.addEventListener("keydown", function (e) {
  if (
    mousePressed &&
    (e.key === "Shift" || e.key === "Control" || e.key === "Alt")
  ) {
    simulatedTouches = Math.min(simulatedTouches + 1, 5);
    updateTouchPoints(simulatedTouches);
  }
});

function updateTouchPoints(count) {
  if (count === 0) {
    touchPoints.innerHTML =
      '<span class="text-gray-500">No touches detected</span>';
  } else if (count === 1) {
    touchPoints.innerHTML = `<span class="text-purple-600 font-medium">✋ ${count} touch point detected!</span>`;
  } else {
    touchPoints.innerHTML = `<span class="text-purple-600 font-medium">🎉 ${count} touch points detected! Multi-touch active!</span>`;
  }
}

// Initialize on page load
updateWindowSize();
(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'969b8e3d457ffab4',t:'MTc1NDI4NDMwMy4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
      b.getElementsByTagName("head")[0].appendChild(d);
    }
  }
  if (document.body) {
    var a = document.createElement("iframe");
    a.height = 1;
    a.width = 1;
    a.style.position = "absolute";
    a.style.top = 0;
    a.style.left = 0;
    a.style.border = "none";
    a.style.visibility = "hidden";
    document.body.appendChild(a);
    if ("loading" !== document.readyState) c();
    else if (window.addEventListener)
      document.addEventListener("DOMContentLoaded", c);
    else {
      var e = document.onreadystatechange || function () {};
      document.onreadystatechange = function (b) {
        e(b);
        "loading" !== document.readyState &&
          ((document.onreadystatechange = e), c());
      };
    }
  }
})();
