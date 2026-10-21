import './Footer.css';
const Footer = () => {
return (
<footer style={{ textAlign: 'center', padding: '20px', borderTop:
'1px solid #ccc', marginTop: '60vh' }}>
<p>&copy; {new Date().getFullYear()} Todos los derechos
reservados.</p>
</footer>
);
};
export default Footer;