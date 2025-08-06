// Global variables for demos
let clickHandler = null;
let abortController = null;
let demo4Listeners = [];
let demo6Listeners = [];

// Demo 1: removeEventListener
function addClickListener() {
  const target = document.getElementById("demo1Target");
  const status = document.getElementById("demo1Status");

  if (clickHandler) {
    status.textContent = "Status: Listener already exists!";
    return;
  }

  clickHandler = function () {
    status.textContent = "Status: Click detected! Listener is working.";
    target.classList.add("active");
    setTimeout(() => target.classList.remove("active"), 1000);
  };

  target.addEventListener("click", clickHandler);
  status.textContent = "Status: Click listener added successfully!";
  target.classList.remove("inactive");
}

function removeClickListener() {
  const target = document.getElementById("demo1Target");
  const status = document.getElementById("demo1Status");

  if (!clickHandler) {
    status.textContent = "Status: No listener to remove!";
    return;
  }

  target.removeEventListener("click", clickHandler);
  clickHandler = null;
  status.textContent = "Status: Click listener removed successfully!";
  target.classList.add("inactive");
}

function resetDemo1() {
  const target = document.getElementById("demo1Target");
  const status = document.getElementById("demo1Status");

  if (clickHandler) {
    target.removeEventListener("click", clickHandler);
    clickHandler = null;
  }

  target.className = "demo-target";
  status.textContent = "Status: Demo reset - no event listener attached";
}

// Demo 2: AbortController
function addMultipleListeners() {
  const target = document.getElementById("demo2Target");
  const status = document.getElementById("demo2Status");

  if (abortController) {
    status.textContent = "Status: Listeners already exist!";
    return;
  }

  abortController = new AbortController();

  target.addEventListener(
    "click",
    function () {
      status.textContent = "Status: Click event detected!";
      target.style.background = "lightgreen";
      setTimeout(() => (target.style.background = ""), 500);
    },
    { signal: abortController.signal }
  );

  target.addEventListener(
    "mouseover",
    function () {
      status.textContent = "Status: Mouse over detected!";
      target.style.background = "lightblue";
    },
    { signal: abortController.signal }
  );

  target.addEventListener(
    "mouseout",
    function () {
      target.style.background = "";
    },
    { signal: abortController.signal }
  );

  target.addEventListener(
    "dblclick",
    function () {
      status.textContent = "Status: Double-click detected!";
      target.style.background = "lightyellow";
      setTimeout(() => (target.style.background = ""), 500);
    },
    { signal: abortController.signal }
  );

  status.textContent =
    "Status: Multiple listeners added (click, hover, double-click)!";
}

function abortAllListeners() {
  const status = document.getElementById("demo2Status");

  if (!abortController) {
    status.textContent = "Status: No listeners to abort!";
    return;
  }

  abortController.abort();
  abortController = null;
  status.textContent = "Status: All listeners aborted with AbortController!";

  const target = document.getElementById("demo2Target");
  target.style.background = "";
}

function resetDemo2() {
  const target = document.getElementById("demo2Target");
  const status = document.getElementById("demo2Status");

  if (abortController) {
    abortController.abort();
    abortController = null;
  }

  target.style.background = "";
  status.textContent = "Status: Demo reset - no listeners attached";
}

// Demo 3: Once option
let onceListenerAdded = false;

function addOnceListener() {
  const target = document.getElementById("demo3Target");
  const status = document.getElementById("demo3Status");

  if (onceListenerAdded) {
    status.textContent = "Status: Once listener already used or active!";
    return;
  }

  target.addEventListener(
    "click",
    function () {
      status.textContent =
        "Status: Once listener fired! It has now removed itself.";
      target.classList.add("inactive");
      target.textContent = "I've been clicked! (No longer listening)";
      onceListenerAdded = true;
    },
    { once: true }
  );

  status.textContent =
    'Status: "Once" listener added - will self-destruct after first click!';
  target.classList.remove("inactive");
  onceListenerAdded = false;
}

function resetDemo3() {
  const target = document.getElementById("demo3Target");
  const status = document.getElementById("demo3Status");

  target.className = "demo-target";
  target.textContent = "Click me! (I'll only respond once)";
  status.textContent = "Status: Demo reset - no listener attached";
  onceListenerAdded = false;
}

// Demo 4: innerHTML replacement
function addListenersToButtons() {
  const status = document.getElementById("demo4Status");
  const buttons = document.querySelectorAll("#demo4Container button");

  // Clear existing listeners
  demo4Listeners = [];

  buttons.forEach((btn, index) => {
    const handler = function () {
      status.textContent = `Status: ${btn.textContent} clicked! Listener is working.`;
      btn.style.background = "lightgreen";
      setTimeout(() => (btn.style.background = ""), 500);
    };

    btn.addEventListener("click", handler);
    demo4Listeners.push({ element: btn, handler: handler });
  });

  status.textContent = "Status: Event listeners added to all buttons!";
}

function replaceInnerHTML() {
  const container = document.getElementById("demo4Container");
  const status = document.getElementById("demo4Status");

  // Replace innerHTML - this removes all event listeners!
  container.innerHTML = `
                <div class="demo-target" style="padding: 20px;">
                    <button class="demo-button" id="newBtn1">New Button 1</button>
                    <button class="demo-button" id="newBtn2">New Button 2</button>
                    <button class="demo-button" id="newBtn3">New Button 3</button>
                    <p style="color: #dc3545; font-size: 0.9rem; margin-top: 10px;">
                        ⚠️ These are new buttons with NO event listeners!
                    </p>
                </div>
            `;

  demo4Listeners = [];
  status.textContent = "Status: innerHTML replaced - all event listeners lost!";
}

function resetDemo4() {
  const container = document.getElementById("demo4Container");
  const status = document.getElementById("demo4Status");

  container.innerHTML = `
                <div class="demo-target" style="padding: 20px;">
                    <button class="demo-button" id="btn1">Button 1</button>
                    <button class="demo-button" id="btn2">Button 2</button>
                    <button class="demo-button" id="btn3">Button 3</button>
                </div>
            `;

  demo4Listeners = [];
  status.textContent =
    'Status: Demo reset - click "Add Listeners" first, then test buttons';
}

// Demo 5: Element removal
let demo5Element = null;

function createElementWithListener() {
  const container = document.getElementById("demo5Container");
  const status = document.getElementById("demo5Status");

  if (demo5Element) {
    status.textContent = "Status: Element already exists!";
    return;
  }

  demo5Element = document.createElement("div");
  demo5Element.className = "demo-target";
  demo5Element.textContent = "Click me! I have an event listener.";
  demo5Element.style.cursor = "pointer";

  demo5Element.addEventListener("click", function () {
    status.textContent =
      "Status: Dynamic element clicked! Listener is working.";
    demo5Element.style.background = "lightgreen";
    setTimeout(() => (demo5Element.style.background = ""), 500);
  });

  container.appendChild(demo5Element);
  status.textContent = "Status: Element created with event listener!";
}

function removeElement() {
  const status = document.getElementById("demo5Status");

  if (!demo5Element) {
    status.textContent = "Status: No element to remove!";
    return;
  }

  demo5Element.remove();
  demo5Element = null;
  status.textContent =
    "Status: Element removed - event listener automatically cleaned up!";
}

function resetDemo5() {
  const container = document.getElementById("demo5Container");
  const status = document.getElementById("demo5Status");

  container.innerHTML = "";
  demo5Element = null;
  status.textContent = "Status: Demo reset - no element created yet";
}

// Demo 6: Element cloning
function addMultipleListenersToClone() {
  const target = document.getElementById("demo6Target");
  const status = document.getElementById("demo6Status");

  // Clear existing listeners
  demo6Listeners = [];

  const clickHandler = function () {
    status.textContent = "Status: Click detected!";
    target.style.background = "lightgreen";
    setTimeout(() => (target.style.background = ""), 500);
  };

  const dblClickHandler = function () {
    status.textContent = "Status: Double-click detected!";
    target.style.background = "lightyellow";
    setTimeout(() => (target.style.background = ""), 500);
  };

  const mouseOverHandler = function () {
    target.style.borderColor = "#667eea";
    target.style.borderWidth = "3px";
  };

  const mouseOutHandler = function () {
    target.style.borderColor = "#adb5bd";
    target.style.borderWidth = "2px";
  };

  const contextMenuHandler = function (e) {
    e.preventDefault();
    status.textContent = "Status: Right-click detected!";
    target.style.background = "lightcoral";
    setTimeout(() => (target.style.background = ""), 500);
  };

  target.addEventListener("click", clickHandler);
  target.addEventListener("dblclick", dblClickHandler);
  target.addEventListener("mouseover", mouseOverHandler);
  target.addEventListener("mouseout", mouseOutHandler);
  target.addEventListener("contextmenu", contextMenuHandler);

  demo6Listeners = [
    { event: "click", handler: clickHandler },
    { event: "dblclick", handler: dblClickHandler },
    { event: "mouseover", handler: mouseOverHandler },
    { event: "mouseout", handler: mouseOutHandler },
    { event: "contextmenu", handler: contextMenuHandler },
  ];

  status.textContent =
    "Status: Multiple listeners added (click, double-click, hover, right-click)!";
}

function cloneAndReplace() {
  const target = document.getElementById("demo6Target");
  const status = document.getElementById("demo6Status");

  if (demo6Listeners.length === 0) {
    status.textContent = "Status: No listeners to remove!";
    return;
  }

  // Clone the element (without event listeners)
  const clone = target.cloneNode(true);
  clone.id = "demo6Target"; // Keep the same ID

  // Replace the original with the clone
  target.parentNode.replaceChild(clone, target);

  demo6Listeners = [];
  status.textContent =
    "Status: Element cloned and replaced - all listeners removed!";
}

function resetDemo6() {
  const target = document.getElementById("demo6Target");
  const status = document.getElementById("demo6Status");

  // Remove all listeners manually
  demo6Listeners.forEach(({ event, handler }) => {
    target.removeEventListener(event, handler);
  });

  demo6Listeners = [];
  target.style.background = "";
  target.style.borderColor = "#adb5bd";
  target.style.borderWidth = "2px";
  status.textContent = "Status: Demo reset - no listeners attached";
}

// Initialize page
document.addEventListener("DOMContentLoaded", function () {
  console.log("🗑️ JavaScript Event Removal Guide Loaded!");
  console.log("📚 Learn all the ways to remove event listeners");
  console.log("🎮 Try the interactive demos to see each method in action");
});

(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'96abff79d26554d2',t:'MTc1NDQ1NjcxMy4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
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
