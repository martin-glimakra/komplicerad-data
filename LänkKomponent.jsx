const LänkKomponent = ({länkObjekt}) => {

    return (
        <div>
            <br />
            --------
            {länkObjekt.map(textOchUrl => <div> länktext: {textOchUrl.länktext} <br /> url: {textOchUrl.url}</div>)}
            -------

        </div>
    );
}
 
export default LänkKomponent;