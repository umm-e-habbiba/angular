export class User {
  constructor(
    public name: string,
    public email: string,
    public phone: number,
    // public address: Object{
    //     public city:string,
    //     public country:string,
    // },
    public topic: string,
    public time_pref: string,
    public sendOffer: boolean
  ) {}
}
