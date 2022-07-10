<script>
    import ExperienceCard from './ExperienceCard.svelte';
    import intern_exp_json from '../db/intern_exp.json'
    import job_exp_json from '../db/job_exp.json'

    import { Router, Route, Link } from "svelte-navigator";

    let heading_style = 'capitalize text-sky-600 text-3xl  my-6 ml-12 bold'
    // underline underline-offset-3 decoration-3
</script>

<div>
    <div id = 'experience' class = '{heading_style} pt-16'>Job Experience</div>
    {#each job_exp_json as job}
    <ExperienceCard
        name = {job.name} 
        time_period = {job.time_period}
        description = {job.description}
        img_link = {job.img_link}
    />
    {/each}
    
    <br/>
    <div class = {heading_style}>Internship Experience</div>
    
    {#each intern_exp_json.reverse() as internship  }
    <ExperienceCard
        name = {internship.name} 
        time_period = {internship.time_period}
        description = {internship.description}
        img_link = {internship.img_link}
    />
    {/each}
    
</div>