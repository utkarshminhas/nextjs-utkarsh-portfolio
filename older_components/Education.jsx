<script>
    import edu_json from '../db/education.json'
</script>

<div class ='my-6 mx-12'>
    {#each edu_json['college_exp'] as edu}
    <div class = 'flex flex-row items-center mb-6'> 
        <input type="image" src={edu.img_link} alt="background image" class = ' h-24 p-2 mb-2 mx-6 aspect-square'>

        <div class = 'flex flex-col' >
            <div class='text-xl font-semibold'>{edu.name} </div>
            <div class = 'font-semibold'>{edu.degree} with {edu['gpa/%']}</div>
            <div>{edu.location} </div>
            <div class='italic'>{edu['time period/session']} </div>
            
            <!-- <div> </div> -->
            
        </div>
    </div>
        <!-- <hr> -->
    {/each}

    {#each edu_json['student_exp'] as edu}
        <div class = 'flex flex-row items-center mb-6'> 
            <input type="image" src={edu.img_link} alt="background image" class = ' h-24 p-2 mb-2 mx-6 aspect-square'>
            <div class = 'flex flex-col' >

                <div class='text-xl font-semibold'>{edu.name} </div>
                <div class = 'font-semibold'>{edu.description} with {edu['gpa/%']}</div>
                <div>{edu.location} </div>
                <div  class='italic'>{edu['time period/session']} </div>
                
                
            </div>
        </div>
        <!-- <hr> -->
    {/each}

</div>