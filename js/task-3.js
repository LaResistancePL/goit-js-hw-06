class TextManipulator {
  #content;

  constructor(initialContent) {
    this.#content = initialContent;
  }

  // Method to get the current content
  getContent() {
    return this.#content;
  }

  // Method to append a string at the end
  appendText(text) {
    this.#content += text;
  }

  // Method to prepend a string at the start
  prependText(text) {
    this.#content = text + this.#content;
  }

  // Method to add a string at both the start and end
  surroundText(text) {
    this.prependText(text);
    this.appendText(text);
  }
}

const textHandler = new TextManipulator(".");
const resultDiv3 = document.getElementById('task-3-results');
resultDiv3.innerHTML += `<p>Initial content: ${textHandler.getContent()}</p>`;

// Prepend text and display the result
textHandler.prependText("^");
resultDiv3.innerHTML += `<p>After prependText: ${textHandler.getContent()}</p>`;

// Append text and display the result
textHandler.appendText("^");
resultDiv3.innerHTML += `<p>After appendText: ${textHandler.getContent()}</p>`;

// Surround text and display the result
textHandler.surroundText("=");
resultDiv3.innerHTML += `<p>After surroundText: ${textHandler.getContent()}</p>`;

  