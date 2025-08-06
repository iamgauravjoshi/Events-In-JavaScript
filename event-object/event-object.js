// Basic event display
function showBasicEvent(event) {
  const display = document.getElementById("basicEventDisplay");
  const eventInfo = `
🎯 Event Type: ${event.type}
📍 Target: ${event.target.tagName}
⏰ Timestamp: ${event.timeStamp.toFixed(2)}ms
🎈 Bubbles: ${event.bubbles}
🚫 Cancelable: ${event.cancelable}
🖱️ Client X: ${event.clientX}
🖱️ Client Y: ${event.clientY}
            `;
  display.textContent = eventInfo;
}

// Event properties display
function showEventProperties(event) {
  const display = document.getElementById("propertiesDisplay");
  const timestamp = new Date().toLocaleTimeString();

  const eventInfo = `
[${timestamp}] Event Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 type: "${event.type}"
📍 target: ${event.target.tagName}
🎯 currentTarget: ${event.currentTarget.tagName}
⏰ timeStamp: ${event.timeStamp.toFixed(2)}ms
🎈 bubbles: ${event.bubbles}
🚫 cancelable: ${event.cancelable}
📊 eventPhase: ${event.eventPhase} (${getPhaseDescription(event.eventPhase)})
🔄 isTrusted: ${event.isTrusted}

            `;
  display.textContent += eventInfo;
  display.scrollTop = display.scrollHeight;
}

// Mouse properties display
function showMouseProperties(event) {
  const display = document.getElementById("mousePropertiesDisplay");
  const timestamp = new Date().toLocaleTimeString();

  const eventInfo = `
[${timestamp}] Mouse Event: ${event.type}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📍 Position:
   clientX: ${event.clientX}, clientY: ${event.clientY}
   pageX: ${event.pageX}, pageY: ${event.pageY}
   screenX: ${event.screenX}, screenY: ${event.screenY}

🖱️ Mouse Button:
   button: ${event.button} (${getButtonName(event.button)})
   buttons: ${event.buttons}

⌨️ Modifier Keys:
   altKey: ${event.altKey}
   ctrlKey: ${event.ctrlKey}
   shiftKey: ${event.shiftKey}
   metaKey: ${event.metaKey}

            `;
  display.textContent += eventInfo;
  display.scrollTop = display.scrollHeight;
}

// Keyboard properties display
function showKeyboardProperties(event) {
  const display = document.getElementById("keyboardPropertiesDisplay");
  const timestamp = new Date().toLocaleTimeString();

  const eventInfo = `
[${timestamp}] Keyboard Event: ${event.type}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⌨️ Key Information:
   key: "${event.key}"
   code: "${event.code}"
   keyCode: ${event.keyCode} (deprecated)

🔄 Key State:
   repeat: ${event.repeat}
   
⌨️ Modifier Keys:
   altKey: ${event.altKey}
   ctrlKey: ${event.ctrlKey}
   shiftKey: ${event.shiftKey}
   metaKey: ${event.metaKey}

            `;
  display.textContent += eventInfo;
  display.scrollTop = display.scrollHeight;
}

// preventDefault demonstration
function demonstratePreventDefault(event) {
  event.preventDefault();
  document.getElementById("preventDefaultResult").textContent =
    "🛑 preventDefault() called! Link navigation was stopped.";

  setTimeout(() => {
    document.getElementById("preventDefaultResult").textContent = "";
  }, 3000);
}

// Event propagation demonstration
function parentClick() {
  document.getElementById("propagationResult").innerHTML +=
    "🔴 Parent element clicked!<br>";
}

function childClick(event) {
  document.getElementById("propagationResult").innerHTML +=
    "🔵 Child element clicked!<br>";
  // Uncomment the next line to stop propagation
  // event.stopPropagation();
}

function grandchildClick(event) {
  document.getElementById("propagationResult").innerHTML +=
    "🟢 Grandchild element clicked!<br>";

  // Ask user if they want to stop propagation
  if (event.ctrlKey) {
    event.stopPropagation();
    document.getElementById("propagationResult").innerHTML +=
      "🛑 stopPropagation() called! (because Ctrl was held)<br>";
  }
}

// stopImmediatePropagation demonstration
document
  .getElementById("immediateStopButton")
  .addEventListener("click", function (event) {
    document.getElementById("immediateStopResult").innerHTML +=
      "1️⃣ First listener executed<br>";
  });

document
  .getElementById("immediateStopButton")
  .addEventListener("click", function (event) {
    document.getElementById("immediateStopResult").innerHTML +=
      "2️⃣ Second listener executed<br>";

    if (event.shiftKey) {
      event.stopImmediatePropagation();
      document.getElementById("immediateStopResult").innerHTML +=
        "🛑 stopImmediatePropagation() called! (because Shift was held)<br>";
    }
  });

document
  .getElementById("immediateStopButton")
  .addEventListener("click", function (event) {
    document.getElementById("immediateStopResult").innerHTML +=
      "3️⃣ Third listener executed<br>";
  });

// Event phases demonstration
function setupPhaseDemo() {
  const parent = document.getElementById("phaseParent");
  const child = document.getElementById("phaseChild");
  const grandchild = document.getElementById("phaseGrandchild");

  // Add capturing listeners
  parent.addEventListener(
    "click",
    function (event) {
      logPhase("Parent", event);
    },
    true
  );

  child.addEventListener(
    "click",
    function (event) {
      logPhase("Child", event);
    },
    true
  );

  grandchild.addEventListener(
    "click",
    function (event) {
      logPhase("Grandchild", event);
    },
    true
  );

  // Add bubbling listeners
  parent.addEventListener(
    "click",
    function (event) {
      logPhase("Parent", event);
    },
    false
  );

  child.addEventListener(
    "click",
    function (event) {
      logPhase("Child", event);
    },
    false
  );

  grandchild.addEventListener(
    "click",
    function (event) {
      logPhase("Grandchild", event);
    },
    false
  );
}

function logPhase(elementName, event) {
  const display = document.getElementById("phaseDisplay");
  const phaseNames = ["", "Capturing", "Target", "Bubbling"];
  const phaseName = phaseNames[event.eventPhase];

  display.innerHTML += `${phaseName} Phase: ${elementName} element<br>`;
  display.scrollTop = display.scrollHeight;
}

// Smart form example
function smartFormSubmit(event) {
  event.preventDefault();
  const feedback = document.getElementById("formFeedback");
  feedback.style.background = "#d4edda";
  feedback.style.color = "#155724";
  feedback.textContent =
    "✅ Form submitted successfully! (preventDefault used to demo)";
}

function handleFormKeydown(event) {
  if (event.key === "Enter" && event.ctrlKey) {
    event.target.form.dispatchEvent(new Event("submit"));
  }
}

function handleFormFocus(event) {
  const feedback = document.getElementById("formFeedback");
  feedback.style.background = "#d1ecf1";
  feedback.style.color = "#0c5460";
  feedback.textContent = "💡 Tip: Press Ctrl+Enter to submit quickly!";
}

function handleFormBlur(event) {
  const feedback = document.getElementById("formFeedback");
  if (event.target.value && !event.target.validity.valid) {
    feedback.style.background = "#f8d7da";
    feedback.style.color = "#721c24";
    feedback.textContent = "❌ Please enter a valid email address";
  }
}

// Game interaction example
function gameInteraction(event) {
  const gameElements = document.getElementById("gameElements");
  const coordinates = document.getElementById("gameCoordinates");

  // Create a visual element at click position
  const dot = document.createElement("div");
  dot.style.position = "absolute";
  dot.style.width = "20px";
  dot.style.height = "20px";
  dot.style.borderRadius = "50%";
  dot.style.left = event.offsetX - 10 + "px";
  dot.style.top = event.offsetY - 10 + "px";
  dot.style.pointerEvents = "none";

  if (event.ctrlKey) {
    dot.style.background = "gold";
    dot.style.boxShadow = "0 0 20px gold";
    dot.innerHTML = "⭐";
    dot.style.fontSize = "16px";
    dot.style.textAlign = "center";
  } else {
    dot.style.background = "#667eea";
  }

  gameElements.appendChild(dot);

  // Update coordinates display
  coordinates.innerHTML = `
🎮 Game Interaction:
📍 Offset: (${event.offsetX}, ${event.offsetY})
📍 Client: (${event.clientX}, ${event.clientY})
⌨️ Ctrl Key: ${event.ctrlKey ? "✨ SPECIAL EFFECT!" : "No"}
🖱️ Button: ${getButtonName(event.button)}
⏰ Time: ${event.timeStamp.toFixed(2)}ms
            `;

  // Remove dot after animation
  setTimeout(() => {
    if (dot.parentNode) {
      dot.parentNode.removeChild(dot);
    }
  }, 2000);
}

// Utility functions
function getButtonName(buttonCode) {
  const names = ["Left", "Middle", "Right"];
  return names[buttonCode] || "Unknown";
}

function getPhaseDescription(phase) {
  const descriptions = ["", "Capturing", "Target", "Bubbling"];
  return descriptions[phase] || "Unknown";
}

function clearDisplay(displayId) {
  document.getElementById(displayId).textContent = "Display cleared...";
}

// Initialize phase demo
setupPhaseDemo();

// Welcome message
window.addEventListener("load", function () {
  console.log("🎯 Event Object Tutorial Loaded!");
  console.log(
    "💡 Try interacting with different elements to see event properties"
  );
});

(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'969c0670f3ed91b5',t:'MTc1NDI4OTIyNi4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
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
