<script>
    import cert_json from '../db/certs.json'
    let coursera_png_link = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/900px-Coursera-Logo_600x600.svg.png'
</script>

<div class = m-16>
    {#each cert_json as cert}
    <div class = 'flex flex-row items-center mb-3'>
        <div class='mr-4'>
            {#if cert['issued by']==='Coursera'}
            <img 
            src='{coursera_png_link}'
            class = 'object-contain h-16 rounded-3xl'/>
            {:else}
            <p> filler image</p>
            {/if}
        </div>
        <div class = 'flex flex-col'>
            <div><a href = {cert.cert_link} class = 'text-sky-600 font-semibold hover:underline'>{cert['certification name']}</a></div> 
            <div>Date of Issue : {cert['date of issue']}</div>
            <div>Issued by : {cert['issued by']}</div>
        </div>
    </div>
    {/each}
</div>