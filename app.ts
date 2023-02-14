// type MyType = number | string[] | boolean;
//
// const x = (name: string): MyType => {
//     return [name];
// };
//
// console.log(x('Max'));
//
// const arr: number[] = [1, 2, 3, 4, 5];
// const arr2: [string, number] = ['123', 123];
//
// interface IUser<T, T2> {
//     name: string;
//     surname?: string;
//     age: number;
//     status: boolean;
//     data: T;
//     data2: T2;
// }

// const user: IUser = {
//     name: 'Kamila',
//     age: 25,
//     status: true,
// };

// const user2: Partial<IUser<number[], string[]>> = {name: 'Max', data: [1, 2, 3], data2: ['1', '2']};
// console.log(user2);

// const getUser = (user: IUser): string => {
//     return user.name
// };

// interface IShape {
//     area: () => number
//     perimeter: () => number
// }
//
// interface IGreeting {
//     greeting: () => void
// }
//
// class Rectangle implements IGreeting, IShape {
//
//     constructor(private a: number, private b: number) {
//     }
//
//     area(): number {
//         return this.a * this.b;
//     };
//
//     perimeter(): number {
//         return 2 * this.a + 2 * this.b;
//     };
//
//     greeting(): void {
//         console.log("hallow world");
//     }
//
// }
//
// const rectangle = new Rectangle(2, 4);
//
// // rectangle.greeting();
// // console.log(rectangle.area());
// // console.log(rectangle.perimeter());
//
// class Triangle implements IShape {
//     constructor(private a: number, private b: number, private c: number) {
//
//     }
//
//     area(): number {
//         return this.a * this.b;
//     };
//
//     perimeter(): number {
//         return this.a + this.b + this.c;
//     };
// }
//
// const shapes: IShape[] = [new Rectangle(2, 3), new Triangle(2, 5, 3)]
//
// for (const shape of shapes) {
//     console.log(shape.area());
//     console.log(shape.perimeter());
// }

import {userService} from "./api";

userService.getALL().then(({data}) => {
    data.map(user => console.log(user.name))
});
