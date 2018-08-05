$(`.clickMe`).on(`click`, (e) => {
    e.stopPropagation()
})
$(`.clickImg`).on(`click`, (e) => {
    e.stopPropagation()
})
$(`.clickMe`).on(`click`, () => {
    $(`.clickImg`).toggle()
    $(document).one(`click`, () => {
        $(`.clickImg`).hide()
    })
})

