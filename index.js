// Click counter for basic demo
let clickCount = 0;

function showAlert() {
  clickCount++;
  document.getElementById(
    "click-result"
  ).textContent = `Button clicked ${clickCount} times! 🎉`;
}

// Keyboard events
function handleKeyDown(event) {
  document.getElementById(
    "keyDisplay"
  ).textContent = `Key pressed: ${event.key} (Code: ${event.code})`;
}

function handleKeyUp(event) {
  setTimeout(() => {
    document.getElementById(
      "keyDisplay"
    ).textContent = `Key released: ${event.key}`;
  }, 100);
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

// Advanced event listener example
let advancedClickCount = 0;
document
  .getElementById("advancedButton")
  .addEventListener("click", function () {
    advancedClickCount++;
    document.getElementById(
      "advancedCounter"
    ).textContent = `Clicks: ${advancedClickCount}`;

    // Add some visual feedback
    this.style.transform = "scale(0.95)";
    setTimeout(() => {
      this.style.transform = "scale(1)";
    }, 100);
  });

// Event object details
function showEventDetails(event) {
  const details = `
Event Type: ${event.type}
Target: ${event.target.tagName}
Mouse X: ${event.clientX}
Mouse Y: ${event.clientY}
Time: ${new Date().toLocaleTimeString()}
            `;
  document.getElementById("eventDetails").textContent = details;
}

// Practical examples
function changeBackground(color) {
  document.body.style.background = `linear-gradient(135deg, ${color} 0%, #764ba2 100%)`;
}

function updateCharCount(text) {
  document.getElementById("charCount").textContent = text.length;
}

// Utility function to add messages to logs
function addToLog(logId, message) {
  const log = document.getElementById(logId);
  const time = new Date().toLocaleTimeString();
  log.innerHTML += `[${time}] ${message}<br>`;
  log.scrollTop = log.scrollHeight;
}

// Window events demo
window.addEventListener("resize", function () {
  console.log("Window resized!");
});

// Initial welcome message
window.addEventListener("load", function () {
  addToLog("mouseLog", "🌟 Page loaded! Try the mouse events above.");
  addToLog("formLog", "🌟 Form ready! Try interacting with the inputs.");
});

(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'9695e042827e5522',t:'MTc1NDIyNDc0OC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
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
