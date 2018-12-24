/* @flow */
/* eslint-disable no-unused-vars */

import type { dniType, nameType } from "./opaque_types";
import { stringToDni } from "./opaque_types";

function updateClient(id: number, dni: dniType, name: nameType) {
    /*
        Talk to some server
        Update the dni and name for the client with given id
    */
}

const newDni = "1234567-8"; // supposedly a DNI
const newName = "Kari Nordmann";

updateClient(229, newName, newDni); // doesn't work; 2nd argument should be a dni
updateClient(229, newDni, newName); // doesn't work either; same reason
updateClient(229, stringToDni(newDni), newName); // OK!

/*
    Constraints
*/
function showText(st: string) {
    console.log(`Important message: ${st}`);
}
const anotherDni: dniType = stringToDni("9876543-2");
showText(anotherDni); // error, if no subtype constraint is added!
