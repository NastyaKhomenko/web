const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-button");
const img = document.getElementById("img");
console.log(img);
console.log(img.src);


customBtn.addEventListener("click", function() {
  realFileBtn.click();
});

realFileBtn.addEventListener("change", function() {
  if (realFileBtn.value) {
    console.log(URL.createObjectURL(this.files[0]));
    document.getElementById("img").src = URL.createObjectURL(this.files[0]);
    console.log(img.src);
    
  } 
});
document.addEventListener("DOMContentLoaded", function() {
  let allNews = [];


  document.getElementById("send").addEventListener("click", sendNews);
  window.addEventListener("online", function (event) {
      provider.get("news", (news) => {
          if (news) {
              allNews = news;
          }
          sendNewsToServer(allNews);
          provider.remove("news");
          allNews = [];
      });
  });

  provider.get("news", (news) => {
      if (news) {
          allNews = news;
      }
  });




function sendNews() {
    let txtVal1 = document.getElementById('exampleFormControlTextarea1').value;
              let txtVal2 = document.getElementById('exampleFormControlTextarea2').value;
              if (!/\S/.test(txtVal1)) {
                alert("заголовок не заповнений ");
    }else if (!/\S/.test(txtVal2)) {alert("тіло не заповнене")}
    else if (img.src==="images (1).jpg") {alert("картинка не заповнене")}
    else{

  if (isOnline()) {
        alert("Successfully sent to server");
    } else {
      allNews.push({imgSrc: img.src, title: txtVal1, body: txtVal2});
        provider.add("news", allNews);
            alert("Saved to storage");

    }
      alert("новина додана ");
      document.getElementById('form').reset();
     img.src="images (1).jpg";
}

function sendNewsToServer(allNews) {
        if (allNews.length) {
            alert("Successfully sent to server!")
        }
    }
  }
});