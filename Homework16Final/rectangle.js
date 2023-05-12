class Rectangle3 {
    constructor(x,y,h,l,r,g,b) {
        this.x = x;
        this.y = y;
        this.h = h;
        this.l = l;
        this.r = r;
        this.g = g;
        this.b = b;
    }
    display() {
        fill(this.r, this.g, this.b);
        rect(this.x, this.y, this.h, this.l);
    }
}