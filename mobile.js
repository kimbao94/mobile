let Mobile = function(battery,inbox,sent) {
    this.battery = 100;
    this.inbox = [] ;
    this.sent = [];
    this.draf = "";
    this.status = true;

    this.checkStatus = function (){
        return this.status;
    }
    this.isOn = function (){
        this.status = true;
    }
    this.isOff = function () {
        this.status = false;
    }
    this.change = function (){
        this.battery += 100;
    }
    this.writeMess = function (message){

        if (this.status = false) {
            return false;
        }else {
            this.draf = message;
            this.battery--;
        }
    }
    this.sendMess = function (mess,orther){
        orther.inbox.push(mess);
        this.sent = mess;
        if (this.status = false) {
            return false;
        }
        if (this.status = true) {
            this.battery--;
        }
    }
    this.viewInbox = function (){
        if (this.status = false) {
            return false;
        }else(this.status = true) {
            this.battery--;
            return this.inbox;
        }
    }
}
let iphone = new Mobile(100,[],[]);
let nokia = new Mobile(100,[],[]);
