export interface UserProps {

    name  : string,
    email : string,
    onLine: boolean,
    uid   : string
}

export interface DataProps {
    ok   : boolean,
    user :UserProps,
    token:string;
}


export interface InitialStateProps {
    uid     : string | null;
    checking: boolean;
    logged  : boolean;
    name    : string | null;
    email   : string | null;
  }
  
export const InitialState: InitialStateProps = {
    uid     : null,
    checking: true,
    logged  : false,
    name    : null,
    email   : null,
  };

  export interface ChildrenProps {
    children: JSX.Element | JSX.Element[] 
  }