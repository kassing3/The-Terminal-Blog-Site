const homeTab = document.getElementById('homeTab');
const dashboardTab = document.getElementById('dashboardTab')

if( homeTab.classList.contains('active-brand') ){
    homeTab.classList.remove('active-brand');
    dashboardTab.classList.add('active-brand');
}