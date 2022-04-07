function init() {
    if (document.body.classList) {
        const main = document.querySelector('main')
        main.classList.add('jsEnabled')
    }

    setMenuActive()

    if (window.location.pathname == "/") {
        sliderNav()
        setSliderNavImg()
    }
}

init();


function setMenuActive() {
    if (document.body.classList) {
        if (window.location.pathname == "/") {
            const menuItemOne = document.querySelector('nav a:nth-child(1)')
            menuItemOne.classList.add('active');
        } else if (window.location.pathname == "/resultaten") {
            const menuItemTwo = document.querySelector('nav a:nth-child(2)')
            menuItemTwo.classList.add('active');
        } else if (window.location.pathname == "/admin") {
            const menuItemThree = document.querySelector('nav a:nth-child(3)')
            menuItemThree.classList.add('active');
        }
    }
}

function sliderNav() {
    let count = Number(window.location.hash.substring(2)) || 1
    setSlide(count)

    //Als gebruiker handmatig hash veranderd 
    window.addEventListener('hashchange', function() {
        count = Number(window.location.hash.substring(2)) || 1
        setSlide(count)
    }, false);

    const prev = document.querySelector('.slider nav a:first-of-type')
    const next = document.querySelector('.slider nav a:last-of-type')

    prev.addEventListener('click', function() {
        count -= 1
        setSlide(count)
    })

    next.addEventListener('click', function() {
        count += 1
        setSlide(count)
    })
}

function setSlide(count) {
    if (document.body.classList) {
        const prev = document.querySelector('.slider nav a:first-of-type')
        const next = document.querySelector('.slider nav a:last-of-type')

        if (count > 1 && count < 5) {
            next.classList.remove('none')
            prev.classList.remove('none')

            window.location.hash = 'q' + count

        } else if (count == 1) {
            prev.classList.add('none')
            window.location.hash = 'q' + count

        } else if (count == 5) {
            next.classList.add('none')
            window.location.hash = 'q' + count
            
        } else {
            let count = 1
            return count
        }
    }
}

function setSliderNavImg() {
    const arrowLeft = document.querySelector('.slider nav a:first-of-type img')
    const arrowRight = document.querySelector('.slider nav a:last-of-type img')

    arrowLeft.src = '/images/arrowLeft.svg'
    arrowRight.src = '/images/arrowRight.svg'
    arrowLeft.height = '0'
    arrowRight.height = '0'
}