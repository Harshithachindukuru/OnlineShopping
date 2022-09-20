class car{
    constructor(brand){
        this.brandname=brand;
    }
    present(){
return 'I have a ' + this.brandname;
    }
    
}

class Model extends car{
    constructor(brand,mod){
        super(brand);
        this.model=mod;
    }
    show(){
        return this.present() + ', it is a ' + this.model;
    }
}
 const mycar=new Model("Ford","Mustong");
 console.log(mycar.show());