const questions = [
  {
    id: 1,
    difficulty: "Basic",
    question: "What happens when you click a button with an onclick event?",
    example: `<button onclick="alert('Hello!')" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Click Me!</button>`,
    options: [
      "Nothing happens",
      "The function specified in onclick runs",
      "The page refreshes",
      "An error occurs",
    ],
    correct: 1,
    explanation:
      "When you click a button with an onclick event, the JavaScript function or code specified in the onclick attribute executes immediately. This is the most basic way to handle user interactions in web pages.",
  },
  {
    id: 2,
    difficulty: "Basic",
    question:
      "Which HTML attribute is used to add a click event directly in the HTML?",
    example: `<div class="space-y-2">
                    <button onclick="this.style.backgroundColor='green'" class="bg-red-500 text-white px-4 py-2 rounded">onclick example</button>
                    <button onmouseover="this.style.backgroundColor='yellow'" class="bg-blue-500 text-white px-4 py-2 rounded">onmouseover example</button>
                </div>`,
    options: ["click", "onclick", "onpress", "clickevent"],
    correct: 1,
    explanation:
      "The 'onclick' attribute is used to add click events directly in HTML. When the element is clicked, the JavaScript code in the onclick attribute runs. Try clicking the buttons above to see it in action!",
  },
  {
    id: 3,
    difficulty: "Basic",
    question: "What does 'event' represent in JavaScript?",
    example: `<button id="eventDemo" class="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">Click to see event info</button>
                <div id="eventInfo" class="mt-2 p-2 bg-gray-100 rounded text-sm"></div>`,
    options: [
      "A type of variable",
      "An action that happens in the browser (like clicking, typing, etc.)",
      "A JavaScript function",
      "A CSS property",
    ],
    correct: 1,
    explanation:
      "An 'event' in JavaScript represents an action that happens in the browser - like clicking a button, typing in a text field, moving the mouse, or loading a page. Events allow us to make web pages interactive by responding to user actions.",
  },
  {
    id: 4,
    difficulty: "Basic",
    question:
      "How do you prevent a form from submitting when the submit button is clicked?",
    example: `<form id="demoForm" class="space-y-2">
                    <input type="text" placeholder="Type something..." class="border rounded px-2 py-1 w-full">
                    <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Submit (prevented)</button>
                    <div id="formMessage" class="text-sm text-gray-600"></div>
                </form>`,
    options: [
      "event.stop()",
      "event.preventDefault()",
      "event.cancel()",
      "return false",
    ],
    correct: 1,
    explanation:
      "event.preventDefault() stops the default action of an event from happening. For forms, this prevents the page from refreshing when submitted. This is useful when you want to handle form submission with JavaScript instead of the default browser behavior.",
  },
  {
    id: 5,
    difficulty: "Intermediate",
    question: "What is event bubbling?",
    example: `<div id="outer" class="bg-red-200 p-6 rounded cursor-pointer">
                    Outer Div (Red)
                    <div id="middle" class="bg-blue-200 p-4 rounded mt-2 cursor-pointer">
                        Middle Div (Blue)
                        <div id="inner" class="bg-green-200 p-2 rounded mt-2 cursor-pointer">
                            Inner Div (Green) - Click me!
                        </div>
                    </div>
                </div>
                <div id="bubblingLog" class="mt-2 p-2 bg-gray-100 rounded text-sm max-h-20 overflow-y-auto"></div>`,
    options: [
      "Events only trigger on the clicked element",
      "Events travel from the clicked element up to its parent elements",
      "Events travel from parent elements down to child elements",
      "Events trigger randomly",
    ],
    correct: 1,
    explanation:
      "Event bubbling means that when an event happens on an element, it first runs on that element, then on its parent, then on its parent's parent, and so on up the DOM tree. Click the inner green div above to see how the event 'bubbles up' through all parent elements!",
  },
  {
    id: 6,
    difficulty: "Intermediate",
    question:
      "Which method is the modern way to add event listeners in JavaScript?",
    example: `<button id="modernBtn" class="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 mr-2">Modern Method</button>
                <button id="oldBtn" class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Old Method</button>
                <div id="methodDemo" class="mt-2 p-2 bg-gray-100 rounded text-sm"></div>`,
    options: [
      "element.onclick = function()",
      "element.addEventListener()",
      "element.attachEvent()",
      "element.on()",
    ],
    correct: 1,
    explanation:
      "addEventListener() is the modern and preferred way to add event listeners. Unlike onclick, it allows multiple listeners for the same event and provides more control over event handling. It's more flexible and follows current web standards.",
  },
  {
    id: 7,
    difficulty: "Intermediate",
    question: "What does event.target refer to?",
    example: `<div id="targetDemo" class="bg-yellow-200 p-4 rounded cursor-pointer">
                    Container Div
                    <button class="bg-blue-500 text-white px-3 py-1 rounded ml-2">Button 1</button>
                    <button class="bg-red-500 text-white px-3 py-1 rounded ml-2">Button 2</button>
                    <span class="bg-green-500 text-white px-3 py-1 rounded ml-2 cursor-pointer">Span</span>
                </div>
                <div id="targetInfo" class="mt-2 p-2 bg-gray-100 rounded text-sm"></div>`,
    options: [
      "The element where the event listener is attached",
      "The element that actually triggered the event",
      "The parent element",
      "The document object",
    ],
    correct: 1,
    explanation:
      "event.target refers to the actual element that triggered the event - the element that was clicked, typed in, etc. This is different from 'this' or 'currentTarget' which refer to the element the event listener is attached to. Try clicking different elements above to see the difference!",
  },
  {
    id: 8,
    difficulty: "Intermediate",
    question: "How do you stop event bubbling?",
    example: `<div id="bubbleOuter" class="bg-red-200 p-6 rounded cursor-pointer">
                    Outer (bubbles)
                    <div id="bubbleMiddle" class="bg-blue-200 p-4 rounded mt-2 cursor-pointer">
                        Middle (stops bubbling)
                        <div id="bubbleInner" class="bg-green-200 p-2 rounded mt-2 cursor-pointer">
                            Inner - Click me!
                        </div>
                    </div>
                </div>
                <div id="bubbleLog" class="mt-2 p-2 bg-gray-100 rounded text-sm max-h-20 overflow-y-auto"></div>`,
    options: [
      "event.stopBubbling()",
      "event.stopPropagation()",
      "event.cancelBubble = true",
      "return false",
    ],
    correct: 1,
    explanation:
      "event.stopPropagation() prevents the event from bubbling up to parent elements. When called, the event stops at the current element and doesn't trigger event handlers on parent elements. Click the inner div above - notice how it stops at the middle div!",
  },
  {
    id: 9,
    difficulty: "Intermediate",
    question:
      "What is the difference between event.preventDefault() and event.stopPropagation()?",
    example: `<div class="space-y-4">
                    <div class="bg-gray-200 p-4 rounded">
                        <a href="#" id="preventLink" class="text-blue-600 underline">Link (preventDefault) - won't navigate</a>
                    </div>
                    <div id="propagationDemo" class="bg-yellow-200 p-4 rounded cursor-pointer">
                        Parent Div
                        <button id="stopPropBtn" class="bg-red-500 text-white px-3 py-1 rounded ml-2">Stop Propagation</button>
                    </div>
                    <div id="preventLog" class="p-2 bg-gray-100 rounded text-sm max-h-16 overflow-y-auto"></div>
                </div>`,
    options: [
      "They do the same thing",
      "preventDefault stops default action, stopPropagation stops event bubbling",
      "preventDefault stops bubbling, stopPropagation stops default action",
      "They both stop all events",
    ],
    correct: 1,
    explanation:
      "preventDefault() stops the browser's default action (like following a link or submitting a form), while stopPropagation() stops the event from bubbling up to parent elements. They serve different purposes and can be used together if needed.",
  },
  {
    id: 10,
    difficulty: "Advanced",
    question: "What is event delegation?",
    example: `<div id="delegationContainer" class="bg-blue-100 p-4 rounded">
                    <h4 class="font-bold mb-2">Click any item:</h4>
                    <div class="space-y-1">
                        <div class="item bg-white p-2 rounded cursor-pointer hover:bg-gray-50">Item 1</div>
                        <div class="item bg-white p-2 rounded cursor-pointer hover:bg-gray-50">Item 2</div>
                        <div class="item bg-white p-2 rounded cursor-pointer hover:bg-gray-50">Item 3</div>
                    </div>
                    <button id="addItem" class="bg-green-500 text-white px-3 py-1 rounded mt-2 text-sm">Add New Item</button>
                </div>
                <div id="delegationLog" class="mt-2 p-2 bg-gray-100 rounded text-sm"></div>`,
    options: [
      "Adding events to each individual element",
      "Adding one event listener to a parent that handles events for all children",
      "Removing event listeners",
      "Creating custom events",
    ],
    correct: 1,
    explanation:
      "Event delegation means adding a single event listener to a parent element that handles events for all its children (current and future). This is more efficient than adding individual listeners to each child and automatically works for dynamically added elements.",
  },
  {
    id: 11,
    difficulty: "Advanced",
    question: "What happens during the 'capture' phase of event handling?",
    example: `<div id="captureOuter" class="bg-red-200 p-6 rounded cursor-pointer">
                    Outer (capture: true)
                    <div id="captureMiddle" class="bg-blue-200 p-4 rounded mt-2 cursor-pointer">
                        Middle (capture: false)
                        <div id="captureInner" class="bg-green-200 p-2 rounded mt-2 cursor-pointer">
                            Inner - Click me!
                        </div>
                    </div>
                </div>
                <div id="captureLog" class="mt-2 p-2 bg-gray-100 rounded text-sm max-h-20 overflow-y-auto"></div>`,
    options: [
      "Events bubble up from child to parent",
      "Events travel down from parent to child before reaching the target",
      "Events only trigger on the clicked element",
      "Events are cancelled",
    ],
    correct: 1,
    explanation:
      "During the capture phase, events travel DOWN from the document root to the target element, triggering capture listeners along the way. This happens BEFORE the target phase and bubbling phase. Most events use bubbling, but you can use capture by setting the third parameter of addEventListener to true.",
  },
  {
    id: 12,
    difficulty: "Advanced",
    question: "How do you create and dispatch a custom event?",
    example: `<div class="space-y-2">
                    <button id="customEventBtn" class="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">Trigger Custom Event</button>
                    <div id="customEventTarget" class="bg-gray-200 p-4 rounded">
                        <p>This div listens for 'myCustomEvent'</p>
                        <div id="customEventLog" class="text-sm text-gray-600 mt-2"></div>
                    </div>
                </div>`,
    options: [
      "new Event() and element.dispatchEvent()",
      "element.fireEvent()",
      "element.triggerEvent()",
      "document.createEvent()",
    ],
    correct: 0,
    explanation:
      "You create custom events using 'new Event()' or 'new CustomEvent()' and dispatch them using 'element.dispatchEvent()'. Custom events allow you to create your own event types that can carry custom data and be handled like built-in events.",
  },
  {
    id: 13,
    difficulty: "Advanced",
    question: "What is the 'once' option in addEventListener?",
    example: `<div class="space-y-2">
                    <button id="onceBtn" class="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">Click Multiple Times</button>
                    <button id="normalBtn" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Normal Button</button>
                    <div id="onceLog" class="p-2 bg-gray-100 rounded text-sm max-h-16 overflow-y-auto"></div>
                </div>`,
    options: [
      "The event listener runs only once then removes itself",
      "The event listener runs once per second",
      "The event listener runs only on the first page load",
      "The event listener runs once per element",
    ],
    correct: 0,
    explanation:
      "The 'once' option makes an event listener automatically remove itself after running once. This is useful for one-time actions like welcome messages, initialization tasks, or preventing multiple submissions. Try clicking both buttons above to see the difference!",
  },
  {
    id: 14,
    difficulty: "Advanced",
    question: "What does event.currentTarget refer to?",
    example: `<div id="currentTargetDemo" class="bg-indigo-200 p-6 rounded cursor-pointer">
                    Container (currentTarget)
                    <button class="bg-white px-3 py-1 rounded ml-2">Button (target)</button>
                    <span class="bg-yellow-300 px-3 py-1 rounded ml-2 cursor-pointer">Span (target)</span>
                </div>
                <div id="currentTargetLog" class="mt-2 p-2 bg-gray-100 rounded text-sm"></div>`,
    options: [
      "The element that triggered the event",
      "The element that the event listener is attached to",
      "The parent element",
      "The first child element",
    ],
    correct: 1,
    explanation:
      "event.currentTarget refers to the element that the event listener is attached to, while event.target refers to the element that actually triggered the event. When event bubbling occurs, currentTarget stays the same but target can be different child elements.",
  },
  {
    id: 15,
    difficulty: "Advanced",
    question: "How do you remove an event listener?",
    example: `<div class="space-y-2">
                    <button id="addListenerBtn" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Add Listener</button>
                    <button id="removeListenerBtn" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Remove Listener</button>
                    <button id="testBtn" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Test Button</button>
                    <div id="listenerLog" class="p-2 bg-gray-100 rounded text-sm"></div>
                </div>`,
    options: [
      "element.removeEvent()",
      "element.removeEventListener()",
      "element.deleteListener()",
      "element.off()",
    ],
    correct: 1,
    explanation:
      "removeEventListener() removes an event listener. You must pass the same function reference that was used in addEventListener. This is why it's important to store function references in variables when you plan to remove them later.",
  },
];

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

function initializeQuiz() {
  showQuestion();
  setupInteractiveExamples();
}

function showQuestion() {
  const question = questions[currentQuestionIndex];

  document.getElementById("currentQuestion").textContent =
    currentQuestionIndex + 1;
  document.getElementById("difficulty").textContent = question.difficulty;
  document.getElementById(
    "difficulty"
  ).className = `inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 ${getDifficultyColor(
    question.difficulty
  )}`;
  document.getElementById("questionText").textContent = question.question;
  document.getElementById("interactiveExample").innerHTML = question.example;

  const optionsContainer = document.getElementById("optionsContainer");
  optionsContainer.innerHTML = "";

  question.options.forEach((option, index) => {
    const optionDiv = document.createElement("div");
    optionDiv.className =
      "option p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-300 hover:bg-blue-50 transition-all duration-200";
    optionDiv.innerHTML = `
                    <label class="flex items-center cursor-pointer">
                        <input type="radio" name="answer" value="${index}" class="mr-3 text-blue-600">
                        <span class="text-gray-800">${option}</span>
                    </label>
                `;
    optionDiv.addEventListener("click", () => selectOption(index, optionDiv));
    optionsContainer.appendChild(optionDiv);
  });

  document.getElementById("progressBar").style.width = `${
    ((currentQuestionIndex + 1) / questions.length) * 100
  }%`;

  // Setup interactive examples for current question
  setupCurrentQuestionExample();
}

function getDifficultyColor(difficulty) {
  switch (difficulty) {
    case "Basic":
      return "bg-green-100 text-green-800";
    case "Intermediate":
      return "bg-yellow-100 text-yellow-800";
    case "Advanced":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}

function selectOption(index, optionDiv) {
  // Remove previous selection
  document.querySelectorAll(".option").forEach((opt) => {
    opt.classList.remove("border-blue-500", "bg-blue-100");
    opt.querySelector("input").checked = false;
  });

  // Add selection to clicked option
  optionDiv.classList.add("border-blue-500", "bg-blue-100");
  optionDiv.querySelector("input").checked = true;
  selectedAnswer = index;
}

function submitAnswer() {
  if (selectedAnswer === null) {
    alert("Please select an answer!");
    return;
  }

  const question = questions[currentQuestionIndex];
  const isCorrect = selectedAnswer === question.correct;

  if (isCorrect) {
    score++;
    document.getElementById("score").textContent = score;
  }

  showResult(isCorrect, question);
}

function showResult(isCorrect, question) {
  document.getElementById("questionCard").classList.add("hidden");
  document.getElementById("resultCard").classList.remove("hidden");

  const resultContent = document.getElementById("resultContent");
  resultContent.innerHTML = `
                <div class="text-6xl mb-4">${isCorrect ? "✅" : "❌"}</div>
                <h3 class="text-2xl font-bold ${
                  isCorrect ? "text-green-600" : "text-red-600"
                } mb-2">
                    ${isCorrect ? "Correct!" : "Incorrect!"}
                </h3>
                <p class="text-gray-600">
                    The correct answer was: <strong>${
                      question.options[question.correct]
                    }</strong>
                </p>
            `;

  document.getElementById("explanation").innerHTML = `
                <h4 class="font-bold text-blue-800 mb-2">Explanation:</h4>
                <p class="text-blue-700">${question.explanation}</p>
            `;
}

function nextQuestion() {
  selectedAnswer = null;
  currentQuestionIndex++;

  if (currentQuestionIndex >= questions.length) {
    showFinalResults();
  } else {
    document.getElementById("questionCard").classList.remove("hidden");
    document.getElementById("resultCard").classList.add("hidden");
    showQuestion();
  }
}

function showFinalResults() {
  document.getElementById("quizContainer").innerHTML = "";
  document.getElementById("finalResults").classList.remove("hidden");
  document
    .getElementById("quizContainer")
    .appendChild(document.getElementById("finalResults"));

  const percentage = Math.round((score / questions.length) * 100);
  document.getElementById(
    "finalScore"
  ).textContent = `${score}/${questions.length} (${percentage}%)`;

  let performance = "";
  if (percentage >= 90)
    performance = "Excellent! You're a JavaScript Events expert! 🎉";
  else if (percentage >= 70)
    performance =
      "Great job! You have a solid understanding of JavaScript Events! 👏";
  else if (percentage >= 50)
    performance = "Good effort! Keep practicing to improve your skills! 💪";
  else
    performance =
      "Keep learning! JavaScript Events take practice to master! 📚";

  document.getElementById("performance").textContent = performance;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  selectedAnswer = null;
  document.getElementById("score").textContent = "0";

  // Reset the quiz container
  document.getElementById("quizContainer").innerHTML = `
                <div id="questionCard">
                    <div class="mb-6">
                        <span id="difficulty" class="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4"></span>
                        <h2 id="questionText" class="text-2xl font-bold text-gray-800 mb-6"></h2>
                    </div>
                    
                    <div id="interactiveExample" class="bg-gray-50 rounded-lg p-6 mb-6 border-2 border-dashed border-gray-300"></div>
                    
                    <div id="optionsContainer" class="space-y-3 mb-6"></div>
                    
                    <button id="submitBtn" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200">
                        Submit Answer
                    </button>
                </div>
                
                <div id="resultCard" class="hidden">
                    <div id="resultContent" class="text-center mb-6"></div>
                    <div id="explanation" class="bg-blue-50 rounded-lg p-6 mb-6"></div>
                    <button id="nextBtn" class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200">
                        Next Question
                    </button>
                </div>
                
                <div id="finalResults" class="hidden text-center">
                    <h2 class="text-3xl font-bold text-gray-800 mb-4">Quiz Complete!</h2>
                    <div id="finalScore" class="text-6xl font-bold text-blue-600 mb-4"></div>
                    <div id="performance" class="text-xl text-gray-600 mb-6"></div>
                    <button id="restartBtn" class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200">
                        Restart Quiz
                    </button>
                </div>
            `;

  setupEventListeners();
  showQuestion();
  setupInteractiveExamples();
}

function setupEventListeners() {
  document.getElementById("submitBtn").addEventListener("click", submitAnswer);
  document.getElementById("nextBtn").addEventListener("click", nextQuestion);
  document.getElementById("restartBtn").addEventListener("click", restartQuiz);
}

function setupCurrentQuestionExample() {
  const questionId = questions[currentQuestionIndex].id;

  switch (questionId) {
    case 3: // Event info demo
      const eventDemo = document.getElementById("eventDemo");
      const eventInfo = document.getElementById("eventInfo");
      if (eventDemo && eventInfo) {
        eventDemo.addEventListener("click", function (e) {
          eventInfo.innerHTML = `
                                <strong>Event Type:</strong> ${e.type}<br>
                                <strong>Target:</strong> ${e.target.tagName}<br>
                                <strong>Time:</strong> ${new Date().toLocaleTimeString()}
                            `;
        });
      }
      break;

    case 4: // Form prevention demo
      const demoForm = document.getElementById("demoForm");
      const formMessage = document.getElementById("formMessage");
      if (demoForm && formMessage) {
        demoForm.addEventListener("submit", function (e) {
          e.preventDefault();
          formMessage.textContent =
            "Form submission prevented! Page did not refresh.";
          setTimeout(() => (formMessage.textContent = ""), 3000);
        });
      }
      break;

    case 5: // Event bubbling demo
      const outer = document.getElementById("outer");
      const middle = document.getElementById("middle");
      const inner = document.getElementById("inner");
      const bubblingLog = document.getElementById("bubblingLog");

      if (outer && middle && inner && bubblingLog) {
        bubblingLog.innerHTML = "";

        [outer, middle, inner].forEach((element, index) => {
          const names = ["Outer", "Middle", "Inner"];
          element.addEventListener("click", function (e) {
            bubblingLog.innerHTML += `${names[index]} div clicked!<br>`;
            bubblingLog.scrollTop = bubblingLog.scrollHeight;
          });
        });
      }
      break;

    case 6: // Modern vs old method demo
      const modernBtn = document.getElementById("modernBtn");
      const oldBtn = document.getElementById("oldBtn");
      const methodDemo = document.getElementById("methodDemo");

      if (modernBtn && oldBtn && methodDemo) {
        // Modern method
        modernBtn.addEventListener("click", function () {
          methodDemo.innerHTML = "Modern addEventListener() method used! ✅";
        });

        // Old method
        oldBtn.onclick = function () {
          methodDemo.innerHTML =
            "Old onclick property method used! (Still works but less flexible)";
        };
      }
      break;

    case 7: // Event target demo
      const targetDemo = document.getElementById("targetDemo");
      const targetInfo = document.getElementById("targetInfo");

      if (targetDemo && targetInfo) {
        targetDemo.addEventListener("click", function (e) {
          targetInfo.innerHTML = `
                                <strong>event.target:</strong> ${
                                  e.target.tagName
                                } (${e.target.textContent.trim()})<br>
                                <strong>event.currentTarget:</strong> ${
                                  e.currentTarget.tagName
                                } (Container Div)
                            `;
        });
      }
      break;

    case 8: // Stop propagation demo
      const bubbleOuter = document.getElementById("bubbleOuter");
      const bubbleMiddle = document.getElementById("bubbleMiddle");
      const bubbleInner = document.getElementById("bubbleInner");
      const bubbleLog = document.getElementById("bubbleLog");

      if (bubbleOuter && bubbleMiddle && bubbleInner && bubbleLog) {
        bubbleLog.innerHTML = "";

        bubbleOuter.addEventListener("click", function () {
          bubbleLog.innerHTML += "Outer clicked!<br>";
        });

        bubbleMiddle.addEventListener("click", function (e) {
          e.stopPropagation();
          bubbleLog.innerHTML += "Middle clicked - STOPPED PROPAGATION!<br>";
        });

        bubbleInner.addEventListener("click", function () {
          bubbleLog.innerHTML += "Inner clicked!<br>";
        });
      }
      break;

    case 9: // preventDefault vs stopPropagation
      const preventLink = document.getElementById("preventLink");
      const propagationDemo = document.getElementById("propagationDemo");
      const stopPropBtn = document.getElementById("stopPropBtn");
      const preventLog = document.getElementById("preventLog");

      if (preventLink && propagationDemo && stopPropBtn && preventLog) {
        preventLog.innerHTML = "";

        preventLink.addEventListener("click", function (e) {
          e.preventDefault();
          preventLog.innerHTML += "Link click prevented - no navigation!<br>";
        });

        propagationDemo.addEventListener("click", function () {
          preventLog.innerHTML += "Parent div clicked!<br>";
        });

        stopPropBtn.addEventListener("click", function (e) {
          e.stopPropagation();
          preventLog.innerHTML += "Button clicked - propagation stopped!<br>";
        });
      }
      break;

    case 10: // Event delegation demo
      const delegationContainer = document.getElementById(
        "delegationContainer"
      );
      const addItem = document.getElementById("addItem");
      const delegationLog = document.getElementById("delegationLog");
      let itemCount = 3;

      if (delegationContainer && addItem && delegationLog) {
        delegationLog.innerHTML = "";

        // Event delegation - one listener handles all items
        delegationContainer.addEventListener("click", function (e) {
          if (e.target.classList.contains("item")) {
            delegationLog.innerHTML = `Clicked: ${e.target.textContent} (handled by parent listener)`;
          }
        });

        addItem.addEventListener("click", function () {
          itemCount++;
          const newItem = document.createElement("div");
          newItem.className =
            "item bg-white p-2 rounded cursor-pointer hover:bg-gray-50";
          newItem.textContent = `Item ${itemCount}`;
          delegationContainer.insertBefore(newItem, addItem);
        });
      }
      break;

    case 11: // Capture phase demo
      const captureOuter = document.getElementById("captureOuter");
      const captureMiddle = document.getElementById("captureMiddle");
      const captureInner = document.getElementById("captureInner");
      const captureLog = document.getElementById("captureLog");

      if (captureOuter && captureMiddle && captureInner && captureLog) {
        captureLog.innerHTML = "";

        // Capture listener (third parameter = true)
        captureOuter.addEventListener(
          "click",
          function () {
            captureLog.innerHTML += "1. Outer (CAPTURE phase)<br>";
          },
          true
        );

        // Bubble listener (default)
        captureMiddle.addEventListener("click", function () {
          captureLog.innerHTML += "3. Middle (BUBBLE phase)<br>";
        });

        captureInner.addEventListener("click", function () {
          captureLog.innerHTML += "2. Inner (TARGET phase)<br>";
        });
      }
      break;

    case 12: // Custom event demo
      const customEventBtn = document.getElementById("customEventBtn");
      const customEventTarget = document.getElementById("customEventTarget");
      const customEventLog = document.getElementById("customEventLog");

      if (customEventBtn && customEventTarget && customEventLog) {
        // Listen for custom event
        customEventTarget.addEventListener("myCustomEvent", function (e) {
          customEventLog.innerHTML = `Custom event received! Data: ${e.detail.message}`;
        });

        // Dispatch custom event
        customEventBtn.addEventListener("click", function () {
          const customEvent = new CustomEvent("myCustomEvent", {
            detail: { message: "Hello from custom event!" },
          });
          customEventTarget.dispatchEvent(customEvent);
        });
      }
      break;

    case 13: // Once option demo
      const onceBtn = document.getElementById("onceBtn");
      const normalBtn = document.getElementById("normalBtn");
      const onceLog = document.getElementById("onceLog");
      let onceCount = 0;
      let normalCount = 0;

      if (onceBtn && normalBtn && onceLog) {
        onceLog.innerHTML = "";

        // Once listener
        onceBtn.addEventListener(
          "click",
          function () {
            onceCount++;
            onceLog.innerHTML += `Once button clicked ${onceCount} time (will only work once!)<br>`;
          },
          { once: true }
        );

        // Normal listener
        normalBtn.addEventListener("click", function () {
          normalCount++;
          onceLog.innerHTML += `Normal button clicked ${normalCount} times<br>`;
        });
      }
      break;

    case 14: // currentTarget demo
      const currentTargetDemo = document.getElementById("currentTargetDemo");
      const currentTargetLog = document.getElementById("currentTargetLog");

      if (currentTargetDemo && currentTargetLog) {
        currentTargetDemo.addEventListener("click", function (e) {
          currentTargetLog.innerHTML = `
                                <strong>event.target:</strong> ${
                                  e.target.tagName
                                } - "${e.target.textContent.trim()}"<br>
                                <strong>event.currentTarget:</strong> ${
                                  e.currentTarget.tagName
                                } - "Container (currentTarget)"<br>
                                <em>currentTarget is always the container, target changes based on what you click!</em>
                            `;
        });
      }
      break;

    case 15: // Remove event listener demo
      const addListenerBtn = document.getElementById("addListenerBtn");
      const removeListenerBtn = document.getElementById("removeListenerBtn");
      const testBtn = document.getElementById("testBtn");
      const listenerLog = document.getElementById("listenerLog");

      if (addListenerBtn && removeListenerBtn && testBtn && listenerLog) {
        let clickCount = 0;

        // Store function reference so we can remove it later
        function testFunction() {
          clickCount++;
          listenerLog.innerHTML = `Test button clicked ${clickCount} times`;
        }

        addListenerBtn.addEventListener("click", function () {
          testBtn.addEventListener("click", testFunction);
          listenerLog.innerHTML = "Event listener added to test button!";
        });

        removeListenerBtn.addEventListener("click", function () {
          testBtn.removeEventListener("click", testFunction);
          listenerLog.innerHTML = "Event listener removed from test button!";
        });
      }
      break;
  }
}

function setupInteractiveExamples() {
  // This function sets up examples that don't change between questions
  // Most examples are set up in setupCurrentQuestionExample()
}

// Initialize the quiz when page loads
document.addEventListener("DOMContentLoaded", function () {
  setupEventListeners();
  initializeQuiz();
});

(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'96abce73011c5a11',t:'MTc1NDQ1NDcwNS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
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
