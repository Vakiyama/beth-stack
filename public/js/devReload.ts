(function() {
  const socket = new WebSocket('ws://localhost:5000/live-reload');
  socket.onmessage = function(msg) {
    if (msg.data === 'live-reload') {
      location.reload();
    }
  };
  console.log('Live reload enabled.');
})();
