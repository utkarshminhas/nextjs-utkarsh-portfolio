<script>
    export let name
    export let time_period
    export let description
    export let img_link

    let size = 96
</script>
<!-- class ='my-6 mx-12' -->
<div class = "flex flex-row mt-2 mb-6 mx-12 items-center" >
    <input type="image" src={img_link} alt="background image" class = ' h-24 p-2 mb-2 mx-6 aspect-square'
    />
    <!-- <img 
        src={logo} b-2
        class = 'object-contain h-16 rounded-3xl'
        OR
        width="{size}" height="{size}"
        alt = ''/> -->
    <div class = 'flex flex-col'>
        <p class='text-2xl font-semibold mb-1'>{name}</p>
        <p>{description}</p>
        <p class = 'italic font-semibold'>{time_period}</p>
        
    </div>
    
    <hr>
</div>