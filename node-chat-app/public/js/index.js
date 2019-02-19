var socket = io();

socket.on('connect', function() {
    console.log('Connected to server');
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
    console.log('New message', message);

    var messages = jQuery('#messages');
    var li = jQuery('<li></li>');
    li.text(`${message.from}: ${message.text}`);

    messages.append(li);
});

jQuery('#message-form').on('submit', function(event) {
    event.preventDefault();

    var thisForm = jQuery(this);

    var message = thisForm.find('[name=message]').val();

    socket.emit('createMessage', {
        from: "User",
        text: message
    }, function() {
        // clear form fields
        thisForm[0].reset();
    });
});