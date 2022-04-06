interface ChuckInfoProps{
    whalesSaved: Number;
    roundHouseKicks: number;
}

const ChuckInfo: React.FC<ChuckInfoProps> = ({whalesSaved, roundHouseKicks}) => 
        <>
            <p>Number of Whales Saved: {whalesSaved}  </p>

            <p>Number of Round House Kicks (in the last day): {roundHouseKicks} </p>
        </>
    


export default ChuckInfo;