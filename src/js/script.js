let log = new Log(document.querySelector('.log'))

let char = new Knight('Brutus')
let monster = new MegaGoblin()

const stage = new Stage (
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
)

stage.start()