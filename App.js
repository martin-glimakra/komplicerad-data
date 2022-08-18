import './App.css';
import KompliceradData from './components/KompliceradData';


function App() {

  let dataMedKompliceratFormat = [
    {
      id: 1,
      länkObjekt:[
        {
          länktext: 'klicka här',
          url: 'https://www.forsakringskassan.se/'
        },
        {
          länktext: 'klicka här också',
          url: 'https://www.skatteverket.se/'
        }
      ]
    },
        {
          id: 2,
          länkObjekt: [
            {
              länktext: '2klicka här',
              url: 'https://www.forsakringskassan.se/'
            },
            {
              länktext: '2klicka här också',
              url: 'https://www.skatteverket.se/'
            }
          ]
        }
      ]

  return (
    <div>
      <KompliceradData dataMedKompliceratFormat={dataMedKompliceratFormat} />
    </div>
  );
}

export default App;
