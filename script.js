function sendMessage() {
  const input = document.getElementById("message-input");
  const message = input.value.trim();
  if (message === "") return;

  addMessage("You", message, "user");

  setTimeout(() => {
    const reply = generateBotReply(message);
    addMessage("Bot", reply, "bot");
  }, 600);

  input.value = "";
}

function addMessage(sender, message, type) {
  const chatBox = document.getElementById("chat-box");
  const msgDiv = document.createElement("div");
  msgDiv.className = `message ${type}`;
  msgDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function generateBotReply(msg) {
  const text = msg.toLowerCase();
  if (text.includes("hello")) return "Hey there! 👋";
  if (text.includes("name")) return "I'm CodTech Assistant 🤖";
  if (text.includes("bye")) return "Goodbye! See you soon!";
  return "I'm still learning! Try saying 'hello' or 'bye'.";
}