$(`.clickMe`).on(`click`, (e) => {
    e.stopPropagation()
})
$(`.clickImg`)
$(`.clickMe`).on(`click`, () => {
    $(`.clickImg`).toggle()
    $(document).one(`click`, () => {
        $(`.clickImg`).hide()
    })
})

