

// console.log(_.shuffle(cards_recto));
// console.log(_.shuffle(cards_recto));
// console.log(_.shuffle(cards_recto));
// console.log(cards_recto);

flipAllToVerso = function() {
    $(".card").each(function( i ) {
        if ( this.display === "block" ) {
            this.display = "img-verso";
          } else {
            this.display = "img-verso";
          }
    }) 
};

jQuery('document').ready(() => {
    let numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];

    numbers = _.shuffle(numbers);
        
    $('.img-recto').each((index, cardRecto) => {
        let number = numbers[index]

        $(cardRecto).attr('src', `../mario_twins/recto-${number}.png`)
    })
    console.log('test')
    // Quand on clique sur une carte, alors...
    $( ".card" ).on( "click", function() {
        // ... j'affiche le recto et cache le verso
        $( this ).find('.img-recto').css( "display", "block" );
        $( this ).find('.img-verso').css( "display", "none" );

        // ... et je retourne les cartes après 3 secondes
        setTimeout(flipAllToVerso, 3000)
    });
});

