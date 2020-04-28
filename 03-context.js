const module = {
    x: 42,
    getX: function() {
        return this.x;
    }
}
const unboundGetX = module.getX;

console.log(unboundGetX());

// bind call apply
