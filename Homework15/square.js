class Square1 {
    constructor(x,y,s,r,g,b) {
        this.x = x;
        this.y = y;
        this.s = s;
        this.r = r;
        this.g = g;
        this.b = b;
    }
    display() {
        fill(this.r, this.g, this.b);
        square(this.x, this.y, this.s);
    }
}