    /*var sum = (x, y, ...rest) => {
                        var s = x + y;
                        console.log(rest)
                        return s;
                    }
                var p = [4, 8, 6, 7, 9, 2]
                    console.log(sum(...p))

                var p2 = [3, 9, 7]
                var p = [4, 5, ...p2]
                console.log(p)
                console.log(sum(...p))*/

    // var name = "deepak"
    // var age = 23
    // var gender = 1
    // var pp= "Name" = "+name+",
    //     Age = "+age+",
    //     Gender = "+(gender==1?'Male':'Female')"
    // document.write(pp)

    class Hotel {
        constructor() {
            this.hotelname = "Taj";
            this.totalroom = 200;
            this.bookedroom = 140;
            this.location = "Delhi"
        }
        getAvability() {
            return this.totalroom - this.bookedroom;
        }

        printdetails() {
            let temp = `<h4>Name:${this.hotelname}</h4>`
            temp += `<p> Total Room:${this.totalroom}<br/>`
            temp += `Booked:${this.bookedroom}<br/>`
            temp += `<h4>Total Available Room :${this.getAvability()}</h4>`
            return temp
        }
    }
    let hotel = new Hotel()
    document.querySelector("#box").innerHTML = hotel.printdetails()