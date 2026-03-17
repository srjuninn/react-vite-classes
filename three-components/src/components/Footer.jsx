import './Footer.css'

export default function Footer({copiright, github}){
    return(
        <footer>
            <a href={github}>&copy; {new Date().getFullYear()} {copiright}</a>
        </footer>
    )
}