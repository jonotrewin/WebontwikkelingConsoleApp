import { Console } from 'console';
import { Band } from './bandInterface';

import * as rls from "readline-sync";
import { json } from 'stream/consumers';

import data from "./bands.json"
const bands :Band[] = data;

console.log("Welcome to the JSON data viewer!");

GetInput();

function GetInput() {
    let choice: number = rls.questionInt("1. View All Data \n 2. Filter By ID \n 3. Exit\n");

    switch (choice) {
        case 1:
            {
                console.log(bands);
                break;
            }

        case 2:
            {
                let ID: string = rls.question("Please Enter ID (BND-XXX): ");

                bands.forEach(element => {
                    if (element.id === ID) {
                        console.log(element);
                    }

                }
                );
            }
        case 3:
            {
                break;
            }
        default:
            {
                console.log("Wrong Choice. Try Again.");
                GetInput()
                break;
            }
    }
}

