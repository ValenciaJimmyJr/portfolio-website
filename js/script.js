/* =============== SHOW MENU =============== */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/* Menu Show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    });
}

/* Menu Hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    });
}

/* Remove Menu Mobile when link acts */
const navLink = document.querySelectorAll('.nav-link');
const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));


/* =============== CHANGE BACKGROUND HEADER =============== */
const scrollHeader = () =>{
    const header = document.getElementById('header');
    if(this.scrollY >= 50) header.classList.add('scroll-header'); 
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/* =============== SCROLL SECTIONS ACTIVE LINK =============== */
const sections = document.querySelectorAll('section[id]');
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset;

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 100,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']');

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass?.classList.add('active');
		}else{
			sectionsClass?.classList.remove('active');
		}                                                    
	});
}
window.addEventListener('scroll', scrollActive);


/* =============== DARK LIGHT THEME =============== */ 
const themeButton = document.getElementById('theme-toggle');
const iconTemplate = "<i class='bx bx-moon'></i>";
const darkIcon = "<i class='bx bx-sun'></i>";

// Initially check localStorage or system pref
const selectedTheme = localStorage.getItem('selected-theme');

// If there's a stored preference, apply it
if (selectedTheme === 'dark') {
  document.body.classList.add('dark');
  document.body.classList.remove('light');
  themeButton.innerHTML = darkIcon;
} else if (selectedTheme === 'light') {
  document.body.classList.remove('dark');
  document.body.classList.add('light');
  themeButton.innerHTML = iconTemplate;
} else {
  // Default to system preference if no localStorage
  if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
     document.body.classList.add('dark');
     document.body.classList.remove('light');
     themeButton.innerHTML = darkIcon;
  }
}

// Toggle Theme on click
themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    
    // Switch icon depending on active theme
    if(document.body.classList.contains('dark')){
        themeButton.innerHTML = darkIcon;
        localStorage.setItem('selected-theme', 'dark');
    } else {
        themeButton.innerHTML = iconTemplate;
        localStorage.setItem('selected-theme', 'light');
    }
});


/* =============== SCROLL REVEAL ANIMATION =============== */
const revealElements = document.querySelectorAll('.reveal');

const scrollReveal = () => {
    revealElements.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            el.classList.add('active');
        }
    });
}
window.addEventListener('scroll', scrollReveal);

// Trigger immediately on load for initial elements
scrollReveal();
