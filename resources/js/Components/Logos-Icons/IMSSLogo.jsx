import mySVG from '../../../assets/svg/Logotipo_del_IMSS.svg';
export default function IMSSLogo(props) {
    return (
        <svg width={120} height={150}>
            <image xlinkHref={mySVG} />
        </svg>
    );
}
