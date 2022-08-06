// export interface research_exp_items{

// }
// export interface research_exp{

// }

export interface intern_exp {
    [index: number]: 
    { 
        id: number;
        label: string;
        key: any ;
        _createdAt : string;
        _id : string;
        _rev : string;
        _type : string;
        _updatedAt : string;
        company_image : {

        };
        company_location : string;
        company_name : string;
        description : string;
        end_time : string;
        start_time : string;
    };
}

export interface education {
    institution_name: ReactNode;
    [index:number]:{
        institution_name : string,
        brief : string,
        description : string,
        time_period : string,
        location : string,
        gpa : string,
        Percentage : string,
        imageUrl : string,
    }
}