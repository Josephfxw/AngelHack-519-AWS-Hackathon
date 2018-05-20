export class Housing {
    /*

    public imageURL: string;
    */
    public url: string;
    public address: string;
    public work_distance: number;
    public work_time: number;
    public school_distance: number;
    public school_time: number;
    public rent: number;

    constructor(url: string, address: string, work_distance: number, 
        work_time: number, school_distance: number, school_time: number, rent: number){
        this.url = url;
        this.address = address;
        this.work_distance = work_distance;
        this.work_time = work_time;
        this.school_distance = school_distance;
        this.school_time = school_time;
        this.rent = rent
    }

}
