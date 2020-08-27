export default class Container {
    b = {
        a: 1,
    };
    a = () => {
        const { a } = this.b;
        console.log(a);
    };
}
