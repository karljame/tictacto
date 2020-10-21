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

                if (gameboard[0][0] == 'x' && gameboard[0][1] == 'x' && gameboard[0][2] == 'x') {
                    console.log('winner')
                }
                
                if (gameboard[1][0] == 'x' && gameboard[1][1] == 'x' && gameboard[1][2] == 'x') {
                    console.log('winner')
                }
                
                if (gameboard[2][0] == 'x' && gameboard[2][1] == 'x' && gameboard[2][2] == 'x') {
                    console.log('winner')
                  
                }
                
                if (gameboard[0][0] == 'x' && gameboard[1][0] == 'x' && gameboard[2][0] == 'x') {
                    console.log('winner')
                }
                
                if (gameboard[0][1] == 'x' && gameboard[1][1] == 'x' && gameboard[2][1] == 'x') {
                    console.log('winner')
                }
                
                if (gameboard[0][2] == 'x' && gameboard[1][2] == 'x' && gameboard[2][2] == 'x') {
                    console.log('winner')
                }
                
                if (gameboard[0][0] == 'x' && gameboard[1][1] == 'x' && gameboard[2][2] == 'x') {
                    console.log('winner')
                }
                
                if (gameboard[0][2] == 'x' && gameboard[1][1] == 'x' && gameboard[2][0] == 'x') {
                    console.log('winner')
                }










                






            }
    })
});
