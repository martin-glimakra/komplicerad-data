import LänkKomponent from './LänkKomponent'

const KompliceradData = ({dataMedKompliceratFormat}) => {

    console.log('dataMedKompliceratFormat', dataMedKompliceratFormat)

    return (  
        <div>
            {dataMedKompliceratFormat.map(idOchLänkobjekt => <LänkKomponent key={idOchLänkobjekt.id} länkObjekt={idOchLänkobjekt.länkObjekt} />)}
        </div>
    );
}
 
export default KompliceradData;