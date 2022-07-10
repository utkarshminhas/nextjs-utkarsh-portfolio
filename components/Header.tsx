var original_resume_link = 'https://drive.google.com/file/d/1dm-7iDC_VRb7grx7RMHNVCM3bzrJcQlW/view?usp=sharing'
var resume_download_link = 'https://drive.google.com/uc?export=download&id=1dm-7iDC_VRb7grx7RMHNVCM3bzrJcQlW'
var link_style = 'text-white hover:text-sky-400 hover:underline'

function Header(){
    return (
        <nav className= 'sticky top-0 w-full flex flex-row justify-center space-x-10 text-lg py-4 bg-neutral-700 '>
            <div className = 'font-bold hover:text-sky-400 text-white'>Utkarsh Minhas</div>
            <a href="/" className = {link_style} id="/">Home</a>
            <a href="#experience" className ={link_style}>Experience</a>
            {/* <a href="#education" className ={link_style}>Education</a> */}
            <a href='https://github.com/utkarshminhas' className = {link_style} target="_blank" rel="noopener noreferrer">Projects</a>
            <a href="certifications" className = {link_style}>Certifications</a>
            <a href="research" className = {link_style}>Research Experience</a>
            {/* <a href='#' className = 'text-sky-600 underline font-semibold hover:text-orange-400'>Experience</a>
            <a href='#' className = 'text-sky-600 underline font-semibold hover:text-orange-400'>Education</a>
            <a href='https://github.com/utkarshminhas' className = 'text-sky-600 underline font-semibold hover:text-neutral-200'>Projects</a>
            <a href='https://github.com/utkarshminhas' className = 'text-sky-600 underline font-semibold hover:text-neutral-200'>Certifications</a>
            <a href='https://github.com/utkarshminhas' className = 'text-sky-600 underline font-semibold hover:text-neutral-200'>Research Experience</a> */}
        </nav>
    )
}
export default Header