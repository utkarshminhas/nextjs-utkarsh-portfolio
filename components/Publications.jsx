<script>
    import research_exp_json from '../db/research_exp.json'

    let research_exp = research_exp_json['default']
</script>

<div>
    <!-- <div>{JSON.stringify(research_exp)}</div> -->
    {#each research_exp as exp}
    <div class = 'flex flex-col'>
        <div><a href = {exp.link}>{exp['paper name']}</a></div> 
        <div>{exp['all authors']}</div>
        <div>Conference - {exp.conference}</div>
        <div>Publisher - {exp.publisher}</div>
        <div>Published on - {exp['published on']}</div>
    </div>
    {/each}
</div>