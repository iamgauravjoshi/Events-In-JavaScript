// Utility function to add log entries
function addToLog(
  logElement,
  message,
  colorClass = "text-gray-700",
  badge = ""
) {
  if (
    (logElement.firstChild &&
      logElement.firstChild.textContent.includes("Click")) ||
    (logElement.firstChild &&
      logElement.firstChild.textContent.includes("Add handlers"))
  ) {
    logElement.innerHTML = "";
  }

  const entry = document.createElement("div");
  entry.className = `log-entry ${colorClass} mb-1`;
  const timestamp = new Date().toLocaleTimeString();
  entry.innerHTML = `${
    badge
      ? `<span class="method-badge ${badge} mr-2">${badge
          .replace("-badge", "")
          .toUpperCase()}</span>`
      : ""
  }[${timestamp}] ${message}`;
  logElement.appendChild(entry);
  logElement.scrollTop = logElement.scrollHeight;
}

// Method 1: Inline HTML Handlers
function handleInlineClick(element, buttonName) {
  const message = `Inline handler executed for ${buttonName}`;
  addToLog(
    document.getElementById("inlineLog"),
    message,
    "text-yellow-700",
    "inline-badge"
  );

  // Visual feedback
  element.classList.add("execution-order");
  setTimeout(() => element.classList.remove("execution-order"), 800);
}

// Method 2: Property Method Handlers
const propertyBtn1 = document.getElementById("propertyBtn1");
const propertyBtn2 = document.getElementById("propertyBtn2");
const propertyLog = document.getElementById("propertyLog");

propertyBtn1.onclick = function () {
  const message = "Property method handler executed for Button 1";
  addToLog(propertyLog, message, "text-purple-700", "property-badge");
  this.classList.add("execution-order");
  setTimeout(() => this.classList.remove("execution-order"), 800);
};

propertyBtn2.onclick = function () {
  const message = "Property method handler executed for Button 2";
  addToLog(propertyLog, message, "text-purple-700", "property-badge");
  this.classList.add("execution-order");
  setTimeout(() => this.classList.remove("execution-order"), 800);
};

document.getElementById("clearPropertyLog").onclick = function () {
  propertyLog.innerHTML =
    '<div class="text-gray-500">Click the purple buttons to see property events...</div>';
};

// Method 3: addEventListener Handlers
const listenerBtn1 = document.getElementById("listenerBtn1");
const listenerBtn2 = document.getElementById("listenerBtn2");
const listenerLog = document.getElementById("listenerLog");

listenerBtn1.addEventListener("click", function () {
  const message = "addEventListener handler executed for Button 1";
  addToLog(listenerLog, message, "text-green-700", "listener-badge");
  this.classList.add("execution-order");
  setTimeout(() => this.classList.remove("execution-order"), 800);
});

listenerBtn2.addEventListener("click", function () {
  const message = "addEventListener handler executed for Button 2";
  addToLog(listenerLog, message, "text-green-700", "listener-badge");
  this.classList.add("execution-order");
  setTimeout(() => this.classList.remove("execution-order"), 800);
});

document
  .getElementById("clearListenerLog")
  .addEventListener("click", function () {
    listenerLog.innerHTML =
      '<div class="text-gray-500">Click the green buttons to see addEventListener events...</div>';
  });

// Execution Order Demo
const executionOrderBtn = document.getElementById("executionOrderBtn");
const executionLog = document.getElementById("executionLog");

// Add property method handler
executionOrderBtn.onclick = function () {
  logExecution("2. Property Method Handler (element.onclick)");
};

// Add addEventListener handlers
executionOrderBtn.addEventListener("click", function () {
  logExecution("3. addEventListener Handler #1");
});

function logExecution(message) {
  addToLog(executionLog, message, "text-blue-700");
  executionOrderBtn.classList.add("execution-order");
  setTimeout(() => executionOrderBtn.classList.remove("execution-order"), 800);
}

document
  .getElementById("clearExecutionLog")
  .addEventListener("click", function () {
    executionLog.innerHTML =
      '<div class="text-gray-500">Click the test button to see execution order...</div>';
  });

// Feature Test Buttons
const featureTestResults = document.getElementById("featureTestResults");

document
  .getElementById("testInlineFeature")
  .addEventListener("click", function () {
    featureTestResults.innerHTML = `
                <div class="bg-yellow-50 border border-yellow-200 rounded p-4">
                    <h4 class="font-semibold text-yellow-800 mb-2">Inline HTML Features Test:</h4>
                    <div class="text-sm space-y-1">
                        <div>✅ Simple syntax: onclick="function()"</div>
                        <div>❌ Cannot add multiple handlers</div>
                        <div>❌ HTML and JavaScript mixed</div>
                        <div>❌ Limited event object access</div>
                        <div>❌ Hard to remove handlers</div>
                    </div>
                </div>
            `;
  });

document
  .getElementById("testPropertyFeature")
  .addEventListener("click", function () {
    featureTestResults.innerHTML = `
                <div class="bg-purple-50 border border-purple-200 rounded p-4">
                    <h4 class="font-semibold text-purple-800 mb-2">Property Method Features Test:</h4>
                    <div class="text-sm space-y-1">
                        <div>✅ Separates HTML and JavaScript</div>
                        <div>✅ Full event object access</div>
                        <div>❌ Only one handler per event type</div>
                        <div>❌ Easy to accidentally override</div>
                        <div>⚠️ Can remove with element.onclick = null</div>
                    </div>
                </div>
            `;
  });

document
  .getElementById("testListenerFeature")
  .addEventListener("click", function () {
    featureTestResults.innerHTML = `
                <div class="bg-green-50 border border-green-200 rounded p-4">
                    <h4 class="font-semibold text-green-800 mb-2">addEventListener Features Test:</h4>
                    <div class="text-sm space-y-1">
                        <div>✅ Multiple handlers for same event</div>
                        <div>✅ Separates HTML and JavaScript</div>
                        <div>✅ Full event object access</div>
                        <div>✅ Easy to remove with removeEventListener</div>
                        <div>✅ Modern standard and best practice</div>
                    </div>
                </div>
            `;
  });

// Multiple addEventListener Handlers Demo
const multiHandlerBtn = document.getElementById("multiHandlerBtn");
const multiHandlerLog = document.getElementById("multiHandlerLog");
const handlerCount = document.getElementById("handlerCount");
let handlerCounter = 0;
let activeHandlers = [];

function createHandler(handlerNumber) {
  return function () {
    const message = `Handler #${handlerNumber} executed`;
    addToLog(multiHandlerLog, message, "text-cyan-700");
  };
}

document.getElementById("addHandler").addEventListener("click", function () {
  handlerCounter++;
  const newHandler = createHandler(handlerCounter);
  multiHandlerBtn.addEventListener("click", newHandler);
  activeHandlers.push({ number: handlerCounter, handler: newHandler });

  handlerCount.textContent = `${activeHandlers.length} handlers attached`;
  addToLog(
    multiHandlerLog,
    `Handler #${handlerCounter} added`,
    "text-green-600"
  );
});

document.getElementById("removeHandler").addEventListener("click", function () {
  if (activeHandlers.length > 0) {
    const lastHandler = activeHandlers.pop();
    multiHandlerBtn.removeEventListener("click", lastHandler.handler);
    handlerCount.textContent = `${activeHandlers.length} handlers attached`;
    addToLog(
      multiHandlerLog,
      `Handler #${lastHandler.number} removed`,
      "text-red-600"
    );
  } else {
    addToLog(multiHandlerLog, "No handlers to remove", "text-gray-600");
  }
});

document.getElementById("clearMultiLog").addEventListener("click", function () {
  multiHandlerLog.innerHTML =
    '<div class="text-gray-500">Add handlers and click the button to see them execute...</div>';
});

// Property Method Override Demo
const overrideBtn = document.getElementById("overrideBtn");
const overrideLog = document.getElementById("overrideLog");
const currentHandler = document.getElementById("currentHandler");

document
  .getElementById("setFirstHandler")
  .addEventListener("click", function () {
    overrideBtn.onclick = function () {
      addToLog(
        overrideLog,
        'Handler 1 executed: "First handler is running!"',
        "text-blue-700"
      );
    };
    currentHandler.textContent = "Handler 1 (First)";
    addToLog(overrideLog, "Handler 1 set via element.onclick", "text-blue-600");
  });

document
  .getElementById("setSecondHandler")
  .addEventListener("click", function () {
    overrideBtn.onclick = function () {
      addToLog(
        overrideLog,
        'Handler 2 executed: "Second handler OVERRODE the first!"',
        "text-purple-700"
      );
    };
    currentHandler.textContent = "Handler 2 (Override!)";
    addToLog(
      overrideLog,
      "Handler 2 set via element.onclick - OVERRODE Handler 1!",
      "text-purple-600"
    );
  });

document.getElementById("resetOverride").addEventListener("click", function () {
  overrideBtn.onclick = null;
  currentHandler.textContent = "None";
  addToLog(
    overrideLog,
    "All handlers removed via element.onclick = null",
    "text-gray-600"
  );
});

document
  .getElementById("clearOverrideLog")
  .addEventListener("click", function () {
    overrideLog.innerHTML =
      '<div class="text-gray-500">Set handlers and click the button to see override behavior...</div>';
  });

(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'96a041ffc7755478',t:'MTc1NDMzMzYwOS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
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
