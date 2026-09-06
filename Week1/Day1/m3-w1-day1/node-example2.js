const { PI } = Math;  // private to this file

const area = (r) => PI * r ** 2;

const circumference = (r) => 2 * PI * r;

module.exports = {
    area,
    circumference
};