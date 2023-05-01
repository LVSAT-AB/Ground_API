const socket = io('http://192.168.1.74:3000');

let temp = document.querySelector('#temp')
let prs = document.querySelector('#press')

console.log("HOLA")

socket.on('ok', (data) => {

     data = data.split('_')
    data.forEach((item) => {
        let da = item.slice(3);
        switch (item.slice(0, 3)) {
            case 'PRS':
                da = da.slice(0, -1)
                prs.innerHTML = da + 'mBar';
                let alt = 44330 * (1 - (da / 1013)^(1/5.255))
                break;
            case 'TAT':
                da = da.slice(0, -1)
                temp.innerHTML = da + 'ºC';
                break;
        }
    

        
    })

    
    let d = new Date;
    let time = d.getTime()
    time = d.toISOString();


    console.log(data)
})