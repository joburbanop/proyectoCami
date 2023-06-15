var menuItems = document.querySelectorAll('.navbar-nav li a');
        
        for (var i = 0; i < menuItems.length; i++) {
          menuItems[i].addEventListener('click', function () {
            var navbarCollapse = document.getElementById('navbarCollapse');
            navbarCollapse.classList.remove('show');
            navbarCollapse.classList.add('shadow')
          });
        }

        window.addEventListener('scroll', function() {
        var header = document.querySelector('.header');
        header.classList.toggle('shadow', window.scrollY > 0);
        });