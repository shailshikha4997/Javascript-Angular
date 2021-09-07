function CallAjax1(City) {
    var key = "21ec46344d981a5c9b3ecb0f2f68c0c4"
    var url = `https://api.openweathermap.org/data/2.5/weather?q=Paris &appid=${key}`
    var http = new XMLHttpRequest();
    http.open("GET", url);
    http.send()
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.response))
                // console.log(JSON.parse(this.response))
            document.getElementById("btn").innerHTML = this.response
        }
    }
}


function CallAjax2(City) {
    var key = "21ec46344d981a5c9b3ecb0f2f68c0c4"
    var url = `https://api.openweathermap.org/data/2.5/weather?q=Australia &appid=${key}`
    var http = new XMLHttpRequest();
    http.open("GET", url);
    http.send()
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.response))
                // console.log(JSON.parse(this.response))
            document.getElementById("btn1").innerHTML = this.response
        }
    }
}

function CallAjax3(City) {
    var key = "21ec46344d981a5c9b3ecb0f2f68c0c4"
    var url = `https://api.openweathermap.org/data/2.5/weather?q=Austin &appid=${key}`
    var http = new XMLHttpRequest();
    http.open("GET", url);
    http.send()
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.response))
                // console.log(JSON.parse(this.response))
            document.getElementById("btn2").innerHTML = this.response
        }
    }
}

function CallAjax4(City) {
    var key = "21ec46344d981a5c9b3ecb0f2f68c0c4"
    var url = `https://api.openweathermap.org/data/2.5/weather?q=Mumbai &appid=${key}`
    var http = new XMLHttpRequest();
    http.open("GET", url);
    http.send()
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.response))
                // console.log(JSON.parse(this.response))
            document.getElementById("btn3").innerHTML = this.response
        }
    }
}

function CallAjax5(City) {
    var key = "21ec46344d981a5c9b3ecb0f2f68c0c4"
    var url = `https://api.openweathermap.org/data/2.5/weather?q=Chennai &appid=${key}`
    var http = new XMLHttpRequest();
    http.open("GET", url);
    http.send()
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.response))
                // console.log(JSON.parse(this.response))
            document.getElementById("btn4").innerHTML = this.response
        }
    }
}

function CallAjax6(City) {
    var key = "21ec46344d981a5c9b3ecb0f2f68c0c4"
    var url = `https://api.openweathermap.org/data/2.5/weather?q=Delhi &appid=${key}`
    var http = new XMLHttpRequest();
    http.open("GET", url);
    http.send()
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.response))
                // console.log(JSON.parse(this.response))
            document.getElementById("btn5").innerHTML = this.response
        }
    }
}


function News(City) {
    var key = "3b34a575e35847f8b669d428fe59b377"
    var url = `https://newsapi.org/v2/top-headlines?country=PAR&apiKey=3b34a575e35847f8b669d428fe59b377`
    var http = new XMLHttpRequest();
    http.open("GET", url);
    http.send()
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.response))
                // console.log(JSON.parse(this.response))
            document.getElementById("btn").innerHTML = this.response
        }
    }
}

function News1(City) {
    var key = "3b34a575e35847f8b669d428fe59b377"
    var url = `https://newsapi.org/v2/top-headlines?country=AU&apiKey=3b34a575e35847f8b669d428fe59b377`
    var http = new XMLHttpRequest();
    http.open("GET", url);
    http.send()
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.response))
                // console.log(JSON.parse(this.response))
            document.getElementById("btn1").innerHTML = this.response
        }
    }
}

function News2(City) {
    var key = "3b34a575e35847f8b669d428fe59b377"
    var url = `https://newsapi.org/v2/top-headlines?country=AT&apiKey=3b34a575e35847f8b669d428fe59b377`
    var http = new XMLHttpRequest();
    http.open("GET", url);
    http.send()
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.response))
                // console.log(JSON.parse(this.response))
            document.getElementById("btn2").innerHTML = this.response
        }
    }
}

function News3(City) {
    var key = "3b34a575e35847f8b669d428fe59b377"
    var url = `https://newsapi.org/v2/top-headlines?country=MUM&apiKey=3b34a575e35847f8b669d428fe59b377`
    var http = new XMLHttpRequest();
    http.open("GET", url);
    http.send()
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.response))
                // console.log(JSON.parse(this.response))
            document.getElementById("btn3").innerHTML = this.response
        }
    }
}

function News4(City) {
    var key = "3b34a575e35847f8b669d428fe59b377"
    var url = `https://newsapi.org/v2/top-headlines?country=MAA&apiKey=3b34a575e35847f8b669d428fe59b377`
    var http = new XMLHttpRequest();
    http.open("GET", url);
    http.send()
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.response))
                // console.log(JSON.parse(this.response))
            document.getElementById("btn4").innerHTML = this.response
        }
    }
}

function News5(City) {
    var key = "3b34a575e35847f8b669d428fe59b377"
    var url = `https://newsapi.org/v2/top-headlines?country=DL&apiKey=3b34a575e35847f8b669d428fe59b377`
    var http = new XMLHttpRequest();
    http.open("GET", url);
    http.send()
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.response))
                // console.log(JSON.parse(this.response))
            document.getElementById("btn5").innerHTML = this.response
        }
    }
}