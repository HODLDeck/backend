var socket = io.connect('');
socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
})

$("#form_setup").submit(function(e) {
    e.preventDefault()
    var address = $('#input_setup_address').val()
    var magicWords = $('#input_setup_magic').val()
    if (!StellarSdk.StrKey.isValidEd25519PublicKey(address)) {
        alert("Invalid Address")
        return
    }

    if (!magicWords.match(/[a-z]+\-[a-z]+\-[a-z]+/)) {
        alert("Invalid Magic Words")
        return
    }

    socket.emit('setKey', {
        "address":address,
        "magic-words":magicWords
    })
        
    $("#screen_setup").addClass("hidden")
    $("#screen_transaction").removeClass("hidden")
    
})

$("#button_transaction").click(function(e) {
    e.preventDefault()
})