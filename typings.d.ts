// export interface research_exp_items{

// }
// export interface research_exp{

// }

export interface job_and_intern_exp {
    [index: number]: 
    { 
        company_name :string,
        company_location :string,
        description :string,
        start_time :string,
        end_time :string,
        company_image_url :string,
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
        percentage : string,
        imageUrl : string,
    }
}