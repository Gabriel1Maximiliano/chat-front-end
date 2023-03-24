export interface UserProps {

    name: string,
    email: string,
    onLine: boolean,
    uid: string
}

export interface DataProps {
    ok: boolean,
    user:UserProps,
    token:string;
}