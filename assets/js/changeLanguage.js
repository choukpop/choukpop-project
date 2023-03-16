
const selectLanguage = document.getElementById('language')
const testeLang = document.getElementById('testeLang')
let currentLanguage = 'en'
let languageData = null

function getAPIFileJson(lang) {
    fetch(`./../../static/locales/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            languageData = data
            applyLang(data)
        })
        .catch(error => {
            console.error(error)
        })
}

function changeLang() {
    let getLocalStorageLang = localStorage.getItem('locale')
    currentLanguage = getLocalStorageLang
    selectLanguage.value = getLocalStorageLang
    getAPIFileJson(getLocalStorageLang)
}

selectLanguage.addEventListener("change", (event) => {
    let currentValue = event.target.value
    currentLanguage = currentValue
    localStorage.setItem('locale', String(currentValue))
    getAPIFileJson(currentValue)
})

document.addEventListener('DOMContentLoaded', function () {
    changeLang()
})

function applyLang(data) {
    testeLang.textContent = data.sidebar.home
}
