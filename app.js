/**
 * Deals with Single-Page Application functions using
 * the Vue.js javascript framework
 */

/**
 * Vue.js Components
 */
const Home = { template : HomeTemplate() }
const About = { template : AboutTemplate() }
const Resume = { template : ResumeTemplate() }
const Academics = { template : AcademicsTemplate() }
const Contact = { template : ContactTemplate() }
const Warning = { template : WarningTemplate() }

/**
 * Routes
 */
const routes = [
    { path : '/', component : Home },
    { path : '/about', component : About },
    { path : '/resume', component : Resume },
    { path : '/academics', component : Academics },
    { path : '/contact', component : Contact },
    { path : '/warning', component : Warning }
]

/**
 * VueRouter.js Declaration
 */
const router = new VueRouter({
    routes
})

/**
 * template functions
 */
// Home Template
function HomeTemplate() {

    // window width
    var xWin = $(window).width()

    // block variables
    var n, offset, dist

    // html string
    var html

    // adjust for different screen sizes
    // smartphones
    if (xWin < 768) {
        // set block variables
        n = 3
        offset = 8
        off = offset/2
        dist = 8
        // block size
        block = getBlocks(n, offset, dist)
        size = Math.round(block)

        // scroller
        scroll = size * n + ( dist * (n - 1))

        html = '<div id="awe" style="margin: 8px; position: relative; width: ' + scroll + 'px">'
        html += '<span style="font-family: \'Open Sans\'; font-size: 1.25em">&lt;/projects/&gt;</span><br>'

        // project blocks
        for (i =0; i < n; i++) {
            if (i == 0) {
                // should get left arrow and have only right margin
                html += '<div style="background: #202020; margin-top: 8px; margin-right:' + off + 'px; display: inline-block; width: ' + size
                html += 'px; height: ' + size + 'px"></div>'
            }
            else if (i == n - 1) {
                // should get right arrow and only have left margin
                html += '<div style="background: #202020; margin-left:' + off + 'px; display: inline-block; width: ' + size
                html += 'px; height: ' + size + 'px"></div>'
            }
            else {
                // should get no arrow and both left and right margins
                html += '<div style="background: #202020; margin: 0px ' + off + 'px; display: inline-block; width: ' + size
                html += 'px; height: ' + size + 'px"></div>'
            }
        }

        html += '</div>'
    }
    else if (xWin >= 768 && xWin < 992) {
        // set block variables
        n = 4
        offset = 32
        dist = 16

        // block size
        block = getBlocks(n, offset, dist)
        size = Math.floor(block)

        // scroller
        scroll = size * n + ( dist * (n - 1))

        var join = offset + size + dist

        html = '<div id="awe" style="margin: 0px ' + offset + 'px; position: relative; width: ' + scroll + 'px">'
        html += '<span style="font-family: \'Open Sans\'; font-size: 1.25em">&lt;/projects/&gt;</span><br>'

        // project blocks
        for (i =0; i < n; i++) {
            if (i == 0) {
                // should get left arrow and have only right margin
                html += '<div class="project-box" style="background: #202020; width: ' + size
                html += 'px; height: ' + size + 'px; position: fixed; left: ' + offset + 'px"></div>'
            }
            else if (i == n - 1) {
                // should get right arrow and only have left margin
                html += '<div class="project-box" style="background: #202020; width: ' + size
                html += 'px; height: ' + size + 'px; position: fixed; right: ' + offset + 'px"></div>'
            }
            else {
                // should get no arrow and both left and right margins
                html += '<div class="project-box" style="background: #202020; width: ' + size
                html += 'px; height: ' + size + 'px; position: fixed; left: ' + join + 'px"></div>'
                join += size + dist 
            }
        }

        html += '</div>'
    }
    else if (xWin >= 992 && xWin < 1200) {
        // set block variables
        n = 5
        offset = 64
        dist = 32

        // block size
        block = getBlocks(n, offset, dist)
        size = Math.floor(block)

        // scroller
        scroll = size * n + ( dist * (n - 1))

        var join = offset + size + dist

        html = '<div id="awe" style="margin: 0px ' + offset + 'px; position: relative; width: ' + scroll + 'px">'
        html += '<span style="font-family: \'Open Sans\'; font-size: 1.25em">&lt;/projects/&gt;</span><br>'

        // project blocks
        for (i =0; i < n; i++) {
            if (i == 0) {
                // should get left arrow and have only right margin
                html += '<div class="project-box" style="background: #202020; width: ' + size
                html += 'px; height: ' + size + 'px; position: fixed; left: ' + offset + 'px"></div>'
            }
            else if (i == n - 1) {
                // should get right arrow and only have left margin
                html += '<div class="project-box" style="background: #202020; width: ' + size
                html += 'px; height: ' + size + 'px; position: fixed; right: ' + offset + 'px"></div>'
            }
            else {
                // should get no arrow and both left and right margins
                html += '<div class="project-box" style="background: #202020; width: ' + size
                html += 'px; height: ' + size + 'px; position: fixed; left: ' + join + 'px"></div>'
                join += size + dist 
            }
        }

        html += '</div>'
    }
    else if (xWin >= 1200) {
        // set block variables
        n = 5
        offset = 96
        dist = 32

        // block size
        block = getBlocks(n, offset, dist)
        size = Math.floor(block)

        // scroller
        scroll = size * n + ( dist * (n - 1))

        var join = offset + size + dist

        html = '<div id="awe" style="margin: 0px ' + offset + 'px; position: relative; width: ' + scroll + 'px">'
        html += '<span style="font-family: \'Open Sans\'; font-size: 1.25em">&lt;/projects/&gt;</span><br>'

        // project blocks
        for (i =0; i < n; i++) {
            if (i == 0) {
                // should get left arrow and have only right margin
                html += '<div class="project-box" style="background: #202020; width: ' + size
                html += 'px; height: ' + size + 'px; position: fixed; left: ' + offset
                html += 'px"><div id="proj-' + (i + 1) + '" class="project-child">'
                html += '<div class="project-overlay"></div></div></div>'
            }
            else if (i == n - 1) {
                // should get right arrow and only have left margin
                html += '<div class="project-box" style="background: #202020; width: ' + size
                html += 'px; height: ' + size + 'px; position: fixed; right: ' + offset
                html += 'px"><div id="proj-' + (i + 1) + '" class="project-child">'
                html += '<div class="project-overlay"></div></div></div>'
            }
            else {
                // should get no arrow and both left and right margins
                html += '<div class="project-box" style="background: #202020; width: ' + size
                html += 'px; height: ' + size + 'px; position: fixed; left: ' + join
                html += 'px"><div id="proj-' + (i + 1) + '" class="project-child">'
                html += '<div class="project-overlay"></div></div></div>'
                join += size + dist 
            }
        }

        html += '</div>'
    }

    return html
}
// About Template
function AboutTemplate() {
    return '<div>about</div>'
}
// Resume Template
function ResumeTemplate() {

    // html string
    html = '<div><span style="font-family: \'Open Sans\'; font-size: 1.75em;">'
    html += 'Curriculum Vit&aelig; // R&eacute;sum&eacute;</span><br>'

    // window width
    var xWin = $(window).width()

    // content height
    var height = Math.floor(getArea()) - 50

    // sort for different sizes
    if (xWin < 768) {
        // smartphones
        html += '<object width="' + (xWin - 8 - 8) + '" height="' + height + 'px" type="application/pdf"'
        html += 'data="https://ntsikinonjo.github.io/profile/cv/cv.pdf?#zoom=50&view=FitH&scrollbar=0&toolbar=1&navpanes=0">'
        html += '<p>pdf can\'t be displayed</p></object>'
    }
    else if (xWin >= 768 && xWin < 992) {
        // medium devices
        html += '<object width="50%" height="' + height + 'px" type="application/pdf"'
        html += 'data="https://ntsikinonjo.github.io/profile/cv/cv.pdf?#zoom=50&view=FitH&scrollbar=0&toolbar=1&navpanes=0">'
        html += '<p>pdf can\'t be displayed</p></object>'
    }
    else {
        // larger than medium
        html += '<object width="50%" height="' + height + 'px" type="application/pdf"'
        html += 'data="https://ntsikinonjo.github.io/profile/cv/cv.pdf?#zoom=50&view=FitH&scrollbar=0&toolbar=1&navpanes=0">'
        html += '<p>pdf can\'t be displayed</p></object>'
    }

    html += '</div>'

    return html
}
// Academics Template
function AcademicsTemplate() {
    return '<div>academics</div>'
}
// Contact Template
function ContactTemplate() {
    return '<div>contact</div>'
}
// Warning Template
function WarningTemplate() {

    // set css
    $('#app').css('height', Math.round(getArea()))

    // html string
    var html = '<div style="font-size: 1.75em; margin-top: ' + Math.round(getArea()/2) + 'px"><i class="fas fa-sync-alt"></i><br>'
    html = html + '<span style="font-family: \'Open Sans\';">Rotate Screen</span></div>'

    return html
}

/**
 * Vue.js Declaration
 */
var app = new Vue({
    router,
    // called synchronously after the instance is created
    beforeCreate: function() {

        // set content area
        setArea()
    },
    created: function() {

        // on created set click listeners for routes
        $('#link-home').on('click', function() {
            router.push('/')
            closeMenu()
        })
        $('#link-about').on('click', function() {
            router.push('about')
            closeMenu()
        })
        $('#link-resume').on('click', function() {
            router.push('resume')
            closeMenu()
        })
        $('#link-academics').on('click', function() {
            router.push('academics')
            closeMenu()
        })
        $('#link-contact').on('click', function() {
            router.push('contact')
            closeMenu()
        })

        // if menu is open and you click outside it must close
        $('body').on('click', function(event) {
            // don't bother if no menu is open
            
            // get menu position
            var position = $('#menu-pop').position()

            if ($('#menu-pop').css('display') === 'block') {
                if (event.clientX < position.left || event.clientY < position.top ||
                    event.clientX > (position.left + $('#menu-pop').width())) {
                        closeMenu()
                }
            }
        })

        // window width
        var xWin = $(window).width()
        
        // block variables
        var n, offset, dist

        // adjust for different screen sizes
        // smartphones
        if (xWin < 768) {
            // check if content area is small
            n = 3
            offset = 8
            dist = 8
            // if content area height is smaller than blocks
            if (getArea() < getBlocks(n, offset, dist)) {
                router.push('warning')
            }
        }
        // small devices or tables
        else if (xWin >= 768 && xWin < 992) {
            // check if content area is small
            n = 4
            offset = 32
            dist = 16
            // if content area height is smaller than blocks
            if (getArea() < getBlocks(n, offset, dist)) {
                router.push('warning')
            }
        }
        // medium devices
        else if (xWin >= 992 && xWin < 1200) {
            // check if content area is small
            n = 5
            offset = 64
            dist = 32
            // if content area height is smaller than blocks
            if (getArea() < getBlocks(n, offset, dist)) {
                router.push('warning')
            }
        }
        // large devices
        else if (xWin >= 1200) {
            // check if content area is small
            n = 5
            offset = 96
            dist = 32
            // if content area height is smaller than blocks
            if (getArea() < getBlocks(n, offset, dist)) {
                router.push('warning')
            }
        }
    },
    // Code that will run only after the
    // entire view has been rendered
    mounted: function() {
        this.$nextTick(function() {

            $(window).on('resize', function () {

                // resize all elements
            })
        })
    }
}).$mount('#app')

/**
 * other functions
 */
function closeMenu() {
    // close
    $('#menu-pop').css('display', 'none')
    $('#menu-pop').removeClass('transY', 'slow')

    // change stroke colours
    $('.menu-btn-stroke').css('background', '#202020')
    $('#menu-stroke').css('border-color', 'transparent')
}

// get number of blocks to display
function getBlocks(n, offset, dist) {

    // get width and height of window
    var xWin = $(window).width()
    // sides and space
    var sides = 2 * offset
    var space = dist * (n - 1)
    var blocks = xWin - sides - space
    return blocks/n
    
}

// get distance between banner and button
function getArea() {

    // get banner and button
    var banner = $('#n-banner')
    var button = $('#menu-btn').position()

    return button.top - (banner.position().top + banner.height()) - 8 - 8
}

// set content area
function setArea() {
    $('#app').css('height', getArea())
}