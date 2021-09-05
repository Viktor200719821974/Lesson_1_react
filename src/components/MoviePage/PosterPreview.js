import './MovieListCard.css';
const PosterPreview = ({imageInfo}) => {
    return (
        <div className={'imageInfo'}>
            <img src={imageInfo} alt=""/>
        </div>
    )
}
export default PosterPreview;
