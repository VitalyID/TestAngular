export interface Profile {
    id : number,
    username : string,
    avatarUrl: null | string,
    subscriptionsAmout : number,
    firstName : string,
    lastName : string,
    isActive : boolean,
    stack: string[],
    city: string
}