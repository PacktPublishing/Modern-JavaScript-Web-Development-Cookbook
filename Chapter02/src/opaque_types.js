/* @flow */
/* eslint-disable no-unused-vars */

opaque type dniType: string = string;
type nameType = string; // not opaque!

const stringToDni = (st: string): dniType => {
    /*
        do validations on st
        if OK, return a dniType
        if wrong, throw an error
    */
    return (st: dniType);
};

export type { dniType, nameType };
export { stringToDni };

class Client {
    id: number;
    dni: dniType;
    name: nameType;
    securityToken: string;

    constructor(anId: number, aDni: dniType, aName: nameType) {
        this.id = anId;
        this.dni = aDni;
        this.name = aName;

        this.securityToken = "generate.some.token.somehow";
    }

    showNameAndDni(t: string): void {
        console.log(`${t} - Name: ${this.name} DNI: ${this.dni}`);
    }

    useTokenForSomething(): void {
        // do something with the token
    }
}
