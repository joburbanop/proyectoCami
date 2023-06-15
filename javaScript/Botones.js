        const infoBtn = document.querySelector('#MasinformacionBTN1');
        const infoBtn2 = document.querySelector('#MasinformacionBTN2');
        const infoBtn3 = document.querySelector('#MasinformacionBTN3');
        const infoBtn4 = document.querySelector('#MasinformacionBTN4');
        const maquillajePrueba=document.querySelector('#maquillajePrueba');
        const maquillajeSocial=document.querySelector('#maquillajeSocialMasInfomacion');
        const maquillajequince=document.querySelector('#maquillajeQuinceMasInfomacion');
        const maquillajenovia=document.querySelector('#maquillajeNoviaInfomacion');

        infoBtn.addEventListener('click', toggleInfo);
        infoBtn2.addEventListener('click',toggleInfo2);
        infoBtn3.addEventListener('click',toggleInfo3);
        infoBtn4.addEventListener('click',toggleInfo4);

        function toggleInfo() {
          if (infoBtn.textContent === 'Más Información' ) {
            maquillajeSocial.classList.remove('cero')
            infoBtn.textContent = 'Menos Información';
            //console.log(infoBtn.textContent+'aqui arriba el if');
          } else {
            maquillajeSocial.classList.add('cero')
            infoBtn.textContent = 'Más Información';
            //console.log(infoBtn.textContent);
          }

        }

        function toggleInfo2() {
          if (infoBtn2.textContent === 'Más Información' ) {
            maquillajequince.classList.remove('cero');
            infoBtn2.textContent = 'Menos Información';
            //console.log(infoBtn2.textContent+'aqui arriba el if');
          } else {
            maquillajequince.classList.add('cero');
            infoBtn2.textContent = 'Más Información';
            //console.log(infoBtn2.textContent);
          }

        }

        function toggleInfo3() {
          if (infoBtn3.textContent === 'Más Información' ) {
            maquillajenovia.classList.remove('cero');
            infoBtn3.textContent = 'Menos Información';
            //console.log(infoBtn3.textContent+'aqui arriba el if');
          } else {
            maquillajenovia.classList.add('cero');
            infoBtn3.textContent = 'Más Información';
            //console.log(infoBtn3.textContent);
          }

        }
      
        function toggleInfo4() {
          
          if (infoBtn4.textContent === 'Más Información' ) {
            maquillajePrueba.classList.remove('cero')
            infoBtn4.textContent = 'Menos Información';
            //console.log(infoBtn3.textContent+'aqui arriba el if');
            
          } else {
            maquillajePrueba.classList.add('cero')
            infoBtn4.textContent = 'Más Información';
            
            //console.log(infoBtn3.textContent);
          }

        }
     
        