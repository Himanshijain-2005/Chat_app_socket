<h1 align="center">💬 Real-Time Chat App with Socket.IO & Express</h1>

<p align="center">
  A real-time chat application using <strong>Node.js</strong>, <strong>Express</strong>, and <strong>Socket.IO</strong> to send and receive messages instantly.
  Supports both public and private messaging through WebSocket rooms.
</p>

<hr>

<h2>📸 Demo Screenshots</h2>

<h3>🔵 Home Page</h3>
<img src="https://github.com/Himanshijain-2005/WhisperWave/blob/main/Wisper%20Wave%202%20screeshot.png" alt="Home Page" width="600"/>

<h3>🟢 Chat Interface</h3>
<img src="https://github.com/Himanshijain-2005/WhisperWave/blob/main/WisperWave%20screeshot.png" alt="Chat Interface" width="600"/>

<hr>

<h2>🚀 Features</h2>

<ul>
  <li>📡 Real-time, two-way messaging</li>
  <li>⚡ Fast event-driven architecture using WebSockets</li>
  <li>🔒 Private messaging via user-based rooms</li>
  <li>🔁 Broadcast and targeted messaging options</li>
  <li>🧱 Easy to scale and customize</li>
</ul>

<hr>

<h2>🛠️ Tech Stack</h2>

<ul>
  <li><strong>Node.js</strong> – JavaScript runtime</li>
  <li><strong>Express</strong> – Minimal web server framework</li>
  <li><strong>Socket.IO</strong> – Real-time WebSocket communication</li>
</ul>

<hr>

<h2>📦 Installation & Setup</h2>

<pre>
# Step 1: Initialize the project
npm init -y

# Step 2: Install required dependencies
npm install express socket.io
</pre>

<p>Then, create <code>server.js</code> and a <code>public/</code> folder with <code>index.html</code> and <code>client.js</code>.</p>

<hr>

<h2>🧪 Message Flow</h2>

<h3>✅ Step-by-Step Process</h3>

<ol>
  <li><strong>Client:</strong> Sends message using
    <pre>socket.emit('msg_sent', message);</pre>
  </li>
  <li><strong>Server:</strong> Listens and emits using
    <pre>
socket.on('msg_sent', (msg) => {
  io.emit('msg_rcvd', msg);
});
    </pre>
  </li>
  <li><strong>Other Clients:</strong> Receive and display message
    <pre>
socket.on('msg_rcvd', (msg) => {
  // Display the message
});
    </pre>
  </li>
</ol>

<hr>

<h2>💡 Socket.IO Concepts</h2>

<table>
  <tr>
    <th>Method</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>socket.emit()</code></td>
    <td>Sends message to the sender socket only</td>
  </tr>
  <tr>
    <td><code>io.emit()</code></td>
    <td>Sends message to <strong>all connected sockets</strong></td>
  </tr>
  <tr>
    <td><code>socket.broadcast.emit()</code></td>
    <td>Sends to all <strong>except the sender</strong></td>
  </tr>
  <tr>
    <td><code>io.to(room).emit()</code></td>
    <td>Sends message to sockets in a <strong>specific room</strong></td>
  </tr>
</table>

<hr>

<h2>🔒 Private Messaging Using Rooms</h2>

<p>
Each socket joins a room based on their <strong>username</strong>. You can then target them individually:
</p>

<pre>
io.to(receiverUsername).emit('msg_rcvd', message);
</pre>

<p>This simulates 1-on-1 private chat similar to WhatsApp or Messenger.</p>

<hr>

<h2>📁 Folder Structure</h2>

<pre>
chat-app/
├── server.js
├── package.json
└── public/
    ├── index.html
    └── client.js
</pre>

<hr>

<h2>🌍 Deployment</h2>

<h3>▶️ Deploy on Render</h3>

<ol>
  <li>Push your code to GitHub</li>
  <li>Visit <a href="https://render.com">https://render.com</a></li>
  <li>Create a new Web Service</li>
  <li>Connect your GitHub repository</li>
  <li>Set:
    <ul>
      <li>Build Command: <code>npm install</code></li>
      <li>Start Command: <code>node server.js</code></li>
    </ul>
  </li>
  <li>Click <strong>Deploy</strong> 🚀</li>
</ol>

<hr>

<h2>📚 What You'll Learn</h2>

<ul>
  <li>🔌 Fundamentals of WebSocket vs HTTP</li>
  <li>🔁 Event-driven server-client communication</li>
  <li>📤 Using <code>emit</code>, <code>on</code>, <code>broadcast</code>, and <code>rooms</code></li>
  <li>🌐 Deployment of Node.js apps</li>
</ul>

<hr>

<h2>🤝 Contributions</h2>

<p>Feel free to fork this repo and add your own features like:</p>

<ul>
  <li>Authentication and user management</li>
  <li>UI enhancements with React or Vue</li>
  <li>Emoji and file sharing</li>
  <li>Group chats and chat history</li>
</ul>

<hr>

<h2>📜 License</h2>

<p>This project is licensed under the <a href="LICENSE">MIT License</a>.</p>

<hr>

<h2>🙏 Acknowledgements</h2>

<ul>
  <li><a href="https://nodejs.org/">Node.js</a></li>
  <li><a href="https://expressjs.com/">Express</a></li>
  <li><a href="https://socket.io/">Socket.IO</a></li>
</ul>
