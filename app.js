let gameboard = [
    ['-', '-', '-', ],
    ['-', '-', '-', ],
    ['-', '-', '-', ]

]

const cellDivs = document.querySelectorAll('.cell')

cellDivs.forEach(el => {
    console.log(el)
    el.addEventListener('click', event => {
        
        const selectedcell= event.currentTarget
        const selectedrow = selectedcell.dataset.row
        const selectedcol = selectedcell.dataset.col
        
             if ( gameboard[selectedrow][selectedcol] == '-') { 
                selectedcell.innerText = 'x'

                gameboard[selectedrow][selectedcol] = 'x'

                if(gameboard[0][0] != ' ')
                {
                    if(gameboard[0][0] == gameboard[0][1] && gameboard[0][1] == gameboard[0][2])
            
                {
                    winner = gameboard[0][0];
                    console.log('winner')
            }
                }

            }
    })
});

