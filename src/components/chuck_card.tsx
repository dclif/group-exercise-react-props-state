import ChuckImage from '../assets/chuck_norris.jpg';

interface ChuckCardProps {
    chuckGreeting: string;
}

const ChuckCard: React.FC<ChuckCardProps> = ({chuckGreeting}) =>

        <>
            <h2>{chuckGreeting }</h2>

            <img src={ ChuckImage } alt='A handsome man' /> 
        </>


export default ChuckCard;