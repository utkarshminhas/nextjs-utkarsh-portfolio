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


export interface certification {
    [index:number]:{
        certification_name : string,
        issued_by_name : string,
        issued_by_image_url : string,
        date_of_issue : string,
        certificate_url : string,
    }
}

export interface research_exp {
    [index:number]:{
        paper_name : string,
        published_on : string,
        first_online : string,
        publisher : string,
        conference_name : string,
        conference_subtitle : string,
        conference_dates : string,
        paper_description : string,
        link : string,
        all_authors : string,
        conference_image_url : string,
    }
}

