function clicked() {
          let p = document.getElementsByName("price");
          let n = document.getElementsByName("number");
          let rez = document.getElementById("result");
          let selc = document.getElementsByName("selection");
          let btn = document.getElementsByName("radio_button");
          let chkrslt = document.getElementById("chek_result");
          let chkbox= document.getElementsByName("your_agreement");
          chkrslt.innerHTML = "";
          if (selc[0].value == "frst")
          {
              rez.innerHTML = "Стоимость заказа: " + (p[0].value * n[0].value);
          }
          else if (selc[0].value == "scnd")
          {
              if (btn[0].value == "r1" && btn[0].checked)
              {
                  rez.innerHTML = "Стоимость заказа: " + (p[0].value * n[0].value * 2);
                  
              }
              else if (btn[1].value == "r2" && btn[1].checked)
              {
                  rez.innerHTML = "Стоимость заказа: " + (p[0].value * n[0].value * 3);
              }
          }
          else if (selc[0].value == "thrd")
          {
              rez.innerHTML = "Стоимость заказа: " + (p[0].value * n[0].value);
              if (chkbox[0].checked)
              {
                  chkrslt.innerHTML = "Возьмите чек!";
              }
          }
          return false;
        }
        window.addEventListener('DOMContentLoaded', function (event) {
          let s = document.getElementsByName("selection");
          let prcs = document.getElementById("prices");
          let chk = document.getElementById("chek");
          let chkrsltat = document.getElementById("chek_result");
          let rezlt = document.getElementById("result");
          prcs.style.display = "none";
          chk.style.display = "none";
          s[0].addEventListener("change", function (event) {
            let slecte = event.target;
            if (slecte.value == "scnd")
            {
              chkrsltat.innerHTML = "";
              rezlt.innerHTML = "";
              prcs.style.display = "block";
              chk.style.display = "none";
            }
            else if (slecte.value == "thrd")
            {
              chkrsltat.innerHTML = "";
              rezlt.innerHTML = "";
              prcs.style.display = "none";
              chk.style.display = "block";
            }
            else
            {
              chkrsltat.innerHTML = "";
              rezlt.innerHTML = "";
              prcs.style.display = "none";
              chk.style.display = "none";
            }
          });
        });