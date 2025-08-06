// Event Flow Demo
const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");
const target = document.getElementById("target");
const eventLog = document.getElementById("eventLog");
const showCapture = document.getElementById("showCapture");
const showBubble = document.getElementById("showBubble");
const clearLog = document.getElementById("clearLog");

let eventCounter = 0;

function logEvent(phase, element, isCapturePhase = false) {
  eventCounter++;
  const timestamp = new Date().toLocaleTimeString();
  const phaseColor = isCapturePhase ? "text-red-600" : "text-green-600";
  const arrow = isCapturePhase ? "↓" : "↑";

  const logEntry = document.createElement("div");
  logEntry.className = `${phaseColor} mb-1`;
  logEntry.innerHTML = `${eventCounter}. [${timestamp}] ${arrow} ${phase}: ${element}`;

  if (
    eventLog.firstChild &&
    eventLog.firstChild.textContent.includes("Click the button")
  ) {
    eventLog.innerHTML = "";
  }

  eventLog.appendChild(logEntry);
  eventLog.scrollTop = eventLog.scrollHeight;
}

function highlightElement(element, isCapturePhase = false) {
  const highlightClass = isCapturePhase
    ? "capture-highlight"
    : "bubble-highlight";
  element.classList.add(highlightClass);
  setTimeout(() => {
    element.classList.remove(highlightClass);
  }, 500);
}

// Add event listeners for capture phase
function addCaptureListeners() {
  [grandparent, parent, child, target].forEach((element) => {
    element.addEventListener(
      "click",
      function (e) {
        if (showCapture.checked) {
          logEvent("CAPTURE", this.id || this.tagName, true);
          highlightElement(this, true);
        }
      },
      { capture: true }
    );
  });
}

// Add event listeners for bubble phase
function addBubbleListeners() {
  [grandparent, parent, child, target].forEach((element) => {
    element.addEventListener("click", function (e) {
      if (showBubble.checked) {
        logEvent("BUBBLE", this.id || this.tagName, false);
        highlightElement(this, false);
      }
    });
  });
}

addCaptureListeners();
addBubbleListeners();

clearLog.addEventListener("click", () => {
  eventLog.innerHTML =
    '<div class="text-gray-500">Click the button to see events...</div>';
  eventCounter = 0;
});

// Bubble vs Capture Demo
const bubbleDemo = document.getElementById("bubbleDemo");
const captureDemo = document.getElementById("captureDemo");
const bubbleLog = document.getElementById("bubbleLog");
const captureLog = document.getElementById("captureLog");

// Bubble demo
bubbleDemo.addEventListener("click", function (e) {
  addToLog(bubbleLog, `Outer clicked (bubble)`, "text-green-600");
});

bubbleDemo.querySelector("div").addEventListener("click", function (e) {
  addToLog(bubbleLog, `Middle clicked (bubble)`, "text-green-600");
});

bubbleDemo.querySelector("button").addEventListener("click", function (e) {
  addToLog(bubbleLog, `Inner button clicked (bubble)`, "text-green-600");
});

// Capture demo
captureDemo.addEventListener(
  "click",
  function (e) {
    addToLog(captureLog, `Outer clicked (capture)`, "text-red-600");
  },
  { capture: true }
);

captureDemo.querySelector("div").addEventListener(
  "click",
  function (e) {
    addToLog(captureLog, `Middle clicked (capture)`, "text-red-600");
  },
  { capture: true }
);

captureDemo.querySelector("button").addEventListener(
  "click",
  function (e) {
    addToLog(captureLog, `Inner button clicked (capture)`, "text-red-600");
  },
  { capture: true }
);

function addToLog(logElement, message, colorClass) {
  if (
    logElement.firstChild &&
    logElement.firstChild.textContent.includes("Click button")
  ) {
    logElement.innerHTML = "";
  }
  const entry = document.createElement("div");
  entry.className = colorClass;
  entry.textContent = message;
  logElement.appendChild(entry);
  logElement.scrollTop = logElement.scrollHeight;
}

// Stop Propagation Demo
const stopPropDemo = document.getElementById("stopPropDemo");
const stopPropBtn = document.getElementById("stopPropBtn");
const enableStopProp = document.getElementById("enableStopProp");
const stopPropLog = document.getElementById("stopPropLog");

stopPropDemo.addEventListener("click", function () {
  addToLog(stopPropLog, "Parent received click event", "text-orange-600");
});

stopPropBtn.addEventListener("click", function (e) {
  addToLog(stopPropLog, "Button clicked", "text-blue-600");
  if (enableStopProp.checked) {
    e.stopPropagation();
    addToLog(
      stopPropLog,
      "stopPropagation() called - parent won't receive event",
      "text-red-600"
    );
  }
});

// Prevent Default Demo
const preventLink = document.getElementById("preventLink");
const preventForm = document.getElementById("preventForm");
const enablePreventDefault = document.getElementById("enablePreventDefault");
const preventLog = document.getElementById("preventLog");

preventLink.addEventListener("click", function (e) {
  if (enablePreventDefault.checked) {
    e.preventDefault();
    addToLog(
      preventLog,
      "Link click prevented - no navigation",
      "text-red-600"
    );
  } else {
    addToLog(
      preventLog,
      "Link would navigate (prevented for demo)",
      "text-blue-600"
    );
    e.preventDefault(); // Always prevent for demo
  }
});

preventForm.addEventListener("submit", function (e) {
  if (enablePreventDefault.checked) {
    e.preventDefault();
    addToLog(preventLog, "Form submission prevented", "text-red-600");
  } else {
    e.preventDefault(); // Always prevent for demo
    addToLog(
      preventLog,
      "Form would submit (prevented for demo)",
      "text-blue-600"
    );
  }
});

// Event Delegation Demo
const withoutDelegation = document.getElementById("withoutDelegation");
const withDelegation = document.getElementById("withDelegation");
const addIndividualBtn = document.getElementById("addIndividualBtn");
const addDelegatedBtn = document.getElementById("addDelegatedBtn");
const individualLog = document.getElementById("individualLog");
const delegatedLog = document.getElementById("delegatedLog");

let individualCounter = 3;
let delegatedCounter = 3;

// Without delegation - individual listeners
function addIndividualListeners() {
  document.querySelectorAll(".individual-btn").forEach((btn, index) => {
    btn.addEventListener("click", function () {
      addToLog(
        individualLog,
        `Individual button ${index + 1} clicked`,
        "text-red-600"
      );
    });
  });
}

addIndividualListeners();

addIndividualBtn.addEventListener("click", function () {
  individualCounter++;
  const newBtn = document.createElement("button");
  newBtn.className =
    "individual-btn bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded text-sm w-full";
  newBtn.textContent = `Button ${individualCounter} (needs listener!)`;
  withoutDelegation.appendChild(newBtn);

  // Need to add listener manually
  newBtn.addEventListener("click", function () {
    addToLog(
      individualLog,
      `Individual button ${individualCounter} clicked`,
      "text-red-600"
    );
  });

  addToLog(
    individualLog,
    `New button added - had to add listener manually`,
    "text-gray-600"
  );
});

// With delegation - one listener handles all
withDelegation.addEventListener("click", function (e) {
  if (e.target.matches(".delegated-btn")) {
    const buttonText = e.target.textContent;
    addToLog(delegatedLog, `Delegated: ${buttonText}`, "text-green-600");
  }
});

addDelegatedBtn.addEventListener("click", function () {
  delegatedCounter++;
  const newBtn = document.createElement("button");
  newBtn.className =
    "delegated-btn bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded text-sm w-full";
  newBtn.textContent = `Button ${String.fromCharCode(
    64 + delegatedCounter
  )} (auto-works!)`;
  withDelegation.appendChild(newBtn);

  addToLog(
    delegatedLog,
    `New button added - automatically works!`,
    "text-blue-600"
  );
});

// Todo List Example
const todoInput = document.getElementById("todoInput");
const addTodo = document.getElementById("addTodo");
const todoList = document.getElementById("todoList");

// Event delegation for todo list
todoList.addEventListener("click", function (e) {
  if (e.target.matches(".delete-btn")) {
    e.target.closest("li").remove();
  } else if (e.target.matches(".complete-btn")) {
    const li = e.target.closest("li");
    const span = li.querySelector("span");
    if (span.style.textDecoration === "line-through") {
      span.style.textDecoration = "none";
      span.style.opacity = "1";
      e.target.textContent = "✓";
      e.target.className =
        "complete-btn bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded text-xs";
    } else {
      span.style.textDecoration = "line-through";
      span.style.opacity = "0.5";
      e.target.textContent = "↺";
      e.target.className =
        "complete-btn bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded text-xs";
    }
  }
});

function addTodoItem() {
  const text = todoInput.value.trim();
  if (!text) return;

  const li = document.createElement("li");
  li.className = "flex items-center justify-between bg-gray-50 p-3 rounded";
  li.innerHTML = `
                <span>${text}</span>
                <div class="space-x-2">
                    <button class="complete-btn bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded text-xs">✓</button>
                    <button class="delete-btn bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs">✗</button>
                </div>
            `;

  todoList.appendChild(li);
  todoInput.value = "";
}

addTodo.addEventListener("click", addTodoItem);
todoInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTodoItem();
  }
});
(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'969fa86727fa54e8',t:'MTc1NDMyNzMxOC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
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
