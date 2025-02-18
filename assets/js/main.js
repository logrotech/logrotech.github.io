/**
* Template Name: Presento
* Template URL: https://bootstrapmade.com/presento-bootstrap-corporate-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

})();

// // add classes for mobile navigation toggling
// var CSbody = document.querySelector('body');
// const CSnavbarMenu = document.querySelector('#cs-navigation');
// const CShamburgerMenu = document.querySelector('#cs-navigation .cs-toggle');

// CShamburgerMenu.addEventListener('click', function () {
// 	CShamburgerMenu.classList.toggle('cs-active');
// 	CSnavbarMenu.classList.toggle('cs-active');
// 	CSbody.classList.toggle('cs-open');
// 	// run the function to check the aria-expanded value
// 	ariaExpanded();
// });

// // checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not
// function ariaExpanded() {
// 	const csUL = document.querySelector('#cs-expanded');
// 	const csExpanded = csUL.getAttribute('aria-expanded');

// 	if (csExpanded === 'false') {
// 		csUL.setAttribute('aria-expanded', 'true');
// 	} else {
// 		csUL.setAttribute('aria-expanded', 'false');
// 	}
// }

// // mobile nav toggle code
// const dropDowns = Array.from(document.querySelectorAll('#cs-navigation'));
// for (const item of dropDowns) {
// 	const onClick = () => {
// 		item.classList.toggle('cs-active');
// 	};
// 	item.addEventListener('click', onClick);
// }
                                

window.addEventListener('scroll', function() {
    const section1 = document.getElementById('hero');
    const section2 = document.getElementById('about');
    const section3 = document.getElementById('tabs');
    const section4 = document.getElementById('pricing');
    const section5 = document.getElementById('faq');
    const section6 = document.getElementById('team');

    const nav1 = document.getElementById('heronav');
    const nav2 = document.getElementById('aboutnav');
    const nav3 = document.getElementById('tabsnav');
    const nav4 = document.getElementById('pricingnav');
    const nav5 = document.getElementById('faqnav');
    const nav6 = document.getElementById('teamnav');

    const section1Top = section1.offsetTop;
    const section2Top = section2.offsetTop;
    const section3Top = section3.offsetTop;
    const section4Top = section4.offsetTop;
    const section5Top = section5.offsetTop;
    const section6Top = section6.offsetTop;
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    // Reset navbar
    nav1.classList.remove('active');
    nav2.classList.remove('active');
    nav3.classList.remove('active');
    nav4.classList.remove('active');
    nav5.classList.remove('active');
    nav6.classList.remove('active');

    if (scrollPosition >= section1Top && scrollPosition < section2Top) {
        nav1.classList.add('active');
    } else if (scrollPosition >= section2Top && scrollPosition < section3Top) {
        nav2.classList.add('active');
    } else if (scrollPosition >= section3Top && scrollPosition < section4Top) {
        nav3.classList.add('active');
    } else if (scrollPosition >= section4Top && scrollPosition < section5Top) {
        nav4.classList.add('active');
    } else if (scrollPosition >= section5Top && scrollPosition < section6Top) {
        nav5.classList.add('active');
    } else if (scrollPosition >= section6Top) {
        nav6.classList.add('active');
      }
});
