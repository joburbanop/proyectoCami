const infoBtn = document.querySelector('#MasinformacionBTN1');
        const infoBtn2 = document.querySelector('#MasinformacionBTN2');
        const infoBtn3 = document.querySelector('#MasinformacionBTN3');
        infoBtn.addEventListener('click', toggleInfo);
        infoBtn2.addEventListener('click',toggleInfo2);
        infoBtn3.addEventListener('click',toggleInfo3);

        function toggleInfo() {
          if (infoBtn.textContent === 'Más Información' ) {
            infoBtn.textContent = 'Menos Información';
            //console.log(infoBtn.textContent+'aqui arriba el if');
          } else {
            infoBtn.textContent = 'Más Información';
            console.log(infoBtn.textContent);
          }

        }

        function toggleInfo2() {
          if (infoBtn2.textContent === 'Más Información' ) {
            infoBtn2.textContent = 'Menos Información';
            //console.log(infoBtn2.textContent+'aqui arriba el if');
          } else {
            infoBtn2.textContent = 'Más Información';
            //console.log(infoBtn2.textContent);
          }

        }

        function toggleInfo3() {
          if (infoBtn3.textContent === 'Más Información' ) {
            infoBtn3.textContent = 'Menos Información';
            //console.log(infoBtn3.textContent+'aqui arriba el if');
          } else {
            infoBtn3.textContent = 'Más Información';
            //console.log(infoBtn3.textContent);
          }

        }
        // seleccionar la lista de elementos de la barra de navegación
        const navbarList = document.getElementById('navbar-list'); 
        const navbarList2 = document.getElementById('navbar-list2');
        const navbarList3 = document.getElementById('navbar-list3'); 
        const navbarList4 = document.getElementById('navbar-list4');
        const navbarList5 = document.getElementById('navbar-list5'); 
        const navbarList6 = document.getElementById('navbar-list6');
        const navbarList7 = document.getElementById('navbar-list7'); 
        const navbarList8= document.getElementById('navbar-list8');
        const navbarList9 = document.getElementById('navbar-list9'); 
        const navbarList10 = document.getElementById('navbar-list10');
        const navbarList11= document.getElementById('navbar-list11');
        
        // seleccionar la barra de navegación hamburguesa
        
        const navbarCollapse = document.getElementById('navbarCollapse'); 
        
        navbarList.addEventListener('click', (event) => { // agregar un evento onclick a la lista
          navbarCollapse.classList.remove('show'); // ocultar la barra de navegación hamburguesa al hacer clic en un elemento de la lista
          
        });

        navbarList2.addEventListener('click', (event) => { // agregar un evento onclick a la lista
          navbarCollapse.classList.remove('show'); // ocultar la barra de navegación hamburguesa al hacer clic en un elemento de la lista
          
        });

        navbarList3.addEventListener('click', (event) => { // agregar un evento onclick a la lista
          navbarCollapse.classList.remove('show'); // ocultar la barra de navegación hamburguesa al hacer clic en un elemento de la lista
          
        });
        navbarList4.addEventListener('click', (event) => { // agregar un evento onclick a la lista
          navbarCollapse.classList.remove('show'); // ocultar la barra de navegación hamburguesa al hacer clic en un elemento de la lista
          
        });
        navbarList5.addEventListener('click', (event) => { // agregar un evento onclick a la lista
          navbarCollapse.classList.remove('show'); // ocultar la barra de navegación hamburguesa al hacer clic en un elemento de la lista
          
        });
        navbarList6.addEventListener('click', (event) => { // agregar un evento onclick a la lista
          navbarCollapse.classList.remove('show'); // ocultar la barra de navegación hamburguesa al hacer clic en un elemento de la lista
          
        });
        navbarList7.addEventListener('click', (event) => { // agregar un evento onclick a la lista
          navbarCollapse.classList.remove('show'); // ocultar la barra de navegación hamburguesa al hacer clic en un elemento de la lista
          
        });
        navbarList8.addEventListener('click', (event) => { // agregar un evento onclick a la lista
          navbarCollapse.classList.remove('show'); // ocultar la barra de navegación hamburguesa al hacer clic en un elemento de la lista
          
        });
        navbarList9.addEventListener('click', (event) => { // agregar un evento onclick a la lista
          navbarCollapse.classList.remove('show'); // ocultar la barra de navegación hamburguesa al hacer clic en un elemento de la lista
          
        });
        navbarList10.addEventListener('click', (event) => { // agregar un evento onclick a la lista
          navbarCollapse.classList.remove('show'); // ocultar la barra de navegación hamburguesa al hacer clic en un elemento de la lista
          
        });
        navbarList11.addEventListener('click', (event) => { // agregar un evento onclick a la lista
          navbarCollapse.classList.remove('show'); // ocultar la barra de navegación hamburguesa al hacer clic en un elemento de la lista
          
        });
        