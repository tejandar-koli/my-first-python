document.addEventListener("DOMContentLoaded", function () {

    const inputBox = document.getElementById("input");
    const chatBox = document.getElementById("chat");

    window.send = function () {
        const text = inputBox.value.trim();

        if (text === "") return;

        addMessage("You", text, "user");

        showTyping();

        setTimeout(() => {
            removeTyping();

            const reply = getAIResponse(text);

            addMessage("AI", reply, "bot");

        }, 600); // small delay for AI feel

        inputBox.value = "";
        chatBox.scrollTop = chatBox.scrollHeight;
    };

    function addMessage(sender, message, type) {
        const msg = document.createElement("div");
        msg.className = "message " + type;
        msg.textContent = sender + ": " + message;
        chatBox.appendChild(msg);
    }

    // AI typing effect
    function showTyping() {
        const typing = document.createElement("div");
        typing.className = "message bot";
        typing.id = "typing";
        typing.textContent = "AI is typing...";
        chatBox.appendChild(typing);
    }

    function removeTyping() {
        const typing = document.getElementById("typing");
        if (typing) typing.remove();
    }

    // Simple AI brain (upgrade later to real API)
    function getAIResponse(text) {
        text = text.toLowerCase();

        if (text.includes("hello") || text.includes("hi")) {
            return "Hello 👋 I am your AI assistant";
        }

        if (text.includes("name")) {
            return "My name is Task0.1 AI 🤖";
        }

        if (text.includes("how are you")) {
            return "I am running perfectly inside your system ⚡";
        }

        if (text.includes("joke")) {
            return "Why did the AI go to school? To get smarter 😄";
        }

        if (text.includes("what can you do")) {
            return "I can chat with you and will become a real AI soon 🚀";
        }

        return "I am still learning... 🤔";
    }

});
