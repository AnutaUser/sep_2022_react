"use strict";
exports.__esModule = true;
var mission = {
    "mission_name": "Starlink-15 (v1.0)",
    "launch_date_local": "2020-10-24T11:31:00-04:00",
    "launch_site": {
        "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
    },
    "links": {
        "article_link": null,
        "video_link": "https://youtu/J442-ti-Dhg"
    },
    "rocket": {
        "rocket_name": "Falcon 9",
        "first_stage": {
            "cores": [
                {
                    "flight": 7,
                    "core": {
                        "reuse_count": 6,
                        "status": "unknown"
                    }
                }
            ]
        },
        "second_stage": {
            "payloads": [
                {
                    "payload_type": "Satellite",
                    "payload_mass_kg": 15400,
                    "payload_mass_lbs": 33951.2
                }
            ]
        }
    }
};
console.log({ mission: mission });
console.log(mission.rocket.second_stage.payloads[0].payload_type);
// // 2) протипізувати функції:
//
// interface IUser {
//     name: string,
//     age: number,
//     gender: string
// }
// const user:IUser = {
//     name: "Max",
//     age: 18,
//     gender: 'male'
// };
//
// function sum(a:number, b:number):number {
//     return a + b
// }
//
// function showSum(a:number, b:number):void {
//     console.log(a + b);
// }
//
// function incAge(someUser:IUser, inc:number):IUser {
//     someUser.age += inc
//     return someUser;
// }
//
// console.log(sum(1, 2));
// showSum(2, 3);
// console.log(incAge(user, 2));
