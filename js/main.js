$(`.wrapper`).on(`click`, (e) => {
    e.stopPropagation()
})
$(`.clickMe`).on(`click`, () => {
    $(`.clickImg`).toggle()
    $(document).one(`click`, () => {
        $(`.clickImg`).hide()
    })
})

