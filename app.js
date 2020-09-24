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
        
        
        selectedcell.innerText = 'x'

        gameboard[selectedrow][selectedcol] = 'x'

        console.log(gameboard)
    })
});

