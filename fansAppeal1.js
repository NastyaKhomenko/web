console.log(1);
document.addEventListener("DOMContentLoaded", function () {
    let allAppeals = [];

    document.getElementById("send").addEventListener("click", addAppeal);
    window.addEventListener("online", function (event) {
        provider.get("appeals", (appeals) => {
            if (appeals) {
                allAppeals = appeals;
            }
            sendAppealsToServer(allAppeals);
            showAllAppeals(allAppeals);
            provider.remove("appeals");
            allAppeals = [];
        });
        if (isOnline()) {
        sendAppealsToServer(allAppeals);
        showAllAppeals(allAppeals);
        provider.remove("appeals");
        allAppeals = [];
    }
    });
provider.get("appeals", (appeals) => {
            if (appeals) {
                allAppeals = appeals;
            }
            sendAppealsToServer(allAppeals);
            showAllAppeals(allAppeals);
            provider.remove("appeals");
            allAppeals = [];
        });
        if (isOnline()) {
        sendAppealsToServer(allAppeals);
        showAllAppeals(allAppeals);
        provider.remove("appeals");
        allAppeals = [];
    }

    function addAppeal() {
        var txtVal = document.getElementById('exampleFormControlTextarea1').value;
                  if (/\S/.test(txtVal)) {
    const nickname = "User"
        var date = new Date();
    
        if (isOnline()) {
            showAppeal(nickname, date, txtVal);
            alert("Successfully sent to server");
        } else {
            allAppeals.push({name: nickname, date: date, text: txtVal});
            provider.add("appeals", allAppeals);
            alert("Saved to local storage");
        }
                  }
        
    
        
        document.getElementById('form').reset();
    }
    

function showAppeal(name, date, txtVal) {
    console.log(1);
       var date = new Date();
      
   
                 console.log(exampleFormControlTextarea1);
                 var div = document.createElement("div");
                 var divPara = document.createElement("div");
                 divPara.classList.add("card");
                 divPara.classList.add("col-8");
                 div.classList.add('container');
                 var divUser = document.createElement("div");
                 divUser.classList.add('fan_time');
                 divUser.classList.add('col-2');
                 divUser.classList.add('card');
                 var pUser = document.createElement("p");
                 var pUserTime = document.createElement("p");
                 var pUserDate = document.createElement("p");
                   
                 
                 var pLogin = document.createTextNode(name);
                 var pTime = document.createTextNode(date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());
                 var pDate = document.createTextNode(date.getDate() +"."+(date.getMonth()+1)+"."+date.getFullYear());
                 var para = document.createElement("p");
                 var divB = document.createElement("div");
                 var hr = document.createElement("hr");
                 divB.classList.add('row')
                 hr.classList.add('row')

                 var node = document.createTextNode(txtVal);
                 pUserDate.classList.add('card-text')
                 pUserTime.classList.add('card-text')
                 pUser.classList.add('card-text')
                 para.classList.add('card-text');
                 pUser.appendChild(pLogin);
                 pUserTime.appendChild(pTime);
                 pUserDate.appendChild(pDate);
                 para.appendChild(node);
                 var element = document.getElementById("elem");
                 divUser.appendChild(pUser)
                 divUser.appendChild(pUserTime)
                 divUser.appendChild(pUserDate)
                 divB.appendChild(divUser);
                 divPara.appendChild(para);
                 divB.appendChild(divPara);
                 div.appendChild(hr);
                 div.appendChild(divB);
              
              
                 element.appendChild(div);
}
function showAllAppeals(allAppeals) {
    allAppeals.forEach(function (appeal) {
        showAppeal(appeal.name, new Date(appeal.time), appeal.text)
    });
}

function sendAppealsToServer(allAppeals) {
    if (allAppeals.length) {
        alert("Successfully sent to server!")
    }
}



function isOnline() {
    return window.navigator.onLine;
}});
