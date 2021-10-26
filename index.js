const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget) //Get Clicked Tab 
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        }) //make all the other TAB content disappear
        target.classList.add('active') //Make active TAB Content appear

        //Highlight 
        tabs.forEach(tab => {
            tab.classList.remove('active')
        }) //Remove Highlight
        tab.classList.add('active') //Make Highlight Appear
    })
})

//Accordion
const questions = document.querySelectorAll('.projects__card')
questions.forEach(question => {
    const opener = question.querySelector('.projects__title')
    opener.addEventListener('click', () => {
        //Make sure only one Accordion is open at a time 
        [...questions].filter(q =>  q !== question).forEach(q => q.classList.remove('opened'))
        question.classList.toggle('opened')
    })
})