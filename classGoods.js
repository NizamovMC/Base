class Goods {
    constructor(a, b, c, d) {
        this.name = a;
        this.amount = b;
        this.image = c;
        this.count = d;
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
     return div;
    }
}