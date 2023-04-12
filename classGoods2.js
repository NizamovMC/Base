class Goods2 extends Goods {
    constructor(a, b, c, d, e) {
        super(a, b, c, d)
        this.sale = e;
    }
    draw() {
        let div = document.createElement('div');
    let elName = document.createElement('p');
    elName.innerHTML = this.name;
    div.append(elName);
    let elAmount = document.createElement('p');
    elAmount.innerHTML = this.amount;
    div.append(elAmount);
    let img = document.createElement('img');
    img.src = this.image;
    div.append(img);
    let elCount = document.createElement('p');
    elCount.innerHTML = this.count;
    div.append(elCount);
    let elSale = document.createElement('p');
    elSale.innerHTML = this.sale;
    div.append(elSale);
     return div;
    }
}